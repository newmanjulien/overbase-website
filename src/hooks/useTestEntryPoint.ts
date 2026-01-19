"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "test-entry-point";

export function useTestEntryPoint() {
  const [entryPoint, setEntryPoint] = useState<string>("/");

  useEffect(() => {
    // Check if entry point already exists in session storage
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      // Use existing entry point
      setEntryPoint(stored);
    } else {
      // Capture entry point: use referrer if available and it's from same origin, else fallback to '/'
      const referrer = document.referrer;
      let capturedEntryPoint = "/";

      if (referrer) {
        try {
          const referrerUrl = new URL(referrer);
          const currentUrl = new URL(window.location.href);

          // Only use referrer if it's from same origin and not a test page
          if (
            referrerUrl.origin === currentUrl.origin &&
            !referrerUrl.pathname.startsWith("/test")
          ) {
            capturedEntryPoint = referrerUrl.pathname;
          }
        } catch {
          // Invalid URL, use fallback
        }
      }

      sessionStorage.setItem(STORAGE_KEY, capturedEntryPoint);
      setEntryPoint(capturedEntryPoint);
    }
  }, []);

  const clearEntryPoint = () => {
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return { entryPoint, clearEntryPoint };
}
