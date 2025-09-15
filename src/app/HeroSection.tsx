"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Graphic } from "../components/Graphic";

export function HeroSection() {
  const router = useRouter();

  // Handle keyboard press for "w" and for "f"
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "w") {
        router.push("/waitlist");
      }

      if (e.key.toLowerCase() === "f") {
        window.open("https://cal.com/juliennewman/15min", "_blank");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  const CtaButtons = () => (
    <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
      <Button
        onClick={() => router.push("/waitlist")}
        size="lg"
        className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-md rounded-lg"
      >
        <span className="inline-flex items-center gap-2">
          Join waitlist
          <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-700 text-white text-sm font-bold">
            W
          </span>
        </span>
      </Button>

      <a
        href="https://cal.com/juliennewman/15min"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Demo with our CEO"
      >
        <Button
          size="lg"
          className="bg-gray-50 hover:bg-gray-100 text-black p-6 text-md rounded-lg"
        >
          <span className="inline-flex items-center gap-2">
            Demo with our CEO
            <span className="hidden md:inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-200 text-black text-sm font-bold">
              F
            </span>
          </span>
        </Button>
      </a>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16">
      <div className="w-full max-w-6xl mx-auto flex flex-col xl:flex-row items-center xl:items-stretch gap-10 xl:gap-24">
        {/* LEFT (desktop): headings + buttons vertically centered */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <div className="w-full max-w-lg space-y-6">
            <h1 className="text-6xl text-gray-900 tracking-tight leading-tight text-center md:text-left font-bold">
              Customer Success{" "}
              <span
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  color: "#FC3636",
                  padding: "2px 3px",
                }}
              >
                needs easy data
              </span>{" "}
            </h1>

            <h2 className="text-lg text-gray-600 font-medium text-center md:text-left">
              Easily get complete, up-to-date and accurate data about customers
            </h2>

            {/* Desktop/iPad landscape: keep buttons directly under headings */}
            <div className="hidden xl:block">
              <CtaButtons />
            </div>
          </div>
        </div>

        {/* RIGHT: graphic (centered); on mobile/iPad it will come between H2 and buttons */}
        <div className="flex-1 flex justify-center xl:justify-end w-full">
          {/* On mobile/iPad, constrain width to match headings; on desktop let it grow */}
          <div className="w-full max-w-lg xl:max-w-none">
            <Graphic />
          </div>
        </div>
      </div>

      {/* Mobile/iPad: show buttons AFTER the graphic (so graphic sits between H2 and buttons) */}
      <div className="w-full max-w-6xl mx-auto xl:hidden">
        <div className="w-full max-w-lg mx-auto">
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}
