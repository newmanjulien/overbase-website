import type { ReactNode } from "react";

import { cn } from "@/components/ui/utils";
import { Calendar } from "@/app/how-it-works/examples/calendar";
import { Quadrant } from "@/app/how-it-works/examples/quadrant";
import { Signals } from "@/app/how-it-works/examples/signals";
import { dealReviewCalendar } from "@/data/examples/calendar-data";
import { quadrantExample } from "@/data/examples/quadrant-data";
import { signalsExample } from "@/data/examples/signals-data";

type HowItWorksSectionProps = {
  title: string;
  description: string[];
  children: ReactNode;
  reverse?: boolean;
  gridClassName?: string;
};

function HowItWorksSection({
  title,
  description,
  children,
  reverse = false,
  gridClassName,
}: HowItWorksSectionProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-16",
        gridClassName,
      )}
    >
      <div className={cn("max-w-sm space-y-4", reverse && "md:order-2")}>
        <h2 className="text-2xl text-gray-900 font-medium leading-tight">
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
    <section className="mt-4 px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      <div className="space-y-24">
        <div className="pt-16">
          <HowItWorksSection
            title="We do an in-depth audit that reveals hidden revenue"
            description={[
              "A human data scientist does an audit every week of every single deal",
              "We review sales calls, read emails with prospects, look at Docusign, look at demo usage metrics, etc.",
            ]}
          >
            <Signals id={signalsExample.id} signals={signalsExample.signals} />
          </HowItWorksSection>
        </div>

        <div className="pt-10">
          <HowItWorksSection
            title="We calculate which deals are actually likely to close"
            description={[
              "Our in-depth audit lets us recalculate how likely it is that each deal will close",
              "Comparing the rep's evaluation with ours reveals hidden opportunities",
            ]}
            reverse
            gridClassName="md:grid-cols-[minmax(0,1fr)_minmax(0,28rem)]"
          >
            <Quadrant chart={quadrantExample} />
          </HowItWorksSection>
        </div>

        <div className="pt-10">
          <HowItWorksSection
            title="Sales Managers easily get data in their calendar"
            description={[
              "We package up the insight then put it in a calendar invite right beside deal review meetings",
              "This lets Sales Managers see the real opportunities, ask the right questions, coach reps, win more deals and drive millions in easy revenue",
            ]}
          >
            <Calendar day={dealReviewCalendar} />
          </HowItWorksSection>
        </div>
      </div>
    </section>
  );
}
