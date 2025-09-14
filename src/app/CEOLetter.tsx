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
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-2 scale-[1.015] -translate-x-1 translate-y-0.5 border border-gray-200"></div>
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-sm transform rotate-0.5 scale-[1.005] border border-gray-200"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12 z-10">
            <div className="mb-8">
              <div className="text-lg text-gray-900 font-semibold">
                Introducing FACT
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200"></div>

            <div className="space-y-6 text-gray-900 text-md leading-relaxed">
              <p>
                Doing Customer Success well means knowing better than everyone
                else what's going on with your customers. But how can you do
                that when it's so hard for you to get customer data?
              </p>

              <p>
                The data you need to prepare for your next QBR, understand the
                health of an account or make the case for an expansion is all
                over the place, hard to access and often outdated
              </p>

              <p>
                You need to query Posthog to get usage data. Check Pylon and
                Linear for open tickets. Look in Gainsight to understand the
                account history. Beg the dev team to help you get some more
                niche data you can't get otherwise. Then double check in other
                places because all that data might actually be outdated
              </p>

              <p>
                {" "}
                <strong className="font-medium">
                  Why is it so hard to get the data you need?
                </strong>
              </p>

              <p>
                <strong className="font-medium">
                  {" "}
                  And why are you spending so much time trying (and often
                  failing) to figure out what's going on with your customers?
                </strong>{" "}
                Instead of helping customers achieve their goals, strengthening
                your relationships, ensuring renewals and setting the stage for
                expansions
              </p>

              <p>
                With FACT, you can now request any Customer Success data then
                easily get the complete, up-to-date and accurate data you need
              </p>

              <p>
                We use all your data from all your platforms and tools.
                Structured data from Posthog, Gainsight, etc. Unstructured data
                from call transcripts, Slack, emails, Notion, etc. And we also
                check external data to be sure everything is up-to date. For
                example, we'll check LinkedIn to see if your champion changed
                jobs
              </p>

              <p>
                We also make sure you always get the highest quality results
                because FACT has a human in the loop who double checks the data
                before you receive it
              </p>

              <p>
                Check out this{" "}
                <a
                  href="https://hndl.notion.site/Q-A-246226f80dd38065a1eac0e6321967da"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-blue-600 underline hover:text-blue-800"
                >
                  Q&A
                </a>{" "}
                if you have questions. Or join our{" "}
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
              <div className="font-semibold text-lg text-gray-900 mb-1">
                Julien Newman
              </div>
              <div className="text-md text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
