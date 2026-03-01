import Hero from "@/components/hero";
import { Calendar, dealReviewCalendar } from "./graphics/calendar";

export default function HowItWorksHero() {
  return (
    <>
      <Hero
        title={
          <>
            Insight in your <span className="italic">calendar</span>
          </>
        }
        titleMaxWidthClass="max-w-lg"
        divider={false}
      />
      <section className="mb-34 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="pt-12 pb-22">
          <div className="mx-auto flex flex-col items-center text-center gap-6 max-w-xl">
            <div className="space-y-4 text-gray-500">
              <p>
                Know what happened since your last meeting, where to focus,
                what’s missing, timelines to ask about, and get a clear list of
                risks and opportunities
              </p>
            </div>
          </div>
          <div className="mt-10 mx-auto w-full max-w-xl">
            <Calendar day={dealReviewCalendar} className="mt-0" />
          </div>
        </div>
        <div className="border-t border-gray-100"></div>
      </section>
    </>
  );
}
