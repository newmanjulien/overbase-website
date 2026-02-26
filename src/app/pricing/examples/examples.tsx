import { Carousel } from "@/app/pricing/examples/carousel";
import { Quadrant } from "@/app/pricing/examples/quadrant";
import { Signals } from "@/app/pricing/examples/signals";
import { Calendar } from "@/app/pricing/examples/calendar";
import { Panel } from "@/components/ui/panel";
import { quadrantExample } from "@/data/examples/quadrant-data";
import { signalsExample } from "@/data/examples/signals-data";
import { dealReviewCalendar } from "@/data/examples/calendar-data";

export default function Examples() {
  const slides = [
    {
      id: "examples-signals",
      label: "Signals cards",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              In-depth audit that reveals hidden revenue
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              A human data scientist does an audit every week of every single
              deal. We review sales calls, read emails with prospects, look at
              Docusign, look at demo usage metrics, etc.
            </p>
          </div>
          <Signals id={signalsExample.id} signals={signalsExample.signals} />
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
              Our in-depth audit lets us recalculate how likely it is that each
              deal will close. Comparing the rep's evaluation with ours reveals
              hidden opportunities
            </p>
          </div>
          <Quadrant chart={quadrantExample} />
        </Panel>
      ),
    },
    {
      id: "examples-deal-reviews",
      label: "Deal reviews",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Sales Managers easily get data in their calendar
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We package up the insight then put it in a calendar invite right
              beside deal review meetings. This lets Sales Managers see the real
              opportunities, ask the right questions, coach reps, win more deals
              and drive millions in easy revenue
            </p>
          </div>
          <Calendar day={dealReviewCalendar} />
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
