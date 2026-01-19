"use client";

import { useRouter } from "next/navigation";
import { TestStep2 } from "./TestStep2";
import { useTestEntryPoint } from "../../../hooks/useTestEntryPoint";

export default function TestStep2Route() {
  const router = useRouter();
  const { entryPoint } = useTestEntryPoint();

  return (
    <TestStep2
      onLogoClick={() => router.push(entryPoint)}
      onBack={() => router.back()}
      onNext={() => router.push("/test/step3")}
    />
  );
}
