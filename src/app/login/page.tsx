"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TestPageLayout } from "@/components/layouts/TestPageLayout";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleLogoClick = () => {
    router.back();
  };

  return (
    <TestPageLayout
      title="Welcome to Overbase"
      description=""
      onLogoClick={handleLogoClick}
      primaryActionText="Continue"
      isPrimaryDisabled={true}
    >
      <div className="space-y-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-3 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
          placeholder="Email"
          required
        />
      </div>
    </TestPageLayout>
  );
}
