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
  tiers: Tier[];
}

export default function Pricing({ tiers }: PricingProps) {
  return (
    <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
      {/* Title */}
      {/* <section className="pt-40 pb-30 text-center space-y-6 max-w-3xl"> */}
      <section className="pt-40 pb-30 text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl text-gray-900 font-bold">
          $0 if your customer churns
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-medium">
          <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-bold">
            Giving CSMs easy data increases renewals
          </span>{" "}
          reliably and consistently. We’ll reimburse you if your customer churns
          while you're using Overbase.
        </p>
      </section>

      {/* 💰 Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-2xl border-1 p-6 ${
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
                <span className="text-4xl text-gray-900">{tier.price}</span>
                <span className="text-sm text-gray-900">/ {tier.period}</span>
              </div>
              <p className="text-sm text-gray-900 min-h-[2.5rem]">
                {tier.description}
              </p>
            </div>

            <div className="flex-1 mt-6 space-y-3">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <Button
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
