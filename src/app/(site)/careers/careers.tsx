import Hero from "@/components/hero";

export default function Careers() {
  return (
    <>
      <Hero
        title={
          <>
            Build the future of <span className="italic">software</span>
          </>
        }
        cta={{ label: "See roles", targetId: "careers-table" }}
      />
      <section
        id="careers-details"
        className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Be part of turning all business software invisible
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              For decades, we've been adding more and more confusing interfaces
              to our work with mixed results
            </p>
            <p>
              Overbase believes that business software is too complex for visual
              interfaces. And we're turning all of it invisible
            </p>

            <p>
              Together we'll start by turning sales software invisible. Then
              we'll turn all business software into an invisible layer that just
              works
            </p>

            <p>Join us to be part of building the future of software</p>
          </div>
        </div>
      </section>
    </>
  );
}
