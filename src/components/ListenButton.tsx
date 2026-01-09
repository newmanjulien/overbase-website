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

  const Icon = isPlaying ? Pause : Headphones;

  return (
    <button
      type="button"
      onClick={handleListenClick}
      className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
        isPlaying ? "text-gray-500" : "text-gray-400 hover:text-gray-500"
      }`}
    >
      <Icon size={16} />
      {isPlaying ? "Pause" : "Listen"}
    </button>
  );
}
