import type { CalendarDay } from "./types";

export function Calendar({ day }: { day: CalendarDay }) {
  const hourHeightPx = 56;
  const startMinutes = day.startHour * 60;
  const totalHours = Math.max(0, day.endHour - day.startHour);
  const totalHeightPx = totalHours * hourHeightPx;

  const hours = Array.from(
    { length: Math.max(1, day.endHour - day.startHour + 1) },
    (_, index) => day.startHour + index,
  );

  const hourBoundaries = Array.from({ length: totalHours }, (_, index) => ({
    top: index * hourHeightPx,
    id: `${day.id}-boundary-${index}`,
  }));

  const events = [...day.events].sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    const durationA = a.end - a.start;
    const durationB = b.end - b.start;
    return durationB - durationA;
  });

  function formatHourLabel(hour: number) {
    const normalized = ((hour % 24) + 24) % 24;
    const suffix = normalized >= 12 ? "PM" : "AM";
    const hour12 = normalized % 12 === 0 ? 12 : normalized % 12;
    return `${hour12} ${suffix}`;
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
  }

  function eventStyle(event: CalendarDay["events"][number]) {
    const top = ((event.start - startMinutes) / 60) * hourHeightPx;
    const height = ((event.end - event.start) / 60) * hourHeightPx;
    const clampedTop = clamp(top, 0, totalHeightPx);
    const clampedHeight = clamp(height, 0, totalHeightPx - clampedTop);

    const duration = event.end - event.start;
    const overlapsLongerEvent = events.some((other) => {
      if (other.id === event.id) return false;
      const overlaps = event.start < other.end && event.end > other.start;
      if (!overlaps) return false;
      const otherDuration = other.end - other.start;
      return otherDuration > duration;
    });

    const isOverlay = overlapsLongerEvent;

    return {
      top: `${clampedTop}px`,
      height: `${clampedHeight}px`,
      width: isOverlay ? "55%" : "100%",
      left: isOverlay ? "45%" : "0",
      zIndex: isOverlay ? 3 : 1,
      isOverlay,
    };
  }

  return (
    <div
      id={day.id}
      className="mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white"
    >
      <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-400">
            Calendar
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-base font-semibold text-gray-900">
              {day.label}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-4">
        <div className="grid grid-cols-[3.5rem_1fr] gap-4">
          <div className="flex flex-col">
            {hours.map((hour) => (
              <div
                key={`${day.id}-hour-${hour}`}
                className="flex h-[56px] items-start text-xs font-medium text-gray-500"
              >
                <span className="-mt-1">{formatHourLabel(hour)}</span>
              </div>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/60 px-3"
            style={{ height: `${totalHeightPx}px` }}
          >
            {hourBoundaries.map((boundary) => (
              <div
                key={boundary.id}
                className="absolute left-0 right-0 border-t border-gray-100"
                style={{ top: `${boundary.top}px` }}
              />
            ))}

            {events.map((event) => {
              const style = eventStyle(event);
              const className = style.isOverlay
                ? "absolute flex flex-col gap-2 rounded-lg border border-white bg-blue-500 px-3 py-2 text-left text-xs text-white shadow-sm"
                : "absolute flex flex-col gap-2 rounded-lg bg-blue-500 px-3 py-2 text-left text-xs text-white shadow-sm";

              return (
                <div
                  key={event.id}
                  className={className}
                  style={{
                    top: style.top,
                    height: style.height,
                    width: style.width,
                    left: style.left,
                    zIndex: style.zIndex,
                  }}
                >
                  <span className="truncate text-xs font-semibold">
                    {event.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
