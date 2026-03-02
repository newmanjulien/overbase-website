"use client";
import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            Insight from a <span className="italic">human</span>
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-18 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Get insight from a human data scientist
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              A data scientist examines every detail of each deal: calls,
              emails, DocuSign, demo usage, and more
            </p>

            <p>
              This audit is both thorough and reliable. It's run by a human who
              leverages specialized AI tools to dig deeper than any software or
              human could alone
            </p>

            <p>
              Then we tell you what’s happening, what’s missing, and where
              opportunities are hiding
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
