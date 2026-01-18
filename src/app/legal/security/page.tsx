"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SecurityAddendum } from "./SecurityAddendum";

export default function SecurityPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header
        onLogoClick={() => router.push("/")}
        showTestButton
        initialBackgroundColor="#fbfbfb"
      />
      <SecurityAddendum />
      <Footer />
    </div>
  );
}
