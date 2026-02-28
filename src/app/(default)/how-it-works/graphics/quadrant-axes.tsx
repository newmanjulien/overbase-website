import type { QuadrantChartData } from "./types";

type QuadrantAxesProps = {
  chart: QuadrantChartData;
  ticks: number[];
  xForValue: (value: number) => number;
  yForValue: (value: number) => number;
  inner: { width: number; height: number };
  padding: { top: number; right: number; bottom: number; left: number };
  axisLabelOffset: { x: number; y: number };
};

export function QuadrantAxes({
  chart,
  ticks,
  xForValue,
  yForValue,
  inner,
  padding,
  axisLabelOffset,
}: QuadrantAxesProps) {
  return (
    <>
      {ticks.map((tick) => {
        const x = xForValue(tick);
        const y = yForValue(tick);
        return (
          <g key={tick}>
            <line
              x1={padding.left}
              x2={padding.left + inner.width}
              y1={y}
              y2={y}
              stroke="#f3f4f6"
            />
            <line
              x1={x}
              x2={x}
              y1={padding.top}
              y2={padding.top + inner.height}
              stroke="#f5f5f5"
            />
            <text
              x={padding.left - 12}
              y={y + 4}
              textAnchor="end"
              fontSize="12"
              fill="currentColor"
            >
              {tick}%
            </text>
            <text
              x={x}
              y={padding.top + inner.height + 22}
              textAnchor="middle"
              fontSize="12"
              fill="currentColor"
            >
              {tick}%
            </text>
          </g>
        );
      })}

      <line
        x1={xForValue(chart.xMid)}
        x2={xForValue(chart.xMid)}
        y1={padding.top}
        y2={padding.top + inner.height}
        stroke="#d1d5db"
        strokeWidth={1.5}
      />
      <line
        x1={padding.left}
        x2={padding.left + inner.width}
        y1={yForValue(chart.yMid)}
        y2={yForValue(chart.yMid)}
        stroke="#d1d5db"
        strokeWidth={1.5}
      />

      <text
        x={padding.left - axisLabelOffset.x}
        y={padding.top + inner.height / 2}
        textAnchor="middle"
        fontSize="12"
        fill="currentColor"
        transform={`rotate(-90 ${padding.left - axisLabelOffset.x} ${
          padding.top + inner.height / 2
        })`}
      >
        {chart.yLabel}
      </text>
      <text
        x={padding.left + inner.width / 2}
        y={padding.top + inner.height + axisLabelOffset.y}
        textAnchor="middle"
        fontSize="12"
        fill="currentColor"
      >
        {chart.xLabel}
      </text>
    </>
  );
}
