"use client";

import { useRouter } from "next/navigation";
import { Test } from "./Test";
import { useTestEntryPoint } from "../../hooks/useTestEntryPoint";

export default function TestRoute() {
  const router = useRouter();
  const { entryPoint } = useTestEntryPoint();

  return (
    <Test
      onLogoClick={() => router.push(entryPoint)}
      onNext={() => router.push("/test/step2")}
    />
  );
}
