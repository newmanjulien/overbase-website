"use client";

import { useRouter } from "next/navigation";
import { TrialPage } from "./TrialPage";

export default function TrialRoute() {
  const router = useRouter();

  const handleNext = (email: string) => {
    const params = new URLSearchParams({ email });
    router.push(`/trial/step2?${params.toString()}`);
  };

  return <TrialPage onHome={() => router.push("/")} onNext={handleNext} />;
}
