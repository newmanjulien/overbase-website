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
                CRMs work magic—but only if your team logs everything. In your
                industry, that simply doesn’t happen.
              </p>

              <p>
                So the data you need never makes it into the system, and easy
                revenue slips through the cracks.
              </p>

              <p>
                Multiple sellers approach the same customer. Many of the best
                prospects aren’t on your radar at all.{" "}
                <span className="font-medium">
                  Important accounts aren't managed proactively. Opportunities
                  to bundle multiple offerings are missed.
                </span>
              </p>

              <p className="font-medium">
                Overbase is the invisible backend for your CRM that works
                quietly behind the scenes to gather the data you've been
                missing.
              </p>

              <p>
                We capture detailed and accurate information from each seller’s
                emails, calendar, PDFs, and other communication. No manual data
                entry required.
              </p>

              <p>
                Then we deliver reliable insight to your CRM, Power BI or any
                dashboard you use.
              </p>

              <p>
                Sellers keep selling exactly as they do and leadership keeps the
                same dashboards. Except now, there's accurate information in
                those dashboards.
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
