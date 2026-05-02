import { cn } from "@/lib/utils";

type HotkeyBadgeProps = {
  className?: string;
  keyChar: string;
  variant?: "ghost" | "light";
};

export function HotkeyBadge({
  className,
  keyChar,
  variant = "light",
}: HotkeyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 text-xs font-semibold",
        variant === "ghost"
          ? "bg-gray-100 text-gray-600"
          : "bg-gray-200 text-gray-700",
        className,
      )}
    >
      {keyChar}
    </span>
  );
}
