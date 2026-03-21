import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            Insight that's <span className="italic">customized</span>
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Customized and integrated with your systems
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Your business has unique workflows and your team needs to receive
              insight in ways that match your workflows
            </p>

            <p>
              You also use several existing data systems and they need to be
              integrated
            </p>

            <p>
              Overbase gathers detailed and reliable information from each
              seller's emails, calendar, PDFs, and other activity. No data entry
              required
            </p>

            <p>
              Then we build custom delivery tools for your business. These
              custom tools match your workflows and integrate with your existing
              systems
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
