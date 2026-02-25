"use client";

import { useMemo, useState } from "react";
import { ChartTooltip } from "@/components/ui/chart-tooltip";
import {
  AXIS_LABEL_OFFSET,
  CHART_PADDING,
  getInnerSize,
} from "@/lib/chart-layout";
import { linearScale, ticksLinear } from "@/lib/chart-scales";

export type AreaChartType = {
  key: string;
  label: string;
  color: string;
};

export type AreaChartPoint = {
  date: string;
  values: Record<string, number>;
  profitRatio?: Record<string, number>;
};

export type AreaChartData = {
  id: string;
  rangeLabel: string;
  xLabel: string;
  yLabel: string;
  types: AreaChartType[];
  data: AreaChartPoint[];
  yMax?: number;
};

const AREA_CHART_DIMENSIONS = {
  width: 680,
  height: 360,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function formatMillions(value: number) {
  if (value <= 0) return "0M";
  const millions = value / 1_000_000;
  const rounded = Math.round(millions * 1000) / 1000;
  const formatted = rounded.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });
  return `${formatted}M`;
}

function formatSignedMillions(value: number) {
  if (value === 0) return "0M";
  const sign = value > 0 ? "+" : "-";
  return `${sign}${formatMillions(Math.abs(value))}`;
}

function formatMonthLabel(date: string) {
  const [year, month] = date.split("-");
  const monthIndex = Number(month) - 1;
  const dateValue = new Date(Number(year), Number(monthIndex), 1);
  return dateValue.toLocaleString("en-US", { month: "long", year: "numeric" });
}

function buildLinePath(points: Array<{ x: number; y: number }>) {
  if (points.length === 0) return "";
  const parts: string[] = [`M ${points[0].x} ${points[0].y}`];
  for (let i = 1; i < points.length; i += 1) {
    parts.push(`L ${points[i].x} ${points[i].y}`);
  }
  return parts.join(" ");
}

