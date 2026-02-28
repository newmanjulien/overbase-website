"use client";

import { Link2, Mail, MoreVertical, Pencil, Trash2, X } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/components/ui/utils";
import type { CalendarEvent } from "./types";

type CalendarPopoverProps = {
  event: CalendarEvent;
  className?: string;
};

const linkClassName =
  "text-blue-600 underline underline-offset-2 hover:text-blue-700";

const notesBody = [
  <>
    Check out the deal quadrant where we compare our calculation on whether a
    deal will close with what's in your CRM
  </>,
  <>
    <a
      href="#"
      className={linkClassName}
      onClick={(event) => event.preventDefault()}
    >
      Deal quadrant
    </a>
  </>,
  <>Check out the list of opportunities and risks for Chris' deals</>,
  <>
    <a
      href="#"
      className={linkClassName}
      onClick={(event) => event.preventDefault()}
    >
      Opportunities and risk
    </a>
  </>,
  <>
    Check out the missing data and questions around timelines in Chris' deals
  </>,
  <>
    <a
      href="#"
      className={linkClassName}
      onClick={(event) => event.preventDefault()}
    >
      Missing data and timelines
    </a>
  </>,
  <>Check out ideas on what Chris could coach others on the team with</>,
  <>
    <a
      href="#"
      className={linkClassName}
      onClick={(event) => event.preventDefault()}
    >
      Coaching opportunities
    </a>
  </>,
  <>
    ***A win to celebrate is that the Acme deal that had gone cold last month
    seems to be active again
  </>,
  <>
    ***You might want to recognize that Chris did 2x more prospecting this week
    than any other week in the past 3 months
  </>,
];

export function CalendarPopover({ event, className }: CalendarPopoverProps) {
  const iconButtonClass =
    "rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600";

  return (
    <HoverCard openDelay={0} closeDelay={120}>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            className,
            "cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-200",
          )}
          role="button"
          tabIndex={0}
          aria-label={`${event.title} details`}
          data-event-id={event.id}
        >
          <span className="min-w-0 truncate font-semibold">{event.title}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="right"
        sideOffset={18}
        className="w-[23rem] rounded-2xl border border-gray-200 bg-gray-50/95 p-0 shadow-[0_24px_48px_rgba(15,23,42,0.22)] backdrop-blur-sm"
      >
        <div className="px-6 pb-5 pt-4">
          <div className="flex items-center justify-end gap-2">
            <button type="button" className={iconButtonClass} aria-label="Edit">
              <Pencil className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              className={iconButtonClass}
              aria-label="Delete"
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              className={iconButtonClass}
              aria-label="Email"
            >
              <Mail className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              className={iconButtonClass}
              aria-label="More options"
            >
              <MoreVertical className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              className={iconButtonClass}
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>

          <div className="mt-3 flex items-start gap-3">
            <div>
              <div className="text-lg font-semibold text-gray-900">
                Data from Overbase
              </div>
              <div className="text-xs text-gray-500">
                Wednesday, February 25 - 10:30 - 11:00pm
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-gray-50"
            >
              <Link2 className="h-4 w-4" strokeWidth={1.6} />
              Invite via link
            </button>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
            {notesBody.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
