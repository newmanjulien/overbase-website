"use client";

import { TestProvider, useTest } from "./TestContext";

function TestLayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useTest();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="animate-spin h-8 w-8 border-4 border-gray-900 border-t-transparent rounded-full" />
      </div>
    );
  }

  return <>{children}</>;
}

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TestProvider>
      <TestLayoutContent>{children}</TestLayoutContent>
    </TestProvider>
  );
}
