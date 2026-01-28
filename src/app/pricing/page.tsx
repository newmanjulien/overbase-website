import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/app/pricing/Pricing";
import Tiers from "@/app/pricing/Tiers";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <Pricing />
      <Tiers />
      <Footer />
    </div>
  );
}
