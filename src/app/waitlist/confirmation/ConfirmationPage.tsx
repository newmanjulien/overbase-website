"use client";

import { Button } from "../../../components/ui/button";
import Image from "next/image";

interface ConfirmationPageProps {
  onHome: () => void;
}

export function ConfirmationPage({ onHome }: ConfirmationPageProps) {
  const handleTwitterClick = () => {
    window.open("https://x.com/hndlai", "_blank");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header with logo back button */}
        <div className="relative z-50 px-6 md:px-12 lg:px-24 py-8">
          <button type="button" aria-label="Go back" onClick={onHome}>
            <Image
              src="/logo.png"
              alt="Overbase logo"
              width={55}
              height={32}
              className="object-contain"
              priority
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 -mt-16">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-8 text-center">
              <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-bold">
                We&apos;ll reach out soon
              </h1>
              <p className="text-md text-gray-900 leading-relaxed">
                Thank you for signing up and we look forward to collaborating
                soon
              </p>
            </div>

            {/* Two buttons side by side */}
            <div className="flex gap-4">
              <Button
                onClick={onHome}
                size="lg"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white p-6 text-md rounded-lg"
              >
                Go Home
              </Button>

              <Button
                onClick={handleTwitterClick}
                size="lg"
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 p-6 text-md rounded-lg"
                aria-label="Follow us on Twitter"
              >
                Follow us on X
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Video background */}
      <div className="flex-1 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter grayscale"
        >
          <source src="/auth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
