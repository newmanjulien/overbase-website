"use client";

import { useRouter } from "next/navigation";
import { Test } from "./Test";

export default function TestRoute() {
  const router = useRouter();

  return (
    <Test
      onLogoClick={() => router.back()}
      onNext={() => router.push("/test/step2")}
    />
  );
}
