"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import { ROICalculator } from "./ROI";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLogoClick={() => router.push("/")} // 👈 makes the logo go home
        onJoinWaitlist={() => router.push("/waitlist")} // 👈 join waitlist button
      />{" "}
      <Pricing onJoinWaitlist={() => router.push("/waitlist")} />
      <ROICalculator />
      <FAQ />
      <Footer />
    </div>
  );
}
