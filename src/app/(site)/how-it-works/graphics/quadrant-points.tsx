import type { QuadrantPoint } from "./types";

type QuadrantPointsProps = {
  points: QuadrantPoint[];
  onHover: (
    point: QuadrantPoint,
    position: { x: number; y: number },
    bounds: { width: number; height: number }
  ) => void;
  onMove: (position: { x: number; y: number }) => void;
};

export function QuadrantPoints({
  points,
  onHover,
  onMove,
}: QuadrantPointsProps) {
  return (
    <>
      {points.map((point) => {
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
              cx={point.xPx}
              cy={point.yPx}
              r={6}
              fill={point.color}
              fillOpacity={0.85}
            />
            <text
              x={point.xPx + point.labelOffset}
              y={point.yPx + 4}
              textAnchor={point.labelAnchor}
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
