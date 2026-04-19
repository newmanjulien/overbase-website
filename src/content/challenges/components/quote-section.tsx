import Image from "next/image";

import type { ChallengeQuoteSection } from "@/content/challenges/types";

interface QuoteSectionProps {
  section: ChallengeQuoteSection;
}

export function QuoteSection({ section }: QuoteSectionProps) {
  const avatarLabel = section.avatarAlt ?? section.author;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-32 md:px-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white px-6 py-16 sm:px-10 md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-8 inset-y-0 hidden md:block"
        >
          <div className="absolute left-0 top-0 h-1/2 w-[28%] rounded-br-[8rem] border-b border-r border-gray-200/60" />
          <div className="absolute bottom-0 left-0 h-1/2 w-[28%] rounded-tr-[8rem] border-r border-t border-gray-200/60" />
          <div className="absolute right-0 top-0 h-1/2 w-[28%] rounded-bl-[8rem] border-b border-l border-gray-200/60" />
          <div className="absolute bottom-0 right-0 h-1/2 w-[28%] rounded-tl-[8rem] border-l border-t border-gray-200/60" />
        </div>

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
          <blockquote className="max-w-xl text-balance text-[1.4rem] leading-[1.2] tracking-[-0.03em] text-gray-950">
            <span aria-hidden="true">“</span>
            {section.quote}
            <span aria-hidden="true">”</span>
          </blockquote>

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
