import Hero from "@/components/hero";

export default function Careers() {
  return (
    <>
      <Hero
        title="Help us build the future of data"
        cta={{ label: "See roles", targetId: "careers-table" }}
      />
      <section
        id="careers-details"
        className="px-6 md:px-12 lg:px-24 pt-[4.5rem] max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Be part of leapfrogging databases and legacy systems
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              We're building the future of data management in a way that's
              decentralized, elegant and isn't limited by legacy systems
            </p>
            <p>
              Today, we're replacing CRMs which are the most important and
              valuable databases. And we're doing this by working with
              businesses who aren't anchored in ’90s-era tech
            </p>
            <p>
              Long term, we'll apply this AI-native approach to all databases
              and data systems
            </p>
            <p>
              Join one of the only teams in the world which is truly building
              the future. And be part of one of the few businesses where you'll
              actually be working with your peers
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
