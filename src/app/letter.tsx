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
                Which deals are actually likely to close? Are you losing to a
                new competitor? Why are the EMEA numbers suddenly up? Is there
                hidden churn in one of your products?
              </p>

              <p>The insight you need often shows up too late to take action</p>

              <p>
                And there's no way to get the information faster because it's
                hidden by multiple layers of interpretation.{" "}
                <span className="font-medium">
                  A rep is too optimistic. A manager downplays a deal to
                  over-perform at the end of the month. Someone is keeping
                  off-books deals to fill gaps later
                </span>
              </p>

              <p>
                <span className="font-medium">
                  The result is that you leave millions of dollars in easy
                  revenue on the table{" "}
                </span>
                because many of the best opportunities are hidden
              </p>

              <p>It doesn't need to be like this</p>

              <p>
                Overbase gives your Sales Managers the data they need to win
                more deals
              </p>

              <p>
                Every week, a human data scientist does an in-depth audit of
                your operation - reviews sales calls, reads emails with
                prospects, looks at Docusign, etc.
              </p>

              <p>
                Then this data scientist sends your Sales Manager the
                information they need to see the real opportunities, ask the
                right questions, coach reps and win more deals
              </p>

              <p>
                Join the{" "}
                <Link
                  href="/waitlist"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  waitlist
                </Link>
                . Or check out{" "}
                <Link
                  href="/pricing"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>{" "}
                for more details
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
