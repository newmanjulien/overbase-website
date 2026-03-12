import Hero from "@/components/hero";
import Link from "next/link";

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
              We're building the future of data with a new approach that's
              decentralized, elegant and intuitive
            </p>
            <p>
              Today, we're leapfrogging CRMs which are the most important and
              valuable databases
            </p>

            <p>
              We're doing this by working with businesses who aren't anchored in
              ’90s-era tech because they never fully adopted it
            </p>

            <p>
              Later, we'll apply this AI-native approach to all databases and
              all data systems.{" "}
              <Link
                href="/blog/decentralized-data"
                className="text-[#4F769E] underline decoration-[#4F769E]/65"
              >
                Read our vision
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
