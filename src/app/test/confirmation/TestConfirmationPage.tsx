"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import { useTest } from "../TestContext";
import { TestPageLayout } from "../../../components/layouts/TestPageLayout";
import { useTestEntryPoint } from "../../../hooks/useTestEntryPoint";

interface TestConfirmationPageProps {
  onLogoClick: () => void;
}

export function TestConfirmationPage({
  onLogoClick,
}: TestConfirmationPageProps) {
  const router = useRouter();
  const { clearTestData } = useTest();
  const { clearEntryPoint } = useTestEntryPoint();

  useEffect(() => {
    clearTestData();
    clearEntryPoint();
  }, [clearTestData, clearEntryPoint]);

  return (
    <TestPageLayout
      title="Question received"
      description="Someone from our team will be in touch to set up your datasources and test this question"
      onLogoClick={onLogoClick}
    >
      <div className="flex gap-3 pt-4">
        <Button
          size="lg"
          className="flex-1 bg-gray-900 hover:bg-gray-800 text-white p-4 text-sm rounded-lg"
          onClick={() => router.push("/")}
        >
          Back to home
        </Button>
        <Button
          size="lg"
          className="flex-1 bg-gray-100 hover:bg-gray-200/60 text-black p-4 text-sm rounded-lg"
          onClick={() => window.open("/example", "_blank")}
        >
          See an example
        </Button>
      </div>
    </TestPageLayout>
  );
}
