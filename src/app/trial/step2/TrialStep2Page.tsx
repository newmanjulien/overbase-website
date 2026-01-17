"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

interface TrialStep2PageProps {
  email: string;
  onHome: () => void;
  onBack: () => void;
  onSubmit: (data: { email: string; useCase: string }) => void;
}

export function TrialStep2Page({
  email,
  onHome,
  onBack,
  onSubmit,
}: TrialStep2PageProps) {
  const [useCase, setUseCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await onSubmit({ email, useCase });
    } catch {
      setError("Oops, something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col bg-surface">
        {/* Header with logo */}
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

        {/* Form content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 -mt-16">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-medium">
                Your test question
              </h1>
              <p className="text-sm text-gray-900 leading-relaxed">
                We'll email you to set up your datasources and help you test
                Overbase on this question
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <label htmlFor="useCase" className="sr-only">
                  What question do you want to get answered as a test?
                </label>
                <textarea
                  id="useCase"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="What question do you want to get answered as a test?"
                  rows={5}
                  required
                  disabled={loading}
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div className="pt-4 space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white p-4 text-sm rounded-lg"
                  disabled={loading}
                >
                  {loading ? (
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
                    "Done"
                  )}
                </Button>

                <button
                  type="button"
                  onClick={onBack}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  disabled={loading}
                >
                  ← Back
                </button>
              </div>
            </form>
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
