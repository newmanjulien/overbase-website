"use client";

import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

interface PricingProps {
  onJoinWaitlist: () => void;
}

export default function Pricing({ onJoinWaitlist }: PricingProps) {
  const tiers: Tier[] = [
    {
      name: "Starter",
      price: "$700",
      period: "customer per year",
      description: "For a Data Scientist or Chief of Staff who supports a team",
      features: [
        "1 user",
        "Unlimited data requests",
        "Unlimited connectors",
        "Your data is never used for training our AI",
        "0 of your data is stored by Overbase",
        "GDPR and SOC2 compliant",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
    {
      name: "Team",
      price: "$900",
      period: "customer per year",
      description: "So everyone on the team can easily get their own data",
      features: [
        "Everything in Starter",
        "Unlimited users",
        "Team templates",
        "Share data with colleagues",
        "Requests can cover multiple customers",
      ],
      cta: "Join waitlist",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$1,500",
      period: "customer per year",
      description: "For large enterprises who need extra security and support",
      features: [
        "Everything in Team",
        "SAML/OIDC SSO",
        "Dedicated support and SLAs",
        "Custom NDAs with each Overbase team member who has access to your data",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      <section className="pt-36 pb-28 text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl text-gray-900 font-semibold">
          Easy, secure and reliable
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          AI agents easily and securely gather any data from any platform then{" "}
          <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-semibold">
            human data scientists review the data
          </span>{" "}
          to make sure it's reliable and complete
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-3xl border-1 p-6 ${
              tier.highlighted
                ? "border-gray-900 shadow-xl scale-105 border-2"
                : "border-gray-100"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-sm text-xs">
                  Most Popular
                </span>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-xl text-gray-900">{tier.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl text-gray-900 font-medium">
                  {tier.price}
                </span>
                <span className="text-sm text-gray-900">/ {tier.period}</span>
              </div>
              <p className="text-sm text-gray-900 min-h-[2.5rem]">
                {tier.description}
              </p>
            </div>

            <div className="flex-1 mt-6 space-y-3">
              {tier.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={onJoinWaitlist}
              className={`w-full mt-6 rounded-lg py-6 ${
                tier.highlighted
                  ? "bg-gray-900 hover:bg-gray-800 text-white"
                  : "bg-gray-100 hover:bg-gray-50 text-gray-900"
              }`}
            >
              {tier.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
