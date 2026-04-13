"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useHeaderNavMotion } from "@/lib/header-nav-motion";
import type { SiteNavItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";
import { HeaderNavDropdown } from "./header-nav-dropdown";
import { HEADER_NAV_LINK_CLASS } from "./header-nav-styles";

type HeaderNavProps = {
  items: SiteNavItem[];
  activeId: string | null;
};

export function HeaderNav({ items, activeId }: HeaderNavProps) {
  const pathname = usePathname() ?? "";
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const indicatorTargetId = openDropdownId ?? hoveredId ?? activeId;
  const { navRef, indicatorRef, setItemRef } = useHeaderNavMotion({
    targetId: indicatorTargetId,
  });

  return (
    <div
      ref={navRef}
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5"
      onMouseLeave={() => setHoveredId(null)}
    >
      <span
        ref={indicatorRef}
        aria-hidden="true"
        className="nav-indicator pointer-events-none absolute top-1/2 -translate-y-1/2 h-8 rounded-sm bg-gray-200/40 transition-[left,width,opacity] duration-200 ease-out"
      />
      {items.map((item) => {
        const active = activeId === item.id;
        const hasChildren = (item.children?.length ?? 0) > 0;

        return (
          <span
            key={item.id}
            ref={(el) => setItemRef(item.id, el)}
            onMouseEnter={() => setHoveredId(item.id)}
            className="relative z-10 inline-flex"
          >
            {hasChildren ? (
              <HeaderNavDropdown
                label={item.label}
                items={item.children ?? []}
                pathname={pathname}
                active={active}
                open={openDropdownId === item.id}
                onOpenChange={(open) =>
                  setOpenDropdownId(open ? item.id : null)
                }
              />
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  HEADER_NAV_LINK_CLASS,
                  active && "text-accent-foreground",
                )}
                asChild
              >
                <Link href={item.href} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              </Button>
            )}
          </span>
        );
      })}
    </div>
  );
}
