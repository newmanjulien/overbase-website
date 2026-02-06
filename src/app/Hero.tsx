"use client";

import Link from "next/link";
import { SlackIcon } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  // Preload the test page video and datasource logos in the background
  useEffect(() => {
    // Preload video
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "/test.mp4";
  }, []);

  return (
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-20 pb-18 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-2xl text-center md:text-left scale-[0.92]">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-snug font-semibold max-w-md mx-auto md:mx-0">
            Personal analyst for{" "}
            <span className="bg-[#ffffcc] px-1 rounded-xs">revenue execs</span>
          </h1>

          <h2 className="mt-4 text-2xl text-gray-600 font-medium">
            Overbase is a personal analyst who lives in your Slack and lets you
            understand even the most disconnected data
          </h2>

          <div className="mt-10 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center md:justify-start">
            <Button
              variant="default"
              size="lg"
              className="w-full max-w-lg py-6 px-8 text-[17px] rounded-lg sm:w-auto"
              asChild
            >
              <Link
                href="https://slack-overbase.onrender.com/slack/install"
                target="_blank"
                rel="noreferrer"
              >
                <SlackIcon className="size-5" />
                Add to Slack
              </Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full max-w-lg py-6 px-8 text-[17px] rounded-lg sm:w-auto"
              asChild
            >
              <Link
                href="https://cal.com/juliennewman/julien"
                target="_blank"
                rel="noreferrer"
              >
                Demo with our CEO
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
