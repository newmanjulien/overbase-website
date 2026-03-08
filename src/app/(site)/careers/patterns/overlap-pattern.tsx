export default function OverlapPattern() {
  const viewWidth = 640;
  const viewHeight = 360;
  const leftCircle = { cx: 230, cy: 180, r: 150 };
  const rightCircle = { cx: 390, cy: 180, r: 150 };
  const innerRightRadius = 104;
  const outerRightRadius = 186;

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="overlapIntersectionPattern"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.2" fill="#aeb3b9" />
          </pattern>
          <clipPath id="overlapLeftClip">
            <circle
              cx={leftCircle.cx}
              cy={leftCircle.cy}
              r={leftCircle.r}
            />
          </clipPath>
          <clipPath id="overlapRightClip">
            <circle
              cx={rightCircle.cx}
              cy={rightCircle.cy}
              r={rightCircle.r}
            />
          </clipPath>
        </defs>

        <g clipPath="url(#overlapLeftClip)">
          <g clipPath="url(#overlapRightClip)">
            <rect
              x="0"
              y="0"
              width={viewWidth}
              height={viewHeight}
              fill="url(#overlapIntersectionPattern)"
              opacity="0.9"
            />
          </g>
        </g>

        <circle
          cx={leftCircle.cx}
          cy={leftCircle.cy}
          r={leftCircle.r}
          stroke="#d7dade"
          strokeWidth="1.4"
        />
        <circle
          cx={rightCircle.cx}
          cy={rightCircle.cy}
          r={rightCircle.r}
          stroke="#bcc1c7"
          strokeWidth="1.6"
        />
        <circle
          cx={rightCircle.cx}
          cy={rightCircle.cy}
          r={innerRightRadius}
          stroke="#c4c9cf"
          strokeWidth="1.6"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
        <circle
          cx={rightCircle.cx}
          cy={rightCircle.cy}
          r={outerRightRadius}
          stroke="#c4c9cf"
          strokeWidth="1.6"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
