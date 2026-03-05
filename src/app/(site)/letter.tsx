import Image from "next/image";

export function Letter() {
  return (
    <section className="pb-22 px-6 md:px-12 lg:px-24 bg-white">
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
                The hardest part of helping your team drive sales isn't the
                coaching or the support. It's figuring out what's going on with
                their deals.
              </p>

              <p>
                Some businesses force sellers to input everything in a CRM. But
                forcing the hand of your team is just not appropriate in your
                business' culture.
              </p>

              <p className="font-medium">
                Which means you rely on what your sellers tell you. And sellers
                are optimistic so what they tell you can often be wrong.
              </p>

              <p>
                In real life, you can't get an accurate read on which deals are
                actually likely to close. You often don't know which levers to
                pull to accelerate revenue.{" "}
                <span className="font-medium">
                  And you leave easy revenue on the table.
                </span>
              </p>

              <p>
                Overbase gives you the visibility you need to get this easy
                revenue.
              </p>

              <p>
                We gather detailed information about each deal in a way where
                sellers never input any data and never use a CRM. Then we make
                the information easy and quick to access by putting it in the
                calendar invites of your 1:1 meetings with your sellers.
              </p>

              <p>
                The result is that you easily get an accurate forecast, quickly
                know where to focus, and immediately pull the levers that get
                sellers to close more deals faster.
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
                className="mt-4 h-25 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
