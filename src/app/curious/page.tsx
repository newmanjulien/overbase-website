"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Curious } from "./Curious";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        logoSrc="/logo_marble.png"
        onLogoClick={() => router.push("/")}
        onJoinWaitlist={() => router.push("/waitlist")}
        onPricingClick={() => router.push("/pricing")}
      />{" "}
      <Curious />
      <Footer />
    </div>
  );
}
