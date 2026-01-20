"use client";

type BillingCycle = "monthly" | "annual";

interface PricingToggleProps {
  billingCycle: BillingCycle;
  onBillingCycleChange: (cycle: BillingCycle) => void;
}

export default function PricingToggle({
  billingCycle,
  onBillingCycleChange,
}: PricingToggleProps) {
  const toggleButtonClass = (isActive: boolean) =>
    `relative px-6 py-2 rounded-sm text-sm transition-all duration-300 ${
      isActive
        ? "bg-white text-black shadow-xs"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <div className="pt-8 flex items-center justify-center">
      <div className="inline-flex items-center gap-3 bg-gray-50 rounded-md p-1 border border-gray-100">
        <button
          onClick={() => onBillingCycleChange("monthly")}
          className={toggleButtonClass(billingCycle === "monthly")}
        >
          Monthly
        </button>
        <button
          onClick={() => onBillingCycleChange("annual")}
          className={toggleButtonClass(billingCycle === "annual")}
        >
          Annual (3 months free)
        </button>
      </div>
    </div>
  );
}
