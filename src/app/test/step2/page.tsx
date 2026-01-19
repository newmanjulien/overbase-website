"use client";

import { useRouter } from "next/navigation";
import { TestStep2 } from "./TestStep2";

export default function TestStep2Route() {
  const router = useRouter();

  return (
    <TestStep2
      onLogoClick={() => router.back()}
      onBack={() => router.back()}
      onNext={() => router.push("/test/step3")}
    />
  );
}
