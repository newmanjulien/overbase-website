import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  subtext: string;
  valueLabel?: string;
}

const PLANS: Plan[] = [
  {
    id: "per-rep",
    name: "Free",
    price: "$0",
    description:
      "Share sales data safely and seamlessly with your ecosystem partners for free",
    subtext:
      "Sharing data is entirely free for you and your partners. Connect as many systems as you want",
    valueLabel: "Free data sharing",
  },
  {
    id: "percent",
    name: "Performance",
    price: "5%",
    description:
      "Pay to accelerate revenue with a self-funding and performance-based model",
    subtext:
      "Pay 5% of the revenue we help you generate and only pay after you get paid",
    valueLabel: "Performance pricing",
  },
];

export default function Tiers() {
  return (
    <section id="pricing-cards" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="mb-[5.5rem] border-t border-gray-100"></div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const hasTrailingPlus = plan.price.endsWith("+");
  const basePrice = hasTrailingPlus ? plan.price.slice(0, -1) : plan.price;

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col h-full border border-gray-100">
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full border border-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
          {plan.valueLabel}
        </span>
      </div>

      <h3 className="text-3xl text-gray-900 font-medium mb-4">{plan.name}</h3>

      <p className="text-sm text-gray-600 mb-5 max-w-[97%]">
        {plan.description}
      </p>

      <div className="space-y-4">
        <div>
          <span className="text-3xl font-medium text-gray-900">
            {basePrice}
            {hasTrailingPlus ? <span className="font-normal">+</span> : null}
          </span>
        </div>

        <p className="text-xs text-gray-600 leading-snug min-h-[40px]">
          {plan.subtext}
        </p>

        <Button
          variant="default"
          size="lg"
          className="w-full text-sm rounded-md"
          asChild
        >
          <Link href="/waitlist">Join waitlist</Link>
        </Button>
      </div>
    </div>
  );
}
