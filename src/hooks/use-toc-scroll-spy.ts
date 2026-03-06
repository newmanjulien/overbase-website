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
 * Cached target element reference for performance.
 */
function buildCache(sectionIds: string[]): Map<string, Element> {
  const cache = new Map<string, Element>();

  for (const id of sectionIds) {
    const section = document.getElementById(id);
    if (!section) {
      continue;
    }

    const target = section.querySelector(TOC_SCROLL_SPY_TARGET_SELECTOR) || section;
    cache.set(id, target);
  }

  return cache;
}

function getActiveIds(
  sectionIds: string[],
  cache: Map<string, Element>,
  topOffset: number,
  viewportHeight: number,
): string[] {
  const activeIds: string[] = [];
  let fallbackId: string | null = null;

  for (const id of sectionIds) {
    const target = cache.get(id);
    if (!target) {
      continue;
    }

    const rect = target.getBoundingClientRect();
    const isVisible =
      (rect.top >= topOffset && rect.top < viewportHeight) ||
      (rect.bottom > topOffset && rect.bottom <= viewportHeight) ||
      (rect.top < topOffset && rect.bottom > viewportHeight);

    if (isVisible) {
      activeIds.push(id);
      continue;
    }

    if (rect.bottom < topOffset) {
      fallbackId = id;
    }
  }

  if (activeIds.length > 0) {
    return activeIds;
  }

  return fallbackId ? [fallbackId] : [];
}

function rafThrottle(callback: () => void): () => void {
  let ticking = false;

  return () => {
    if (ticking) {
      return;
    }

    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
    ticking = true;
  };
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

    const cache = buildCache(sectionIds);

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const active = getActiveIds(sectionIds, cache, topOffset, viewportHeight);

      setActiveIds((prev) => (arraysEqual(prev, active) ? prev : active));
    };

    handleScroll();

    const onScroll = rafThrottle(handleScroll);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled, sectionIds, topOffset]);

  return enabled ? activeIds : [];
}
