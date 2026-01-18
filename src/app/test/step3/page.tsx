"use client";

import { useRouter } from "next/navigation";
import { TestStep3Page } from "./TestStep3Page";

export default function TestStep3Route() {
  const router = useRouter();

  return (
    <TestStep3Page
      onHome={() => router.push("/")}
      onBack={() => router.back()}
      onNext={() => router.push("/test/confirmation")}
    />
  );
}
