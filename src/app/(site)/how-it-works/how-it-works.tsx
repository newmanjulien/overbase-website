import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Quadrant } from "./graphics/quadrant";
import { Signals } from "./graphics/signals";
import { quadrantExample } from "./graphics/quadrant-data";
import { signalsExample } from "./graphics/signals-data";
import { slackExample } from "./graphics/slack-data";
import { SlackPreview } from "./graphics/slack-controller";

type HowItWorksSectionProps = {
  step: string;
  title: string;
  description: string[];
  children: ReactNode;
  reverse?: boolean;
  gridClassName?: string;
};

type HowItWorksStep = {
  id: string;
  step: string;
  title: string;
  description: string[];
  reverse?: boolean;
  containerClassName: string;
  graphic: ReactNode;
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

const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "capture-signals",
    step: "01",
    title: "We gather all the information with 0 data input",
    description: [
      "We automatically gather data from Excel, Outlook, PDFs, RFPs, email, calendar, phone calls. And from any internal systems you currently use",
      "We gather this in a way that requires 0 data input from your sellers",
    ],
    reverse: true,
    containerClassName: "pt-22",
    graphic: <Signals id={signalsExample.id} signals={signalsExample.signals} />,
  },
  {
    id: "fill-gaps",
    step: "02",
    title: "We collaborate with sellers to fill in gaps",
    description: [
      "The data you need to understand deals sometimes lives in the heads of your sellers or of your buyers",
      "We work with sellers to get missing details ahead of your 1:1s. And make it easy for them to ask buyers the right questions",
    ],
    containerClassName: "pt-10",
    graphic: (
      <SlackPreview
        id={slackExample.id}
        threads={slackExample.threads}
        className="mt-0"
      />
    ),
  },
  {
    id: "forecast-outcomes",
    step: "03",
    title: "Then we forecast which deals are likely to close",
    description: [
      "Gathering this granular information lets us give a second opinion on how likely it is that each deal will close",
      "Comparing your current forecast with Overbase's forecast reveals hidden revenue opportunities",
    ],
    reverse: true,
    containerClassName: "pt-6",
    graphic: <Quadrant chart={quadrantExample} />,
  },
];

export default function HowItWorksSections() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-5xl text-gray-900 font-medium tracking-tight">
          0 data input
        </h2>
        <p className="mt-6 text-gray-500">
          Overbase gathers information on every deal with 0 data input, no CRM
          and no new tools for your sellers
        </p>
      </div>

      <div className="space-y-24">
        {HOW_IT_WORKS_STEPS.map((item) => (
          <div key={item.id} className={item.containerClassName}>
            <HowItWorksSection
              step={item.step}
              title={item.title}
              description={item.description}
              reverse={item.reverse}
            >
              {item.graphic}
            </HowItWorksSection>
          </div>
        ))}
      </div>
    </section>
  );
}
