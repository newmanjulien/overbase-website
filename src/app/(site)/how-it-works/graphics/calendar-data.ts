import type { CalendarGraphicDay } from "./types";

export const dealReviewCalendar: CalendarGraphicDay = {
  id: "how-it-works-calendar",
  label: "Wed, Feb 25",
  bodyHeightPx: 280,
  hourLabels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
  hourBoundaries: [
    { id: "how-it-works-calendar-boundary-0", topPx: 0 },
    { id: "how-it-works-calendar-boundary-1", topPx: 56 },
    { id: "how-it-works-calendar-boundary-2", topPx: 112 },
    { id: "how-it-works-calendar-boundary-3", topPx: 168 },
    { id: "how-it-works-calendar-boundary-4", topPx: 224 },
  ],
  events: [
    {
      id: "review",
      title: "Deal review with Chris",
      variant: "default",
      topPx: 84,
      heightPx: 46.6667,
      widthPercent: 100,
      leftPercent: 0,
      zIndex: 1,
    },
    {
      id: "notes",
      title: "From Overbase",
      topPx: 84,
      heightPx: 28,
      widthPercent: 55,
      leftPercent: 45,
      zIndex: 3,
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
      label: "Deal quadrant",
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
