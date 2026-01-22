"use client";

import { useTest } from "./TestContext";
import { TestPageLayout } from "../../components/layouts/TestPageLayout";
import { Input } from "../../components/ui/input";

interface TestProps {
  onLogoClick: () => void;
  onNext: () => void;
}

export function Test({ onLogoClick, onNext }: TestProps) {
  const { email, setEmail } = useTest();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <TestPageLayout
      title="Get in-depth and reliable answers"
      description="See for yourself how in-depth and reliable our answers are by testing with your own data"
      onLogoClick={onLogoClick}
      onSubmit={handleSubmit}
      primaryActionText="Test for $300"
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
