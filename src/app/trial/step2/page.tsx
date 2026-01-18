"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TrialStep2Page } from "./TrialStep2Page";

function TrialStep2Content() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  // If no email, redirect back to step 1
  if (!email) {
    router.push("/trial");
    return null;
  }

  const handleSubmit = async (data: { email: string; useCase: string }) => {
    const params = new URLSearchParams({
      email: data.email,
      useCase: data.useCase,
    });
    router.push(`/trial/step3?${params.toString()}`);
  };

  return (
    <TrialStep2Page
      email={email}
      onHome={() => router.push("/")}
      onBack={() => router.back()}
      onSubmit={handleSubmit}
    />
  );
}

export default function TrialStep2Route() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <TrialStep2Content />
    </Suspense>
  );
}
