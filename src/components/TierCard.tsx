"use client";

import { Button } from "./ui/button";
import { Check } from "lucide-react";

export interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  tokenLimit?: string;
  tokenLimitFull?: string;
}

interface TierCardProps {
  tier: Tier;
  onJoinWaitlist: () => void;
}

export default function TierCard({ tier, onJoinWaitlist }: TierCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 ${
        tier.highlighted
          ? "border-gray-900 shadow-xl scale-105 border-2"
          : "border-gray-100 border"
      }`}
    >
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

      {tier.tokenLimit && tier.tokenLimitFull && (
        <div className="mt-6 border-t-2 border-b-2 border-gray-900 py-5">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Token limit
              </p>
              <p className="text-sm text-gray-900">{tier.tokenLimitFull}</p>
            </div>
            <div className="text-3xl text-gray-900 tracking-tight">
              {tier.tokenLimit}
            </div>
          </div>
        </div>
      )}

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
  );
}
