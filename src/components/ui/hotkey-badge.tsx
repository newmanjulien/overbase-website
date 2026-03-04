import { cn } from "@/lib/utils";

type HotkeyBadgeProps = {
  keyChar: string;
  variant?: "ghost" | "light";
};

export function HotkeyBadge({ keyChar, variant = "light" }: HotkeyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-5 w-5 items-center justify-center rounded-sm text-xs font-semibold",
        variant === "ghost"
          ? "bg-gray-100 text-gray-600"
          : "bg-gray-200 text-gray-700",
      )}
    >
      {keyChar}
    </span>
  );
}
