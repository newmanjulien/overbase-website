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
                As a result, the promise of a scalable sales process is never
                realized.
              </p>

              <p>
                <span className="font-medium">
                  Forecasts stay unreliable. Communicating a consistent value
                  proposition across the team feels impossible.{" "}
                </span>
                Managers are forced to rely on what sellers share in
                meetings—which often doesn’t match reality. Reports have to be
                generated again and again.
              </p>

              <p>Overbase gathers data to fill these gaps.</p>

              <p>
                We gather detailed and reliable information{" "}
                <span className="font-medium">
                  from each seller's emails, calendar, PDFs, and other activity.
                  No data entry required.{" "}
                </span>
              </p>

              <p>
                Then we deliver the information in ways that are customized for
                your unique workflows and that integrate with your existing
                systems.
              </p>

              <p>
                Finally, you'll get a consistent sales process that delivers
                more revenue faster.
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
