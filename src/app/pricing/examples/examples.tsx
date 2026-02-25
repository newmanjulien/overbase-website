import { Carousel } from "@/app/pricing/examples/carousel";
import { Quadrant } from "@/app/pricing/examples/quadrant";
import { Signals } from "@/app/pricing/examples/signals";
import { Calendar } from "@/app/pricing/examples/calendar";
import { Panel } from "@/components/ui/panel";
import { quadrantExample } from "@/app/pricing/examples/data/quadrant-data";
import { signalsExample } from "@/app/pricing/examples/data/signals-data";
import { dealReviewCalendar } from "@/app/pricing/examples/data/calendar-data";

export default function Examples() {
  const slides = [
    {
      id: "examples-deal-reviews",
      label: "Deal reviews",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Easily get data in your calendar
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Our data scientists packages up the insight Sales Managers need do
              they have it easily available for each deal review. We add it as a
              calendar invite right beside deal review meetings
            </p>
          </div>
          <Calendar day={dealReviewCalendar} />
        </Panel>
      ),
    },
    {
      id: "examples-quadrant",
      label: "Quadrant analysis",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Actually know which deals will close
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We do a bottom-up evaluation of which deals are actually likely to
              close so Sales Managers see the real opportunities, ask the right
              questions, coach reps and win more deals
            </p>
          </div>
          <Quadrant chart={quadrantExample} />
        </Panel>
      ),
    },
    {
      id: "examples-signals",
      label: "Signals cards",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Quickly see hidden opportunities
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Overbase's data scientists do a deep and reliable audit that lets
              Sales Managers see the nitty gritty and discover easy revenue
              opportunities
            </p>
          </div>
          <Signals id={signalsExample.id} signals={signalsExample.signals} />
        </Panel>
      ),
    },
  ];

  return (
    <section>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="bg-gradient-to-b from-surface via-gray-50 to-surface pt-16">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
