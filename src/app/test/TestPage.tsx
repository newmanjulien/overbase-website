"use client";

import { useEffect } from "react";
import { useTest } from "./TestContext";
import { TestPageLayout } from "../../components/layouts/TestPageLayout";
import { Input } from "../../components/ui/input";
import { DATASOURCES } from "./step3/datasources";

interface TestPageProps {
  onHome: () => void;
  onNext: () => void;
}

export function TestPage({ onHome, onNext }: TestPageProps) {
  const { email, setEmail } = useTest();

  // Preload all datasource logos in the background
  useEffect(() => {
    DATASOURCES.forEach((ds) => {
      const img = new window.Image();
      img.src = ds.logo;
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <TestPageLayout
      title="Test our in-depth answers"
      description="Quickly and easily test how in-depth and reliable our answers are with your own data"
      onHome={onHome}
      onSubmit={handleSubmit}
      primaryActionText="Test for $100"
    >
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
    </TestPageLayout>
  );
}
