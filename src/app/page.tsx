"use client";

import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { HeroSection } from "./HeroSection";
import { CEOLetter } from "./CEOLetter";
import { Footer } from "../components/Footer";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        onJoinWaitlist={() => router.push("/waitlist")}
        onPricingClick={() => router.push("/pricing")}
      />
      <HeroSection
        onJoinWaitlist={() => router.push("/waitlist")}
        onDemo={() =>
          window.open("https://cal.com/juliennewman/10min", "_blank")
        }
      />
      <CEOLetter onJoinWaitlist={() => router.push("/waitlist")} />
      <Footer />
    </div>
  );
}
