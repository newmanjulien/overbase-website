"use client";
import { useRouter } from "next/navigation";

export function CEOLetter() {
  const router = useRouter();

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
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 z-10">
            <div className="mb-8">
              <div className="text-lg text-gray-900 font-semibold">
                Introducing Overbase
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-900 text-base leading-relaxed">
              <p>
                Being a world class Customer Success Manager means knowing
                what's going on with your customers better than everyone else.
                But boy is that hard to do when it's so hard to get the data you
                need about your customers?
              </p>

              <p>
                The data you need to prepare for your next QBR. The data you
                need to understand the health of an account. The data you need
                to make the case for an expansion. That data is all over the
                place, hard to access and often outdated
              </p>

              <p>
                You might be constantly querying Posthog to get usage data.
                Checking Pylon and Linear for open tickets. Looking in Gainsight
                to understand the account history. Potentially even begging the
                dev team to help you get some more niche data. Then you might
                need to also double check a lot of that data because it could
                actually be outdated
              </p>

              <p>
                <strong className="font-medium">
                  Why is it so hard to get the data you need to do your job?
                </strong>
              </p>

              <p>With Overbase, you can now easily get any customer data</p>

              <p>
                You simply explain what data you need in Plain English. Then an
                AI agent quickly and automatically gathers the data in a way
                that's both complete and accurate
              </p>

              <p>
                This AI agent can gather data from all of your platforms and
                tools. It can get structured data from Posthog, Pylon,
                Gainsight, etc. But also unstructured data from Gong, Slack,
                Gmail, Notion, etc
              </p>

              <p>
                And to guarantee the quality of the data, one of Overbase's
                human data scientists reviews the data which the AI agent
                gathered
              </p>

              <p>
                Join our{" "}
                <button
                  type="button"
                  onClick={() => router.push("/waitlist")}
                  className="font-normal text-blue-600 underline hover:text-blue-800 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                if you want to try it out
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-semibold text-base text-gray-900 mb-1">
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
