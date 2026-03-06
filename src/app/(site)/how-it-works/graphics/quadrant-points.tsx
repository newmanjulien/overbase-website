import type { QuadrantPoint } from "./types";

type QuadrantPointsProps = {
  points: QuadrantPoint[];
  onHover: (point: QuadrantPoint, clientPosition: { x: number; y: number }) => void;
  onMove: (clientPosition: { x: number; y: number }) => void;
  interactive?: boolean;
};

export function QuadrantPoints({
  points,
  onHover,
  onMove,
  interactive = true,
}: QuadrantPointsProps) {
  return (
    <>
      {points.map((point) => {
        return (
          <g
            key={point.id}
            onMouseEnter={
              interactive
                ? (event) => {
                    onHover(point, {
                      x: event.clientX,
                      y: event.clientY,
                    });
                  }
                : undefined
            }
            onMouseMove={
              interactive
                ? (event) => {
                    onMove({
                      x: event.clientX,
                      y: event.clientY,
                    });
                  }
                : undefined
            }
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
