interface Principle {
  id: string;
  title: string;
  description: string;
  pattern: "dots" | "arc" | "crosses";
}

const PRINCIPLES: Principle[] = [
  {
    id: "difficulty",
    title: "Smarter people are better",
    description:
      "A handful of people are smarter and more capable than everyone else combined. We only work with those people",
    pattern: "crosses",
  },
  {
    id: "average",
    title: "Great gets your fired",
    description:
      "We're not here to do great work. We're here to do exceptional work. If your work is merely great, you're fired",
    pattern: "dots",
  },
  {
    id: "accountability",
    title: "Absolute accountability",
    description:
      "Ownership here isn't symbolic - it's real. If you ship it, you own it. If it breaks, you fix it. If a decision backfires, you face it",
    pattern: "arc",
  },
];

function DotPattern() {
  const columns = 17;
  const rows = 11;
  const centerCell = {
    row: Math.floor(rows / 2),
    col: Math.floor(columns / 2),
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-[0.648rem]">
          {Array.from({ length: columns * rows }).map((_, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const isInHiddenCenterBlock =
              Math.abs(row - centerCell.row) <= 1 &&
              Math.abs(col - centerCell.col) <= 1;

            return (
              <span
                key={index}
                className={`block h-[0.209rem] w-[0.209rem] rounded-full bg-gray-300 ${
                  isInHiddenCenterBlock ? "invisible" : ""
                }`}
              />
            );
          })}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-gray-900"
      />
    </div>
  );
}

function ArcPattern() {
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
  const panelFill = "#f7f7f8";

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

function CrossPattern() {
  const viewWidth = 640;
  const viewHeight = 360;
  const columns = 10;
  const rows = 7;
  const spacingX = 48;
  const spacingY = 44;
  const crossSize = 6.8;
  const startX = (viewWidth - (columns - 1) * spacingX) / 2;
  const startY = (viewHeight - (rows - 1) * spacingY) / 2;
  const selectedCell = { row: rows - 1, col: columns - 1 };

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox={`0 0 ${viewWidth} ${viewHeight}`}
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: columns }).map((_, col) => {
            const x = startX + col * spacingX;
            const y = startY + row * spacingY;
            const isSelected =
              row === selectedCell.row && col === selectedCell.col;

            if (isSelected) {
              return (
                <path
                  key={`${row}-${col}`}
                  d={`M${x - 8.8} ${y + 0.8} L${x - 1.6} ${y + 8} L${
                    x + 10.4
                  } ${y - 6.4}`}
                  stroke="#1f2430"
                  strokeWidth="2.08"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              );
            }

            return (
              <g key={`${row}-${col}`}>
                <line
                  x1={x - crossSize}
                  y1={y - crossSize}
                  x2={x + crossSize}
                  y2={y + crossSize}
                  stroke="#bec3ca"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                />
                <line
                  x1={x - crossSize}
                  y1={y + crossSize}
                  x2={x + crossSize}
                  y2={y - crossSize}
                  stroke="#bec3ca"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                />
              </g>
            );
          }),
        )}
      </svg>
    </div>
  );
}

function Pattern({ pattern }: Pick<Principle, "pattern">) {
  if (pattern === "dots") return <DotPattern />;
  if (pattern === "arc") return <ArcPattern />;
  return <CrossPattern />;
}

export default function CareersPrinciples() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-18 md:pt-30 max-w-6xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {PRINCIPLES.map((principle) => (
          <article key={principle.id}>
            <div className="relative h-52 md:h-56 rounded-3xl border border-gray-200 bg-[#f7f7f8]">
              <Pattern pattern={principle.pattern} />
            </div>
            <h3 className="mt-5 text-sm text-gray-900 font-medium leading-tight">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
