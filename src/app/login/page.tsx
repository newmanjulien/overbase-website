"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/FormPageLayout";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <FormPageLayout
      title="Welcome to Overbase"
      description=""
      onLogoClick={() => router.push("/")}
      primaryActionText="Continue"
      isPrimaryDisabled
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
    </FormPageLayout>
  );
}
