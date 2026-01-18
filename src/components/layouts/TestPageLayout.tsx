"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../../components/ui/button";

interface TestPageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  onHome: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  primaryActionText?: string;
  isPrimaryDisabled?: boolean;
  isLoading?: boolean;
  error?: string | null;
  onBack?: () => void;
}

export function TestPageLayout({
  children,
  title,
  description,
  onHome,
  onSubmit,
  primaryActionText,
  isPrimaryDisabled,
  isLoading,
  error,
  onBack,
}: TestPageLayoutProps) {
  const content = (
    <>
      <div className="space-y-4 text-center">
        <h1 className="text-4xl text-gray-900 tracking-tight">{title}</h1>
        <p className="text-sm text-gray-900 leading-relaxed">{description}</p>
      </div>
      {children}

      {(primaryActionText || onBack || error) && (
        <div className="space-y-4 w-full">
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <div className="pt-2 space-y-3">
            {primaryActionText && (
              <Button
                type={onSubmit ? "submit" : "button"}
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white p-4 text-sm rounded-lg"
                disabled={isLoading || isPrimaryDisabled}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  primaryActionText
                )}
              </Button>
            )}

            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                disabled={isLoading}
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left side - Content */}
      <div className="flex-1 flex flex-col bg-surface relative">
        {/* Header with logo */}
        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8">
          <button type="button" aria-label="Go home" onClick={onHome}>
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

        {/* Content Centered */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-xs space-y-6">
            {onSubmit ? (
              <form onSubmit={onSubmit} className="space-y-6">
                {content}
              </form>
            ) : (
              content
            )}
          </div>
        </div>
      </div>

      {/* Right side - Video background */}
      <div className="flex-1 relative hidden lg:block">
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
