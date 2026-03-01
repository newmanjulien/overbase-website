import type { ReactNode } from "react";
import { cn } from "@/components/ui/utils";
import { Quadrant } from "./graphics/quadrant";
import { Signals } from "./graphics/signals";
import { quadrantExample } from "./graphics/quadrant-data";
import { signalsExample } from "./graphics/signals-data";
import { slackExample } from "./graphics/slack-data";
import { SlackPreview } from "./graphics/slack";

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
        <span className="text-xs font-medium tracking-widest text-gray-400">
          {step}
        </span>
        <h2 className="pt-2 text-2xl text-gray-900 font-medium leading-tight">
          {title}
        </h2>
        <div className="space-y-4 text-sm text-gray-500">
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
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-5xl text-gray-900 font-medium tracking-tight">
          An in-depth audit
        </h2>
        <p className="mt-6 text-gray-500">
          A data scientist examines every detail of each deal, then collaborates
          with your reps to fill in critical gaps
        </p>
      </div>

      <div className="space-y-24">
        <div className="pt-22">
          <HowItWorksSection
            step="01"
            title="A data scientist examines every detail"
            description={[
              "A data scientist examines every detail of each deal your reps are managing",
              "We review sales calls, read emails with prospects, check Docusign, investigate demo usage, and more",
            ]}
            reverse
          >
            <Signals id={signalsExample.id} signals={signalsExample.signals} />
          </HowItWorksSection>
        </div>

        <div className="pt-10">
          <HowItWorksSection
            step="02"
            title="Collaborates with reps to fill in critical gaps"
            description={[
              "The data you need to truly understand each deal is often missing from your systems",
              "We work with your reps to get missing details and make it easy to ask buyers the right questions",
            ]}
          >
            <SlackPreview
              id={slackExample.id}
              threads={slackExample.threads}
              className="mt-0"
            />
          </HowItWorksSection>
        </div>

        <div className="pt-6">
          <HowItWorksSection
            step="03"
            title="Gives a second opinion on which deals are likely to close"
            description={[
              "This in-depth audit lets us give a second opinion on how likely it is that each deal will close",
              "Comparing the CRM's opinion with our opinion reveals hidden sales opportunities",
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
