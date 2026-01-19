"use client";

import { useRouter } from "next/navigation";
import { TestConfirmationPage } from "./TestConfirmationPage";
import { useTestEntryPoint } from "../../../hooks/useTestEntryPoint";

export default function TestConfirmationRoute() {
  const router = useRouter();
  const { entryPoint } = useTestEntryPoint();

  return <TestConfirmationPage onLogoClick={() => router.push(entryPoint)} />;
}