export function AreaChart({ report }: { report: AreaChartData }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [hoverTypeKey, setHoverTypeKey] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [hoverBounds, setHoverBounds] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [hoverXValue, setHoverXValue] = useState<number | null>(null);
  const [hoverInterpolated, setHoverInterpolated] = useState<Record<
    string,
    number
  > | null>(null);

  const chart = useMemo(() => {
    const inner = getInnerSize(CHART_PADDING, AREA_CHART_DIMENSIONS);
    const maxValue =
      report.yMax ??
      Math.max(
        ...report.data.map((point) =>
          Math.max(...report.types.map((type) => point.values[type.key] ?? 0)),
        ),
      );

    const xScale = linearScale(
      0,
      Math.max(report.data.length - 1, 1),
      CHART_PADDING.left,
      CHART_PADDING.left + inner.width,
    );
    const yScale = linearScale(
      0,
      maxValue,
      CHART_PADDING.top + inner.height,
      CHART_PADDING.top,
    );

    const lineSeries = report.types.map((type) => {
      const points: Array<{ x: number; y: number }> = [];

      report.data.forEach((point, index) => {
        const x = xScale(index);
        points.push({ x, y: yScale(point.values[type.key] ?? 0) });
      });

      return {
        type,
        path: buildLinePath(points),
      };
    });

    const yTickValues = ticksLinear(maxValue, 6);

    const quarterLabelSequence = [
      "Q1 2027",
      "Q2 2027",
      "Q3 2027",
      "Q4 2027",
      "Q1 2028",
    ];
    const step = Math.max(1, (report.data.length - 1) / 4);
    const quarterTicks = quarterLabelSequence.map((label, i) => ({
      label,
      index: Math.round(i * step),
    }));

    return {
      lineSeries,
      maxValue,
      yTickValues,
      quarterTicks,
      inner,
      xScale,
      yScale,
    };
  }, [report]);

  const hoverType = hoverTypeKey
    ? report.types.find((type) => type.key === hoverTypeKey)
    : null;

  const hoverMarker =
    hoverType && hoverXValue !== null && hoverInterpolated
      ? {
          x: hoverXValue,
          y: chart.yScale(hoverInterpolated[hoverType.key] ?? 0),
        }
      : null;

  return (
    <div className="relative mt-5 rounded-xl border border-gray-100 bg-white p-4">
      <svg
        viewBox={`0 0 ${AREA_CHART_DIMENSIONS.width} ${AREA_CHART_DIMENSIONS.height}`}
        className="h-auto w-full text-gray-400"
        role="img"
        aria-label="Stacked area chart"
        onMouseLeave={() => {
          setHoverIndex(null);
          setHoverTypeKey(null);
          setHoverPosition(null);
          setHoverBounds(null);
          setHoverXValue(null);
          setHoverInterpolated(null);
        }}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const scaleX = AREA_CHART_DIMENSIONS.width / rect.width;
          const scaleY = AREA_CHART_DIMENSIONS.height / rect.height;
          const xView = x * scaleX;
          const yView = y * scaleY;

          const plotLeft = CHART_PADDING.left;
          const plotRight = CHART_PADDING.left + chart.inner.width;
          const plotTop = CHART_PADDING.top;
          const plotBottom = CHART_PADDING.top + chart.inner.height;

          if (
            xView < plotLeft ||
            xView > plotRight ||
            yView < plotTop ||
            yView > plotBottom
          ) {
            setHoverIndex(null);
            setHoverTypeKey(null);
            setHoverPosition(null);
            setHoverBounds(null);
            setHoverXValue(null);
            setHoverInterpolated(null);
            return;
          }

          const normalizedX = (xView - plotLeft) / chart.inner.width;
          const fractionalIndex = normalizedX * (report.data.length - 1);
          const lowerIndex = Math.floor(fractionalIndex);
          const upperIndex = Math.min(report.data.length - 1, lowerIndex + 1);
          const t = fractionalIndex - lowerIndex;
          const clampedIndex = clamp(
            Math.round(fractionalIndex),
            0,
            report.data.length - 1,
          );

          const interpolated = report.types.reduce<Record<string, number>>(
            (acc, type) => {
              const v0 = report.data[lowerIndex]?.values[type.key] ?? 0;
              const v1 = report.data[upperIndex]?.values[type.key] ?? v0;
              acc[type.key] = v0 + (v1 - v0) * t;
              return acc;
            },
            {},
          );

          const valueAtCursor =
            chart.maxValue * (1 - (yView - plotTop) / chart.inner.height);

          let matchedTypeKey: string | null = null;
          let smallestDelta = Number.POSITIVE_INFINITY;

          report.types.forEach((type) => {
            const value = interpolated[type.key] ?? 0;
            const delta = Math.abs(valueAtCursor - value);
            if (delta < smallestDelta) {
              smallestDelta = delta;
              matchedTypeKey = type.key;
            }
          });

          setHoverIndex(clampedIndex);
          setHoverTypeKey(matchedTypeKey ?? report.types[0].key);
          setHoverPosition({ x, y });
          setHoverBounds({ width: rect.width, height: rect.height });
          setHoverXValue(xView);
          setHoverInterpolated(interpolated);
        }}
      >
        {chart.yTickValues.map((tickValue) => {
          const y = chart.yScale(tickValue);
          return (
            <g key={tickValue}>
              <line
                x1={CHART_PADDING.left}
                x2={CHART_PADDING.left + chart.inner.width}
                y1={y}
                y2={y}
                stroke="#f3f4f6"
                strokeWidth={1}
              />
              <text
                x={CHART_PADDING.left - 12}
                y={y + 4}
                textAnchor="end"
                fontSize="12"
                fill="currentColor"
              >
                {formatMillions(tickValue)}
              </text>
            </g>
          );
        })}

        {chart.lineSeries.map((series) => (
          <path
            key={series.type.key}
            d={series.path}
            stroke={series.type.color}
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ))}

        {hoverMarker && (
          <circle
            cx={hoverMarker.x}
            cy={hoverMarker.y}
            r={4}
            fill="#111827"
            fillOpacity={0.75}
          />
        )}

        <line
          x1={CHART_PADDING.left}
          x2={CHART_PADDING.left}
          y1={CHART_PADDING.top}
          y2={CHART_PADDING.top + chart.inner.height}
          stroke="#d1d5db"
        />
        <line
          x1={CHART_PADDING.left}
          x2={CHART_PADDING.left + chart.inner.width}
          y1={CHART_PADDING.top + chart.inner.height}
          y2={CHART_PADDING.top + chart.inner.height}
          stroke="#d1d5db"
        />

        <text
          x={CHART_PADDING.left - AXIS_LABEL_OFFSET.x}
          y={CHART_PADDING.top + chart.inner.height / 2}
          textAnchor="middle"
          fontSize="12"
          fill="currentColor"
          transform={`rotate(-90 ${CHART_PADDING.left - AXIS_LABEL_OFFSET.x} ${
            CHART_PADDING.top + chart.inner.height / 2
          })`}
        >
          {report.yLabel}
        </text>

        {chart.quarterTicks.map((tick) => {
          const x = chart.xScale(tick.index);
          return (
            <text
              key={`${tick.label}-${tick.index}`}
              x={x}
              y={CHART_PADDING.top + chart.inner.height + 24}
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
            >
              {tick.label}
            </text>
          );
        })}

        <text
          x={CHART_PADDING.left + chart.inner.width / 2}
          y={AREA_CHART_DIMENSIONS.height - AXIS_LABEL_OFFSET.bottom}
          textAnchor="middle"
          fontSize="12"
          fill="currentColor"
        >
          {report.xLabel}
        </text>
      </svg>

      {hoverType && hoverPosition && hoverBounds && (
        <ChartTooltip
          title={hoverType.label}
          position={hoverPosition}
          bounds={hoverBounds}
          rows={[
            {
              label: "Month:",
              value:
                hoverIndex !== null
                  ? formatMonthLabel(report.data[hoverIndex].date)
                  : "--",
            },
            {
              label: "ACV:",
              value: hoverInterpolated
                ? formatMillions(hoverInterpolated[hoverType.key] ?? 0)
                : "--",
            },
            ...(hoverInterpolated && report.types.length >= 2 && hoverType
              ? (() => {
                  const otherType = report.types.find(
                    (type) => type.key !== hoverType.key,
                  );
                  if (!otherType) return [];
                  const gap =
                    (hoverInterpolated[hoverType.key] ?? 0) -
                    (hoverInterpolated[otherType.key] ?? 0);
                  return [
                    {
                      label: "Gap:",
                      value: formatSignedMillions(gap),
                    },
                  ];
                })()
              : []),
          ]}
        />
      )}
    </div>
  );
}
