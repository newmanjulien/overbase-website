"use client";

import { useRouter } from "next/navigation";
import { ConfirmationPage } from "./ConfirmationPage";

export default function ConfirmationRoute() {
  const router = useRouter();

  return <ConfirmationPage onHome={() => router.push("/")} />;
}
