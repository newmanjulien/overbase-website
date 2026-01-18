"use client";

import { useEffect, useRef, forwardRef } from "react";
import { Button } from "../ui/button";

export function HotkeyBadge({
  keyChar,
  variant = "dark",
}: {
  keyChar: string;
  variant?: "dark" | "light";
}) {
  const baseClasses =
    "hidden md:inline-flex items-center justify-center w-5 h-5 rounded-sm text-xs font-bold";
  const variantClasses =
    variant === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black";

  return <span className={`${baseClasses} ${variantClasses}`}>{keyChar}</span>;
}

export const HotkeyButton = forwardRef<
  HTMLButtonElement,
  {
    children: React.ReactNode;
    onClick: () => void;
    hotkey: string;
    variant?: "dark" | "light";
    size?: "sm" | "lg" | "default";
    className?: string;
  }
>(
  (
    {
      children,
      onClick,
      hotkey,
      variant = "dark",
      size = "default",
      className,
    },
    externalRef,
  ) => {
    const internalRef = useRef<HTMLButtonElement | null>(null);

    const setRef = (node: HTMLButtonElement | null) => {
      internalRef.current = node;
      if (typeof externalRef === "function") externalRef(node);
      else if (externalRef) externalRef.current = node;
    };

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const target = e.target;
        if (!(target instanceof HTMLElement)) return;
        if (
          target.isContentEditable ||
          ["INPUT", "TEXTAREA"].includes(target.tagName) ||
          (target as HTMLInputElement).type === "text"
        )
          return;

        if (e.key.toLowerCase() !== hotkey.toLowerCase()) return;

        const btn = internalRef.current;
        if (!btn) return;

        btn.focus();
        btn.click();
      };

      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [hotkey]);

    return (
      <Button ref={setRef} onClick={onClick} size={size} className={className}>
        <span className="inline-flex items-center gap-1.5">
          {children}
          <HotkeyBadge keyChar={hotkey.toUpperCase()} variant={variant} />
        </span>
      </Button>
    );
  },
);

HotkeyButton.displayName = "HotkeyButton";
