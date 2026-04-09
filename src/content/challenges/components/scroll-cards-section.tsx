"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import type { ChallengeCardsSection } from "@/content/challenges/types";

interface ScrollCardsSectionProps {
  section: ChallengeCardsSection;
}

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
        {section.cards.map((card) => (
          <article
            key={card.title}
            className="flex h-80 w-72 shrink-0 snap-start flex-col justify-between rounded-lg bg-yellow-100 p-6 md:h-90 md:w-80"
          >
            <div>
              <div className="inline-flex rounded-md border border-black/35 px-3 py-1 text-sm leading-none text-gray-900">
                {card.label}
              </div>
              <h3 className="mt-4 text-2xl leading-none tracking-tight text-gray-900">
                {card.title}
              </h3>
            </div>

            <p className="max-w-xs text-md leading-snug text-gray-900/90">
              {card.subtitle}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
