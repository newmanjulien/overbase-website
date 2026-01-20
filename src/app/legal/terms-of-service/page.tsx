"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { TermsOfService } from "./TermsOfService";

export default function TermsOfServicePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header
        onLogoClick={() => router.push("/")}
        initialBackgroundColor="var(--color-surface)"
      />
      <TermsOfService />
      <Footer />
    </div>
  );
}
