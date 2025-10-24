"use client";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
