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
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const toolbarIconClass = "h-4 w-4 text-gray-600";
const toolbarSeparatorClass = "h-5 w-px bg-gray-200";

type SlackHeaderProps = {
  dayLabel: string;
  canCycle: boolean;
  onRefresh: () => void;
};

type SlackComposerProps = {
  placeholder: string;
};

type ToolbarIconProps = {
  icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
};

type ToolbarSeparatorProps = {
  className?: string;
};

function ToolbarIcon({
  icon: Icon,
  className,
  strokeWidth = 1.6,
}: ToolbarIconProps) {
  return (
    <Icon className={cn(toolbarIconClass, className)} strokeWidth={strokeWidth} />
  );
}

function ToolbarSeparator({ className }: ToolbarSeparatorProps) {
  return <span className={cn(toolbarSeparatorClass, className)} />;
}

export function SlackHeader({ dayLabel, canCycle, onRefresh }: SlackHeaderProps) {
  return (
    <>
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
          onClick={onRefresh}
          aria-label="Refresh Slack example"
          disabled={!canCycle}
          className={cn(
            "hidden h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-gray-300 hover:text-gray-700 md:flex",
            !canCycle && "cursor-default opacity-40 hover:text-gray-500",
          )}
        >
          <RefreshCw className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>

      <div className="relative flex items-center justify-center px-6 py-3">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-100" />
        <div className="relative z-10 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold text-gray-600">
          <span>{dayLabel}</span>
          <ChevronDown className="h-3.5 w-3.5 text-gray-500" strokeWidth={2} />
        </div>
      </div>
    </>
  );
}

export function SlackComposer({ placeholder }: SlackComposerProps) {
  return (
    <div className="mt-5 px-6 pb-6">
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-3 rounded-t-xl border-b border-gray-100 bg-gray-50 px-4 py-2 text-gray-600">
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="font-semibold">B</span>
            <span className="italic">I</span>
            <span className="underline decoration-2 underline-offset-2">U</span>
            <span className="line-through">S</span>
          </div>
          <ToolbarSeparator />
          <ToolbarIcon icon={Link2} />
          <ToolbarSeparator />
          <ToolbarIcon icon={ListOrdered} />
          <ToolbarIcon icon={List} />
          <ToolbarIcon icon={AlignLeft} />
          <ToolbarSeparator />
          <ToolbarIcon icon={CodeXml} />
          <ToolbarIcon icon={SquareCode} />
        </div>

        <div className="min-h-[70px] bg-white px-4 py-3 text-sm text-gray-400">
          {placeholder}
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-3 text-gray-500">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-600">
              <Plus className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <span className="text-sm font-semibold text-gray-600 underline decoration-2 underline-offset-4 decoration-gray-300">
              Aa
            </span>
            <ToolbarIcon icon={Smile} className="text-gray-500" />
            <ToolbarIcon icon={AtSign} className="text-gray-500" />
            <ToolbarIcon icon={MoreHorizontal} className="h-4 w-3.5 text-gray-500" />
          </div>
          <div className="flex items-center gap-2 border-l border-gray-200 pl-3 text-gray-400">
            <ToolbarIcon
              icon={SendHorizontal}
              className="text-gray-400"
              strokeWidth={1.8}
            />
            <ToolbarSeparator className="h-4" />
            <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
