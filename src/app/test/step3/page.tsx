"use client";

import { useRouter } from "next/navigation";
import { TestStep3 } from "./TestStep3";

export default function TestStep3Route() {
  const router = useRouter();

  return (
    <TestStep3
      onLogoClick={() => router.back()}
      onBack={() => router.back()}
      onNext={() => router.push("/test/confirmation")}
    />
  );
}
