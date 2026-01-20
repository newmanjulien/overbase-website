"use client";

import TierCard, { feature } from "../../components/cards/TierCard";
import BillingToggle from "../../components/BillingToggle";
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
      answersPerMonth: 50,
      features: [
        feature("Get a 20B Parameter Personal LLM", "sparkles"),
        feature(
          "Our Data Scientists supervise and train your Personal LLM",
          "award",
        ),
        feature("Connect to all your datasources in minutes", "zap"),
        feature("0 of your data is stored by Overbase", "shield"),
        feature(
          "Your Personal LLM and all your training data is deleted if you cancel",
          "lock",
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
      answersPerMonth: 100,
      features: [
        feature("Everything in Starter plus", "none"),
        feature("You own and can download your Personal LLM", "fingerprint"),
        feature(
          "1 login for you and 1 separate login for your Chief of Staff or ops team",
          "users",
        ),
        feature("Share templates and datasources with colleagues", "network"),
        feature("Guided migration and onboarding", "login"),
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
      answersPerMonth: 150,
      features: [
        feature("Everything in Team plus", "none"),
        feature("Get a 120B Parameter Personal LLM", "sparkles"),
        feature(
          "Named technical lead works with your team on data integrations",
          "user",
        ),
        feature("SAML/OIDC SSO", "lock"),
        feature(
          "Custom NDAs with Data Scientists who train your LLM",
          "shield",
        ),
      ],
      cta: "Test how reliable our answers are",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <section className="pt-30 pb-8 text-center space-y-6 max-w-4xl mx-auto scale-[0.90]">
        <h1 className="text-5xl text-gray-900 font-medium">
          Get reliable answers you trust
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Our Data Scientists supervise, train and guide your Personal Large
          Language Model so it learns how to analyze your data and answer your
          questions in a reliable way
        </p>
      </section>

      <BillingToggle
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 scale-[0.95]">
        {tiers.map((tier) => (
          <TierCard
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
