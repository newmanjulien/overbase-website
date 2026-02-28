import type { QuadrantPoint } from "./types";

type QuadrantPointsProps = {
  points: QuadrantPoint[];
  xMid: number;
  yMid: number;
  disagreeThreshold: number;
  xForValue: (value: number) => number;
  yForValue: (value: number) => number;
  onHover: (
    point: QuadrantPoint,
    position: { x: number; y: number },
    bounds: { width: number; height: number }
  ) => void;
  onMove: (position: { x: number; y: number }) => void;
};

const getPointColor = (
  point: QuadrantPoint,
  xMid: number,
  yMid: number,
  disagreeThreshold: number
) => {
  const isRight = point.x >= xMid;
  const isTop = point.y >= yMid;
  const delta = point.y - point.x;
  const isDisagreement = Math.abs(delta) > disagreeThreshold;

  // If the point isn't in the green/red quadrants but the forecasts disagree,
  // color by direction of disagreement (green = Overbase higher, red = lower).
  if (isDisagreement && ((isTop && isRight) || (!isTop && !isRight))) {
    return delta > 0 ? "#86efac" : "#fca5a5";
  }

  // Otherwise color by quadrant.
  if (isTop && isRight) return "#111827";
  if (isTop && !isRight) return "#16a34a";
  if (!isTop && isRight) return "#dc2626";
  return "#9ca3af";
};

export function QuadrantPoints({
  points,
  xMid,
  yMid,
  disagreeThreshold,
  xForValue,
  yForValue,
  onHover,
  onMove,
}: QuadrantPointsProps) {
  return (
    <>
      {points.map((point) => {
        const isNearRightEdge = point.x > 78;
        const labelOffset = isNearRightEdge ? -8 : 8;
        const labelAnchor = isNearRightEdge ? "end" : "start";

        return (
          <g
            key={point.id}
            onMouseEnter={(event) => {
              const rect = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
              if (!rect) return;
              onHover(
                point,
                {
                  x: event.clientX - rect.left,
                  y: event.clientY - rect.top,
                },
                { width: rect.width, height: rect.height }
              );
            }}
            onMouseMove={(event) => {
              const rect = event.currentTarget.ownerSVGElement?.getBoundingClientRect();
              if (!rect) return;
              onMove({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
              });
            }}
          >
            <circle
              cx={xForValue(point.x)}
              cy={yForValue(point.y)}
              r={6}
              fill={getPointColor(point, xMid, yMid, disagreeThreshold)}
              fillOpacity={0.85}
            />
            <text
              x={xForValue(point.x) + labelOffset}
              y={yForValue(point.y) + 4}
              textAnchor={labelAnchor}
              fontSize="12"
              fill="#6b7280"
            >
              {point.label}
            </text>
          </g>
        );
      })}
    </>
  );
}
