"use client";

import Link from "next/link";

export function Letter() {
  return (
    <section className="pb-22 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="max-w-3xl mx-auto scale-[0.95]">
        {/* Paper Stack Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Background papers – stack effect */}
          <div className="absolute inset-0 bg-surface rounded-lg shadow-xs transform -rotate-[1.5deg] scale-[1.02] translate-x-1.5 translate-y-1 border border-gray-200/60"></div>
          <div className="absolute inset-0 bg-gray-50 rounded-lg transform rotate-[1deg] scale-[1.008] -translate-x-0.5 translate-y-0.5 border border-gray-200/60"></div>

          {/* Main letter */}
          <div className="relative bg-surface rounded-lg shadow-xs p-7 md:p-11 border border-gray-200/60 z-10">
            <div className="mb-5">
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
                <span className="font-medium">
                  But getting to the root cause of what’s happening is slow and
                  hard.
                </span>{" "}
                The data is in too many disconnected systems. It's formatted
                wrong. And you often can't trust the data in your databases
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
                Overbase gives you a personal analyst who lets you easily get
                reliable answers from disconnected data
              </p>

              <p>
                Asking questions is easy - you simply DM your personal analyst
                in Slack
              </p>

              <p>
                A human then quickly gets the answer to your question. Answers
                are reliable because there's a human answering your question.
                Answers are fast and accurate because those humans use advanced
                AI tools
              </p>

              <p>
                Your personal analyst answers using structured data from any
                system, unstructured data that only advanced AI can process, and
                by asking people on your team for information that doesn't exist
                in any database
              </p>

              <p>
                <Link
                  href="https://slack-overbase.onrender.com/slack/install"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Add to Slack
                </Link>{" "}
                to get started in 5 minutes. Or check out{" "}
                <Link
                  href="/pricing"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>{" "}
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-gray-900">Julien Newman</div>
              <div className="text-gray-400">Founder & CEO, Overbase</div>
              <img
                src="/sign.png"
                alt="Julien Newman signature"
                className="mt-4 h-25 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
