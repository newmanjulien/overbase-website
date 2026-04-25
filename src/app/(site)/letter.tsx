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
                In professional services, the fastest growth comes from expanding current clients. But turning that potential into revenue is exceptionally hard.</p>

              <p>
                Finding the invisible needs of complex clients is hard.
                Client data is difficult to access. Your internal data sits
                across disconnected systems. <a className="font-medium">And your
                clients' real needs are buried several layers deep.</a>
              </p>

              <p>
               <a className="font-medium">But asking your team to build new habits is even harder.</a> The revenue opportunity may be known, but it gets missed if it
                sits outside the way people already work.
              </p>

              <p>That’s where Overbase comes in.</p>

              <p>
                We find your clients' unmet needs by bringing together external
                signals that are not yet on your radar with the
                internal data that's scattered across your systems.
              </p>

              <p>
                Then we build custom interfaces that bring those opportunities
                into the workflows your team already uses, so action happens
                without new behaviors.
              </p>

              <p>
                You'll find actionable revenue opportunities, then your team
                will upsell naturally and with confidence.
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
