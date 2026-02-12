"use client";

import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <>
      <section className="px-6 pt-48 max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
              Reliable answers from <span className="italic">disconnected</span>{" "}
              data
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
              Elite human analysts powered by the most advanced AI
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Our analysts graduated from the world’s most selective schools or
              worked at top-tier companies like BCG, McKinsey, Google, and Tesla
            </p>

            <p>
              They deliver fast, reliable answers by combining expert human
              analysis with the most advanced AI tools
            </p>

            <p>
              No data migrations. No cleaning. No changes. Just answers from
              your existing systems
            </p>

            <p>
              And you’ll be up and running in just 5 minutes with your current
              data infrastructure
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
