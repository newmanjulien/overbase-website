"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  AlignLeft,
  AtSign,
  ChevronDown,
  CodeXml,
  Link2,
  List,
  ListOrdered,
  MoreHorizontal,
  Plus,
  RefreshCw,
  SendHorizontal,
  Smile,
  SquareCode,
} from "lucide-react";

import { cn } from "@/components/ui/utils";
import type { SlackThread } from "./types";

type SlackProps = {
  threads: SlackThread[];
  className?: string;
  id?: string;
};

const toolbarIconClass = "h-4 w-4 text-gray-600";
const messageEnterDurationMs = 520;
const messageEnterDelayMs = 80;
const messageExitDurationMs = 320;
const messageCleanupDelayMs = Math.max(
  messageEnterDurationMs + messageEnterDelayMs,
  messageExitDurationMs,
);

type SlackMessageTextProps = {
  message: SlackThread["message"];
  className?: string;
};

function SlackMessageText({ message, className }: SlackMessageTextProps) {
  return (
    <div className={cn("space-y-3 text-sm leading-[1.55] text-gray-800", className)}>
      {message.paragraphs.map((paragraph, index) => (
        <p key={`${message.id}-p-${index}`} className="whitespace-pre-wrap">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function SlackPreview({ threads, className, id }: SlackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [previousThread, setPreviousThread] = useState<SlackThread | null>(
    null,
  );
  const thread = threads[activeIndex] ?? threads[0] ?? null;

  const message = thread?.message;
  const rootId = id ?? thread?.id;
  const canCycle = threads.length > 1;
  const previewTimeOptions = ["10:24 AM", "11:06 AM", "2:14 PM"];
  const messageTime = previewTimeOptions[activeIndex % previewTimeOptions.length];

  const advanceThread = useCallback(() => {
    if (!thread) {
      return;
    }
    setPreviousThread(thread);
    setActiveIndex((prev) => (prev + 1) % threads.length);
  }, [thread, threads.length]);

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
    }, 8000);

    return () => window.clearInterval(interval);
  }, [advanceThread, canCycle, isHovered, userInteracted]);

  function handleRefresh() {
    if (!canCycle) {
      return;
    }
    setUserInteracted(true);
    advanceThread();
  }

  if (!thread || !message || !rootId) {
    return null;
  }

  return (
    <div
      id={rootId}
      className={cn(
        "relative mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">
            # deal-reviews
          </span>
          <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[11px] font-medium text-gray-500">
            Internal
          </span>
        </div>
        <button
          type="button"
          onClick={handleRefresh}
          aria-label="Refresh Slack example"
          disabled={!canCycle}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:text-gray-700",
            !canCycle && "cursor-default opacity-40 hover:text-gray-500",
          )}
        >
          <RefreshCw className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
      <div className="relative flex items-center justify-center px-6 py-3">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-100" />
        <div className="relative z-10 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold text-gray-600">
          <span>{thread.dayLabel}</span>
          <ChevronDown className="h-3.5 w-3.5 text-gray-500" strokeWidth={2} />
        </div>
      </div>

      <div className="relative mt-3 px-6">
        <div className="flex gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
            <Image
              src={message.avatarUrl}
              alt={message.userName}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold text-gray-900">
                {message.userName}
              </span>
              <span className="text-xs text-gray-500">{messageTime}</span>
            </div>
            <div className="relative mt-2">
              <div className="slack-message-stack">
                {previousThread ? (
                  <SlackMessageText
                    key={previousThread.id}
                    message={previousThread.message}
                    className="slack-message-layer slack-message-exit pointer-events-none"
                  />
                ) : null}
                <SlackMessageText
                  key={thread.id}
                  message={message}
                  className={cn(
                    "slack-message-layer",
                    previousThread && "slack-message-enter",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 px-6 pb-6">
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 rounded-t-xl border-b border-gray-100 bg-gray-50 px-4 py-2 text-gray-600">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="font-semibold">B</span>
              <span className="italic">I</span>
              <span className="underline decoration-2 underline-offset-2">
                U
              </span>
              <span className="line-through">S</span>
            </div>
            <span className="h-5 w-px bg-gray-200" />
            <Link2 className={toolbarIconClass} strokeWidth={1.6} />
            <span className="h-5 w-px bg-gray-200" />
            <ListOrdered className={toolbarIconClass} strokeWidth={1.6} />
            <List className={toolbarIconClass} strokeWidth={1.6} />
            <AlignLeft className={toolbarIconClass} strokeWidth={1.6} />
            <span className="h-5 w-px bg-gray-200" />
            <CodeXml className={toolbarIconClass} strokeWidth={1.6} />
            <SquareCode className={toolbarIconClass} strokeWidth={1.6} />
          </div>

          <div className="min-h-[70px] bg-white px-4 py-3 text-sm text-gray-400">
            {thread.composerPlaceholder}
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 text-gray-500">
            <div className="flex items-center gap-4 text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600">
                <Plus className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="text-sm font-semibold text-gray-600 underline decoration-2 underline-offset-4 decoration-gray-300">
                Aa
              </span>
              <Smile className="h-4 w-4 text-gray-500" strokeWidth={1.6} />
              <AtSign className="h-4 w-4 text-gray-500" strokeWidth={1.6} />
              <MoreHorizontal
                className="h-4 w-4 text-gray-500"
                strokeWidth={1.6}
              />
            </div>
            <div className="flex items-center gap-2 border-l border-gray-200 pl-3 text-gray-400">
              <SendHorizontal className="h-4 w-4" strokeWidth={1.8} />
              <span className="h-4 w-px bg-gray-200" />
              <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
