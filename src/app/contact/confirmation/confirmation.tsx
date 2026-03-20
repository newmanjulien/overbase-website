"use client";

import { useRouter } from "next/navigation";
import { FormPageLayout } from "@/components/layouts/form-page-layout";

export default function ContactConfirmation() {
  const router = useRouter();

  return (
    <FormPageLayout
      title={
        <h1 className="text-4xl font-medium tracking-tight text-gray-900">
          Thanks for reaching out
        </h1>
      }
      description="Your message has been sent. We&apos;ll follow up soon."
      onLogoClick={() => router.push("/")}
    />
  );
}
