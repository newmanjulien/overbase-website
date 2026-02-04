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
    description: "Ask an unlimited amount of questions for a flat monthly fee",
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
            href="https://slack.com/oauth/v2/authorize?scope=chat%3Awrite%2Cchat%3Awrite.customize%2Ccommands%2Cim%3Ahistory%2Cim%3Awrite%2Cusers%3Aread&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YWxsT3B0aW9ucyI6eyJzY29wZXMiOlsiY2hhdDp3cml0ZSIsImNoYXQ6d3JpdGUuY3VzdG9taXplIiwiY29tbWFuZHMiLCJpbTpoaXN0b3J5IiwiaW06d3JpdGUiLCJ1c2VyczpyZWFkIl0sInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9zbGFjay1hcHAtdHdvLnZlcmNlbC5hcHAvc2xhY2svb2F1dGhfcmVkaXJlY3QifSwibm93IjoiMjAyNi0wMS0zMFQxODowNToxMy44MjZaIiwicmFuZG9tIjo4MTgzOTksImlhdCI6MTc2OTc5NjMxM30.6WCQeh0N6rwnYp2D1qqoF1dL0Hkj6Ak77zwsSBCDZCU&client_id=10378013182247.10391416690262&redirect_uri=https%3A%2F%2Fslack-app-two.vercel.app%2Fslack%2Foauth_redirect"
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
