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
                makes it hard for you to know what's going on
              </p>

              <p>
                Structured data is hard to access and often isn't up-to-date,
                accurate or trustworthy. Most of the insight you need is usually
                only available in an unstructured way which isn't captured by
                your data systems
              </p>

              <p>
                And often the only way to know what you need to know ends up
                being to talk to the humans on your team
              </p>

              <p>
                <strong className="font-medium">
                  Overbase is the first data system that uses AI agents to
                  easily get any data from anywhere.
                </strong>{" "}
                You simply ask in plain English. Then an AI agent gathers
                trustworthy and accurate data in a secure, reliable and complete
                way
              </p>

              <p>
                AI agents can get structured data from Posthog, Zendesk,
                Salesforce, Snowflake, S3, etc. And present it to you in the
                format you prefer
              </p>

              <p>
                AI agents can also get unstructured data from Gong, Slack,
                Gmail, Teams, Notion, etc. Then analyze, filter and format it so
                you get insight in a way that's simple to understand and use
              </p>

              <p>
                And AI agents can also gather data from the humans on your team.
                Because AI agents can ask them. And because we make it quick and
                easy for your team to provide updates with voice, text message
                or whatever format is most simple for them
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
