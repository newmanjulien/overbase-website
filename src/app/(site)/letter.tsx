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
                The fastest way to accelerate revenue for most businesses isn’t
                to generate more demand. It’s to increase revenue from your
                existing demand.
              </p>

              <p>
                Most businesses grow by getting good at finding new clients.{" "}
                <a className="font-medium">
                  But the real opportunities are often already sitting in your
                  current book of business.
                </a>
              </p>

              <p>
                The problem is your own success. As you offer more services, it
                becomes harder for account managers to know and sell everything
                you do. And the bigger you get, the harder it is to know your
                clients well enough to see their biggest needs.
              </p>

              <p className="font-medium">
                Overbase finds and lets you fulfill the biggest needs your
                clients already have.
              </p>

              <p>
                We use advanced analysis to flag the most profitable untapped
                revenue in each account. We find then put a price tag on the
                invisible gaps where a client has a need but no current
                solution.
              </p>

              <p>
                Then, we integrate into your team’s existing workflows. We give
                them the background, resources and expertise they need to close
                these gaps naturally and at the perfect time.
              </p>

              <p>
                You grow revenue quickly without hunting for clients. Your
                clients get more value from a partner they already trust (you!).
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
