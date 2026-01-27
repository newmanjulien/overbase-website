"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../../components/ui/button";

interface TestPageLayoutProps {
  children?: ReactNode;
  title?: ReactNode;
  description?: string;
  onLogoClick: () => void;
  onSubmit?: (e: React.FormEvent) => void;
  primaryActionText?: string;
  isPrimaryDisabled?: boolean;
  isLoading?: boolean;
  error?: string | null;
  onBack?: () => void;
  footer?: ReactNode;
  step?: number;
  totalSteps?: number;
}

export function TestPageLayout({
  children,
  title,
  description,
  onLogoClick,
  onSubmit,
  primaryActionText,
  isPrimaryDisabled,
  isLoading,
  error,
  onBack,
  footer,
  step,
  totalSteps,
}: TestPageLayoutProps) {
  const showStepIndicator =
    typeof step === "number" && typeof totalSteps === "number";
  const content = (
    <>
      {(title || description || showStepIndicator) && (
        <div className="space-y-4 text-center">
          {showStepIndicator && (
            <div
              className="flex items-center justify-center gap-2"
              aria-label={`Step ${step} of ${totalSteps}`}
            >
              {Array.from({ length: totalSteps }).map((_, index) => {
                const dotIndex = index + 1;
                return (
                  <span
                    key={dotIndex}
                    className={`h-2 w-2 rounded-full ${
                      dotIndex <= step ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                );
              })}
            </div>
          )}
          {title &&
            (typeof title === "string" ? (
              <h1 className="text-3xl text-gray-900 font-medium tracking-tight">
                {title}
              </h1>
            ) : (
              title
            ))}
          {description && (
            <p className="text-sm text-gray-900 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
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
          {footer}
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
          <button type="button" aria-label="Go back" onClick={onLogoClick}>
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
          <source src="/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
