"use client";

import { Button } from "../../../components/ui/button";
import Logo from "../../../components/ui/Logo";
import { AnimatedBackground } from "../../../components/AnimatedBackground";

interface ConfirmationPageProps {
  onHome: () => void; // parent controls navigation
}

export function ConfirmationPage({ onHome }: ConfirmationPageProps) {
  const handleTwitterClick = () => {
    window.open("https://x.com/hndlai", "_blank");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header with logo */}
        <div className="px-6 md:px-12 lg:px-24 py-8">
          <button
            type="button"
            aria-label="Go back to home"
            onClick={onHome} // parent callback
            className="h-11 w-auto"
          >
            <div className="h-full aspect-[1000/600]">
              <Logo />
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 -mt-16">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-8 text-center">
              <h1 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-bold">
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
                onClick={onHome} // parent callback
                size="lg"
                className="flex-1 bg-transparent hover:bg-gray-100 text-gray-900 p-6 text-md rounded-lg"
              >
                Go Home
              </Button>

              <Button
                onClick={handleTwitterClick}
                size="lg"
                className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 p-6 text-md rounded-lg"
              >
                Follow us on X
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Animated background */}
      <AnimatedBackground />
    </div>
  );
}
