export default function DotPattern() {
  const columns = 23;
  const rows = 13;
  const centerCell = {
    row: Math.floor(rows / 2),
    col: Math.floor(columns / 2),
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid grid-cols-[repeat(23,minmax(0,1fr))] gap-[0.551rem]">
          {Array.from({ length: columns * rows }).map((_, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const isInHiddenCenterBlock =
              Math.abs(row - centerCell.row) <= 1 &&
              Math.abs(col - centerCell.col) <= 1;

            return (
              <span
                key={index}
                className={`block h-[0.178rem] w-[0.178rem] rounded-full bg-gray-300 ${
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
