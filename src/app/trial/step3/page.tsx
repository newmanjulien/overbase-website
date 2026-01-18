"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TrialStep3Page } from "./TrialStep3Page";

function TrialStep3Content() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";
  const useCase = searchParams.get("useCase") || "";

  // If no email or useCase, redirect back to step 1
  if (!email || !useCase) {
    router.push("/trial");
    return null;
  }

  const handleSubmit = async (data: {
    email: string;
    useCase: string;
    datasource1: string;
    datasource2: string;
    datasource3: string;
  }) => {
    const res = await fetch("/api/send-trial-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error || "Something went wrong");

    router.push("/trial/confirmation");
  };

  return (
    <TrialStep3Page
      email={email}
      useCase={useCase}
      onHome={() => router.push("/")}
      onBack={() => router.back()}
      onSubmit={handleSubmit}
    />
  );
}

export default function TrialStep3Route() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <TrialStep3Content />
    </Suspense>
  );
}
