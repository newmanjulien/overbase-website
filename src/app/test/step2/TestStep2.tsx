"use client";

import { useEffect } from "react";
import { useTest } from "../../../lib/TestContext";
import { useRouter } from "next/navigation";
import { TestPageLayout } from "../../../components/layouts/TestPageLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

interface TestStep2Props {
  onLogoClick: () => void;
  onBack: () => void;
  onNext: () => void;
}

const SUGGESTED_QUESTIONS = [
  {
    label: "Revenue by product",
    value:
      "What's my revenue breakdown by product line over the last 12 months?",
  },
  {
    label: "User engagement",
    value:
      "The user engagement numbers for our AI Teammates product seem healthy. But which accounts and which user persona have the least healthy engagement?",
  },
  {
    label: "Sales pipeline health",
    value:
      "What's the current state of our sales pipeline and where are the bottlenecks?",
  },
  {
    label: "Marketing ROI",
    value: "What's our customer acquisition cost by marketing channel?",
  },
  {
    label: "Custom question",
    value: "custom",
  },
];

export function TestStep2({ onLogoClick, onBack, onNext }: TestStep2Props) {
  const router = useRouter();
  const { email, useCase, setUseCase } = useTest();

  // Gatekeeping: Redirect to step 1 if email is missing
  useEffect(() => {
    if (!email) {
      router.push("/test");
    }
  }, [email, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleSuggestionChange = (value: string) => {
    if (value === "custom") {
      setUseCase("");
    } else {
      setUseCase(value);
    }
  };

  return (
    <TestPageLayout
      title="What question do you want to test?"
      description=""
      onLogoClick={onLogoClick}
      onBack={onBack}
      onSubmit={handleSubmit}
      primaryActionText="1 last step"
    >
      <div className="space-y-3">
        <Select onValueChange={handleSuggestionChange}>
          <SelectTrigger className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md">
            <SelectValue placeholder="Start with a suggested question..." />
          </SelectTrigger>
          <SelectContent>
            {SUGGESTED_QUESTIONS.map((q) => (
              <SelectItem key={q.label} value={q.value}>
                {q.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <label htmlFor="useCase" className="sr-only">
          Question you want to test
        </label>
        <textarea
          id="useCase"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
          placeholder="Or type your own question..."
          rows={5}
          required
        />
      </div>
    </TestPageLayout>
  );
}
