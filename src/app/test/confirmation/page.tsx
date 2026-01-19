"use client";

import { useRouter } from "next/navigation";
import { TestConfirmationPage } from "./TestConfirmationPage";
import { useTestEntryPoint } from "../../../hooks/useTestEntryPoint";

export default function TestConfirmationRoute() {
  const router = useRouter();
  const { entryPoint, clearEntryPoint } = useTestEntryPoint();

  const handleLogoClick = () => {
    clearEntryPoint();
    router.push(entryPoint);
  };

  return <TestConfirmationPage onLogoClick={handleLogoClick} />;
}
