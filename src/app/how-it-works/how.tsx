import type { ReactNode } from "react";
import { cn } from "@/components/ui/utils";
import { Quadrant } from "@/app/how-it-works/graphics/quadrant";
import { Signals } from "@/app/how-it-works/graphics/signals";
import { quadrantExample } from "@/app/how-it-works/graphics/quadrant-data";
import { signalsExample } from "@/app/how-it-works/graphics/signals-data";
import {
  SlackMessagePreview,
  dealReviewSlackMessage,
} from "@/app/how-it-works/graphics/slack-message";

type HowItWorksSectionProps = {
  step: string;
  title: string;
  description: string[];
  children: ReactNode;
  reverse?: boolean;
  gridClassName?: string;
};

function HowItWorksSection({
  step,
  title,
  description,
  children,
  reverse = false,
  gridClassName,
}: HowItWorksSectionProps) {
  const resolvedGridClassName =
    gridClassName ??
    (reverse ? "md:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]" : undefined);

  return (
    <div
      className={cn(
        "grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16",
        resolvedGridClassName,
      )}
    >
      <div className={cn("max-w-sm space-y-3", reverse && "md:order-2")}>
        <span className="text-xs font-medium tracking-[0.35em] text-gray-400">
          {step}
        </span>
        <h2 className="pt-2 text-2xl text-gray-900 font-medium leading-tight">
          {title}
        </h2>
        <div className="space-y-4 text-[15px] text-gray-500">
          {description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <div className={cn("relative", reverse && "md:order-1")}>{children}</div>
    </div>
  );
}

export default function HowItWorksSections() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      <div className="mt-16">
        <div className="mb-22 border-t border-gray-100"></div>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl text-gray-900 font-medium tracking-tight">
            How we audit deals
          </h2>
          <p className="mt-6 text-gray-500">
            Easily and quickly see the nitty gritty of each deal because a human
            data scientist goes in great depth
          </p>
        </div>
      </div>

      <div className="space-y-24">
        <div className="pt-22">
          <HowItWorksSection
            step="01"
            title="In-depth audit of all the data from all your deals"
            description={[
              "A human data scientist does an audit of every deal your reps are working on",
              "We review sales calls, read emails with prospects, look at Docusign, investigate demo usage metrics, etc.",
            ]}
            reverse
          >
            <Signals id={signalsExample.id} signals={signalsExample.signals} />
          </HowItWorksSection>
        </div>

        <div className="pt-10">
          <HowItWorksSection
            step="02"
            title="Collaborate with reps to get missing information"
            description={[
              "The information you need to truly understand each deal is often missing from your systems",
              "We collaborate with your reps to gather the missing details and make it simple for reps to ask buyers the right questions",
            ]}
          >
            <SlackMessagePreview
              thread={dealReviewSlackMessage}
              className="mt-0"
            />
          </HowItWorksSection>
        </div>

        <div className="pt-6">
          <HowItWorksSection
            step="03"
            title="Calculate which deals are actually likely to close"
            description={[
              "Our in-depth audit lets us recalculate how likely it is that each deal will close",
              "Comparing the rep's evaluation with ours reveals hidden opportunities",
            ]}
            reverse
          >
            <Quadrant chart={quadrantExample} />
          </HowItWorksSection>
        </div>
      </div>
    </section>
  );
}
