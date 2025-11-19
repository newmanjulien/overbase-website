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
                ELT, ETL or CDP? Reverse ETL? Data lake? Data warehouse? What
                are these things and why can't you just get the data you need?
              </p>

              <p>
                Businesses have too much data. And this data is in too
                many silos. Which has made it hard - and often just impossible -
                to know what's going on
              </p>

              <p>
                You might have seen first hand that legacy data solutions often
                just make it harder to get the data you need. Those legacy
                solutions are expensive, slow to set up and they usually add so
                much complexity that data ends up getting harder not easier
              </p>

              <p>
                <strong className="font-medium">
                  There's got to be a simple and quick way to make it easy to get the data
                  you need
                </strong>
              </p>

              <p>
                <strong className="font-medium">
                  Overbase is the first data system that uses AI agents to
                  easily get any data from anywhere.
                </strong>{" "}
                You simply explain what you need in plain English. Then an agent
                quickly gathers the data you need in a reliable and complete way
              </p>

              <p>
                AI agents can gather data from anywhere. Agents can get
                structured data from Posthog, Zendesk, Salesforce, Snowflake, etc. But also
                unstructured data from Gong, Slack, Gmail, Notion, etc
              </p>

              <p>
                There's close to 0 setup. AI agents can get any data from
                anywhere using any approach. Even if the only way to get the
                data is to log in using the same interface humans do
              </p>

              <p>
                And while AI can't yet gather data in a reliably high quality way, Overbase guarantees quality by getting one of our human data
                scientists to review the data before you get it
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
                if you want to try it out
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
