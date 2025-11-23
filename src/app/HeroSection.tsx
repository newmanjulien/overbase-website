"use client";

import { HotkeyButton } from "../components/HotkeyButton";
import { Graphic } from "../components/Graphic";

// Displayed in the graphic
const TEXTS = [
  "Calculate NRR and GRR for our enterprise accounts",
  "I'm presenting to the Board. Please update all the data in the attached deck",
  "Analyze the Gong recordings of all our discovery calls to find the 5 most common objections in the past 7 days",
  "Look over the customer support chats on Intercom and tell me if there are any emerging problems",
  "Look at Docusign to find all the new contracts we signed with customers in the past 7 days. Then tell me which reps are closing the most deals",
];

export function HeroSection({
  onJoinWaitlist,
  onDemo,
}: {
  onJoinWaitlist: () => void;
  onDemo: () => void;
}) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 xl:px-24 pt-14">
      <div className="w-full max-w-5xl mx-auto flex flex-col xl:flex-row items-center gap-24">
        {/* === Left Section: Headings & CTA === */}
        <div className="w-full max-w-md text-center xl:text-left">
          <h1 className="text-5xl text-gray-900 tracking-tight leading-tight font-semibold">
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded">
              It's too hard
            </span>{" "}
            to get the data you need
          </h1>

          <h2 className="mt-6 text-md text-gray-600 font-medium">
            Let AI agents easily get any data from anywhere in a fully secure,
            reliable and complete way
          </h2>

          {/* Desktop buttons */}
          <div className="hidden xl:flex mt-6 gap-4">
            <HotkeyButton
              hotkey="w"
              onClick={onJoinWaitlist}
              variant="dark"
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-base rounded-lg"
            >
              Join waitlist
            </HotkeyButton>

            <HotkeyButton
              hotkey="f"
              onClick={onDemo}
              variant="light"
              size="lg"
              className="bg-gray-50 hover:bg-gray-100 text-black p-6 text-base rounded-lg"
            >
              Demo with our CEO
            </HotkeyButton>
          </div>
        </div>

        {/* === Right Section: Graphic (Desktop only) === */}
        <div className="hidden xl:flex justify-center xl:justify-end">
          <div className="w-[350px]">
            <Graphic texts={TEXTS} />
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
          className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-base rounded-lg w-full max-w-lg"
        >
          Join waitlist
        </HotkeyButton>

        <HotkeyButton
          hotkey="f"
          onClick={onDemo}
          variant="light"
          size="lg"
          className="bg-gray-50 hover:bg-gray-100 text-black p-6 text-base rounded-lg w-full max-w-lg"
        >
          Demo with our CEO
        </HotkeyButton>

        <div className="mt-12 w-full max-w-lg px-4">
          <Graphic texts={TEXTS} />
        </div>
      </div>
    </section>
  );
}
