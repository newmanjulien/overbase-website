"use client";

import { useState } from "react";

import { ListenButton } from "../../../components/buttons/ListenButton";

export type LLMMode = "generic" | "personal";

interface LLMToggleProps {
  mode?: LLMMode;
  onModeChange?: (mode: LLMMode) => void;
}

const descriptions = {
  generic: {
    title: "Answer with a Generic LLM",
    description:
      "We get reliable and in-depth answers to the hardest questions with our specialized agentic tooling. And we combine our tooling with a constantly evolving stack that's always based on the latest tech",
    audioSrc: "/example.mp3",
  },
  personal: {
    title: "Answer with a Personal LLM",
    description:
      "Personal LLMs are more reliable than a top tier human analyst. The Personal LLM understands how you think. And it learns how to navigate your unique data infrastructure",
    audioSrc: "/example.mp3",
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
        <div className="px-4 pb-4 pt-4">
          <div className="bg-gray-50/50 border border-gray-100 rounded-lg px-4 py-3.5">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-900">
                {descriptions[mode].title}
              </h4>
              <ListenButton
                iconSize={14}
                textSize="text-xs"
                textWeight="font-base"
                audioSrc={descriptions[mode].audioSrc}
              />
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              {descriptions[mode].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
