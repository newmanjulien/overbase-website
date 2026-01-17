"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListenButton } from "../components/buttons/ListenButton";

export function CEOLetter() {
  const router = useRouter();
  return (
    <section className="pb-22 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-3xl mx-auto scale-[0.95]">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-surface rounded-lg shadow-sm transform -rotate-[1.5deg] scale-[1.02] translate-x-1.5 translate-y-1 border border-gray-100"></div>
          <div className="absolute inset-0 bg-gray-50 rounded-lg shadow transform rotate-[1deg] scale-[1.008] -translate-x-0.5 translate-y-0.5 border border-gray-100"></div>

          {/* Main letter */}
          <div className="relative bg-surface rounded-lg shadow-lg p-7 md:p-11 border border-gray-100 z-10">
            <div className="mb-7">
              <div className="flex items-center justify-between">
                <div className="text-lg text-gray-900 font-medium">
                  Introducing Overbase
                </div>
                <ListenButton />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                You have questions when you look at your dashboards and your
                reports. And you need to answer those questions to get at the
                root cause of what’s happening in your organization
              </p>

              <p>
                But the information you need to get answers you trust is in too
                many systems.{" "}
                <strong className="font-medium">
                  And getting to the bottom of what’s actually happening is slow
                  and hard
                </strong>
              </p>

              <p>
                <strong className="font-medium">
                  And that means you sometimes might not know what you need to
                  know for make the right decisions
                </strong>
              </p>

              <p>
                Overbase lets Revenue Execs easily ask questions in plain
                English. Then get reliable answers that truly go in-depth and
                let you understand enough to take action
              </p>

              <p>
                We answer in-depth and accurately because we use an Agentic
                Analyst to get and analyze data
              </p>

              <p>
                Legacy disconnected systems make it hard to get answers. Which
                is why today you need to ask a Human Analyst when your question
                crosses more than 1 tool or platform
              </p>

              <p>
                Agentic Analysts make all your tools and platforms talk to each
                other. Which lets you get answers from even the most
                disconnected data. And they do the same deep analysis the best
                Human Analyst would do. Which lets you get in-depth answers to
                complex questions
              </p>

              <p>
                With Overbase, your team will spend less time producing reports
                and inputting data. And you will get the answers you need to
                pinpoint the right actions to take
              </p>

              <p>
                If you're curious, take a look at this{" "}
                <Link
                  href="/example"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  example
                </Link>{" "}
                or check out our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-gray-900">Julien Newman</div>
              <div className="text-sm text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
