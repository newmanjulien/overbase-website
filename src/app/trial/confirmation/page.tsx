"use client";

import { useRouter } from "next/navigation";
import { TrialConfirmationPage } from "./TrialConfirmationPage";

export default function TrialConfirmationRoute() {
  const router = useRouter();

  return <TrialConfirmationPage onHome={() => router.push("/")} />;
}
