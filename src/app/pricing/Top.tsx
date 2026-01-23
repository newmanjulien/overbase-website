"use client";

import { Button } from "../../components/ui/button";

export function Top() {
  return (
    <section className="px-6 pt-48 max-w-5xl mx-auto">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
            Reliable answers to your <span className="italic">hardest</span>{" "}
            questions
          </h1>

          {/* CTA Button */}
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
  );
}
