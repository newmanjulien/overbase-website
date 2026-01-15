"use client";

import { useState, useEffect, useRef } from "react";

interface UseScrollSpyOptions {
  /**
   * Offset from top of viewport (in pixels) to account for fixed header.
   * Default: 100
   */
  topOffset?: number;
}

/**
 * Checks if two string arrays have the same values in the same order.
 */
function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

/**
 * Data attribute used to mark the observable target within a section.
 * If present, this element's visibility determines the section's active state.
 * Falls back to the section element itself if not found.
 */
const SCROLL_SPY_TARGET_ATTR = "[data-scroll-spy-target]";

/**
 * Cached element reference for performance.
 * Stores both the section and its scroll spy target.
 */
interface CachedElement {
  section: HTMLElement;
  target: Element;
}

/**
 * Custom hook that tracks which sections are currently visible in the viewport.
 * Returns an array of section IDs, enabling multi-section highlighting.
 *
 * Performance: Element references are cached on mount to avoid DOM queries
 * during scroll (reduces from ~50 DOM queries/frame to 0).
 *
 * Within each section, looks for a child with `data-scroll-spy-target` attribute
 * to determine visibility. Falls back to the section element itself if not found.
 *
 * This hook is robust to array reference changes - it compares values
 * internally, so callers don't need to memoize the sectionIds array.
 *
 * @param sectionIds - Array of element IDs to observe
 * @param options - Configuration options
 * @returns Array of currently visible section IDs
 *
 * @example
 * // In your content:
 * <section id="intro">
 *   <h2 data-scroll-spy-target>Introduction</h2>
 *   <p>Content...</p>
 * </section>
 */
export function useScrollSpy(
  sectionIds: string[],
  options?: UseScrollSpyOptions
): string[] {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  // Store a stable reference to section IDs, only updating when values change
  const stableIdsRef = useRef<string[]>(sectionIds);

  // Cache for element references - avoids DOM queries during scroll
  const elementCacheRef = useRef<Map<string, CachedElement>>(new Map());

  // Update stable ref only if the actual values changed (not just reference)
  if (!arraysEqual(sectionIds, stableIdsRef.current)) {
    stableIdsRef.current = sectionIds;
  }

  const topOffset = options?.topOffset ?? 100;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = stableIdsRef.current;

    // Build element cache on mount (or when IDs change)
    const cache = new Map<string, CachedElement>();
    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) {
        const target = section.querySelector(SCROLL_SPY_TARGET_ATTR) || section;
        cache.set(id, { section, target });
      }
    }
    elementCacheRef.current = cache;

    const handleScroll = () => {
      const active: string[] = [];
      const viewportHeight = window.innerHeight;
      const cache = elementCacheRef.current;

      // Use cached elements - no DOM queries during scroll!
      for (const id of ids) {
        const cached = cache.get(id);
        if (!cached) continue;

        const rect = cached.target.getBoundingClientRect();

        // Target is visible if:
        // - Its top is below the fixed header AND above the bottom of viewport
        // - OR its bottom is below the fixed header AND above the bottom of viewport
        const isVisible =
          (rect.top >= topOffset && rect.top < viewportHeight) ||
          (rect.bottom > topOffset && rect.bottom <= viewportHeight) ||
          (rect.top < topOffset && rect.bottom > viewportHeight);

        if (isVisible) {
          active.push(id);
        }
      }

      // Fallback: if nothing is visible, show the current section based on scroll position
      if (active.length === 0) {
        let currentSection: string | null = null;

        for (const id of ids) {
          const cached = cache.get(id);
          if (!cached) continue;

          const rect = cached.target.getBoundingClientRect();

          // If target is above the viewport, we're past it
          if (rect.bottom < topOffset) {
            currentSection = id;
          }
        }

        if (currentSection) {
          active.push(currentSection);
        }
      }

      // Only update state if the active sections actually changed
      setActiveIds((prev) => (arraysEqual(prev, active) ? prev : active));
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling via requestAnimationFrame
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [stableIdsRef.current, topOffset]);

  return activeIds;
}

/**
 * Smoothly scrolls to a section by ID
 * @param id - The element ID to scroll to
 * @param offset - Optional offset from top (for fixed headers)
 */
export function scrollToSection(id: string, offset: number = 100): void {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
