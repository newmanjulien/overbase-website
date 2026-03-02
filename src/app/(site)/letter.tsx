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
                The hardest part of deal review isn't the meeting itself. It's
                the investigative hours sales managers spend before the rep even
                walks into the room.
              </p>

              <p>
                CRM dashboards don't give you an accurate enough read on which
                deals are likely to close. Or on which levers to pull to
                accelerate revenue.
              </p>

              <p>
                Which means you need to get your hands dirty. Dig into every
                deal. See what's missing. Find which timelines are suspicious.
                And ideally, you'd look at emails, documents and call recordings
                to actually get the full picture.
              </p>

              <p>
                Doing this type of investigation properly takes hours. Multiply
                that by 8 reps, and you're working a second full-time job.
              </p>

              <p>
                Which is why most sales managers have no choice but to cut
                corners. And why easy revenue gets left on the table at every
                deal review meeting.
              </p>

              <p>Not anymore.</p>

              <p>
                Overbase puts the information sales managers need for deal
                review meetings directly in their meeting's calendar invite.
              </p>

              <p>
                You quickly get an accurate forecast. You immediately know where
                to focus. And you clearly see what levers to pull to close more
                deals faster.
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
