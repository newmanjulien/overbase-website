"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useHeaderNavIndicator } from "@/lib/header-nav-indicator";
import type { SiteNavItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

type HeaderNavProps = {
  items: SiteNavItem[];
  activeId: string | null;
};

export function HeaderNav({ items, activeId }: HeaderNavProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { navRef, indicatorRef, registerItemRef } = useHeaderNavIndicator({
    activeId,
    hoveredId,
  });

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
            ref={(el) => registerItemRef(item.id, el)}
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
