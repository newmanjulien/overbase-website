import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="italic">Tailored</span> for your business
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Customized for your workflows and integrated with your systems
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Your business has unique workflows and your team needs to receive
              insight in ways that match your workflows
            </p>

            <p>
              You use several existing systems and data needs to integrate
              seamlessly with those systems
            </p>

            <p>
              Overbase automatically captures detailed, reliable information
              from every seller’s emails, calendar, PDFs, and other activity. No
              manual data entry required.
            </p>

            <p>
              Then we build custom tools that deliver insight to your team.
              These custom tools are tailored to match your workflows and
              integrate with your existing systems
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
