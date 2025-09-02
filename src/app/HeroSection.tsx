"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import Image from "next/image";

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

  return (
    <section className="min-h-screen flex items-center md:items-stretch justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-16">
      <div className="w-full md:flex md:items-stretch gap-12">
        {/* LEFT: Content */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-8 max-w-xl mx-auto md:mx-0 py-12 md:py-0">
          <h1 className="text-6xl text-gray-900 tracking-tight leading-tight text-center md:text-left font-bold">
            Assistant for your{" "}
            <span
              style={{
                backgroundColor: "rgba(255, 0, 0, 0.1)",
                color: "#FF5437",
                padding: "2px 3px",
              }}
            >
              personal life
            </span>{" "}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg text-center md:text-left">
            You&apos;re way too busy at work so lets at least{" "}
            <strong>make your personal life unbusy</strong>
          </p>

          <div className="flex items-center space-x-4 mt-2">
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
        </div>

        {/* RIGHT: Image (Desktop only) */}
        <div className="hidden xl:block">
          <Image
            src="/point.png"
            alt="AI agent"
            width={800} // will be overridden by Tailwind classes
            height={600} // just needs to be proportional
            className="w-full h-full object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
