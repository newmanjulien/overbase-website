import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-28 pb-30 max-w-6xl mx-auto">
      <div className="rounded-xl border border-gray-100 px-6 py-10 sm:px-8 md:px-12 md:py-12">
        <div className="grid items-start gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14">
          <div className="space-y-5">
            <Image
              src="/julien.png"
              alt="Julien Newman"
              width={208}
              height={248}
              className="h-40 w-40 rounded-full object-cover sm:h-44 sm:w-44"
            />
            <div className="space-y-1">
              <h2 className="text-xl font-medium tracking-[-0.03em] text-gray-900">
                Julien Newman
              </h2>
              <p className="text-md text-gray-500">Founder & CEO</p>
            </div>
          </div>

          <div className="max-w-2xl space-y-6 pt-1 text-[15px] leading-7 text-gray-500">
            <p>
              Julien has been a machine learning engineer for 15 years and has
              been building AI startups for 10 years
            </p>

            <p>
              His startups have been backed by the best investors including
              Village Global, the VC chaired by Reid Hoffman. He also co-hosted
              the Blitzscaling Podcast, which is based on Reid's book
            </p>

            <p>
              He teaches at Princeton University and has focused his career on
              building sales tech. Check out:{" "}
              <a
                href="https://juliennewman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
              >
                juliennewman.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
