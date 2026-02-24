import { Couroussel } from "@/app/pricing/Examples/Couroussel";
import { Quadrant } from "@/app/pricing/Examples/Quadrant";
import { Signals } from "@/app/pricing/Examples/Signals";
import { Panel } from "@/components/ui/panel";
import { quadrantExample } from "@/app/pricing/Examples/QuadrantData";
import { signalsExample } from "@/app/pricing/Examples/SignalsData";

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
              Drive revenue by taking opportunities our audit surface
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
  ];

  return (
    <section>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="bg-gradient-to-b from-surface via-gray-50 to-surface pt-16">
          <Couroussel slides={slides} />
        </div>
      </div>
    </section>
  );
}
