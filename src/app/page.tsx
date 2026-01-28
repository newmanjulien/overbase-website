"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/app/Hero";
import { Letter } from "@/app/Letter";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Letter />
      <Footer />
    </div>
  );
}
