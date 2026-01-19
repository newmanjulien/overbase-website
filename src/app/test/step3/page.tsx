"use client";

import { useRouter } from "next/navigation";
import { TestStep3Page } from "./TestStep3Page";

export default function TestStep3Route() {
  const router = useRouter();

  return (
    <TestStep3Page
      onLogoClick={() => router.back()}
      onBack={() => router.back()}
      onNext={() => router.push("/test/confirmation")}
    />
  );
}
