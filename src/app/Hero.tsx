"use client";

import Link from "next/link";
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
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-23 pb-18 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-2xl text-center md:text-left scale-[0.90]">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-snug font-semibold max-w-md">
            Personal Analyst for{" "}
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              Revenue Execs
            </span>
          </h1>

          <h2 className="mt-4 text-2xl text-gray-600 font-medium">
            Overbase is a Personal Analyst who lets you easily understand even
            the most disconnected data
          </h2>

          {/* Desktop buttons - now visible at md */}
          <div className="hidden md:flex mt-10 gap-2 xl:gap-4">
            <Button
              variant="default"
              size="lg"
              className="p-6 text-lg rounded-lg"
              asChild
            >
              <Link href="/login">Get started in 5 minutes</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="p-6 text-lg rounded-lg"
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

      {/* === Mobile Layout (only shown below md) === */}
      <div className="w-full max-w-6xl mx-auto md:hidden mt-6 flex flex-col items-center gap-6">
        <Button
          variant="default"
          size="lg"
          className="p-5 text-base rounded-lg w-full max-w-lg"
          asChild
        >
          <Link href="/login">Test for $100</Link>
        </Button>

        <Button
          variant="secondary"
          size="lg"
          className="p-5 text-base rounded-lg w-full max-w-lg"
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
    </section>
  );
}
