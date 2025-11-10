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
                Businesses have too much customer data. And this data is in too
                many silos. Which has made it hard - and often just impossible -
                to know what's going on with our customers
              </p>

              <p>
                You've probably seen first hand how complex and expensive legacy
                solutions often just make things worse. Adding more layers of
                complication is not the way to reduce complication
              </p>

              <p>
                <strong className="font-medium">
                  There's got to be an easy way of knowing what's going on with
                  customers
                </strong>
              </p>

              <p>
                <strong className="font-medium">
                  Overbase is the first data system that uses AI agents to
                  easily get any customer data.
                </strong>{" "}
                You simply explain what you need in plain English. Then an agent
                quickly and automatically gathers the data in a way that's
                reliable, secure and complete
              </p>

              <p>
                Our AI agents can gather data from anywhere with close to 0
                setup. Agents get structured data from Posthog, Zendesk,
                Salesforce, etc. But also unstructured data from Gong, Slack,
                Gmail, Notion, etc
              </p>

              <p>
                And to guarantee the quality of the data, one of Overbase's
                human data scientists reviews the data before you get it
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
