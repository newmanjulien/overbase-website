"use client";

import { useEffect, useRef, useState } from "react";

import { QuadrantAxes } from "./quadrant-axes";
import { QuadrantPoints } from "./quadrant-points";
import { QuadrantTooltip } from "./quadrant-tooltip";
import type { QuadrantChartData, QuadrantPoint } from "./types";

export function Quadrant({ chart }: { chart: QuadrantChartData }) {
  const [hoveredPoint, setHoveredPoint] = useState<QuadrantPoint | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(
    null
  );
  const [hoverBounds, setHoverBounds] = useState<{ width: number; height: number } | null>(
    null
  );
  const [hasInteracted, setHasInteracted] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const defaultPoint = chart.points.find((point) => point.id === "q18");

  useEffect(() => {
    if (hasInteracted || !defaultPoint) return;
    const rect = svgRef.current?.getBoundingClientRect();
    const width = rect?.width ?? chart.layout.dimensions.width;
    const height = rect?.height ?? chart.layout.dimensions.height;
    const x = defaultPoint.xPx;
    const y = defaultPoint.yPx;

    setHoveredPoint(defaultPoint);
    setHoverBounds({ width, height });
    setHoverPosition({
      x: (x / chart.layout.dimensions.width) * width,
      y: (y / chart.layout.dimensions.height) * height,
    });
  }, [
    defaultPoint?.id,
    hasInteracted,
    chart.layout.dimensions.width,
    chart.layout.dimensions.height,
  ]);

  return (
    <div className="relative mt-5 w-full rounded-xl border border-gray-100 bg-white p-4">
      <svg
        ref={svgRef}
        width={chart.layout.dimensions.width}
        height={chart.layout.dimensions.height}
        viewBox={`0 0 ${chart.layout.dimensions.width} ${chart.layout.dimensions.height}`}
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
          layout={chart.layout}
        />

        <QuadrantPoints
          points={chart.points}
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
        disagreeThreshold={chart.disagreeThreshold}
      />
    </div>
  );
}
