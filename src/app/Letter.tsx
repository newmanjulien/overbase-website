"use client";

import Link from "next/link";
import { useState } from "react";

import { ArcadeEmbed } from "@/components/ArcadeEmbed";

export function Letter() {
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);

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
                Overbase is a personal analyst who gets reliable answers from
                disconnected data
              </p>

              <p>
                Talking to your personal analyst is intuitive. You simply send
                DMs in Slack
              </p>

              <p>
                You can ask any question then easily get an answer. Even if the
                data is in multiple disconnected and dirty databases
              </p>

              <p>
                And your personal analyst gets reliable answers by combining the
                most advanced AI agents with the most elite human data
                scientists
              </p>

              <p>
                <button
                  type="button"
                  className="text-blue-400 underline hover:text-blue-300"
                  onClick={() => setIsArcadeOpen(true)}
                >
                  See the product
                </button>{" "}
                or check out{" "}
                <Link
                  href="/pricing"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  pricing
                </Link>{" "}
                if you're curious
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

      {isArcadeOpen && (
        <div
          className="fixed inset-0 z-[9999998] bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-label="Overbase product demo"
          onClick={() => setIsArcadeOpen(false)}
        >
          <div
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-surface p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-end pb-3">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setIsArcadeOpen(false)}
              >
                Close
              </button>
            </div>
            <ArcadeEmbed />
          </div>
        </div>
      )}
    </section>
  );
}
