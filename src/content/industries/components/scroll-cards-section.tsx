import Image from "next/image";

import { cn } from "@/lib/utils";
import type { IndustryWorkflowSection } from "@/content/industries/types";

interface ScrollCardsSectionProps {
  section: IndustryWorkflowSection;
}

export function ScrollCardsSection({ section }: ScrollCardsSectionProps) {
  return (
    <section className="mx-auto max-w-[78rem] overflow-x-hidden px-6 pt-18 pb-22 md:px-12 md:pt-22 md:pb-26 lg:px-24">
      <div className="space-y-18 md:space-y-26">
        {section.steps.map((step, index) => (
          <article
            key={step.title}
            className={cn(
              "grid gap-10 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:grid-rows-[2.5rem_auto] md:gap-x-14 md:gap-y-0",
              index > 0 && "border-t border-gray-200/80 pt-18 md:pt-24",
            )}
          >
            <div aria-hidden="true" className="hidden md:block" />

            <div className="max-w-sm md:row-start-2">
              <h2 className="text-2xl leading-tight tracking-tight text-gray-900">
                {step.title}
              </h2>
              <p className="mt-4 text-sm text-gray-600">{step.description}</p>

              <div className="mt-46 hidden grid-cols-2 gap-x-10 gap-y-3 border-t border-gray-200/80 pt-6 text-[12px] leading-5 text-gray-500 md:grid">
                {step.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>

            <div className="md:col-start-2 md:row-span-2 md:row-start-1">
              <ScreenshotFrame step={step} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenshotFrame({
  step,
}: {
  step: IndustryWorkflowSection["steps"][number];
}) {
  return (
    <div className="relative isolate h-[22rem] w-full overflow-hidden sm:h-[25rem] md:h-full md:min-h-0 md:w-[165%] md:max-w-none">
      <div
        className={cn(
          "relative h-full overflow-hidden",
          step.screenshotVariant === "detail"
            ? "md:aspect-auto"
            : "md:aspect-auto",
        )}
      >
        <Image
          src={step.screenshotSrc}
          alt={step.screenshotAlt}
          fill
          className="origin-top-left scale-[1.18] object-cover object-left-top shadow-none drop-shadow-none filter-none sm:scale-[1.22] md:scale-100"
          sizes="(min-width: 1024px) 56rem, 100vw"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.76)_40%,rgba(255,255,255,0.94)_72%,#fff_100%)] sm:w-[40%] md:w-[46%] md:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.82)_44%,rgba(255,255,255,0.96)_72%,#fff_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.74)_48%,#fff_100%)] sm:h-[34%] md:h-[42%] md:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.84)_52%,#fff_100%)]" />
      </div>
    </div>
  );
}
