"use client";

import Link from "next/link";
import { ListenButton } from "../components/ListenButton";

export function CEOLetter({ onJoinWaitlist }: { onJoinWaitlist: () => void }) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto scale-[0.95]">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-1 scale-[1.02] translate-x-1 translate-y-1 border border-gray-100"></div>
          <div className="absolute inset-0 bg-white rounded-lg shadow-sm transform rotate-[2deg] scale-[1.015] -translate-x-1 translate-y-0.5 border border-gray-100"></div>
          <div className="absolute inset-0 bg-gray-50 rounded-lg shadow transform rotate-[0.5deg] scale-[1.005] border border-gray-100"></div>

          {/* Main letter */}
          <div className="relative bg-white rounded-lg shadow-lg p-7 md:p-11 border border-gray-100 z-10">
            <div className="mb-7">
              <div className="flex items-center justify-between">
                <div className="text-lg text-gray-900 font-medium">
                  Introducing Overbase
                </div>
                <ListenButton />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
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
                We answer in-depth and accurately because we use AI agents to
                get data
              </p>

              <p>
                Legacy disconnected systems make it hard to get answers. Which
                is why you might need to ask an analyst to manually gather data
                for you when your question crosses more than 1 tool or platform
              </p>

              <p>
                AI agents make all your tools and platforms talk to each other.
                Which lets us easily get you answers from even the most
                disconnected data
              </p>

              <p>
                With Overbase, your team will spend less time producing reports
                and inputting data. And you will get the answers you need to
                pinpoint the right actions to take
              </p>

              <p>
                Join our{" "}
                <button
                  type="button"
                  onClick={onJoinWaitlist}
                  className="font-normal text-blue-400 underline hover:text-blue-300 cursor-pointer"
                >
                  waitlist
                </button>{" "}
                or check out our{" "}
                <Link
                  href="/pricing"
                  className="font-normal text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>{" "}
                if you're curious
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-base text-gray-600">
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
