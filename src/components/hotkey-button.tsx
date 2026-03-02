"use client";

import Link from "next/link";
import { useEffect, useRef, forwardRef } from "react";
import { Button } from "@/components/ui/button";

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

export function HotkeyBadge({
  keyChar,
  variant = "light",
}: {
  keyChar: string;
  variant?: "ghost" | "light";
}) {
  const baseClasses =
    "hidden md:inline-flex items-center justify-center w-5 h-5 rounded-sm text-xs font-semibold";
  const variantClasses =
    variant === "ghost" ? "bg-gray-100 text-gray-600" : "bg-gray-200 text-gray-700";

  return <span className={`${baseClasses} ${variantClasses}`}>{keyChar}</span>;
}

export const HotkeyButton = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    onClick?: () => void;
    hotkey: string;
    variant?: "ghost" | "light";
    size?: "sm" | "lg" | "default";
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
  }
>(
  (
    {
      children,
      onClick,
      hotkey,
      variant = "light",
      size = "default",
      className,
      href,
      target,
      rel,
    },
    externalRef,
  ) => {
    const internalRef = useRef<HTMLElement | null>(null);
    const normalizedHotkey = hotkey.toLowerCase();

    const setRef = (node: HTMLElement | null) => {
      internalRef.current = node;
      if (typeof externalRef === "function") externalRef(node);
      else if (externalRef) externalRef.current = node;
    };

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.defaultPrevented || e.repeat) return;
        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
        if (isEditableTarget(e.target)) return;
        if (e.key.toLowerCase() !== normalizedHotkey) return;

        const el = internalRef.current;
        if (!el) return;

        e.preventDefault();
        el.focus();
        el.click();
      };

      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [normalizedHotkey]);

    return (
      <Button
        ref={setRef}
        onClick={onClick}
        variant={variant === "ghost" ? "ghost" : "light"}
        size={size}
        className={className}
        asChild={Boolean(href)}
        aria-keyshortcuts={normalizedHotkey}
      >
        {href ? (
          <Link href={href} target={target} rel={rel}>
            <span className="inline-flex items-center gap-1">
              {children}
              <HotkeyBadge keyChar={hotkey.toUpperCase()} variant={variant} />
            </span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1">
            {children}
            <HotkeyBadge keyChar={hotkey.toUpperCase()} variant={variant} />
          </span>
        )}
      </Button>
    );
  },
);

HotkeyButton.displayName = "HotkeyButton";
