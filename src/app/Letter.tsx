"use client";

import Link from "next/link";

export function Letter() {
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
              <div className="text-lg text-gray-900 font-semibold">
                Introducing Overbase
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                You have questions when you look at your dashboards, reports, or
                CRM
              </p>

              <p>
                But getting to the root cause of what’s happening is slow and
                hard. The data is in too many disconnected systems. It's
                formatted wrong. And you often can't trust the data in your
                databases
              </p>

              <p>
                Which means that you need to pull an analyst off another project
                every time you have a question
              </p>

              <p>
                And it means that getting reliable answers ends up being so hard
                and slow that{" "}
                <span className="font-medium">
                  you often don't actually know what you need to know to make
                  many of the most important decisions you need to make
                </span>
              </p>

              <p>
                Overbase is a personal analyst who does more reliable analysis
                than top human analysts
              </p>

              <p>
                Talking to your personal analyst is intuitive. You simply send
                DMs in Slack
              </p>

              <p>
                You can ask any question. And you'll quickly get a reliable
                answer even if the data is in multiple disconnected databases
              </p>

              <p>
                Your personal analyst tells you what happened, why it happened,
                and gives you ideas of what you could do
              </p>

              <p>
                <Link
                  href="https://slack-overbase.onrender.com/slack/install"
                  className="text-blue-400 underline hover:text-blue-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Add to Slack
                </Link>{" "}
                and get set up in 5 minutes. Or check out{" "}
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
