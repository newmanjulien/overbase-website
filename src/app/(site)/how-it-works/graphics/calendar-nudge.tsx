"use client";

import { useEffect, useRef, useState } from "react";

import type { CalendarGraphicDay } from "./types";
import { Calendar, calendarNudgeConfig } from "./calendar";

type CalendarNudgeProps = {
  day: CalendarGraphicDay;
  className?: string;
};

export function CalendarNudge({ day, className }: CalendarNudgeProps) {
  const [nudgeActive, setNudgeActive] = useState(false);
  const nudgeTimeoutRef = useRef<number | null>(null);
  const totalMs =
    calendarNudgeConfig.delayMs +
    calendarNudgeConfig.durationMs * calendarNudgeConfig.iterations;

  useEffect(() => {
    function handleScroll() {
      if (nudgeTimeoutRef.current !== null) return;
      setNudgeActive(true);
      nudgeTimeoutRef.current = window.setTimeout(() => {
        setNudgeActive(false);
        nudgeTimeoutRef.current = null;
      }, totalMs);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (nudgeTimeoutRef.current !== null) {
        window.clearTimeout(nudgeTimeoutRef.current);
        nudgeTimeoutRef.current = null;
      }
    };
  }, [totalMs]);

  return <Calendar day={day} className={className} nudgeActive={nudgeActive} />;
}
