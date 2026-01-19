"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export function HeroSection() {
  const router = useRouter();

  // Preload the test page video in the background
  useEffect(() => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "/test.mp4";
    // The video element will start loading but won't play or be visible
  }, []);

  const handleTest = () => router.push("/test");
  const handleDemo = () =>
    window.open("https://cal.com/juliennewman/julien", "_blank");

  return (
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-26 pb-17 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-xl text-center md:text-left scale-[0.90]">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-tight font-semibold">
            Agentic Analyst for{" "}
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              Revenue Execs
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-600 font-medium">
            Overbase is how Revenue Execs get in-depth and reliable answers to
            their hardest questions
          </h2>

          {/* Desktop buttons - now visible at md */}
          <div className="hidden md:flex mt-8 gap-2 xl:gap-4">
            <Button
              onClick={handleTest}
              variant="default"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-base rounded-lg"
            >
              Test for $100
            </Button>

            <Button
              onClick={handleDemo}
              variant="secondary"
              size="lg"
              className="bg-gray-100 hover:bg-gray-200/60 text-black p-6 text-base rounded-lg"
            >
              Demo with our CEO
            </Button>
          </div>
        </div>
      </div>

      {/* === Mobile Layout (only shown below md) === */}
      <div className="w-full max-w-6xl mx-auto md:hidden mt-6 flex flex-col items-center gap-6">
        <Button
          onClick={handleTest}
          variant="default"
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white p-5 text-base rounded-lg w-full max-w-lg"
        >
          Test for $100
        </Button>

        <Button
          onClick={handleDemo}
          variant="secondary"
          size="lg"
          className="bg-gray-100 hover:bg-gray-200 text-black p-5 text-base rounded-lg w-full max-w-lg"
        >
          Demo with our CEO
        </Button>
      </div>
    </section>
  );
}
