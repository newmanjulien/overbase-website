"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

const STORAGE_KEY = "test-entry-point";

/**
 * Hook for starting the test flow. Stores current page as entry point
 * before navigating to /test.
 */
export function useNavigateToTest() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, pathname);
    router.push("/test");
  }, [router, pathname]);
}

// Stable reference for clearEntryPoint to avoid re-render issues
const clearEntryPoint = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(STORAGE_KEY);
  }
};

/**
 * Hook for reading the stored entry point (used by test pages for logo click).
 * Returns a snapshot of the entry point at call time.
 */
export function useTestEntryPoint() {
  const entryPoint =
    typeof window !== "undefined"
      ? sessionStorage.getItem(STORAGE_KEY) || "/"
      : "/";

  return { entryPoint, clearEntryPoint };
}
