"use client";

import { useCallback, useRef } from "react";

import { HotkeyBadge } from "@/components/ui/hotkey-badge";
import { useHotkeyAction } from "@/hooks/use-hotkey-action";

const submitButtonClass =
  "relative flex h-[42px] w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-[#1296f7] px-4 text-sm font-medium leading-none text-white outline-none transition-[background,box-shadow] duration-150 hover:bg-[#0d8eea] focus-visible:shadow-[0_0_0_3px_rgb(18_150_247_/_35%)]";

const hotkeyBadgeClass =
  "absolute right-3 hidden bg-white/15 font-medium text-white/75 sm:inline-flex";

type RegisterSubmitButtonProps = {
  hotkey?: string;
  hotkeyLabel?: string;
  label: string;
  showHotkey?: boolean;
};

export function RegisterSubmitButton({
  hotkey,
  hotkeyLabel,
  label,
  showHotkey = false,
}: RegisterSubmitButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const normalizedHotkey = hotkey?.toLowerCase();

  const triggerHotkey = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    button.focus();
    button.click();
  }, []);

  useHotkeyAction({
    hotkey: normalizedHotkey ?? "",
    onTrigger: triggerHotkey,
    enabled: Boolean(normalizedHotkey),
  });

  return (
    <button
      ref={buttonRef}
      type="submit"
      className={submitButtonClass}
      aria-keyshortcuts={hotkey}
    >
      <span>{label}</span>
      {showHotkey && hotkeyLabel ? (
        <HotkeyBadge
          keyChar={hotkeyLabel}
          className={hotkeyBadgeClass}
        />
      ) : null}
    </button>
  );
}
