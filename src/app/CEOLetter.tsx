"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ListenButton } from "../components/buttons/ListenButton";

export function CEOLetter() {
  const router = useRouter();
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
              <div className="flex items-center justify-between">
                <div className="text-lg text-gray-900 font-medium">
                  Introducing Overbase
                </div>
                <ListenButton
                  audioSrc="/letter.mp3"
                  iconSize={17}
                  textSize="text-sm"
                  textWeight="font-medium"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100"></div>

            <div className="space-y-6 text-gray-900 leading-relaxed">
              <p>
                You have questions when you look at your dashboards, reports or
                CRM
              </p>

              <p>
                Your questions are hard. And getting a reliable answer takes
                days or sometimes up to a week
              </p>

              <p>
                Gathering the information you need is hard. The data is in too
                many disconnected systems. It's formatted wrong. It's outdated.
                It's hard to access. And you often can't trust the data in your
                databases
              </p>

              <p>
                Getting useful insights is hard. The right answer depends on
                your context. And the analysis is complex
              </p>

              <p>
                Which means that getting reliable answers ends up being so hard
                that{" "}
                <span className="font-medium">
                  you often can't actually know what you need to know to make
                  the decisions you need to make
                </span>
              </p>

              <p className="font-medium">
                Overbase is the first automated system that's more reliable and
                gets better answers than top tier human analysts
              </p>

              <p>
                We get this unique level of quality by partnering with
                businesses to train a Personal Large Language Model for each of
                their Revenue Execs
              </p>

              <p>
                Each Personal LLM is a standalone 26B+ Parameter Large Language
                Model that's trained for each individual Revenue Exec. It
                understands how each Revenue Exec thinks. And it knows how to
                use agents to navigate each business's data infrastructure
              </p>

              <p>
                If you're curious, take a look at this{" "}
                <Link
                  href="/example"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  example
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
