// Animation that makes the navigation look nice
// The bg shifts in an elegant way between nav items

"use client";

import { useCallback, useLayoutEffect, useRef, type RefObject } from "react";

type HeaderNavMotionOptions = {
  activeId: string | null;
  hoveredId: string | null;
};

type HeaderNavMotionResult = {
  navRef: RefObject<HTMLDivElement | null>;
  indicatorRef: RefObject<HTMLSpanElement | null>;
  setItemRef: (id: string, el: HTMLSpanElement | null) => void;
};

export function useHeaderNavMotion({
  activeId,
  hoveredId,
}: HeaderNavMotionOptions): HeaderNavMotionResult {
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const setItemRef = useCallback(
    (id: string, el: HTMLSpanElement | null) => {
      itemRefs.current[id] = el;
    },
    [],
  );

  const setIndicatorVars = useCallback(
    (vars: { left?: number; width?: number; opacity?: number }) => {
      const indicatorEl = indicatorRef.current;
      if (!indicatorEl) {
        return;
      }

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

      const item = itemRefs.current[id];
      if (!item) {
        setIndicatorVars({ opacity: 0 });
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setIndicatorVars({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    },
    [setIndicatorVars],
  );

  useLayoutEffect(() => {
    updateIndicator(hoveredId ?? activeId);
  }, [activeId, hoveredId, updateIndicator]);

  useLayoutEffect(() => {
    const container = navRef.current;
    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      updateIndicator(hoveredId ?? activeId);
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [activeId, hoveredId, updateIndicator]);

  return { navRef, indicatorRef, setItemRef };
}
