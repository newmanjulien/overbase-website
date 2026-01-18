"use client";

import { Header } from "../components/Header";
import { HeroSection } from "./HeroSection";
import { CEOLetter } from "./CEOLetter";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header showTestButton />
      <HeroSection />
      <CEOLetter />
      <Footer />
    </div>
  );
}
