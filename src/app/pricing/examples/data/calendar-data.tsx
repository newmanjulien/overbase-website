import type { CalendarDay } from "@/app/pricing/examples/calendar";

export const dealReviewCalendar: CalendarDay = {
  id: "pricing-deal-review-calendar",
  label: "Wed, Feb 25",
  startHour: 9,
  endHour: 14,
  events: [
    {
      id: "deal-review",
      title: "Deal review with Chris",
      start: 10 * 60 + 30,
      end: 11 * 60 + 20,
    },
    {
      id: "notes",
      title: "Notes from Overbase",
      start: 10 * 60 + 30,
      end: 10 * 60 + 45,
    },
  ],
};
