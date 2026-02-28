import Hero from "@/components/hero";
import {
  Calendar,
  dealReviewCalendar,
} from "@/app/how-it-works/graphics/calendar";

export default function HowItWorksHero() {
  return (
    <>
      <Hero
        title={
          <>
            Deal intelligence from a <span className="italic">human</span> data
            scientist
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
                Get in-depth insight about every deal conveniently packaged up
                and at your fingertips for pipeline review meetings
              </p>
              <p>
                A human data scientist audits every angle. Then puts everything
                you need in a calendar invite which sits beside your pipeline
                review meetings
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
