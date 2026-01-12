"use client";

import Image from "next/image";

interface ConfirmationPageProps {
  onHome: () => void;
}

export function ConfirmationPage({ onHome }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-surface">
        {/* Header with logo back button */}
        <div className="relative z-50 px-6 md:px-12 lg:px-24 py-8">
          <button type="button" aria-label="Go back" onClick={onHome}>
            <Image
              src="/logo.png"
              alt="Overbase logo"
              width={51}
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
              <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-medium">
                We&apos;ll reach out soon
              </h1>
              <p className="text-sm text-gray-900 leading-relaxed">
                Thank you for signing up and we look forward to collaborating
                soon
              </p>
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
