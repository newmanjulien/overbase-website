"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";

interface TrialConfirmationPageProps {
  onHome: () => void;
}

export function TrialConfirmationPage({ onHome }: TrialConfirmationPageProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-surface relative">
        {/* Header with logo back button */}
        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8">
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
        <div className="flex-1 flex flex-col justify-center items-center md:px-12 lg:px-24">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-8 text-center">
              <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-medium">
                We received your question
              </h1>
              <p className="text-sm text-gray-900 leading-relaxed">
                We'll be in touch with you soon to help you test this question
              </p>
              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white p-4 text-sm rounded-lg"
                  onClick={() => router.push("/")}
                >
                  Back to home
                </Button>
                <Button
                  size="lg"
                  className="flex-1 bg-gray-100 hover:bg-gray-200/60 text-black p-4 text-sm rounded-lg"
                  onClick={() => window.open("/example", "_blank")}
                >
                  See an example
                </Button>
              </div>
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
