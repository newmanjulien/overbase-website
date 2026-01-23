"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Top } from "./Top";
import { Description } from "./Description";
import Cards from "./Cards";

export default function PricingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-surface">
      <Header onLogoClick={() => router.push("/")} />
      <Top />
      <Description />
      <Cards />
      <Footer />
    </div>
  );
}
