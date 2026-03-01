"use client";

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
                The hardest part of deal review meetings isn't the meeting
                itself. It's the investigative hours you spend before the rep
                even walks into the room.
              </p>

              <p>
                You can't just ask, "Is this deal real?" You need something
                specific like,{" "}
                <i>
                  "I wonder why the champion hasn't logged into their sandbox
                  for two weeks"
                </i>
                .
              </p>

              <p>
                Asking questions rooted in an understanding of each deal is how
                sales managers help reps win more deals. And it's one of the
                fastest ways to drive sales.
              </p>

              <p>
                But finding one fact can take forty minutes of digging. Multiply
                that by 20 deals and 8 reps, and you're working a second
                full-time job. Which is why most sales managers cut corners -
                and easy revenue gets left on the table.
              </p>

              <p>Not anymore.</p>

              <p>
                Overbase does all the analysis work then puts the data sales
                managers need for each deal review meeting directly in the
                calendar invite.
              </p>

              <p>
                A data scientist examines every detail of each deal your reps
                are managing: calls, emails, Docusign, demo usage, and more.
                Then we tell you what’s happening, what’s missing, and where
                opportunities are hiding.
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
