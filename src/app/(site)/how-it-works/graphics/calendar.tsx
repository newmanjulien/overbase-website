import type { CalendarGraphicDay } from "./types";

import { cn } from "@/components/ui/utils";
import { CalendarPopover } from "./calendar-popover";

type CalendarProps = {
  day: CalendarGraphicDay;
  className?: string;
};

export function Calendar({ day, className }: CalendarProps) {
  const calendarStyles = [
    `#${day.id} [data-calendar-body] { height: ${day.bodyHeightPx}px; }`,
    ...day.hourBoundaries.map(
      (boundary) =>
        `#${day.id} [data-boundary-id="${boundary.id}"] { top: ${boundary.topPx}px; }`,
    ),
    ...day.events.map(
      (event) =>
        `#${day.id} [data-event-id="${event.id}"] { top: ${event.topPx}px; height: ${event.heightPx}px; width: ${event.widthPercent}%; left: ${event.leftPercent}%; z-index: ${event.zIndex}; }`,
    ),
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
            {day.hourLabels.map((hourLabel, index) => (
              <div
                key={`${day.id}-hour-${index}`}
                className="flex h-14 items-start text-xs font-medium text-gray-500"
              >
                <span className="-mt-1">{hourLabel}</span>
              </div>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/60 px-3"
            data-calendar-body
          >
            {day.hourBoundaries.map((boundary) => (
              <div
                key={boundary.id}
                className="absolute left-0 right-0 border-t border-gray-100"
                data-boundary-id={boundary.id}
              />
            ))}

            {day.events.map((event) => {
              const className = cn(
                "absolute min-w-0 rounded-lg bg-blue-500 px-3 pt-1.5 pb-1 text-left text-xs leading-tight text-white shadow-sm",
                event.isOverlay && "border border-white",
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
