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
                CRM — but getting to the root cause is slow, frustrating, and
                hard
              </p>

              <p>
                <span className="font-medium">
                  The data is scattered across disconnected systems, formatted
                  inconsistently, and often unreliable.
                </span>{" "}
                Every time you need an answer, you pull an analyst off another
                project — slowing your team and delaying decisions that matter
              </p>

              <p>Your personal analyst changes that</p>

              <p>
                When you ask a question, a trained analyst investigates, using
                all your structured data, unstructured sources, and even
                information only your team knows. Our analysts are elite
                professionals — graduates of top schools and former BCG,
                McKinsey, Google, and Tesla team members
              </p>

              <p>
                <span className="font-medium">
                  Answers are fast, accurate, and reliable because humans do the
                  analysis.{" "}
                </span>
                Advanced AI tools assist our analysts, making them faster and
                more precise — but the insight, judgment, and context come from
                real people who understand your business
              </p>

              <p>
                With a personal analyst, you finally get clarity where there was
                confusion, speed where there was delay, and insight you can
                trust
              </p>

              <p>
                <Link
                  href="https://slack.overbase.app/slack/install"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  Add to Slack
                </Link>{" "}
                and get started in 5 minutes — no complex deployments, no data
                migrations. Or check out{" "}
                <Link
                  href="/pricing"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>{" "}
                if you want to learn more
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-medium text-gray-900">Julien Newman</div>
              <div className="text-gray-400">Founder & CEO, Overbase</div>
              <img
                src="/signature.png"
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
