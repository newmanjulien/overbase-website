"use client";

import { useState, useEffect } from "react";
import { useTest } from "../TestContext";
import { useRouter } from "next/navigation";
import { TestPageLayout } from "../../../components/layouts/TestPageLayout";

interface TestStep2PageProps {
  onHome: () => void;
  onBack: () => void;
  onNext: () => void;
}

export function TestStep2Page({ onHome, onBack, onNext }: TestStep2PageProps) {
  const router = useRouter();
  const { email, useCase, setUseCase } = useTest();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Gatekeeping: Redirect to step 1 if email is missing
  useEffect(() => {
    if (!email) {
      router.push("/test");
    }
  }, [email, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      onNext();
    } catch {
      setError("Oops, something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <TestPageLayout
      title="Your test question"
      description="Pick a question where you can easily share the data we will need to answer"
      onHome={onHome}
      onBack={onBack}
      onSubmit={handleSubmit}
      primaryActionText="1 more step"
      isLoading={loading}
      error={error}
    >
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
    </TestPageLayout>
  );
}
