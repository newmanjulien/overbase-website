"use client";

import Link from "next/link";
import { SlackIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  subtext: string;
}

const PLANS: Plan[] = [
  {
    id: "peranswer",
    name: "Pay per answer",
    price: "$300",
    description:
      "Easily and quickly get reliable answers from dirty and disconnected data",
    subtext:
      "Per answer. $0 per month then pay as you go for each answer. No obligations. No minimum",
  },
  {
    id: "subscription",
    name: "Subscription",
    price: "$15,000",
    description:
      "Get an unlimited amount of reliable answers for a flat monthly fee",
    subtext:
      "Per exec / month with annual subscription discount. $20,000 if billed monthly. Includes unlimited answers",
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
      <h3 className="text-3xl text-gray-900 font-medium mb-4">{plan.name}</h3>

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
          variant="default"
          size="lg"
          className="w-full text-sm rounded-md"
          asChild
        >
          <Link
            href="https://slack.overbase.app/slack/install"
            target="_blank"
            rel="noreferrer"
          >
            <SlackIcon className="size-5" />
            Add to Slack
          </Link>
        </Button>
      </div>
    </div>
  );
}
