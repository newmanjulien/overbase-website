"use client";

import { Header } from "../components/Header";
import { HeroSection } from "./HeroSection";
import { Letter } from "./Letter";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Letter />
      <Footer />
    </div>
  );
}
