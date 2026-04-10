"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import type { ChallengeCardsSection } from "@/content/challenges/types";

interface ScrollCardsSectionProps {
  section: ChallengeCardsSection;
}

const SCROLL_CARD_STYLES = [
  {
    surface:
      "border-[#eee6c5] bg-[linear-gradient(180deg,rgba(255,252,246,0.99)_0%,rgba(255,249,236,0.994)_100%)]",
    glow:
      "bg-[linear-gradient(90deg,rgba(238,196,74,0.058)_0%,rgba(248,214,118,0.042)_52%,rgba(255,239,186,0.026)_100%)]",
    wash:
      "bg-[radial-gradient(circle_at_top,rgba(255,235,170,0.075),transparent_55%)]",
    badge: "border-[#e1cf8b]/33 bg-white/7 text-[#685724]",
  },
  {
    surface:
      "border-[#ede3b9] bg-[linear-gradient(180deg,rgba(255,252,243,0.99)_0%,rgba(255,248,230,0.994)_100%)]",
    glow:
      "bg-[linear-gradient(90deg,rgba(226,186,64,0.054)_0%,rgba(244,208,103,0.04)_50%,rgba(255,237,176,0.025)_100%)]",
    wash:
      "bg-[radial-gradient(circle_at_top,rgba(255,231,153,0.072),transparent_55%)]",
    badge: "border-[#dbc97d]/33 bg-white/7 text-[#65521d]",
  },
  {
    surface:
      "border-[#eee7ca] bg-[linear-gradient(180deg,rgba(255,252,246,0.99)_0%,rgba(255,250,238,0.994)_100%)]",
    glow:
      "bg-[linear-gradient(90deg,rgba(245,206,92,0.054)_0%,rgba(250,221,136,0.04)_50%,rgba(255,242,198,0.025)_100%)]",
    wash:
      "bg-[radial-gradient(circle_at_top,rgba(255,238,181,0.072),transparent_55%)]",
    badge: "border-[#dfcf90]/33 bg-white/7 text-[#6a5928]",
  },
] as const;

export function ScrollCardsSection({ section }: ScrollCardsSectionProps) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    const amount = rail.clientWidth * 0.82;
    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[74rem] px-6 pt-16 pb-22 md:px-12 md:pb-26 lg:px-24">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-none tracking-tight text-gray-900 md:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-2xl text-md leading-snug text-gray-700">
            {section.description}
          </p>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="inline-flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
            aria-label="Scroll cards left"
          >
            <ArrowLeft className="size-5" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="inline-flex size-10 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
            aria-label="Scroll cards right"
          >
            <ArrowRight className="size-5" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:gap-4"
      >
        {section.cards.map((card, index) => {
          const styles = SCROLL_CARD_STYLES[index % SCROLL_CARD_STYLES.length];

          return (
            <article
              key={card.title}
              className={cn(
                "relative isolate flex h-80 w-72 shrink-0 snap-start flex-col justify-between overflow-hidden rounded-xl border p-6 md:h-90 md:w-80",
                styles.surface,
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute top-0 left-1/2 h-38 w-[113%] -translate-x-1/2 -translate-y-[41%] rounded-full blur-[78px]",
                  styles.glow,
                )}
              />
              <div
                className={cn("pointer-events-none absolute inset-0", styles.wash)}
              />
              <div className="pointer-events-none absolute inset-px rounded-[inherit] bg-white/7" />

              <div className="relative">
                <div
                  className={cn(
                    "inline-flex rounded-full border px-3 py-1 text-sm leading-none",
                    styles.badge,
                  )}
                >
                  {card.label}
                </div>
                <h3 className="mt-4 text-2xl leading-none tracking-tight text-gray-900">
                  {card.title}
                </h3>
              </div>

              <p className="relative max-w-xs text-md leading-snug text-gray-900/88">
                {card.subtitle}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
