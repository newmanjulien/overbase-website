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
              A human data scientist using specialized AI tools
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              A human data scientist examines every detail of each deal: calls,
              emails, DocuSign, demo usage, and more
            </p>

            <p>
              This human uses specialized AI tools to understand each deal
              in-depth. And to forecast accurately
            </p>

            <p>
              Then we package up the insight and put it in a convenient calendar
              invite
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
