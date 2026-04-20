import Image from "next/image";

export function Letter() {
  return (
    <section className="pb-[5.5rem] px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto scale-[0.95]">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-xs transform -rotate-[1.5deg] scale-[1.02] translate-x-1.5 translate-y-1 border border-gray-200/60"></div>
          <div className="absolute inset-0 bg-gray-50 rounded-lg transform rotate-[1deg] scale-[1.008] -translate-x-0.5 translate-y-0.5 border border-gray-200/60"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xs p-7 md:p-11 border border-gray-200/60 z-10">
            <div className="mb-5">
              <div className="text-lg text-gray-900 font-semibold">
                Introducing Overbase
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                For most businesses, the fastest way to grow revenue is not by
                getting new clients. It’s by selling more to current clients.
              </p>

              <p>
                But turning that potential into revenue is harder than it looks.
              </p>

              <p>
                It’s hard to surface invisible needs in large, complex clients.
                And it’s hard for internal teams to bring forward all your
                capabilities confidently when expertise is spread across people
                and functions.
              </p>

              <p>That’s where Overbase comes in.</p>

              <p>
                We analyze your current clients to find unmet demand, put a
                dollar value on each opportunity, and help you prioritize the
                ones most likely to drive serious revenue.
              </p>

              <p>
                Then we help your team act on opportunities by equipping them
                with the right context and bringing the right internal experts
                into the process at the right time.
              </p>

              <p>
                You'll turn advanced whitespace analysis into a prioritized
                revenue map. Your team will cross-sell and upsell with
                confidence.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-gray-900">Julien Newman</div>
              <div className="text-gray-400">Founder & CEO, Overbase</div>
              <Image
                src="/signature.png"
                alt="Julien Newman signature"
                width={180}
                height={90}
                className="mt-4 h-[6.25rem] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
