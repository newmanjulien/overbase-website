"use client";

import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <>
      <section className="px-6 pt-48 max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
              Millions in easy revenue starting{" "}
              <span className="italic">next quarter</span>
            </h1>
            <div className="pt-2">
              <Button
                className="bg-gray-100 hover:bg-gray-200/50 text-gray-900 rounded-full px-3 py-1 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("pricing-cards")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See pricing
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-25 border-t border-gray-100"></div>
      </section>
      <section className="px-6 md:px-12 lg:px-24 pt-18 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Human-led audit of your business and of the realtime market
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Overbase lets you get millions in easy revenue every quarter by
              finding the best hidden opportunities
            </p>

            <p>
              A human data scientist reviews every sales call, every email,
              every Slack channel and every detail of your operation
            </p>

            <p>
              Then analyzes realtime earnings, press releases and announcements
              from +8,000 public companies to understand your business in the
              context of what's currently happening in the market
            </p>

            <p>
              This audit is reliable because it's run by human data scientists.
              And it finds hidden opportunities by going in depth with the most
              advanced AI
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
