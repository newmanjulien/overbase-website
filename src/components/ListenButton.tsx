"use client";

import { useState, useRef, useEffect } from "react";
import { Headphones, Pause } from "lucide-react";

export function ListenButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance once
    audioRef.current = new Audio("/letter.mp3");

    // Reset button state when audio ends
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, []);

  const handleListenClick = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      type="button"
      onClick={handleListenClick}
      className={`flex items-center gap-1.5 px-4 py-2 border border-transparent rounded-lg text-gray-800 transition-colors cursor-pointer ${
        isPlaying ? "bg-[#ffff62]" : "bg-[#ffffb1] hover:bg-[#ffff62]"
      }`}
    >
      {isPlaying ? (
        <>
          <Pause size={16} />
          <span className="text-sm font-medium">Pause</span>
        </>
      ) : (
        <>
          <Headphones size={16} />
          <span className="text-sm font-medium">Listen</span>
        </>
      )}
    </button>
  );
}
