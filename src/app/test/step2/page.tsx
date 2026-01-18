"use client";

import { useRouter } from "next/navigation";
import { TestStep2Page } from "./TestStep2Page";

export default function TestStep2Route() {
  const router = useRouter();

  return (
    <TestStep2Page
      onHome={() => router.push("/")}
      onBack={() => router.back()}
      onNext={() => router.push("/test/step3")}
    />
  );
}
