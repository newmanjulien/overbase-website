"use client";

import TierCard, { feature } from "../../components/TierCard";
import BillingToggle from "../../components/BillingToggle";
import { useState } from "react";

interface PricingProps {
  onJoinWaitlist: () => void;
}

export default function Pricing({ onJoinWaitlist }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "annual"
  );

  const tiers = [
    {
      name: "Starter",
      priceMonthly: "$4,000",
      priceAnnual: "$3,000",
      period: "user per month",
      description:
        "For reliable and trustworthy answers that are reviewed by humans",
      answersPerMonth: 10,
      features: [
        feature(
          "AI agents use up to 1 million tokens per question",
          "sparkles"
        ),
        feature("Human data scientists review answers", "award"),
        feature("Connect to all your datasources in minutes", "zap"),
        feature("Your data is never used to train our AI", "lock"),
        feature("0 of your data is stored by Overbase", "shield"),
      ],
      cta: "Join waitlist",
    },
    {
      name: "Team",
      priceMonthly: "$8,000",
      priceAnnual: "$6,000",
      period: "user per month",
      description:
        "For teams who share insights and need to collaborate more easily",
      answersPerMonth: 50,
      features: [
        feature("Everything in Starter plus", "none"),
        feature(
          "1 login for you and 1 separate login for your Chief of Staff or ops team",
          "users"
        ),
        feature("Share templates and datasources with colleagues", "network"),
        feature("Guided migration and onboarding", "login"),
        feature("Dedicated Slack channel", "slack"),
      ],
      cta: "Join waitlist",
      highlighted: true,
    },
    {
      name: "Enterprise",
      priceMonthly: "$12,000",
      priceAnnual: "$9,000",
      period: "user per month",
      description:
        "For the hardest questions and the most strict security standards",
      answersPerMonth: 100,
      features: [
        feature("Everything in Team plus", "none"),
        feature(
          "AI agents use up to 10 million tokens per question",
          "sparkles"
        ),
        feature("Support offered by our CEO", "phone"),
        feature("SAML/OIDC SSO", "lock"),
        feature(
          "Custom NDAs with each Overbase data scientist who reviews your data",
          "shield"
        ),
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <section className="pt-30 pb-8 text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl text-gray-900 font-semibold">
          Reliable answers that go in-depth
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          Advanced AI agents use{" "}
          <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-semibold">
            millions of tokens to answer each of your questions
          </span>{" "}
          then a human data scientist reviews and improves the answer to make
          sure it's reliable
        </p>
      </section>

      <BillingToggle
        billingCycle={billingCycle}
        onBillingCycleChange={setBillingCycle}
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
            onJoinWaitlist={onJoinWaitlist}
          />
        ))}
      </div>
    </section>
  );
}
