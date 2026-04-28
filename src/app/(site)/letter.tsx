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
                Selling with ecosystem partners should create a steady stream of
                warm, high-fit opportunities.
              </p>

              <p>
                You share the same ICP and you're not competing.{" "}
                <span className="font-medium">
                  You should be able to see where accounts overlap and turn that
                  overlap into revenue.
                </span>
              </p>

              <p>
                <span className="font-medium">
                  But in practice, this win-win rarely works.
                </span>{" "}
                Coordination is messy, overlap is hard to spot, and partners
                don't have the right incentives.
              </p>

              <p>It doesn't have to be like this.</p>

              <p>
                Overbase lets you and your partners securely share sales data
                from the places it already lives: emails, spreadsheets, PDFs,
                CRM, ERP. We compare both sides, pull in public data and find
                revenue opportunities neither team would see alone.
              </p>

              <p>
                The next move is then packaged up and delivered in the tools
                each team already uses, so no one has to change how they work.
                And opportunities are structured so that outreach starts only
                after both sides agree on who does what.
              </p>

              <p>
                The result: pipeline surfaces automatically, gets actioned
                naturally, and moves forward with both sides aligned.
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
