"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { SubProcessors } from "./SubProcessors";

export default function SubProcessorsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header
        onLogoClick={() => router.push("/")}
        showTestButton
        initialBackgroundColor="#fbfbfb"
      />
      <SubProcessors />
      <Footer />
    </div>
  );
}
