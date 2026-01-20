"use client";

import { useState } from "react";

export type LLMMode = "generic" | "personal";

interface LLMToggleProps {
  mode?: LLMMode;
  onModeChange?: (mode: LLMMode) => void;
}

const descriptions = {
  generic: {
    title: "Our answer with a Generic LLM",
    description:
      "Overbase is in a whole different league compared to legacy database query tools like Snowflake Intelligence or Salesforce Einstein. But our system is still slow and hard to use without a Personal LLM. Because Generic LLMs don't know you",
  },
  personal: {
    title: "Our answer with a Personal LLM",
    description:
      "A Personal LLM gets truly reliable and truly in-depth answers because it is carefully trained for your as an individual. This Personal LLM is a +200 GB file which runs on Overbase's private and secure servers. It isn't connected to any APIs or other generic AI services",
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
              className={`flex-1 py-2.5 px-4 rounded-md text-sm transition-all ${
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
        <div className="p-4">
          <div className="p-3 bg-gray-50/50 rounded-lg border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
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
