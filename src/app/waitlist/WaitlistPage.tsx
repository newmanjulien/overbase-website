"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Logo from "../../components/ui/Logo";
import { AnimatedBackground } from "../../components/AnimatedBackground";

interface WaitlistPageProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function WaitlistPage({ onBack, onSubmit }: WaitlistPageProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-waitlist-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      onSubmit(); // call parent callback
    } catch (err) {
      console.error("Email send failed:", err);
      alert("Oops, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header with logo */}
        <div className="px-6 md:px-12 lg:px-24 py-8">
          <button
            type="button"
            aria-label="Go back"
            onClick={onBack} // call parent callback
            className="h-11 w-auto"
          >
            <div className="h-full aspect-[1000/600]">
              <Logo />
            </div>
          </button>
        </div>

        {/* Form content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 -mt-16">
          <div className="w-full max-w-xs space-y-8">
            <div className="space-y-8 text-center">
              <h1 className="text-3xl md:text-4xl text-gray-900 tracking-tight font-bold">
                Join the waitlist
              </h1>
              <p className="text-md text-gray-900 leading-relaxed">
                We still onboard new clients one at a time to be sure we make
                hndl work for you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-5 text-md border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="Work email"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white p-6 text-md rounded-lg"
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
                    Adding to waitlist...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - Animated background */}
      <AnimatedBackground />
    </div>
  );
}
