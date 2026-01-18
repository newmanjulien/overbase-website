"use client";

import { useRouter } from "next/navigation";
import { TestConfirmationPage } from "./TestConfirmationPage";

export default function TestConfirmationRoute() {
  const router = useRouter();

  return <TestConfirmationPage onHome={() => router.push("/")} />;
}
