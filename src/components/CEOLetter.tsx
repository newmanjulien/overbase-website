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
                truth is that you need more support than a growing company can
                give you
              </p>

              <p>
                With hndl you can now{" "}
                <strong>
                  get more hours in your day easily, quickly, reliably
                </strong>
              </p>

              <p>
                We combine AI & humans to handle 3 of your most important and
                time consuming tasks: triaging emails, creating decks and
                gathering internal data
              </p>

              <p>
                Most of the work gets done by 3 specialized AIs who each do one
                of the 3 tasks. Then a trained human who you pick takes care of
                the last mile
              </p>

              <p>
                One example of a popular way other C-Suite Execs use hndl is to
                triage emails to highlight emails where there&apos;s an
                opportunity to celebrate your team&apos;s success
              </p>

              <p>
                Another example is that Execs show us how to create decks in the
                style their CEO prefers then they get hndl to create decks for
                meetings where their CEO is participating
              </p>

              <p>
                Or Execs will get hndl to listen in on sales calls and customer
                service calls then report back with counter-intuitive
                perspectives from customers
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
