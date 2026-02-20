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
    video.src = "/form.mp4";
  }, []);

  const newLocal =
    "mt-10 flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center md:justify-start";
  return (
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-20 pb-18 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full text-center md:text-left scale-[0.89]">
          <h1 className="max-w-md text-5xl text-gray-900 tracking-tight leading-tight font-semibold mx-auto md:mx-0">
            Get your second sales forecast
          </h1>

          <h2 className="mt-4 max-w-2xl text-2xl text-gray-600 font-medium">
            Overbase lets SaaS businesses{" "}
            <span className="bg-[#ffffcc] px-1 rounded-xs">
              drive millions in easy revenue
            </span>{" "}
            by finding hidden sales opportunities
          </h2>

          <div className={newLocal}>
            <Button
              variant="default"
              size="lg"
              className="w-full max-w-lg p-6 text-base rounded-lg sm:w-auto"
              asChild
            >
              <Link href="/waitlist">Join Waitlist</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-full max-w-lg p-6 text-base rounded-lg sm:w-auto"
              asChild
            >
              <Link href="/waitlist">Demo with our CEO</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
