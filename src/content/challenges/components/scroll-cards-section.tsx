import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ChallengeWorkflowSection } from "@/content/challenges/types";

interface ScrollCardsSectionProps {
  section: ChallengeWorkflowSection;
}

export function ScrollCardsSection({ section }: ScrollCardsSectionProps) {
  return (
    <section className="mx-auto max-w-[78rem] px-6 pt-18 pb-22 md:px-12 md:pt-22 md:pb-26 lg:px-24">
      <div className="space-y-18 md:space-y-26">
        {section.steps.map((step, index) => (
          <article
            key={step.title}
            className={cn(
              "grid gap-10 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:items-start md:gap-14",
              index > 0 && "border-t border-gray-200/80 pt-18 md:pt-24",
            )}
          >
            <div className="max-w-sm">
              <p className="text-[11px] font-medium tracking-[0.18em] text-gray-400">
                {step.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl leading-tight tracking-tight text-gray-900 md:text-[2.15rem]">
                {step.title}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-gray-600">
                {step.description}
              </p>

              <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-3 border-t border-gray-200/80 pt-6 text-[12px] leading-5 text-gray-500">
                {step.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>

            <ScreenshotFrame step={step} />
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenshotFrame({
  step,
}: {
  step: ChallengeWorkflowSection["steps"][number];
}) {
  const isDetail = step.screenshotVariant === "detail";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.9rem] border border-gray-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fb_100%)] p-4 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.35)]",
        isDetail ? "md:mt-4" : "",
      )}
    >
      <div className="mb-3 flex items-center gap-2 px-2">
        <span className="size-2.5 rounded-full bg-gray-200" />
        <span className="size-2.5 rounded-full bg-gray-200" />
        <span className="size-2.5 rounded-full bg-gray-200" />
        <div className="ml-3 h-7 w-40 rounded-full border border-gray-200/80 bg-white/90" />
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] border border-gray-200/80 bg-white",
          isDetail ? "aspect-[16/10]" : "aspect-[16/9]",
        )}
      >
        <div className="absolute inset-y-0 left-0 z-10 w-10 border-r border-gray-200/70 bg-gray-50/90" />
        <div className="absolute left-3 top-4 z-20 space-y-2">
          <div className="size-4 rounded-md bg-gray-200/90" />
          <div className="size-4 rounded-md bg-gray-200/80" />
          <div className="size-4 rounded-md bg-gray-200/70" />
          <div className="size-4 rounded-md bg-gray-200/60" />
        </div>

        <Image
          src={step.screenshotSrc}
          alt={step.screenshotAlt}
          fill
          className={cn(
            "object-cover object-top pl-10",
            isDetail ? "scale-[1.02]" : "scale-[1.01]",
          )}
          sizes="(min-width: 1024px) 56rem, 100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.18)_100%)]" />
      </div>
    </div>
  );
}
