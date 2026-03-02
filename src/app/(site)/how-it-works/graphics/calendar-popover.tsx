"use client";

import type { CSSProperties } from "react";
import { Link2, Mail, MoreVertical, Pencil, Trash2 } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { calendarPopoverContent } from "./calendar-data";

type CalendarPopoverProps = {
  title: string;
  className?: string;
  style?: CSSProperties;
};

const linkClassName =
  "text-blue-600 underline underline-offset-2 hover:text-blue-700";
const iconClassName = "rounded-full p-1 text-gray-400";

export function CalendarPopover({ title, className, style }: CalendarPopoverProps) {
  return (
    <HoverCard openDelay={0} closeDelay={120}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            className,
            "cursor-pointer text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-200",
          )}
          style={style}
          aria-label={`${title} details`}
        >
          <span className="min-w-0 truncate font-semibold">{title}</span>
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="right"
        sideOffset={18}
        className="w-92 rounded-2xl border border-gray-200 bg-gray-50/95 p-0 shadow-2xl backdrop-blur-sm"
      >
        <div className="px-6 pb-5 pt-4">
          <div className="flex items-center justify-end gap-2" aria-hidden>
            <span className={iconClassName}>
              <Pencil className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <span className={iconClassName}>
              <Trash2 className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <span className={iconClassName}>
              <Mail className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <span className={iconClassName}>
              <MoreVertical className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </div>

          <div className="mt-3 flex items-start gap-3">
            <div>
              <div className="text-lg font-semibold text-gray-900">
                {calendarPopoverContent.title}
              </div>
              <div className="text-xs text-gray-500">
                {calendarPopoverContent.date}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-blue-600">
              <Link2 className="h-4 w-4" strokeWidth={1.6} />
              {calendarPopoverContent.inviteLabel}
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
            {calendarPopoverContent.notes.map((note) => (
              <p key={note.label}>
                <span className={linkClassName}>{note.label}</span>{" "}
                - {note.description}
              </p>
            ))}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
