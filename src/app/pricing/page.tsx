"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLogoClick={() => router.push("/")}
        onJoinWaitlist={() => router.push("/waitlist")}
      />
      <Pricing onJoinWaitlist={() => router.push("/waitlist")} />
      <FAQ />
      <Footer />
    </div>
  );
}
