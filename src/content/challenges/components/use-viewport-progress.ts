"use client";

import { useEffect, useState, type RefObject } from "react";

interface UseViewportProgressOptions {
  start?: number;
  end?: number;
}

export function useViewportProgress(
  targetRef: RefObject<HTMLElement | null>,
  options: UseViewportProgressOptions = {},
) {
  const start = options.start ?? 0.86;
  const end = options.end ?? 0.18;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      const frame = window.requestAnimationFrame(() => {
        setProgress(1);
      });

      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    let frameId = 0;
    let lastProgress = -1;

    const updateProgress = () => {
      frameId = 0;

      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const startPoint = viewportHeight * start;
      const endPoint = viewportHeight * end;
      const nextProgress = clamp(
        (startPoint - rect.top) / (startPoint - endPoint),
        0,
        1,
      );

      if (Math.abs(nextProgress - lastProgress) < 0.005) {
        return;
      }

      lastProgress = nextProgress;
      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    const handleMotionChange = () => {
      if (mediaQuery.matches) {
        if (frameId !== 0) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }

        lastProgress = 1;
        setProgress(1);
        return;
      }

      requestUpdate();
    };

    updateProgress();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mediaQuery.removeEventListener("change", handleMotionChange);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [end, start, targetRef]);

  return progress;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
