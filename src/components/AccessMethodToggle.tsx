"use client";

import { HelpCircle } from "lucide-react";
import { AccessMethod } from "../lib/TestContext";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { cn } from "../lib/utils";

interface AccessMethodToggleProps {
  id: string;
  value: AccessMethod;
  onChange: (method: AccessMethod) => void;
  disabled?: boolean;
}

const ACCESS_METHODS = {
  export: {
    label: "Send export",
    tooltip:
      "Sending an export of your data is the safest and most controlled way of testing our analysis. You will upload a CSV or file export from your system. And you will see how in-depth and reliable our answers are",
  },
  system: {
    label: "System access",
    tooltip:
      "Giving Overbase access to your system lets you test our full capabilities. You will see how accurately and expertly our agents get hard to find data from even the most disconnected systems",
  },
} as const;

export function AccessMethodToggle({
  id,
  value,
  onChange,
  disabled = false,
}: AccessMethodToggleProps) {
  const radioName = `accessMethod-${id}`;

  return (
    <div className="flex items-center justify-center gap-6 pb-1">
      {(Object.keys(ACCESS_METHODS) as AccessMethod[]).map((method) => {
        const { label, tooltip } = ACCESS_METHODS[method];
        const isSelected = value === method;

        return (
          <div key={method} className="flex items-center gap-1.5">
            <label
              className={cn(
                "flex items-center gap-2 cursor-pointer",
                disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              <input
                type="radio"
                name={radioName}
                checked={isSelected}
                onChange={() => !disabled && onChange(method)}
                disabled={disabled}
                className="h-4 w-4 text-black border-gray-300 focus:ring-black"
              />
              <span
                className={cn(
                  "text-sm",
                  isSelected ? "text-gray-900 font-medium" : "text-gray-500",
                )}
              >
                {label}
              </span>
            </label>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={`Info about ${label}`}
                >
                  <HelpCircle className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="text-xs max-w-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}
