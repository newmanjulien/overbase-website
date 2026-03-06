export default function CrossPattern() {
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
