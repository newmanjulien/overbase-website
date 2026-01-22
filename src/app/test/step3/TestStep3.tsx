"use client";

import { useState, useEffect } from "react";
import { useTest } from "../../../lib/TestContext";
import { useRouter } from "next/navigation";
import { TestPageLayout } from "../../../components/layouts/TestPageLayout";
import { DatasourceCombobox } from "../../../components/DatasourceCombobox";
import { AccessMethodToggle } from "../../../components/AccessMethodToggle";
import { DATASOURCES } from "./datasources";

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
    datasource1AccessMethod,
    setDatasource1AccessMethod,
    datasource2,
    setDatasource2,
    datasource2AccessMethod,
    setDatasource2AccessMethod,
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
      description="What datasources will you connect and will we analyze to answer your question?"
      onLogoClick={onLogoClick}
      onBack={onBack}
      onSubmit={handleSubmit}
      primaryActionText="Submit"
      isLoading={loading}
      isPrimaryDisabled={!isFormValid}
      error={error}
    >
      <div className="space-y-4">
        {/* Datasource 1 */}
        <div className="space-y-2">
          <DatasourceCombobox
            value={datasource1}
            onChange={setDatasource1}
            placeholder="First datasource"
            disabled={loading}
            datasources={DATASOURCES}
          />
          {datasource1 && (
            <AccessMethodToggle
              id="datasource1"
              value={datasource1AccessMethod}
              onChange={setDatasource1AccessMethod}
              disabled={loading}
            />
          )}
        </div>

        {/* Datasource 2 */}
        <div className="space-y-2">
          <DatasourceCombobox
            value={datasource2}
            onChange={setDatasource2}
            placeholder="Second datasource (optional)"
            disabled={loading || !datasource1}
            disabledValues={[datasource1].filter(Boolean)}
            datasources={DATASOURCES}
          />
          {datasource2 && (
            <AccessMethodToggle
              id="datasource2"
              value={datasource2AccessMethod}
              onChange={setDatasource2AccessMethod}
              disabled={loading}
            />
          )}
        </div>
      </div>
    </TestPageLayout>
  );
}
