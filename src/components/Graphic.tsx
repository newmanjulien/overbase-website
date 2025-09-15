"use client";

import { useEffect, useState } from "react";

const TEXTS = [
  "I have an upcoming QBR with the Docusign account. Can you update the numbers in the attached deck? (it's the deck from our last QBR)",
  "Check if Docusign has any support tickets or bug reports. Tell me what happened to each one. Especially if they aren't resolved",
  "Look at all of my accounts to see if any of the champions changed jobs. Do this by checking LinkedIn",
  "Look at the usage data from all my accounts to find the 10 accounts where there's been the largest drop in usage",
];

export function Graphic({ typingSpeedMs = 30, holdMs = 3000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = TEXTS[currentTextIndex];
  const isTyping = charIndex < fullText.length;

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setCharIndex((i) => i + 1);
      }, typingSpeedMs);
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setCharIndex(0);
        setCurrentTextIndex((i) => (i + 1) % TEXTS.length);
      }, holdMs);
      return () => clearTimeout(hold);
    }
  }, [charIndex, fullText, typingSpeedMs, holdMs, isTyping]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <div className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-base whitespace-pre-wrap">
          {fullText.slice(0, charIndex)}
          {/* Show blinking cursor only after typing ends */}
          {!isTyping && (
            <span className="animate-[blink_1s_step-start_infinite]">|</span>
          )}
        </div>
      </div>

      {/* Inline keyframes so no config/global CSS is needed */}
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
