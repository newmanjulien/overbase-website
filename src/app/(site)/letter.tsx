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
                finding new clients. It’s by selling more to the client you
                already have.
              </p>

              <p>
                You likely already know that current clients are your best
                growth opportunity.{" "}
                <a className="font-medium">
                  But turning that potential into revenue is harder than it
                  looks.
                </a>
              </p>

              <p>
                As you grow, it gets harder to stay close enough to each client
                to understand what they need next. And it gets harder for any
                one account manager to carry a full understanding of everything
                your company can do, let alone speak about it confidently with
                clients.
              </p>

              <p>That’s where Overbase comes in.</p>

              <p>
                We look at your accounts and identify where there’s unmet
                demand. Not every gap is worth solving. We find the ones that
                are, estimate what they’re worth, and help prioritize them.
              </p>

              <p>
                Then we fit into the way your team already works, helping them
                act on opportunities with clear context and the right subject
                matter experts at the table.
              </p>

              <p>
                The result is straightforward. You grow revenue from accounts
                you already have, and your clients get more value from a partner
                they already trust.
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
