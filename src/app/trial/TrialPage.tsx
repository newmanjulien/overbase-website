"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface TrialPageProps {
  onHome: () => void;
  onNext: (email: string) => void;
}

export function TrialPage({ onHome, onNext }: TrialPageProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(email);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col bg-surface relative">
        {/* Header with logo */}
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

        {/* Form content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-xl md:text-4xl text-gray-900 tracking-tight font-medium">
                Try for $100
              </h1>
              <p className="text-sm text-gray-900 leading-relaxed">
                Quickly and easily test our in-depth and reliable answers with
                your own data
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <label htmlFor="email" className="sr-only">
                  What's your work email?
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="What's your work email?"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white p-4 text-sm rounded-lg"
              >
                Let's test this out
              </Button>
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
