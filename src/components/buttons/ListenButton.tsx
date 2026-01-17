"use client";

import { useState, useRef, useEffect } from "react";
import { Pause } from "lucide-react";

function AudioWaveIcon({
  size = 16,
  strokeWidth = 1.5,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="6" x2="8" y2="18" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="16" y1="4" x2="16" y2="20" />
      <line x1="20" y1="9" x2="20" y2="15" />
    </svg>
  );
}

interface ListenButtonProps {
  label?: string;
  pauseLabel?: string;
}

export function ListenButton({
  label = "Listen",
  pauseLabel = "Pause",
}: ListenButtonProps) {
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

  const Icon = isPlaying ? Pause : AudioWaveIcon;

  return (
    <button
      type="button"
      onClick={handleListenClick}
      className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
        isPlaying
          ? "text-gray-500/70"
          : "text-gray-400/80 hover:text-gray-500/70"
      }`}
    >
      <Icon size={17} />
      {isPlaying ? "Pause" : "Listen"}
    </button>
  );
}
