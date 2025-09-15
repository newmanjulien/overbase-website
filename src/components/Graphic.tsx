"use client";

import { useEffect, useState } from "react";

const TEXTS = [
  "I have an upcoming QBR with the Docusign account. Can you update the numbers in the attached deck? (it's the deck from our last QBR)",
  "Check if Docusign has any support tickets or bug reports. Tell me what happened to each one. Especially if they aren't resolved",
  "Look at all of my accounts to see if any of the champions changed jobs. Do this by checking LinkedIn",
  "Look at the usage data from all my accounts to find the 10 accounts where there's been the largest drop in usage",
];

export function Graphic({ typingSpeedMs = 50, holdMs = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const fullText = TEXTS[currentTextIndex];

  useEffect(() => {
    if (charIndex < fullText.length) {
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
  }, [charIndex, fullText, typingSpeedMs, holdMs]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <div className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-base whitespace-pre-wrap">
          {fullText.slice(0, charIndex)}
          <span className="[animation:blink_1s_steps(1)_infinite]">|</span>
        </div>
      </div>
    </div>
  );
}
