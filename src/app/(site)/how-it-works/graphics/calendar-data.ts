import type { CalendarGraphicDay } from "./types";

export const dealReviewCalendar: CalendarGraphicDay = {
  id: "how-it-works-calendar",
  label: "Wed, Feb 25",
  bodyClassName: "h-[280px]",
  hourLabels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
  hourBoundaries: [
    { id: "how-it-works-calendar-boundary-0", className: "top-0" },
    { id: "how-it-works-calendar-boundary-1", className: "top-[56px]" },
    { id: "how-it-works-calendar-boundary-2", className: "top-[112px]" },
    { id: "how-it-works-calendar-boundary-3", className: "top-[168px]" },
    { id: "how-it-works-calendar-boundary-4", className: "top-[224px]" },
  ],
  events: [
    {
      id: "review",
      title: "Deal review with Chris",
      variant: "default",
      layoutClassName: "top-[84px] h-[46.6667px] w-full left-0 z-[1]",
    },
    {
      id: "notes",
      title: "From Overbase",
      layoutClassName: "top-[84px] h-[28px] w-[55%] left-[45%] z-[3]",
      variant: "popover",
    },
  ],
};

export const calendarPopoverContent = {
  title: "From Overbase",
  date: "Wednesday, February 25 - 10:30 - 11:00am",
  inviteLabel: "Invite via link",
  notes: [
    {
      label: "Since last meeting",
      description:
        "See what has happened with Chris's deals since your last deal review meeting",
    },
    {
      label: "Forecast",
      description:
        "Focus on the right deals by seeing where Overbase disagrees with your CRM",
    },
    {
      label: "Missing data and timelines",
      description:
        "Missing data and questions around timelines you may want to dig into with Chris",
    },
    {
      label: "Opportunities and risks",
      description: "List of opportunities and risks you might help Chris with",
    },
  ],
};
