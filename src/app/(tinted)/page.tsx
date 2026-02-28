"use client";

import { Hero } from "@/app/hero";
import { Letter } from "@/app/letter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Letter />
    </div>
  );
}
