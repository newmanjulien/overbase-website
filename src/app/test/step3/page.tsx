"use client";

import { useRouter } from "next/navigation";
import { TestStep3 } from "./TestStep3";
import { useTestEntryPoint } from "../../../hooks/useTestEntryPoint";

export default function TestStep3Route() {
  const router = useRouter();
  const { entryPoint } = useTestEntryPoint();

  return (
    <TestStep3
      onLogoClick={() => router.push(entryPoint)}
      onBack={() => router.back()}
      onNext={() => router.push("/test/confirmation")}
    />
  );
}
