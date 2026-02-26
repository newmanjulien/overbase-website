import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/app/pricing/pricing";
import Tiers from "@/app/pricing/tiers";

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
