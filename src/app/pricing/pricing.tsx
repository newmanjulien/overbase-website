"use client";
import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            Quickly get millions in <span className="italic">easy revenue</span>
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-18 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              A human data scientist using the most advanced AI
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Get millions in easy revenue every quarter with deal intelligence
              for pipeline review
            </p>

            <p>
              A human data scientist does an audit every week of every deal -
              reviews sales calls, reads emails with prospects, looks at
              Docusign, investigates demo usage metrics, etc.
            </p>

            <p>
              And this data scientist collaborates with reps to gather missing
              information
            </p>

            <p>
              The audit is reliable because it's run by a human. And it goes in
              depth because this human uses the most advanced AI
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
