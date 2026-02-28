"use client";

import { useEffect, useRef, useState } from "react";
import { getInnerSize } from "@/lib/chart-layout";
import { linearScale, ticksLinear } from "@/lib/chart-scales";

import { QuadrantAxes } from "./quadrant-axes";
import { QuadrantPoints } from "./quadrant-points";
import { QuadrantTooltip } from "./quadrant-tooltip";
import type { QuadrantChartData, QuadrantPoint } from "./types";

const CHART_DIMENSIONS = {
  width: 720,
  height: 520,
};

const CHART_PADDING = {
  top: 28,
  right: 24,
  bottom: 64,
  left: 72,
};

const AXIS_LABEL_OFFSET = {
  x: 50,
  y: 36,
};

export function Quadrant({ chart }: { chart: QuadrantChartData }) {
  const inner = getInnerSize(CHART_PADDING, CHART_DIMENSIONS);
  const [hoveredPoint, setHoveredPoint] = useState<QuadrantPoint | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoverBounds, setHoverBounds] = useState<{ width: number; height: number } | null>(
    null
  );
  const [hasInteracted, setHasInteracted] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const xForValue = linearScale(0, 100, CHART_PADDING.left, CHART_PADDING.left + inner.width);
  const yForValue = linearScale(0, 100, CHART_PADDING.top + inner.height, CHART_PADDING.top);

  const ticks = ticksLinear(100, 4);
  const DISAGREE_THRESHOLD = 6;
  const defaultPoint = chart.points.find((point) => point.id === "q18");

  useEffect(() => {
    if (hasInteracted || !defaultPoint) return;
    const rect = svgRef.current?.getBoundingClientRect();
    const width = rect?.width ?? CHART_DIMENSIONS.width;
    const height = rect?.height ?? CHART_DIMENSIONS.height;
    const xScale = linearScale(
      0,
      100,
      CHART_PADDING.left,
      CHART_PADDING.left + inner.width,
    );
    const yScale = linearScale(
      0,
      100,
      CHART_PADDING.top + inner.height,
      CHART_PADDING.top,
    );
    const x = xScale(defaultPoint.x);
    const y = yScale(defaultPoint.y);

    setHoveredPoint(defaultPoint);
    setHoverBounds({ width, height });
    setHoverPosition({
      x: (x / CHART_DIMENSIONS.width) * width,
      y: (y / CHART_DIMENSIONS.height) * height,
    });
  }, [defaultPoint?.id, hasInteracted, inner.height, inner.width]);

  return (
    <div className="relative mt-5 w-full rounded-xl border border-gray-100 bg-white p-4">
      <svg
        ref={svgRef}
        width={CHART_DIMENSIONS.width}
        height={CHART_DIMENSIONS.height}
        viewBox={`0 0 ${CHART_DIMENSIONS.width} ${CHART_DIMENSIONS.height}`}
        className="h-auto w-full text-gray-400"
        role="img"
        aria-label={chart.title}
        onMouseMove={() => {
          if (!hasInteracted) {
            setHasInteracted(true);
          }
        }}
        onMouseLeave={() => {
          setHoveredPoint(null);
          setHoverPosition(null);
          setHoverBounds(null);
        }}
      >
        <QuadrantAxes
          chart={chart}
          ticks={ticks}
          xForValue={xForValue}
          yForValue={yForValue}
          inner={inner}
          padding={CHART_PADDING}
          axisLabelOffset={AXIS_LABEL_OFFSET}
        />

        <QuadrantPoints
          points={chart.points}
          xMid={chart.xMid}
          yMid={chart.yMid}
          disagreeThreshold={DISAGREE_THRESHOLD}
          xForValue={xForValue}
          yForValue={yForValue}
          onHover={(point, position, bounds) => {
            setHoveredPoint(point);
            setHoverPosition(position);
            setHoverBounds(bounds);
          }}
          onMove={(position) => {
            setHoverPosition(position);
          }}
        />

      </svg>

      <QuadrantTooltip
        hoveredPoint={hoveredPoint}
        hoverPosition={hoverPosition}
        hoverBounds={hoverBounds}
        disagreeThreshold={DISAGREE_THRESHOLD}
      />
    </div>
  );
}
