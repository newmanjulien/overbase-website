export function CEOLetter() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers - creating stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform rotate-1 scale-[1.02]"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.01]"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005]"></div>

          {/* Main letter content */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 transform rotate-0 z-10">
            {/* Letter header */}
            <div className="mb-8">
              <div className="text-xl text-gray-900 font-bold">
                Introducing hndl
              </div>
            </div>

            {/* Letter content */}
            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                As a C-Suite Exec in a fast growing SaaS business. You are one
                of the busiest people in the world. No matter what you do there
                just aren&apos;t enough hours in your day
              </p>

              <p>
                You&apos;re the best at your job. You have an amazing team who
                supports you. And you may even have a world class EA. But the
                truth is that you need more support than any growing company can
                give
              </p>

              <p>
                With hndl you{" "}
                <strong>
                  get more hours in your day easily, quickly, reliably
                </strong>
              </p>

              <p>
                We combine AI & humans to handle 3 of your most important and
                time consuming tasks: triaging emails, creating decks and
                gathering internal data
              </p>

              <p>Our 3 specialized AIs do these 3 tasks for you</p>

              <p>
                Each of these 3 AIs are built to do 1 specific task for C-Suite
                Execs in SaaS businesses. And our 3 AIs share what they learn so
                you don&apos;t need to teach the same thing over and over to
                different AIs. This means that we handle your tasks fast and in
                a way that&apos;s always high quality
              </p>

              <p>Then a human takes care of the last mile</p>

              <p>
                You easily pick 1 named human for each task. This humans handles
                the parts which AI can&apos;t do well. And the human element is
                so integrated that you don&apos;t notice that humans are part of
                the process. Having a human do the last mile means your tasks
                get handled in a way that&apos;s actually good
              </p>

              <p>
                There&apos;s now a way for C-Suite Execs to use AI to do tasks{" "}
                <strong>
                  with just a few clicks and in a way that&apos;s better than if
                  you did them yourself
                </strong>
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-lg text-gray-900 mb-2">Julien Newman</div>
              <div className="text-sm text-gray-500">CEO & Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
