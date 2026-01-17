"use client";

import { useRouter } from "next/navigation";
import { HotkeyButton } from "../components/buttons/HotkeyButton";
import { TextCarousel } from "../components/TextCarousel";

// Displayed in the graphic
const TEXTS = [
  "EMEA is telling me they'll hit their forecast. How likely is that? What are their weakest spots?",
  "Take the deals which are projected to close next month. Review the related emails and Gong recordings. Give me revised confidence scores for each one",
  "Which deals from next quarter could we pull forward most easily if we gave them a discount?",
  "Which team is over-performing but I can't tell in the new APAC numbers?",
];

export function HeroSection() {
  const router = useRouter();

  const handleTrialClick = () => router.push("/trial");
  const handleDemo = () =>
    window.open("https://cal.com/juliennewman/julien", "_blank");

  return (
    <section className="flex flex-col px-6 sm:px-4 md:px-8 lg:px-12 xl:px-24 pt-26 pb-17 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-12 xl:gap-24 scale-[0.98]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-md text-center md:text-left scale-[0.90]">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-tight font-semibold">
            Agentic Analyst for{" "}
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              Revenue Execs
            </span>
          </h1>

          <h2 className="mt-6 text-xl text-gray-600 font-medium">
            Get the in-depth answers you need to pinpoint the right actions to
            take
          </h2>

          {/* Desktop buttons - now visible at md */}
          <div className="hidden md:flex mt-6 gap-3 xl:gap-4">
            <HotkeyButton
              hotkey="t"
              onClick={handleTrialClick}
              variant="dark"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white p-4 xl:p-5 text-base rounded-lg"
            >
              Try for $100
            </HotkeyButton>

            <HotkeyButton
              hotkey="d"
              onClick={handleDemo}
              variant="light"
              size="lg"
              className="bg-gray-100 hover:bg-gray-200/60 text-black p-4 xl:p-5 text-base rounded-lg"
            >
              Demo with our CEO
            </HotkeyButton>
          </div>
        </div>

        {/* === Right Section: Graphic - now visible at md === */}
        <div className="hidden md:flex justify-center md:justify-end shrink-0">
          <div className="w-[350px]">
            <TextCarousel texts={TEXTS} />
          </div>
        </div>
      </div>

      {/* === Mobile Layout (only shown below md) === */}
      <div className="w-full max-w-6xl mx-auto md:hidden mt-6 flex flex-col items-center gap-6">
        <HotkeyButton
          hotkey="w"
          onClick={handleTrialClick}
          variant="dark"
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white p-5 text-base rounded-lg w-full max-w-lg"
        >
          Try for $100
        </HotkeyButton>

        <HotkeyButton
          hotkey="f"
          onClick={handleDemo}
          variant="light"
          size="lg"
          className="bg-gray-50 hover:bg-gray-100 text-black p-5 text-base rounded-lg w-full max-w-lg"
        >
          Demo with our CEO
        </HotkeyButton>

        <div className="mt-12 w-full max-w-lg px-4">
          <TextCarousel texts={TEXTS} />
        </div>
      </div>
    </section>
  );
}
