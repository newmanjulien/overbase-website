"use client";

import { Button } from "../ui/button";
import { useNavigateToTest } from "../../hooks/useTestEntryPoint";
import {
  Check,
  Shield,
  Lock,
  Zap,
  User,
  Users,
  Users2,
  Sparkles,
  LogIn,
  Network,
  Phone,
  Award,
  Fingerprint,
  HelpCircle,
} from "lucide-react";
import { ReactNode } from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

// Icon types that can be used for features
export type FeatureIcon =
  | "check"
  | "shield"
  | "lock"
  | "zap"
  | "user"
  | "users"
  | "users2"
  | "sparkles"
  | "fingerprint"
  | "login"
  | "network"
  | "phone"
  | "award"
  | "none";

// Feature can be a string (backwards compatible) or an object with text and optional icon/tooltip
export interface Feature {
  text: string;
  icon?: FeatureIcon;
  tooltip?: string;
}

// Options for the feature helper
interface FeatureOptions {
  icon?: FeatureIcon;
  tooltip?: string;
}

// Helper for better DX - named parameters for optional properties
export function feature(text: string, options?: FeatureOptions): Feature {
  return { text, icon: options?.icon, tooltip: options?.tooltip };
}

export interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: (string | Feature)[];
  cta: string;
  highlighted?: boolean;
  answersPerMonth?: number;
}

interface TierCardProps {
  tier: Tier;
}

// Helper to render the appropriate icon
function FeatureIconComponent({
  icon,
}: {
  icon: FeatureIcon | undefined;
}): ReactNode {
  const className = "w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5";

  switch (icon) {
    case "none":
      return null;
    case "shield":
      return <Shield className={className} />;
    case "lock":
      return <Lock className={className} />;
    case "zap":
      return <Zap className={className} />;
    case "user":
      return <User className={className} />;
    case "users":
      return <Users className={className} />;
    case "users2":
      return <Users2 className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    case "fingerprint":
      return <Fingerprint className={className} />;
    case "login":
      return <LogIn className={className} />;
    case "network":
      return <Network className={className} />;
    case "phone":
      return <Phone className={className} />;
    case "award":
      return <Award className={className} />;
    case "check":
    default:
      return <Check className={className} />;
  }
}

export default function TierCard({ tier }: TierCardProps) {
  const navigateToTest = useNavigateToTest();

  return (
    <div
      className={`relative flex flex-col rounded-lg p-6 bg-surface ${
        tier.highlighted
          ? "border-gray-900 scale-103 border-[1.7px]"
          : "border-gray-100 border"
      }`}
    >
      <div className="space-y-3">
        <h3 className="text-lg text-gray-900">{tier.name}</h3>
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

      {tier.answersPerMonth && (
        <div className="mt-6 py-3 bg-gray-50 rounded-sm">
          <div className="text-center space-y-0.5">
            <div className="text-gray-900" style={{ fontSize: "1.425rem" }}>
              {tier.answersPerMonth.toLocaleString()} answers
            </div>
            <p className="text-xs text-gray-500 tracking-wide">per month</p>
          </div>
        </div>
      )}

      <div className="flex-1 mt-6 space-y-3">
        {tier.features.map((feature, i) => {
          const isObject = typeof feature === "object";
          const text = isObject ? feature.text : feature;
          const icon = isObject ? feature.icon : "check";
          const tooltip = isObject ? feature.tooltip : undefined;

          return (
            <div key={i} className="flex items-start gap-2">
              <FeatureIconComponent icon={icon} />
              <span className="text-sm text-gray-600">
                {text}
                {tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        className="inline-flex align-middle ml-1.5 -translate-y-0.5 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={`Info about ${text}`}
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p className="max-w-[200px]">{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </span>
            </div>
          );
        })}
      </div>

      <Button
        onClick={navigateToTest}
        variant={tier.highlighted ? "default" : "secondary"}
        className="w-full mt-6 rounded-lg py-2"
      >
        {tier.cta}
      </Button>
    </div>
  );
}
