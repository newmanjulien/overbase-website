export type CalendarEvent = {
  id: string;
  title: string;
  start: number;
  end: number;
};

export type CalendarDay = {
  id: string;
  label: string;
  startHour: number;
  endHour: number;
  events: CalendarEvent[];
};

export function Calendar({ day }: { day: CalendarDay }) {
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
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">9 AM</span>
            </div>
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">10 AM</span>
            </div>
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">11 AM</span>
            </div>
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">12 PM</span>
            </div>
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">1 PM</span>
            </div>
            <div className="flex h-[56px] items-start text-xs font-medium text-gray-500">
              <span className="-mt-1">2 PM</span>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-b from-white via-white to-gray-50/60 px-3"
            style={{ height: "280px" }}
          >
            <div className="absolute left-0 right-0 border-t border-gray-100" />
            <div
              className="absolute left-0 right-0 border-t border-gray-100"
              style={{ top: "56px" }}
            />
            <div
              className="absolute left-0 right-0 border-t border-gray-100"
              style={{ top: "112px" }}
            />
            <div
              className="absolute left-0 right-0 border-t border-gray-100"
              style={{ top: "168px" }}
            />
            <div
              className="absolute left-0 right-0 border-t border-gray-100"
              style={{ top: "224px" }}
            />

            <div
              className="absolute left-0 flex flex-col gap-2 rounded-lg bg-blue-500 px-3 py-2 text-left text-xs text-white shadow-sm"
              style={{
                top: "84px",
                height: "46.7px",
                width: "100%",
                zIndex: 1,
              }}
            >
              <span className="text-xs font-semibold truncate">
                Deal review with Chris
              </span>
            </div>

            <div
              className="absolute left-0 flex flex-col gap-2 rounded-lg border-1 border-white bg-blue-500 px-3 py-2 text-left text-xs text-white shadow-sm"
              style={{
                top: "84px",
                height: "36px",
                width: "55%",
                marginLeft: "45%",
                zIndex: 3,
              }}
            >
              <span className="text-xs font-semibold truncate">
                Notes from Overbase
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
