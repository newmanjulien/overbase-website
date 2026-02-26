"use client";

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
    name: "Per rep",
    price: "$800",
    description:
      "Pay $800 per rep per month and we'll help you get millions in easy revenue every quarter",
    subtext:
      "Per rep per month with annual subscription discount. $1,200 if billed monthly",
    valueLabel: "Best ROI",
  },
  {
    id: "percent",
    name: "Percent",
    price: "8%",
    description:
      "Pay 8% of the millions in easy revenue we help you get to fully align incentives",
    subtext:
      "Of revenue attributed by your reps and managers. Only available with a two year subscription",
    valueLabel: "Align incentives",
  },
];

export default function Tiers() {
  return (
    <section id="pricing-cards" className="px-6 py-20 max-w-5xl mx-auto">
      <div className="mb-22 border-t border-gray-100"></div>

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
            {plan.price}
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
          <Link href="/waitlist">Join Waitlist</Link>
        </Button>
      </div>
    </div>
  );
}
