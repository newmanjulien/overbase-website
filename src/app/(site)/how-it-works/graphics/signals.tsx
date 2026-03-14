"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { useIsMobile } from "@/components/ui/use-mobile";
import type { PreviewSignal } from "./types";

const PAGE_SIZE = 3;

const chunkSignals = (signals: PreviewSignal[]) => {
  const pages: PreviewSignal[][] = [];
  for (let i = 0; i < signals.length; i += PAGE_SIZE) {
    pages.push(signals.slice(i, i + PAGE_SIZE));
  }
  return pages;
};

export function Signals({
  id,
  signals,
}: {
  id: string;
  signals: PreviewSignal[];
}) {
  const isMobile = useIsMobile();
  const pages = useMemo(() => chunkSignals(signals), [signals]);
  const [activePage, setActivePage] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "next" | "previous"
  >("next");

  if (pages.length === 0) {
    return null;
  }

  const pageIndex = isMobile ? 0 : Math.min(activePage, pages.length - 1);
  const visibleSignals = pages[pageIndex] ?? [];
  const handlePageChange = (nextPage: number) => {
    if (nextPage === pageIndex) {
      return;
    }

    setTransitionDirection(nextPage > pageIndex ? "next" : "previous");
    setActivePage(nextPage);
  };

  return (
    <div id={id} className="mt-4">
      <div
        key={`signals-content-${pageIndex}`}
        className={`flex flex-col divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white animate-in fade-in-0 duration-300 motion-reduce:animate-none ${
          transitionDirection === "next"
            ? "slide-in-from-right-2"
            : "slide-in-from-left-2"
        }`}
      >
        {visibleSignals.map((signal) => (
          <div
            key={signal.id}
            className="group w-full px-6 py-5 transition hover:bg-gray-50/70"
          >
            <h3 className="text-sm font-semibold text-gray-900">
              {signal.title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-gray-500">
              {signal.summary}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-gray-500">
              <div className="flex items-center -space-x-2">
                {signal.sources.map((source) => (
                  <div
                    key={source.name}
                    className="h-6 w-6 overflow-hidden rounded-full border border-gray-100 bg-white"
                  >
                    <Image
                      src={source.logo}
                      alt={`${source.name} logo`}
                      width={24}
                      height={24}
                      unoptimized
                      sizes="24px"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                Sources:{" "}
                {signal.sources.map((source) => source.name).join(" & ")}
              </span>
            </div>
          </div>
        ))}
      </div>
      {pages.length > 1 && !isMobile ? (
        <div className="mt-2 flex justify-center">
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Signal examples pagination"
          >
            {pages.map((_, index) => {
              const isActive = index === pageIndex;
              return (
                <button
                  key={`signals-page-${index}`}
                  type="button"
                  aria-label={`View signal examples ${index + 1} of ${
                    pages.length
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  className="group flex h-5 w-5 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-200"
                  onClick={() => handlePageChange(index)}
                >
                  <span
                    className={`h-2 w-2 rounded-full transition duration-200 ${
                      isActive
                        ? "scale-110 bg-gray-700"
                        : "bg-gray-300 group-hover:bg-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
