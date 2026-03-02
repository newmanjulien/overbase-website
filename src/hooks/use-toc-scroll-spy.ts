"use client";

import { useState, useEffect } from "react";
import { TOC_SCROLL_SPY_TARGET_SELECTOR } from "@/lib/toc-scroll-spy";

interface UseTOCScrollSpyOptions {
  /**
   * Offset from top of viewport (in pixels) to account for fixed header.
   * Default: 100
   */
  topOffset?: number;
  /**
   * Controls whether scroll spy listeners should be active.
   * Default: true
   */
  enabled?: boolean;
}

/**
 * Checks if two string arrays have the same values in the same order.
 */
function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

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
export function useTOCScrollSpy(
  sectionIds: string[],
  options?: UseTOCScrollSpyOptions,
): string[] {
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const topOffset = options?.topOffset ?? 100;
  const enabled = options?.enabled ?? true;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!enabled) return;

    // Build element cache on mount (or when IDs change)
    const cache = new Map<string, CachedElement>();
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const target =
          section.querySelector(TOC_SCROLL_SPY_TARGET_SELECTOR) || section;
        cache.set(id, { section, target });
      }
    }

    const handleScroll = () => {
      const active: string[] = [];
      const viewportHeight = window.innerHeight;

      // Use cached elements - no DOM queries during scroll!
      for (const id of sectionIds) {
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

        for (const id of sectionIds) {
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
  }, [enabled, sectionIds, topOffset]);

  return enabled ? activeIds : [];
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
