"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

type HeaderNavItem = {
  id: string;
  href: string;
  label: string;
};

type HeaderNavProps = {
  items: HeaderNavItem[];
  activeId: string | null;
};

export function HeaderNav({ items, activeId }: HeaderNavProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const setIndicatorVars = useCallback(
    (vars: { left?: number; width?: number; opacity?: number }) => {
      const indicatorEl = indicatorRef.current;
      if (!indicatorEl) return;
      if (typeof vars.left === "number") {
        indicatorEl.style.setProperty("--nav-indicator-left", `${vars.left}px`);
      }
      if (typeof vars.width === "number") {
        indicatorEl.style.setProperty(
          "--nav-indicator-width",
          `${vars.width}px`,
        );
      }
      if (typeof vars.opacity === "number") {
        indicatorEl.style.setProperty(
          "--nav-indicator-opacity",
          `${vars.opacity}`,
        );
      }
    },
    [],
  );

  const updateIndicator = useCallback(
    (id: string | null) => {
      const container = navRef.current;
      if (!container || !id) {
        setIndicatorVars({ opacity: 0 });
        return;
      }
      const el = itemRefs.current[id];
      if (!el) {
        setIndicatorVars({ opacity: 0 });
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicatorVars({
        left: rect.left - containerRect.left,
        width: rect.width,
        opacity: 1,
      });
    },
    [setIndicatorVars],
  );

  useLayoutEffect(() => {
    updateIndicator(hoveredId ?? activeId);
  }, [activeId, hoveredId, updateIndicator]);

  useLayoutEffect(() => {
    if (!navRef.current) return;
    const ro = new ResizeObserver(() => {
      updateIndicator(hoveredId ?? activeId);
    });
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, [activeId, hoveredId, updateIndicator]);

  return (
    <div
      ref={navRef}
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-2"
      onMouseLeave={() => setHoveredId(null)}
    >
      <span
        ref={indicatorRef}
        aria-hidden="true"
        className="nav-indicator pointer-events-none absolute top-1/2 -translate-y-1/2 h-8 rounded-sm bg-gray-200/40 transition-[left,width,opacity] duration-200 ease-out"
      />
      {items.map((item) => {
        const active = activeId === item.id;
        return (
          <span
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            className="relative z-10 inline-flex"
          >
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-sm text-sm scale-[0.92] text-secondary-foreground hover:bg-transparent",
                active && "text-accent-foreground",
              )}
              asChild
            >
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </Button>
          </span>
        );
      })}
    </div>
  );
}
