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
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              A human data scientist using specialized AI tools
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              A human data scientist gathers data from Excel, PDFs, RFPs, email,
              calendar, phone calls. And from any internal systems you currently
              use
            </p>

            <p>
              This data scientist uses specialized AI tools to understand each
              deal in-depth. And to forecast accurately
            </p>

            <p>
              Visibility without a CRM is only now becoming possible with the
              latest tech. And only by combining this tech with human expertise,
              supervision and guidance
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
