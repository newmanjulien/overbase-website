import Hero from "@/components/hero";
import Link from "next/link";

export default function Careers() {
  return (
    <>
      <Hero
        title={
          <>
            Help us build the future of <span className="italic">data</span>
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
              Be part of leapfrogging legacy data systems
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              For decades, data centralizers promised insight but delivered
              frustration, slow processes, and costly complexity
            </p>
            <p>
              Overbase gets reliable answers from even the most disconnected
              data. We aren’t just patching retro ‘90s tech with LLMs, we're
              reimagining data management from first principles
            </p>

            <p>
              Together we'll start by leapfrogging CRMs. Then we'll replace all
              legacy data systems with a modern decentralized alternative (
              <Link
                href="/blog/decentralized-data"
                className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
              >
                link
              </Link>
              )
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
