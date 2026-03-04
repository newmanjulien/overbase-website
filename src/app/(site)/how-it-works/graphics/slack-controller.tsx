"use client";

import { useCallback, useEffect, useState } from "react";

import { useIsMobile } from "@/components/ui/use-mobile";
import { SlackPreviewView } from "./slack";
import type { SlackThread } from "./types";

type SlackPreviewProps = {
  threads: SlackThread[];
  className?: string;
  id?: string;
};

const previewTimeOptions = ["10:24 AM", "11:06 AM", "2:14 PM"];
const autoCycleIntervalMs = 8000;
const messageEnterDurationMs = 520;
const messageEnterDelayMs = 80;
const messageExitDurationMs = 320;
const messageCleanupDelayMs = Math.max(
  messageEnterDurationMs + messageEnterDelayMs,
  messageExitDurationMs,
);

function useSlackThreadCycle(threads: SlackThread[]) {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [previousThread, setPreviousThread] = useState<SlackThread | null>(
    null,
  );

  const canCycle = threads.length > 1 && !isMobile;
  const visibleIndex = isMobile ? 0 : activeIndex;
  const thread = threads[visibleIndex] ?? threads[0] ?? null;
  const visiblePreviousThread = isMobile ? null : previousThread;
  const messageTime = previewTimeOptions[visibleIndex % previewTimeOptions.length];

  const advanceThread = useCallback(() => {
    if (!thread || !canCycle) {
      return;
    }

    setPreviousThread(thread);
    setActiveIndex((prev) => (prev + 1) % threads.length);
  }, [canCycle, thread, threads.length]);

  useEffect(() => {
    if (!previousThread) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPreviousThread(null);
    }, messageCleanupDelayMs);

    return () => window.clearTimeout(timeout);
  }, [previousThread]);

  useEffect(() => {
    if (!canCycle || isHovered || userInteracted) {
      return;
    }

    const interval = window.setInterval(() => {
      advanceThread();
    }, autoCycleIntervalMs);

    return () => window.clearInterval(interval);
  }, [advanceThread, canCycle, isHovered, userInteracted]);

  const handleRefresh = useCallback(() => {
    if (!canCycle) {
      return;
    }

    setUserInteracted(true);
    advanceThread();
  }, [advanceThread, canCycle]);

  return {
    canCycle,
    handleRefresh,
    messageTime,
    previousThread: visiblePreviousThread,
    setIsHovered,
    thread,
  };
}

export function SlackPreview({ threads, className, id }: SlackPreviewProps) {
  const {
    canCycle,
    handleRefresh,
    messageTime,
    previousThread,
    setIsHovered,
    thread,
  } = useSlackThreadCycle(threads);
  const rootId = id ?? thread?.id;

  if (!thread || !rootId) {
    return null;
  }

  return (
    <SlackPreviewView
      id={rootId}
      thread={thread}
      previousThread={previousThread}
      messageTime={messageTime}
      canCycle={canCycle}
      onRefresh={handleRefresh}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    />
  );
}
