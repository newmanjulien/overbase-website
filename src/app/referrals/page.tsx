"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Referrals } from "./Referrals";

export default function ReferralsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLogoClick={() => router.push("/")} // 👈 makes the logo go home
        onJoinWaitlist={() => router.push("/waitlist")} // 👈 join waitlist button
        onPricingClick={() => router.push("/pricing")}
      />{" "}
      <Referrals />
      <Footer />
    </div>
  );
}
