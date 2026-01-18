"use client";

import { useRouter } from "next/navigation";
import { TestPage } from "./TestPage";

export default function TestRoute() {
  const router = useRouter();

  return (
    <TestPage
      onHome={() => router.push("/")}
      onNext={() => router.push("/test/step2")}
    />
  );
}
