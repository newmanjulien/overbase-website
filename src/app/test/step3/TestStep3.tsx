"use client";

import { useState, useEffect } from "react";
import { useTest } from "../TestContext";
import { useRouter } from "next/navigation";
import { TestPageLayout } from "../../../components/layouts/TestPageLayout";
import { DatasourceCombobox } from "./DatasourceCombobox";

interface TestStep3Props {
  onLogoClick: () => void;
  onBack: () => void;
  onNext: () => void;
}

export function TestStep3({ onLogoClick, onBack, onNext }: TestStep3Props) {
  const router = useRouter();
  const {
    email,
    useCase,
    datasource1,
    setDatasource1,
    datasource2,
    setDatasource2,
    datasource3,
    setDatasource3,
    submitTest,
  } = useTest();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Gatekeeping: Redirect to step 1 if useCase (or email) is missing
  useEffect(() => {
    if (!email || !useCase) {
      router.push("/test");
    }
  }, [email, useCase, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitTest();
      onNext();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = datasource1;

  return (
    <TestPageLayout
      title="Pick datasources"
      description="What datasources will you connect (and we'll analyze) to answer your question?"
      onLogoClick={onLogoClick}
      onBack={onBack}
      onSubmit={handleSubmit}
      primaryActionText="Submit"
      isLoading={loading}
      isPrimaryDisabled={!isFormValid}
      error={error}
    >
      <div className="space-y-4">
        <DatasourceCombobox
          value={datasource1}
          onChange={setDatasource1}
          placeholder="First datasource"
          disabled={loading}
        />

        <DatasourceCombobox
          value={datasource2}
          onChange={setDatasource2}
          placeholder="Second datasource (optional)"
          disabled={loading}
          disabledValues={[datasource1].filter(Boolean)}
        />

        <DatasourceCombobox
          value={datasource3}
          onChange={setDatasource3}
          placeholder="Third datasource (optional)"
          disabled={loading}
          disabledValues={[datasource1, datasource2].filter(Boolean)}
        />
      </div>
    </TestPageLayout>
  );
}
