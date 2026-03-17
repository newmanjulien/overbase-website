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
                CRMs work well in many industries, but in yours, getting every
                seller to log every detail reliably just doesn’t happen.
              </p>

              <p>
                As a result, businesses in your industry never take full
                advantage of their CRM.
              </p>

              <p>
                Forecasts remain unreliable, and getting your entire sales team
                to communicate the same value proposition feels impossible.
                Managers rely on what sellers say in meetings, but sellers are
                naturally optimistic, and their reports often don’t reflect
                reality.
              </p>

              <p>Overbase delivers what your CRM promised.</p>

              <p>
                We gather detailed, reliable information automatically from
                emails, calendar invites, PDFs, and other activity. No data
                entry required.
              </p>

              <p>
                That information is delivered in a way managers can act on
                immediately and is integrated into your existing systems.
              </p>

              <p>
                Finally, you get the visibility and consistency CRMs promised.
                Managers know what’s real, sellers spend less time on busywork,
                and your team can focus on selling.
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
