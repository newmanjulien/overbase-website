"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Reviews from "./Reviews";

export default function ReviewsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLogoClick={() => router.push("/")}
        showJoinWaitlist
        onPricingClick={() => router.push("/pricing")}
      />
      <Reviews />
      <Footer />
    </div>
  );
}
