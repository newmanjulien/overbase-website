"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { HotkeyBadge } from "@/components/ui/hotkey-badge";
import { useHotkeyAction } from "@/hooks/use-hotkey-action";
import type { SiteQuickAction } from "@/lib/site-nav";

type HotkeyButtonProps = {
  action: SiteQuickAction;
  size?: "sm" | "default" | "lg";
  enabled?: boolean;
};

export function HotkeyButton({
  action,
  size = "default",
  enabled = true,
}: HotkeyButtonProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const normalizedHotkey = action.hotkey.toLowerCase();

  const triggerHotkey = useCallback(() => {
    const link = linkRef.current;
    if (!link) return;

    link.focus();
    link.click();
  }, []);

  useHotkeyAction({
    hotkey: normalizedHotkey,
    onTrigger: triggerHotkey,
    enabled,
  });

  return (
    <Button
      variant={action.variant === "ghost" ? "ghost" : "light"}
      size={size}
      className={action.className}
      asChild
    >
      <Link
        ref={linkRef}
        href={action.href}
        aria-keyshortcuts={normalizedHotkey}
        className="inline-flex items-center gap-1"
      >
        <span>{action.label}</span>
        <HotkeyBadge
          keyChar={action.hotkey.toUpperCase()}
          variant={action.variant}
        />
      </Link>
    </Button>
  );
}
