"use client";

export function CEOLetter({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-lg transform -rotate-1 scale-[1.02] translate-x-1 translate-y-1 border border-gray-200"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-[2deg] scale-[1.015] -translate-x-1 translate-y-0.5 border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-[0.5deg] scale-[1.005] border border-gray-200"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 border border-gray-200 z-10">
            <div className="mb-8">
              <div className="text-lg text-gray-900 font-semibold">
                Introducing Overbase
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Large businesses have too much data in too many silos. Which
                makes it hard for you to know what's going on in your
                organization
              </p>

              <p>
                And you can’t properly forecast and deliver. If you can’t truly
                know what’s going on
              </p>

              <p>
                You might sometimes forecast wrong because you can’t get actual
                visibility. Opportunities and problems may be hidden in the
                numbers you're getting. And when there’s a problem you need to
                solve, it might be hard to know how to solve it
              </p>

              <p>
                <strong className="font-medium">
                  Overbase is the first data system that uses AI agents to
                  easily get any internal data
                </strong>
              </p>

              <p>
                <strong className="font-medium">
                  You simply ask in plain English. Then AI agents get you
                  trustworthy and accurate internal data.{" "}
                </strong>
                Even when the data is dirty or siloed. Even when you're looking
                for historical data where the labeling and structure change over
                time. And even if this data doesn't exist in a structured
                database
              </p>

              <p>
                AI agents can get structured data from Posthog, Zendesk,
                Salesforce, S3, etc. AI agents can get unstructured data from
                Gong, Slack, Gmail, Teams, Notion, etc.
              </p>

              <p>
                And AI agents can also get data from the people on your team.
                Because AI agents can simply ask them
              </p>

              <p>
                Join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="font-normal text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                to try the first agentic data system
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-semibold text-base text-gray-600 mb-1">
                Julien Newman
              </div>
              <div className="text-sm text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
