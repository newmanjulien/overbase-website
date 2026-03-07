import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Quadrant } from "./graphics/quadrant";
import { quadrantExample } from "./graphics/quadrant-data";
import { Signals } from "./graphics/signals";
import { signalsExample } from "./graphics/signals-data";
import { SlackPreview } from "./graphics/slack-controller";
import { slackExample } from "./graphics/slack-data";

export default function HowItWorksSections() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-5xl font-medium tracking-tight text-gray-900">
          0 data input
        </h2>
        <p className="mt-6 text-gray-500">
          We gather detailed information about each deal in a way where your
          sellers never input any data
        </p>
      </div>

      <div className="space-y-24">
        <div className="pt-[5.5rem]">
          <HowItWorksSection
            step="01"
            title="Your sellers never input any new data"
            description={[
              "We automatically gather data from Excel, PDFs, RFPs, email, calendar, phone calls. And from any internal systems you currently use",
              "We gather this in a way that requires 0 data input from your sellers",
            ]}
            reverse
          >
            <Signals id={signalsExample.id} signals={signalsExample.signals} />
          </HowItWorksSection>
        </div>

        <div className="pt-10">
          <HowItWorksSection
            step="02"
            title="We collaborate with sellers to fill in gaps"
            description={[
              "The data you need to understand deals sometimes lives in the heads of your sellers or of your buyers",
              "We work with sellers to get missing details ahead of your 1:1s. And make it easy for them to ask buyers the right questions",
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
            title="Then we forecast which deals are likely to close"
            description={[
              "Gathering this granular information lets us give a second opinion on how likely it is that each deal will close",
              "Comparing your current forecast with Overbase's forecast reveals hidden revenue opportunities",
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

type HowItWorksSectionProps = {
  step: string;
  title: string;
  description: string[];
  children: ReactNode;
  reverse?: boolean;
};

function HowItWorksSection({
  step,
  title,
  description,
  children,
  reverse = false,
}: HowItWorksSectionProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 md:gap-16",
        reverse
          ? "md:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]"
          : "md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]",
      )}
    >
      <div className={cn("max-w-sm space-y-3", reverse && "md:order-2")}>
        <span className="text-xs font-medium tracking-widest text-gray-400">
          {step}
        </span>
        <h2 className="pt-2 text-2xl font-medium leading-tight text-gray-900">
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
