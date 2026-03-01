import type { CalendarDay } from "./types";

import { cn } from "@/components/ui/utils";
import { CalendarPopover } from "./calendar-popover";

type CalendarProps = {
  day: CalendarDay;
  className?: string;
};

export function Calendar({ day, className }: CalendarProps) {
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

  const calendarStyles = [
    `#${day.id} [data-calendar-body] { height: ${totalHeightPx}px; }`,
    ...hourBoundaries.map(
      (boundary) =>
        `#${day.id} [data-boundary-id="${boundary.id}"] { top: ${boundary.top}px; }`,
    ),
    ...events.map((event) => {
      const style = eventStyle(event);
      return `#${day.id} [data-event-id="${event.id}"] { top: ${style.top}; height: ${style.height}; width: ${style.width}; left: ${style.left}; z-index: ${style.zIndex}; }`;
    }),
  ].join("\n");

  return (
    <div
      id={day.id}
      className={cn(
        "mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
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
                className="flex h-14 items-start text-xs font-medium text-gray-500"
              >
                <span className="-mt-1">{formatHourLabel(hour)}</span>
              </div>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/60 px-3"
            data-calendar-body
          >
            {hourBoundaries.map((boundary) => (
              <div
                key={boundary.id}
                className="absolute left-0 right-0 border-t border-gray-100"
                data-boundary-id={boundary.id}
              />
            ))}

            {events.map((event) => {
              const style = eventStyle(event);
              const className = cn(
                "absolute min-w-0 rounded-lg bg-blue-500 px-3 pt-1.5 pb-1 text-left text-xs leading-tight text-white shadow-sm",
                style.isOverlay && "border border-white",
                "flex items-start",
              );
              const isNotesEvent = event.id === "notes";

              if (isNotesEvent) {
                return (
                  <CalendarPopover
                    key={event.id}
                    event={event}
                    className={className}
                  />
                );
              }

              return (
                <div
                  key={event.id}
                  className={className}
                  data-event-id={event.id}
                >
                  <span className="min-w-0 truncate font-semibold">
                    {event.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{calendarStyles}</style>
    </div>
  );
}

export const dealReviewCalendar: CalendarDay = {
  id: "how-it-works-calendar",
  label: "Wed, Feb 25",
  startHour: 9,
  endHour: 14,
  events: [
    {
      id: "review",
      title: "Deal review with Chris",
      start: 10 * 60 + 30,
      end: 11 * 60 + 20,
    },
    {
      id: "notes",
      title: "From Overbase",
      start: 10 * 60 + 30,
      end: 11 * 60,
    },
  ],
};
