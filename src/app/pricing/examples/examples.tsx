import { AreaChart } from "@/app/pricing/examples/area-chart";
import { Carousel } from "@/app/pricing/examples/carousel";
import { Quadrant } from "@/app/pricing/examples/quadrant";
import { Signals } from "@/app/pricing/examples/signals";
import { Calendar } from "@/app/pricing/examples/calendar";
import { Panel } from "@/components/ui/panel";
import { areaChartExample } from "@/app/pricing/examples/data/area-chart-data";
import { quadrantExample } from "@/app/pricing/examples/data/quadrant-data";
import { signalsExample } from "@/app/pricing/examples/data/signals-data";
import { dealReviewCalendar } from "@/app/pricing/examples/data/calendar-data";

export default function Examples() {
  const slides = [
    {
      id: "examples-quadrant",
      label: "Quadrant analysis",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Drive revenue by comparing two forecasts
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Overbase's data scientists do an in-depth audit which gives you a
              second forecast. You can drive easy revenue by comparing our
              forecast to your current forecast
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
              Drive revenue with opportunities from our audit
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Overbase's data scientists do a deep audit which lets you see the
              nitty gritty of your operation. You can drive easy revenue by
              actioning the revenue opportunities this audit uncovers
            </p>
          </div>
          <Signals id={signalsExample.id} signals={signalsExample.signals} />
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
              Drive revenue with better deal review
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Our data scientists packages up the insight from our audit and our
              forecast so you and your team have it easily available when you do
              deal review. We add it as a calendar invite right beside your deal
              review meetings
            </p>
          </div>
          <Calendar day={dealReviewCalendar} />
        </Panel>
      ),
    },
    {
      id: "examples-board-meetings",
      label: "Board meetings",
      content: (
        <Panel className="p-8">
          <div>
            <h3 className="text-md font-medium text-gray-900">
              Drive revenue with smarter Board conversations
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Your second forecast is Board ready and easy to integrate into the
              conversations you have with your Board Members. We give you the
              data in whatever format you need and usually host the data in your
              own Tableau or PowerBI instance
            </p>
          </div>
          <AreaChart report={areaChartExample} />
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
