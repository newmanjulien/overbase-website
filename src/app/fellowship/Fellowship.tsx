"use client";

import { Button } from "@/components/ui/button";

export function Fellowship() {
  return (
    <>
      <section className="px-6 pt-48 max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
              Overbase Fellowship in Artificial Intelligence
            </h1>
            <div className="pt-2">
              <Button
                className="bg-gray-100 hover:bg-gray-200/50 text-gray-900 rounded-full px-3 py-1 cursor-pointer"
                onClick={() => {
                  document
                    .getElementById("fellowship-table")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See fellows
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-25 border-t border-gray-100"></div>
      </section>
      <section
        id="fellowship-details"
        className="px-6 md:px-12 lg:px-24 pt-18 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-14 md:gap-30">
          <div>
            <h2 className="text-2xl text-gray-900 font-medium leading-tight">
              Supporting the best students as they pioneer the best AI
            </h2>
          </div>
          <div className="space-y-6 text-gray-500 text-[15px]">
            <p>
              Learning to use modern AI tools is quickly becoming the most
              important technical skill
            </p>

            <p>But this skill isn't being taught in even the best schools</p>

            <p>
              We remove the financial barrier for the most exceptional students
              so they can pioneer and learn AI skills
            </p>

            <p>
              Fellows receive OpenAI or Anthropic API credits equivalent to
              their full tuition
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
