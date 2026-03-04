"use client";

import { useEffect } from "react";

const EDITABLE_ROLES = new Set([
  "textbox",
  "searchbox",
  "combobox",
  "spinbutton",
]);

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return true;
  const role = target.getAttribute("role");
  return role ? EDITABLE_ROLES.has(role) : false;
}

type UseHotkeyActionParams = {
  hotkey: string;
  onTrigger: () => void;
  enabled?: boolean;
};

export function useHotkeyAction({
  hotkey,
  onTrigger,
  enabled = true,
}: UseHotkeyActionParams) {
  const normalizedHotkey = hotkey.toLowerCase();

  useEffect(() => {
    if (!enabled) return;

    const handler = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.repeat) return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      if (isEditableTarget(e.target)) return;
      if (e.key.toLowerCase() !== normalizedHotkey) return;

      e.preventDefault();
      onTrigger();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [enabled, normalizedHotkey, onTrigger]);
}
