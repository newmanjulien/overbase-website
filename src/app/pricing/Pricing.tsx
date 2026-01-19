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
      description:
        "For in-depth and reliable answers that are reviewed by humans",
      answersPerMonth: 50,
      features: [
        feature("AI uses up to 5 million tokens per question", "sparkles"),
        feature("Human reviews answers", "award"),
        feature("Connect to all your datasources in minutes", "zap"),
        feature("Your data is never used to train our AI", "lock"),
        feature("0 of your data is stored by Overbase", "shield"),
      ],
      cta: "Test how reliable our answers are",
    },
    {
      name: "Team",
      priceMonthly: "$12,000",
      priceAnnual: "$9,000",
      period: "user per month",
      description:
        "For teams who share insights and need to collaborate more easily",
      answersPerMonth: 100,
      features: [
        feature("Everything in Starter plus", "none"),
        feature(
          "1 login for you and 1 separate login for your Chief of Staff or ops team",
          "users",
        ),
        feature("Share templates and datasources with colleagues", "network"),
        feature("Guided migration and onboarding", "login"),
        feature("Dedicated Slack channel", "slack"),
      ],
      cta: "Test how reliable our answers are",
      highlighted: true,
    },
    {
      name: "Enterprise",
      priceMonthly: "$20,000",
      priceAnnual: "$15,000",
      period: "user per month",
      description: "For the most complex data and the most strict security",
      answersPerMonth: 150,
      features: [
        feature("Everything in Team plus", "none"),
        feature("AI uses up to 10 million tokens per question", "sparkles"),
        feature(
          "Named technical lead works with your team on data integrations",
          "user",
        ),
        feature("SAML/OIDC SSO", "lock"),
        feature(
          "Custom NDAs with each Overbase data scientist who reviews your data",
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
          Get in-depth and reliable answers
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          Our AI uses millions of tokens to answer each of your questions in
          depth. Then a human reviews the answer to make sure it's reliable
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
