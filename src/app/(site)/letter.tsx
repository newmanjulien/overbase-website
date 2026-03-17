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
                Some companies require sellers to log every detail in their CRM.
                But sellers don't respond to heavy handed enforcement in your
                culture.
              </p>

              <p>
                This means sellers don't take full advantage of your CRM and
                often{" "}
                <span className="font-medium">
                  the only information managers get is what sellers tell them.
                </span>
              </p>

              <p className="font-medium">
                Which is a real problem because sellers are notoriously
                unreliable when it comes to reporting on their sales
                conversations.
              </p>

              <p>
                Not taking full advantage of your CRM means you can't get an
                accurate read on which deals are likely to close. And you don't
                know which levers to pull to accelerate revenue.
              </p>

              <p>Overbase gives you visibility.</p>

              <p>
                We gather detailed information about deals in a reliable and
                consistent way. We analyze each seller's emails, calendar
                invites, PDFs and other activities. Sellers never input any
                data.
              </p>

              <p>
                Then we make the information easy and quick for managers to
                access by putting it in the calendar invites of meetings they
                have with sellers.
              </p>

              <p>
                The result is that managers know what levers to pull to drive
                sales. Sellers save time on meeting preparing and on data input.
                And your business easily gets more revenue
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
