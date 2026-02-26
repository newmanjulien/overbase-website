"use client";

export function Letter() {
  return (
    <section className="pb-22 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-3xl mx-auto scale-[0.95]">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-surface rounded-lg shadow-xs transform -rotate-[1.5deg] scale-[1.02] translate-x-1.5 translate-y-1 border border-gray-200/60"></div>
          <div className="absolute inset-0 bg-gray-50 rounded-lg transform rotate-[1deg] scale-[1.008] -translate-x-0.5 translate-y-0.5 border border-gray-200/60"></div>

          {/* Main letter */}
          <div className="relative bg-surface rounded-lg shadow-xs p-7 md:p-11 border border-gray-200/60 z-10">
            <div className="mb-5">
              <div className="text-lg text-gray-900 font-semibold">
                Introducing Overbase
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                The hardest part of deal review isn't the meeting itself—it’s
                the investigative hours spent before the rep even walks into the
                room
              </p>

              <p>
                To ask a "curious" question instead of an "attacking" one, you
                have to do double the work. You can't just say, "Is this deal
                real?" You have to say,{" "}
                <i>
                  "I wonder why the champion hasn't logged into his sandbox in
                  two weeks?"
                </i>
              </p>

              <p>
                Asking the right questions based in research and data helps reps
                close more deals by finding opportunities they didn't see. It
                also improves your team's morale, confidence and performance
              </p>

              <p>
                But finding one fact can take forty minutes of digging. Multiply
                that by 20 deals and 8 reps, and you're essentially working a
                second full-time job
              </p>

              <p>
                Which is why in real life you have no choice but to take
                shortcuts. And it's why in real life Sales Managers don't
                actually do truly data-driven deal review
              </p>

              <p>Not anymore</p>

              <p>
                Overbase helps Sales Managers easily do data-driven deal review
              </p>

              <p>
                Every week, a human data scientist does an in-depth audit of
                every deal - reviews sales calls, reads emails with prospects,
                looks at Docusign, investigates demo usage metrics, etc.
              </p>

              <p>
                Then this data scientist sends you the information you need to
                easily see the real opportunities, ask the right questions,
                coach reps, win more deals and drive millions in easy revenue
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-gray-900">Julien Newman</div>
              <div className="text-gray-400">Founder & CEO, Overbase</div>
              <img
                src="/signature.png"
                alt="Julien Newman signature"
                className="mt-4 h-25 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
