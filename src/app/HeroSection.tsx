"use client";

import { useEffect, useRef, memo } from "react";
import { Button } from "../components/ui/button";
import { Graphic } from "../components/Graphic";

// Displayed in the graphic
const TEXTS = [
  "Calculate NRR and GRR for our enterprise accounts",
  "I'm presenting to the Board. Please update all the data in the attached deck",
  "Analyze the Gong recordings of all our discovery calls to find the 5 most common objections in the past 7 days",
  "Look over the customer support chats on Intercom and tell me if there are any emerging problems",
  "Look at Docusign to find all the new contracts we signed with customers in the past 7 days. Then tell me which reps are closing the most deals",
];

// Utility: Skip shortcuts when typing in editable fields
function shouldIgnoreShortcut(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    (target as HTMLInputElement).type === "text"
  );
}

// Small reusable component for displaying a hotkey badge
function HotkeyBadge({
  keyChar,
  variant = "dark",
}: {
  keyChar: string;
  variant?: "dark" | "light";
}) {
  const baseClasses =
    "hidden xl:inline-flex items-center justify-center w-6 h-6 rounded-md text-sm font-bold";
  const variantClasses =
    variant === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black";

  return <span className={`${baseClasses} ${variantClasses}`}>{keyChar}</span>;
}

// CTA Buttons (memoized to avoid re-rendering unnecessarily)
const CtaButtons = memo(function CtaButtons({
  waitlistRef,
  demoRef,
  onJoinWaitlist,
  onDemo,
}: {
  waitlistRef: React.RefObject<HTMLButtonElement | null>;
  demoRef: React.RefObject<HTMLButtonElement | null>;
  onJoinWaitlist: () => void;
  onDemo: () => void;
}) {
  return (
    <div className="flex items-center justify-center xl:justify-start gap-4 mt-2">
      {/* Waitlist button */}
      <Button
        ref={waitlistRef}
        onClick={onJoinWaitlist}
        size="lg"
        className="bg-gray-900 hover:bg-gray-800 text-white p-6 text-base rounded-lg"
      >
        <span className="inline-flex items-center gap-2">
          Join waitlist
          <HotkeyBadge keyChar="W" variant="dark" />
        </span>
      </Button>

      {/* Demo button */}
      <Button
        ref={demoRef}
        onClick={onDemo}
        size="lg"
        className="bg-gray-50 hover:bg-gray-100 text-black p-6 text-base rounded-lg"
      >
        <span className="inline-flex items-center gap-2">
          Demo with our CEO
          <HotkeyBadge keyChar="F" variant="light" />
        </span>
      </Button>
    </div>
  );
});

export function HeroSection({
  onJoinWaitlist,
  onDemo,
}: {
  onJoinWaitlist: () => void;
  onDemo: () => void;
}) {
  const waitlistRef = useRef<HTMLButtonElement | null>(null);
  const demoRef = useRef<HTMLButtonElement | null>(null);

  // Global keyboard shortcuts ("w" = waitlist, "f" = demo)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (shouldIgnoreShortcut(e.target)) return;

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
            Let AI agents easily get any data from anywhere in a secure,
            reliable and complete way
          </h2>

          {/* Desktop buttons */}
          <div className="hidden xl:block mt-6">
            <CtaButtons
              waitlistRef={waitlistRef}
              demoRef={demoRef}
              onJoinWaitlist={onJoinWaitlist}
              onDemo={onDemo}
            />
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
      <div className="w-full max-w-6xl mx-auto xl:hidden mt-6">
        <div className="w-full max-w-lg mx-auto">
          <CtaButtons
            waitlistRef={waitlistRef}
            demoRef={demoRef}
            onJoinWaitlist={onJoinWaitlist}
            onDemo={onDemo}
          />
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-lg px-4">
            <Graphic texts={TEXTS} />
          </div>
        </div>
      </div>
    </section>
  );
}
