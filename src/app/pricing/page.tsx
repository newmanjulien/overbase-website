"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import { Video } from "./Video";

export default function PricingPage() {
  const router = useRouter();

  // Lock scroll position during initial load to block VideoAsk auto-scroll
  useEffect(() => {
    let isLocked = true;

    const lockScroll = () => {
      if (isLocked && window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    };

    // Capture scroll events and reset position
    window.addEventListener("scroll", lockScroll, { passive: false });

    // Also immediately scroll to top
    window.scrollTo(0, 0);

    // Release lock after 2 seconds
    const timer = setTimeout(() => {
      isLocked = false;
      window.removeEventListener("scroll", lockScroll);
    }, 400);

    return () => {
      isLocked = false;
      clearTimeout(timer);
      window.removeEventListener("scroll", lockScroll);
    };
  }, []);

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
