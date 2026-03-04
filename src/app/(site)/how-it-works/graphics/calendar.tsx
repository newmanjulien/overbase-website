import type {
  CalendarDefaultEvent,
  CalendarEvent,
  CalendarGraphicDay,
  CalendarPopoverEvent,
} from "./types";

import { cn } from "@/lib/utils";
import { CalendarPopover } from "./calendar-popover";

type CalendarProps = {
  day: CalendarGraphicDay;
  className?: string;
};

export function Calendar({ day, className }: CalendarProps) {
  const eventRenderers = {
    default: (event: CalendarDefaultEvent) => (
      <div
        key={event.id}
        className={cn(
          "absolute flex min-w-0 items-start rounded-lg bg-blue-500 px-3 pb-1 pt-1.5 text-left text-xs leading-tight text-white shadow-sm",
          event.layoutClassName,
        )}
      >
        <span className="min-w-0 truncate font-semibold">{event.title}</span>
      </div>
    ),
    popover: (event: CalendarPopoverEvent) => (
      <div
        key={event.id}
        className={cn("absolute", event.layoutClassName)}
      >
        <CalendarPopover
          title={event.title}
          interactive={event.interactive}
          className="flex min-w-0 items-start rounded-lg border border-white bg-blue-500 px-3 pb-1 pt-1.5 text-left text-xs leading-tight text-white shadow-sm"
        />
      </div>
    ),
  };

  const renderEvent = (event: CalendarEvent) => {
    if (event.variant === "default") {
      return eventRenderers.default(event);
    }

    return eventRenderers.popover(event);
  };

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
            className={cn(
              "relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/60 px-3",
              day.bodyClassName,
            )}
            data-calendar-body
          >
            {day.hourBoundaries.map((boundary) => (
              <div
                key={boundary.id}
                className={cn(
                  "absolute left-0 right-0 border-t border-gray-100",
                  boundary.className,
                )}
              />
            ))}

            {day.events.map((event) => {
              return renderEvent(event);
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
