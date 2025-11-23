"use client";

import TierCard, { Tier } from "../../components/TierCard";

interface PricingProps {
  onJoinWaitlist: () => void;
}

export default function Pricing({ onJoinWaitlist }: PricingProps) {
  const tiers: Tier[] = [
    {
      name: "Starter",
      price: "$5,000",
      period: "user per month",
      description:
        "For easy, secure and reliable agentic data that's reviewed by humans",
      tokenLimit: "10m",
      tokenLimitFull: "10 million tokens per request",
      features: [
        "Unlimited data requests",
        "Unlimited datasources",
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
      price: "$6,000",
      period: "user per month",
      description:
        "For teams who share insights and want to easily collaborate",
      tokenLimit: "50m",
      tokenLimitFull: "50 million tokens per request",
      features: [
        "Everything in Starter",
        "1 login for you and 1 separate login for your assistant or Chief of Staff",
        "Share prompt templates with colleagues",
        "Share results with colleagues",
        "Share datasources with colleagues",
      ],
      cta: "Join waitlist",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$9,000",
      period: "user per month",
      description:
        "For the hardest data requests and the most strict security standards",
      tokenLimit: "100m",
      tokenLimitFull: "100 million tokens per request",
      features: [
        "Everything in Team",
        "SAML/OIDC SSO",
        "Dedicated support and SLAs",
        "Custom NDAs with each Overbase data scientist who has access to or reviews your data",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      <section className="pt-36 pb-28 text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl text-gray-900 font-semibold">
          Easy, reliable and secure
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          AI agents securely gather any data from anywhere then{" "}
          <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-semibold">
            human data scientists review the data
          </span>{" "}
          to make sure it's reliable and complete
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <TierCard
            key={tier.name}
            tier={tier}
            onJoinWaitlist={onJoinWaitlist}
          />
        ))}
      </div>
    </section>
  );
}
