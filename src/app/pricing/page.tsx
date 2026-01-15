"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import { Video } from "./Video";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header onLogoClick={() => router.push("/")} showJoinWaitlist />
      <Pricing />
      <Video />
      <FAQ />
      <Footer />
    </div>
  );
}
