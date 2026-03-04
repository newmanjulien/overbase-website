"use client";

import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";

export default function ConfirmationRoute() {
  const router = useRouter();

  return (
    <FormPageLayout
      title={
        <h1 className="text-4xl text-gray-900 tracking-tight font-medium">
          We&apos;ll reach out soon
        </h1>
      }
      description="Thank you for signing up. We look forward to collaborating soon."
      onLogoClick={() => router.push("/")}
    />
  );
}
