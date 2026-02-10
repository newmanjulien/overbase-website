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
              AI agents combined with human data scientists
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Overbase combines AI agents with human data scientists to answer
              your questions
            </p>

            <p>
              This lets us get reliable results and it lets us easily access any
              data no matter where it's located
            </p>

            <p>
              Get up and running quickly and easily with your existing data
              infrastructure. No matter how simple or complex your current
              systems are
            </p>

            <p>
              You'll never need to migrate any of your data. You'll never need
              to clean or change any of your data
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
