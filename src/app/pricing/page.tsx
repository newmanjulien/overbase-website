import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/app/pricing/Pricing";
import Tiers from "@/app/pricing/Tiers";
import QuadrantSection from "@/app/pricing/QuadrantSection";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <Pricing />
      <QuadrantSection />
      <Tiers />
      <Footer />
    </div>
  );
}
