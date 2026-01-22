"use client";

import PricingCard, { feature } from "../../components/cards/PricingCard";
import PricingToggle from "../../components/PricingToggle";
import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual",
  );

  const tiers = [
    {
      name: "Starter",
      priceMonthly: "$8,000",
      priceAnnual: "$6,000",
      period: "user per month",
      description: "Your Personal LLM gets trained by our Data Scientists",
      answersPerMonth: 20,
      features: [
        feature("26B Parameter Personal LLM", {
          icon: "sparkles",
          tooltip:
            "A full standalone Large Language Model that's trained for you. It's a +40 GB file which lives on Overbase's servers",
        }),
        feature("Our Data Scientists supervise and train your Personal LLM", {
          icon: "award",
        }),
        feature("Connect to all your datasources in minutes", { icon: "zap" }),
        feature("0 of your data is stored by Overbase", { icon: "shield" }),
        feature(
          "Your Personal LLM and all your training data is deleted if you cancel",
          { icon: "lock" },
        ),
      ],
      cta: "Test how reliable our answers are",
    },
    {
      name: "Team",
      priceMonthly: "$12,000",
      priceAnnual: "$9,000",
      period: "user per month",
      description: "You own the IP of your Personal LLM and can download it",
      answersPerMonth: 50,
      features: [
        feature("Everything in Starter plus", { icon: "none" }),
        feature("You own the IP and can download your Personal LLM", {
          icon: "fingerprint",
          tooltip:
            "A full standalone Large Language Model that's trained for you. It's a +40 GB file which you own and which you can download",
        }),
        feature(
          "1 login for you and 1 separate login for your Chief of Staff or ops team",
          { icon: "users" },
        ),
        feature("Share templates and datasources with colleagues", {
          icon: "network",
        }),
        feature("Guided migration and onboarding", { icon: "login" }),
      ],
      cta: "Test how reliable our answers are",
      highlighted: true,
    },
    {
      name: "Enterprise",
      priceMonthly: "$20,000",
      priceAnnual: "$15,000",
      period: "user per month",
      description:
        "You get a more advanced Personal LLM and the most strict security",
      answersPerMonth: 100,
      features: [
        feature("Everything in Team plus", { icon: "none" }),
        feature("190B Parameter Personal LLM", {
          icon: "sparkles",
          tooltip:
            "A full standalone Large Language Model that's trained for you. It's a +200 GB file which you own and which you can download",
        }),
        feature(
          "Named technical lead works with your team on data integrations",
          { icon: "user" },
        ),
        feature("SAML/OIDC SSO", { icon: "lock" }),
        feature("Custom NDAs with Data Scientists who train your LLM", {
          icon: "shield",
        }),
      ],
      cta: "Test how reliable our answers are",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-8 lg:pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <section className="pt-30 pb-8 text-center space-y-6 max-w-4xl mx-auto scale-[0.90]">
        <h1 className="text-5xl text-gray-900 ">
          Reliable answers to hard questions
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Our Data Scientists train, supervise and fine-tune your Personal Large
          Language Model so it learns how to answer your hardest questions in a
          reliable way
        </p>
      </section>

      <PricingToggle
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 md:mt-10 scale-[0.95]">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={{
              ...tier,
              price:
                billingCycle === "monthly"
                  ? tier.priceMonthly
                  : tier.priceAnnual,
            }}
          />
        ))}
      </div>
    </section>
  );
}
