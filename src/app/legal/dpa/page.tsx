"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { DataProcessingAgreement } from "./DataProcessingAgreement";

export default function DataProcessingAgreementPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header
        onLogoClick={() => router.push("/")}
        showTrialButton
        initialBackgroundColor="#fbfbfb"
      />
      <DataProcessingAgreement />
      <Footer />
    </div>
  );
}
