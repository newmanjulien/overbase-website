import type { ReactNode } from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <main className="pb-12">
        <section className="px-6 pt-48 max-w-5xl mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
                Millions in easy revenue with{" "}
                <span className="italic">reliable data</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="mt-16 px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
          <div className="space-y-24">
            <div className="pt-16">
              <HowItWorksSection
                title="We do an in-depth audit that reveals hidden revenue"
                description={[
                  "A human data scientist does an audit every week of every single deal",
                  "We review sales calls, read emails with prospects, look at Docusign, etc.",
                ]}
              >
                <Signals
                  id={signalsExample.id}
                  signals={signalsExample.signals}
                />
              </HowItWorksSection>
            </div>

            <div className="pt-10">
              <HowItWorksSection
                title="We calculate which deals are actually likely to close"
                description={[
                  "This in-depth audit lets us recalculate how likely it is that each deal will close",
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
                  "Our data scientists package up the insight Sales Managers need so they have it easily available for each deal review",
                  "We add it as a calendar invite right beside deal review meetings",
                ]}
              >
                <Calendar day={dealReviewCalendar} />
              </HowItWorksSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
