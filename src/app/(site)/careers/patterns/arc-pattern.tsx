export default function ArcPattern() {
  const viewWidth = 640;
  const viewHeight = 360;
  const baselineY = 290;
  const leftX = 88;
  const rightX = 552;
  const radius = (rightX - leftX) / 2;
  const markerSize = 10;
  const markerOffset = markerSize / 2;
  const cutoutSize = 28;
  const cutoutOffset = cutoutSize / 2;
  const panelFill = "var(--color-zinc-50)";

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="arcPatternGradient"
            x1={leftX}
            y1={baselineY}
            x2={rightX}
            y2={baselineY}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d6d8db" stopOpacity="0" />
            <stop offset="0.03" stopColor="#d6d8db" stopOpacity="0" />
            <stop offset="0.18" stopColor="#c9cdd3" stopOpacity="0.9" />
            <stop offset="1" stopColor="#495058" stopOpacity="1" />
          </linearGradient>
        </defs>

        <line
          x1={leftX}
          y1={baselineY}
          x2={rightX}
          y2={baselineY}
          stroke="url(#arcPatternGradient)"
          strokeWidth="1.4"
        />

        <path
          d={`M ${leftX} ${baselineY} A ${radius} ${radius} 0 0 1 ${rightX} ${baselineY}`}
          stroke="url(#arcPatternGradient)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect
          x={leftX - cutoutOffset}
          y={baselineY - cutoutOffset}
          width={cutoutSize}
          height={cutoutSize}
          fill={panelFill}
        />
        <rect
          x={rightX - cutoutOffset}
          y={baselineY - cutoutOffset}
          width={cutoutSize}
          height={cutoutSize}
          fill={panelFill}
        />

        <rect
          x={leftX - markerOffset}
          y={baselineY - markerOffset}
          width={markerSize}
          height={markerSize}
          fill="#d1d3d6"
        />
        <rect
          x={rightX - markerOffset}
          y={baselineY - markerOffset}
          width={markerSize}
          height={markerSize}
          fill="#484e56"
        />
      </svg>
    </div>
  );
}
