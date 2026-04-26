import Image from "next/image";

import type { IndustryQuoteSection } from "@/content/industries/types";
import { QuoteReveal } from "@/content/industries/components/quote-reveal.client";

interface QuoteSectionProps {
  section: IndustryQuoteSection;
}

export function QuoteSection({ section }: QuoteSectionProps) {
  const avatarLabel = section.avatarAlt ?? section.author;

  return (
    <section className="mx-auto max-w-5xl pt-12 pb-14 md:pt-14 md:pb-16">
      <div className="relative overflow-hidden rounded-lg border border-gray-200/80 bg-white px-6 py-24 sm:px-10 md:px-16 md:py-30">
        <QuoteBackdropPattern />

        <div
          aria-hidden="true"
          className="absolute inset-x-12 bottom-[-6rem] h-44 bg-gradient-to-r from-orange-100/70 via-rose-100/60 to-sky-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-10 size-28 rounded-full bg-orange-100/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-6 right-10 size-28 rounded-full bg-sky-100/60 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <QuoteReveal quote={section.quote} />

          <div className="mt-10 inline-flex items-center gap-4 text-left">
            <div className="relative">
              <Avatar
                src={section.avatarSrc}
                alt={avatarLabel}
                initials={section.avatarInitials}
              />
            </div>

            <div className="text-gray-950">
              <p className="text-sm leading-tight font-medium text-gray-950">
                {section.author}
              </p>
              <p className="mt-1 text-sm leading-tight text-gray-500">
                {section.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBackdropPattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      <svg
        viewBox="0 0 1200 520"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        <g
          fill="none"
          stroke="rgb(209 213 219)"
          strokeWidth="1"
          opacity="0.34"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M154 0Q316 114 316 154V366Q316 406 154 520" />
          <path d="M8 156L128 260L8 364" />
          <path d="M1046 0Q884 114 884 154V366Q884 406 1046 520" />
          <path d="M1192 156L1072 260L1192 364" />
          <rect x="440" y="0" width="320" height="520" rx="84" />
        </g>
      </svg>
      <div className="absolute inset-x-24 top-0 h-28 bg-gradient-to-b from-white via-white/92 to-transparent" />
      <div className="absolute inset-x-20 bottom-0 h-36 bg-gradient-to-t from-white/92 via-white/60 to-transparent" />
    </div>
  );
}

function Avatar({
  src,
  alt,
  initials,
}: {
  src?: string;
  alt: string;
  initials: string;
}) {
  if (src) {
    return (
      <div className="relative size-14 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200">
        <Image src={src} alt={alt} fill className="object-cover" sizes="56px" />
      </div>
    );
  }

  return (
    <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 text-sm font-semibold tracking-wide text-slate-700 ring-1 ring-gray-200">
      {initials}
    </div>
  );
}
