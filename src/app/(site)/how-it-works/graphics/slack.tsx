import Image from "next/image";

import { cn } from "@/lib/utils";
import { SlackComposer, SlackHeader } from "./slack-ui";
import type { SlackThread } from "./types";

type SlackMessageTextProps = {
  message: SlackThread["message"];
  className?: string;
};

export type SlackPreviewViewProps = {
  id: string;
  thread: SlackThread;
  previousThread: SlackThread | null;
  messageTime: string;
  canCycle: boolean;
  onRefresh: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
};

function SlackMessageText({ message, className }: SlackMessageTextProps) {
  return (
    <div
      className={cn("space-y-3 text-sm leading-[1.55] text-gray-800", className)}
    >
      {message.paragraphs.map((paragraph, index) => (
        <p key={`${message.id}-p-${index}`} className="whitespace-pre-wrap">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

type SlackMessagePaneProps = {
  thread: SlackThread;
  previousThread: SlackThread | null;
  messageTime: string;
};

function SlackMessagePane({
  thread,
  previousThread,
  messageTime,
}: SlackMessagePaneProps) {
  return (
    <div className="relative mt-3 px-6">
      <div className="flex gap-4">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
          <Image
            src={thread.message.avatarUrl}
            alt={thread.message.userName}
            width={44}
            height={44}
            sizes="40px"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-gray-900">
              {thread.message.userName}
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
                message={thread.message}
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
  );
}

export function SlackPreviewView({
  id,
  thread,
  previousThread,
  messageTime,
  canCycle,
  onRefresh,
  onMouseEnter,
  onMouseLeave,
  className,
}: SlackPreviewViewProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white",
        className,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <SlackHeader
        dayLabel={thread.dayLabel}
        canCycle={canCycle}
        onRefresh={onRefresh}
      />
      <SlackMessagePane
        thread={thread}
        previousThread={previousThread}
        messageTime={messageTime}
      />
      <SlackComposer placeholder={thread.composerPlaceholder} />
    </div>
  );
}
