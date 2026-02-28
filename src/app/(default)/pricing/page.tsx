import { Pricing } from "./pricing";
import Tiers from "./tiers";
import FAQ from "./faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Pricing />
      <Tiers />
      <FAQ />
    </div>
  );
}
