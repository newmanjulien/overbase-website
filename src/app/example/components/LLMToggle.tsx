"use client";

import { useState } from "react";

export type LLMMode = "generic" | "personal";

interface LLMToggleProps {
  mode?: LLMMode;
  onModeChange?: (mode: LLMMode) => void;
}

const descriptions = {
  generic: {
    title: "Overbase's answer with a Generic LLM",
    description:
      "Overbase is in a different league compared to database query tools like Snowflake Intelligence or Salesforce Einstein. But our system is still hard to use without a Personal LLM. Generic LLMs make mistakes because they don't know you",
  },
  personal: {
    title: "Overbase's answer with a Personal LLM",
    description:
      "A Personal LLM gets reliable and in-depth answers because it is trained for you as an individual. This Personal LLM is a +200 GB file which runs on Overbase's private server. It isn't connected to any APIs or other generic AI services",
  },
};

export default function LLMToggle({
  mode: controlledMode,
  onModeChange,
}: LLMToggleProps) {
  const [internalMode, setInternalMode] = useState<LLMMode>("generic");
  const mode = controlledMode ?? internalMode;

  const handleModeChange = (newMode: LLMMode) => {
    if (onModeChange) {
      onModeChange(newMode);
    } else {
      setInternalMode(newMode);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-xl border border-gray-200">
        {/* Toggle Buttons */}
        <div className="p-4 pb-0">
          <div className="flex gap-2 p-1 bg-gray-50 rounded-md border border-gray-100">
            <button
              onClick={() => handleModeChange("generic")}
              className={`flex-1 rounded-md text-sm transition-all ${
                mode === "generic"
                  ? "bg-white text-gray-900 shadow-xs"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Generic LLM
            </button>
            <button
              onClick={() => handleModeChange("personal")}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm transition-all ${
                mode === "personal"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Personal LLM
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="px-4 pb-4 pt-4">
          <div className="bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3.5">
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              {descriptions[mode].title}
            </h4>
            <p className="text-xs leading-relaxed text-gray-600">
              {descriptions[mode].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
