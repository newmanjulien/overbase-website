import Image from "next/image";

import type { ChallengeQuoteSection } from "@/content/challenges/types";

interface QuoteSectionProps {
  section: ChallengeQuoteSection;
}

export function QuoteSection({ section }: QuoteSectionProps) {
  const avatarLabel = section.avatarAlt ?? section.author;

  return (
    <section className="mx-auto max-w-6xl px-6 pb-32 md:px-24">
      <div className="max-w-2xl">
        <div
          aria-hidden="true"
          className="text-5xl leading-none font-semibold tracking-tight text-gray-950"
        >
          "
        </div>

        <blockquote className="text-xl leading-tight tracking-tight text-gray-950">
          {section.quote}
        </blockquote>

        <div className="mt-4 flex items-center gap-3">
          <Avatar
            src={section.avatarSrc}
            alt={avatarLabel}
            initials={section.avatarInitials}
          />

          <div className="text-gray-950">
            <p className="text-sm leading-tight text-gray-700">
              {section.author}
            </p>
            <p className="text-sm leading-tight text-gray-700">
              {section.authorTitle}
            </p>
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
      <div className="relative size-9 overflow-hidden rounded-full bg-gray-100 md:size-10">
        <Image src={src} alt={alt} fill className="object-cover" sizes="40px" />
      </div>
    );
  }

  return (
    <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 text-[10px] font-semibold tracking-wide text-slate-700 md:size-10 md:text-xs">
      {initials}
    </div>
  );
}
