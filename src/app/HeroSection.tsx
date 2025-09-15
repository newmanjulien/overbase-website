"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Graphic } from "../components/Graphic";

export function HeroSection() {
  const router = useRouter();
  const waitlistRef = useRef<HTMLButtonElement | null>(null);
  const demoRef = useRef<HTMLAnchorElement | null>(null);

  // Handle keyboard press for "w" and "f"
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "w" && waitlistRef.current) {
        waitlistRef.current.focus();
        waitlistRef.current.click();
      }
      if (e.key.toLowerCase() === "f" && demoRef.current) {
        demoRef.current.focus();
        demoRef.current.click();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const CtaButtons = () => (
    <div className="flex items-center justify-center xl:justify-start gap-4 mt-2">
      {/* Waitlist button (real button) */}
      <Button
        ref={waitlistRef}
        onClick={() => router.push("/waitlist")}
        size="lg"
        className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-base rounded-lg"
      >
        <span className="inline-flex items-center gap-2">
          Join waitlist
          <span className="hidden xl:inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-700 text-white text-sm font-bold">
            W
          </span>
        </span>
      </Button>

      {/* Demo button (anchor styled as button via asChild) */}
      <Button
        asChild
        size="lg"
        className="bg-gray-50 hover:bg-gray-100 text-black p-6 text-base rounded-lg"
      >
        <a
          ref={demoRef}
          href="https://cal.com/juliennewman/15min"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Demo with our CEO"
        >
          <span className="inline-flex items-center gap-2">
            Demo with our CEO
            <span className="hidden xl:inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-200 text-black text-sm font-bold">
              F
            </span>
          </span>
        </a>
      </Button>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 xl:px-24 pt-14">
      <div className="w-full max-w-5xl mx-auto flex flex-col xl:flex-row items-center gap-24">
        {/* LEFT: headings + buttons */}
        <div className="w-full max-w-lg text-center xl:text-left">
          {/* Heading */}
          <h1 className="text-6xl text-gray-900 tracking-tight leading-tight font-bold">
            Customer Success needs{" "}
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              easy data
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-6 text-lg text-gray-600 font-medium">
            Easily get complete, up-to-date and accurate data about customers
          </h2>

          {/* Desktop: keep buttons directly under headings */}
          <div className="hidden xl:block mt-6">
            <CtaButtons />
          </div>
        </div>

        {/* RIGHT: graphic (DESKTOP only) */}
        <div className="hidden xl:flex justify-center xl:justify-end">
          <div className="w-[350px]">
            <Graphic />
          </div>
        </div>
      </div>

      {/* Mobile: show buttons BEFORE the graphic */}
      <div className="w-full max-w-6xl mx-auto xl:hidden mt-6">
        <div className="w-full max-w-lg mx-auto">
          <CtaButtons />
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-lg px-4">
            <Graphic />
          </div>
        </div>
      </div>
    </section>
  );
}
