"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const radarCards = [
  {
    label: "CRM integration",
    title: "Whitespace Accounts",
    subtitle:
      "Spot high-fit companies with no active owner before competitors do.",
  },
  {
    label: "Power BI or Tableau",
    title: "Warm Intro Paths",
    subtitle:
      "See where teammates, customers, and champions can open the first door.",
  },
  {
    label: "Power BI or Tableau",
    title: "Expansion Signals",
    subtitle:
      "Find accounts with adjacent teams, regions, or product needs worth pursuing.",
  },
  {
    label: "CRM integration",
    title: "Buying Group Coverage",
    subtitle:
      "See who is missing from the relationship map and where coverage is already strong.",
  },
  {
    label: "CRM integration",
    title: "Dormant Accounts",
    subtitle:
      "Bring back promising companies that went quiet but still match your ideal fit.",
  },
];

export default function RadarScrollCards() {
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
    <section className="mx-auto max-w-[74rem] px-6 py-16 md:px-12 lg:px-24">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-none tracking-tight text-gray-900 md:text-5xl">
            See the highest-value accounts first and foremost
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-snug text-gray-700">
            Scroll through focused views that surface whitespace, warm paths,
            and expansion opportunities across your book.
          </p>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="inline-flex size-11 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
            aria-label="Scroll cards left"
          >
            <ArrowLeft className="size-6" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="inline-flex size-11 items-center justify-center rounded-full border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
            aria-label="Scroll cards right"
          >
            <ArrowRight className="size-6" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:gap-4"
      >
        {radarCards.map((card) => (
          <article
            key={card.title}
            className="flex h-80 w-72 shrink-0 snap-start flex-col justify-between rounded-xl bg-yellow-100 p-6 md:h-96 md:w-80"
          >
            <div>
              <div className="inline-flex rounded-md border border-black/35 px-3 py-1 text-base leading-none text-gray-900">
                {card.label}
              </div>
              <h3 className="mt-8 text-3xl leading-none tracking-tight text-gray-900">
                {card.title}
              </h3>
            </div>

            <p className="max-w-xs text-lg leading-snug text-gray-900/90">
              {card.subtitle}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
