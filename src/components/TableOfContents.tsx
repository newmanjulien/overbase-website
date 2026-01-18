"use client";

import { useTOCScrollSpy, scrollToSection } from "../hooks/useTOCScrollSpy";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "../lib/utils";

export interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
  /** Offset for scroll (to account for fixed headers) */
  scrollOffset?: number;
}

/**
 * Determines the rounding classes for an active item based on its position
 * in a group of consecutive active items.
 */
function getActiveRoundingClasses(
  index: number,
  items: TOCItem[],
  activeIds: string[],
): string {
  const isActive = activeIds.includes(items[index].id);
  if (!isActive) return "rounded-md"; // Inactive items get normal rounding

  const prevActive = index > 0 && activeIds.includes(items[index - 1].id);
  const nextActive =
    index < items.length - 1 && activeIds.includes(items[index + 1].id);

  // Determine rounding based on position in active group
  if (!prevActive && !nextActive) {
    // Single active item - round all corners
    return "rounded-md";
  } else if (!prevActive && nextActive) {
    // First in a group - round top only
    return "rounded-t-md rounded-b-none";
  } else if (prevActive && nextActive) {
    // Middle of a group - no rounding
    return "rounded-none";
  } else {
    // Last in a group - round bottom only
    return "rounded-t-none rounded-b-md";
  }
}

/**
 * Table of Contents sidebar component with scroll-spy functionality.
 * Uses shadcn ToggleGroup for consistent styling.
 * Highlights multiple sections simultaneously when they are visible in the viewport.
 * Consecutive active items form a single rounded block.
 */
export function TableOfContents({
  items,
  className,
  scrollOffset = 100,
}: TableOfContentsProps) {
  const sectionIds = items.map((item) => item.id);
  const activeIds = useTOCScrollSpy(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id, scrollOffset);
  };

  return (
    <nav className={cn("sticky top-24", className)}>
      <h2 className="text-sm font-medium mb-4 ml-3">Table of Contents</h2>
      <ToggleGroup
        type="multiple"
        value={activeIds}
        className="flex flex-col items-stretch w-full"
        size="sm"
        variant="minimal"
      >
        {items.map((item, index) => {
          const roundingClasses = getActiveRoundingClasses(
            index,
            items,
            activeIds,
          );
          const isActive = activeIds.includes(item.id);

          return (
            <ToggleGroupItem
              key={item.id}
              value={item.id}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "justify-start text-left h-auto py-1.5 px-3 font-normal text-gray-500 text-sm w-full",
                "data-[state=on]:bg-accent",
                roundingClasses,
              )}
              aria-current={isActive ? "location" : undefined}
            >
              {item.title}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </nav>
  );
}
