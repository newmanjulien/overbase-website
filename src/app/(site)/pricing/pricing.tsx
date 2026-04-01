import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            Keep things the <span className="italic">same</span>
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Keep your workflows and tools exactly as they are
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Your team is already successful and already uses good software
              that works
            </p>

            <p>
              Overbase lets you keep the same workflows and keep the same tools
            </p>

            <p>
              We automatically capture detailed, accurate information in a way
              that matches your existing workflows. And with no manual data
              entry required
            </p>

            <p>
              Then we simply update your existing tools with reliable
              information
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
