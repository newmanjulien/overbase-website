import Hero from "@/components/hero";

export function Pricing() {
  return (
    <>
      <Hero
        title={
          <>
            Only pay after you <span className="italic">get paid</span>
          </>
        }
      />
      <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Performance-based pricing that's self-funded
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              On top of quickly driving near-term revenue, turning your
              ecosystem-led growth into a true system is a way to accelerate
              your long-term market position
            </p>

            <p>
              You pay a percentage of the net new revenue which we generate
              together
            </p>

            <p>
              And you only pay us after you get paid, meaning that our
              collaboration is self-funded
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
