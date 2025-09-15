"use client";

import { useEffect, useState } from "react";

export function Graphic() {
  const texts = [
    "I have an upcoming QBR with the Docusign account. Can you update the numbers in the attached deck? (it's the deck from our last QBR)",
    "Check if Docusign has any support tickets or bug reports. Tell me what happened to each one. Especially if they aren't resolved",
    "Look at all of my accounts to see if any of the champions changed jobs. Do this by checking LinkedIn",
    "Look at the usage data from all my accounts to find the 10 accounts where there’s been the largest drop in usage",
  ];

  const [index, setIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Typing effect
  useEffect(() => {
    if (!isTypingDone && index < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 20); // typing speed
      return () => clearTimeout(timeout);
    }
    if (index === texts[currentTextIndex].length) {
      setIsTypingDone(true);
    }
  }, [index, isTypingDone, currentTextIndex, texts]);

  // Wait after finishing typing, then cycle to next text
  useEffect(() => {
    if (isTypingDone) {
      const hold = setTimeout(() => {
        setIndex(0);
        setIsTypingDone(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 5000); // 5 seconds hold after full text
      return () => clearTimeout(hold);
    }
  }, [isTypingDone, texts.length]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-6">
        <div className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 text-base whitespace-pre-wrap">
          {/* Show placeholder only when no text is typed yet */}
          {index === 0 && <span className="invisible">A</span>}
          {texts[currentTextIndex].slice(0, index)}
        </div>
      </div>
    </div>
  );
}
