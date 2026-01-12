"use client";

import { HotkeyButton } from "../components/HotkeyButton";
import { TextCarousel } from "../components/TextCarousel";

// Displayed in the graphic
const TEXTS = [
  "EMEA is telling me they’ll hit their forecast. How likely is that? What are their weakest spots?",
  "Take the deals which are projected to close next month. Review the related emails and Gong recordings. Give me revised confidence scores for each one",
  "Which deals from next quarter could we pull forward most easily if we gave them a discount?",
  "Which team is over-performing but I can’t tell in the new APAC numbers?",
];

export function HeroSection({
  onJoinWaitlist,
  onDemo,
}: {
  onJoinWaitlist: () => void;
  onDemo: () => void;
}) {
  return (
    <section className="flex flex-col px-6 xl:px-24 pt-26 pb-17 bg-surface">
      <div className="w-full max-w-5xl mx-auto flex flex-col xl:flex-row items-center gap-24 scale-[0.95]">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-md text-center xl:text-left">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-tight font-semibold">
            How Revenue Execs{" "}
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              get answers
            </span>
          </h1>

          <h2 className="mt-6 text-lg text-gray-600 font-medium">
            Get the in-depth answers you need to pinpoint the right actions to
            take
          </h2>

          {/* Desktop buttons */}
          <div className="hidden xl:flex mt-6 gap-4">
            <HotkeyButton
              hotkey="w"
              onClick={onJoinWaitlist}
              variant="dark"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white p-5 text-base rounded-lg"
            >
              Join waitlist
            </HotkeyButton>

            <HotkeyButton
              hotkey="d"
              onClick={onDemo}
              variant="light"
              size="lg"
              className="bg-gray-100 hover:bg-gray-200/60 text-black p-5 text-base rounded-lg"
            >
              Demo with our CEO
            </HotkeyButton>
          </div>
        </div>

        {/* === Right Section: Graphic (Desktop only) === */}
        <div className="hidden xl:flex justify-center xl:justify-end">
          <div className="w-[350px]">
            <TextCarousel texts={TEXTS} />
          </div>
        </div>
      </div>

      {/* === Mobile Layout === */}
      <div className="w-full max-w-6xl mx-auto xl:hidden mt-6 flex flex-col items-center gap-6">
        <HotkeyButton
          hotkey="w"
          onClick={onJoinWaitlist}
          variant="dark"
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white p-5 text-base rounded-lg w-full max-w-lg"
        >
          Join waitlist
        </HotkeyButton>

        <HotkeyButton
          hotkey="f"
          onClick={onDemo}
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
