import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/app/pricing/pricing";
import Examples from "@/app/pricing/examples/examples";
import Tiers from "@/app/pricing/tiers";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Header logoHref="/" />
      <Pricing />
      <Examples />
      <Tiers />
      <Footer />
    </div>
  );
}
