"use client";

import TierCard from "../../components/TierCard";
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
        "For easy, reliable and trustworthy data that's reviewed by humans",
      answersPerMonth: 10,
      features: [
        "Includes",
        "Unlimited structured & unstructured data",
        "Human data scientist reviews data",
        "Your data is never used for training our AI",
        "0 of your data is stored by Overbase",
        "GDPR and SOC2 compliant",
      ],
      cta: "Join waitlist",
      highlighted: false,
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
        "Everything in Starter plus",
        "1 login for you and 1 separate login for your Chief of Staff or ops team",
        "Share prompt templates with colleagues",
        "Share results with colleagues",
        "Share datasources with colleagues",
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
        "For the hardest data requests and the most strict security standards",
      answersPerMonth: 100,
      features: [
        "Everything in Team plus",
        "SAML/OIDC SSO",
        "Dedicated support and SLAs",
        "Custom NDAs with each Overbase data scientist who has access to or reviews your data",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <section className="pt-36 pb-6 text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl text-gray-900 font-semibold">
          Easy, reliable and trustworthy
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          AI agents gather data from anywhere, then a{" "}
          <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-semibold">
            human data scientist reviews it
          </span>{" "}
          to ensure it's reliable.
        </p>
      </section>

      {/* Billing Toggle */}
      <div className="pt-8 flex items-center justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gray-50 rounded-full p-1.5 border border-gray-100">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
              billingCycle === "annual"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Annual
            <span className="ml-2 inline-flex items-center rounded-full bg-gray-900 px-2 py-0.5 text-xs text-white">
              -25%
            </span>
          </button>
        </div>
      </div>

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
