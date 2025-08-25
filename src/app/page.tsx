"use client";
import { useState } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { CEOLetter } from "../components/CEOLetter";
import { Footer } from "../components/Footer";
import { WaitlistPage } from "../components/WaitlistPage";
import { ConfirmationPage } from "../components/ConfirmationPage";

export default function Page() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "waitlist" | "confirmation"
  >("home");

  const showWaitlist = () => setCurrentPage("waitlist");
  const showHome = () => setCurrentPage("home");
  const showConfirmation = () => setCurrentPage("confirmation");

  if (currentPage === "waitlist") {
    return <WaitlistPage onBack={showHome} onSubmit={showConfirmation} />;
  }

  if (currentPage === "confirmation") {
    return <ConfirmationPage onHome={showHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onJoinWaitlist={showWaitlist} />
      <HeroSection onJoinWaitlist={showWaitlist} />
      <CEOLetter onJoinWaitlist={showWaitlist} />
      <Footer />
    </div>
  );
}
