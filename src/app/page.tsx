"use client";

import { Header } from "@/components/header";
import { Hero } from "@/app/hero";
import { Letter } from "@/app/letter";
import { Footer } from "@/components/footer";

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
