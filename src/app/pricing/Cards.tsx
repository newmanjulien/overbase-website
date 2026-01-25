"use client";

import { Button } from "../../components/ui/button";
import { useNavigateToTest } from "../../hooks/useTestEntryPoint";

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  subtext: string;
}

const PLANS: Plan[] = [
  {
    id: "standard",
    name: "Standard seat",
    price: "$12,000",
    description:
      "We train a Personal LLM for each Revenue Exec and run it on Overbase's hardware",
    subtext:
      "Per exec / month with annual subscription discount. $15,000 if billed monthly. Includes unlimited questions",
  },
  {
    id: "enterprise",
    name: "Enterprise seat",
    price: "$16,000",
    description:
      "Everything in Standard, plus you own the IP of your Personal LLM",
    subtext:
      "Per exec / month with annual subscription discount. $20,000 if billed monthly. Minimum of 5 seats",
  },
];

export default function Cards() {
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
  const navigateToTest = useNavigateToTest();

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col h-full border border-gray-100">
      <h3 className="text-3xl text-gray-900 mb-4">{plan.name}</h3>

      <p className="text-sm text-gray-600 mb-5 max-w-[90%]">
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
          onClick={navigateToTest}
          variant="default"
          size="lg"
          className="w-full text-sm rounded-md"
        >
          Test our answers
        </Button>
      </div>
    </div>
  );
}
