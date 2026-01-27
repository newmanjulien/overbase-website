"use client";

import Link from "next/link";
import { useEffect, useRef, forwardRef } from "react";
import { Button } from "./ui/button";

export function HotkeyBadge({
  keyChar,
  variant = "dark",
}: {
  keyChar: string;
  variant?: "dark" | "light";
}) {
  const baseClasses =
    "hidden md:inline-flex items-center justify-center w-5 h-5 rounded-sm text-xs font-semibold";
  const variantClasses =
    variant === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700";

  return <span className={`${baseClasses} ${variantClasses}`}>{keyChar}</span>;
}

export const HotkeyButton = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    onClick?: () => void;
    hotkey: string;
    variant?: "dark" | "light";
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
      variant = "dark",
      size = "default",
      className,
      href,
      target,
      rel,
    },
    externalRef,
  ) => {
    const internalRef = useRef<HTMLElement | null>(null);

    const setRef = (node: HTMLElement | null) => {
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

        const el = internalRef.current;
        if (!el) return;

        el.focus();
        el.click();
      };

      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [hotkey]);

    return (
      <Button
        ref={setRef}
        onClick={onClick}
        variant={variant === "light" ? "secondary" : "default"}
        size={size}
        className={className}
        asChild={Boolean(href)}
      >
        {href ? (
          <Link href={href} target={target} rel={rel}>
            <span className="inline-flex items-center gap-3">
              {children}
              <HotkeyBadge keyChar={hotkey.toUpperCase()} variant={variant} />
            </span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-3">
            {children}
            <HotkeyBadge keyChar={hotkey.toUpperCase()} variant={variant} />
          </span>
        )}
      </Button>
    );
  },
);

HotkeyButton.displayName = "HotkeyButton";
