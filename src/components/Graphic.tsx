"use client";

import { useEffect, useState } from "react";

export function Graphic({
  texts,
  typingSpeedMs = 30,
  holdMs = 3000,
}: {
  texts: string[];
  typingSpeedMs?: number;
  holdMs?: number;
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const hasTexts = Array.isArray(texts) && texts.length > 0;
  const fullText = hasTexts ? texts[currentTextIndex] : "";
  const isTyping = charIndex < fullText.length;

  // Reset when the texts list changes
  useEffect(() => {
    setCurrentTextIndex(0);
    setCharIndex(0);
  }, [JSON.stringify(texts)]);

  useEffect(() => {
    if (!hasTexts) return;

    if (isTyping) {
      const timeout = setTimeout(
        () => setCharIndex((i) => i + 1),
        typingSpeedMs
      );
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setCharIndex(0);
        setCurrentTextIndex((i) => (i + 1) % texts.length);
      }, holdMs);
      return () => clearTimeout(hold);
    }
  }, [
    charIndex,
    fullText,
    typingSpeedMs,
    holdMs,
    isTyping,
    hasTexts,
    texts.length,
  ]);

  if (!hasTexts) return null;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-gray-200 rounded-3xl shadow-md p-6">
        <div className="w-full bg-gray-100 rounded-2xl px-4 py-3 text-gray-700 text-sm whitespace-pre-wrap">
          {fullText.slice(0, charIndex)}
          {!isTyping && (
            <span className="animate-[blink_1s_step-start_infinite]">|</span>
          )}
        </div>
      </div>

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
