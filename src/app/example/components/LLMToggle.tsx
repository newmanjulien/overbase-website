"use client";

import { useState } from "react";
import { Globe, User, Brain } from "lucide-react";

export type LLMMode = "generic" | "personal";

interface LLMToggleProps {
  mode?: LLMMode;
  onModeChange?: (mode: LLMMode) => void;
}

const descriptions = {
  generic: {
    title: "Generic LLM",
    description:
      "Standard AI responses based on general knowledge and publicly available information. Provides broad, widely-applicable answers without personalization or context from your organization.",
    icon: Globe,
  },
  personal: {
    title: "Personal LLM",
    description:
      "Tailored AI responses that understand your organization's unique context, terminology, and historical data. Delivers personalized insights and recommendations specific to your business needs.",
    icon: User,
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

  const ActiveIcon = descriptions[mode].icon;

  return (
    <div className="w-full max-w-md">
      {/* Toggle Container with Glass Effect */}
      <div className="relative bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 shadow-lg shadow-gray-200/40 overflow-hidden">
        {/* Decorative gradient orb */}
        <div
          className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl transition-colors duration-700 ${
            mode === "personal"
              ? "bg-gradient-to-br from-violet-400/30 to-indigo-500/20"
              : "bg-gradient-to-br from-sky-400/30 to-cyan-500/20"
          }`}
        />
        <div
          className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-2xl transition-colors duration-700 ${
            mode === "personal"
              ? "bg-gradient-to-tr from-purple-300/20 to-pink-400/10"
              : "bg-gradient-to-tr from-teal-300/20 to-emerald-400/10"
          }`}
        />

        {/* Toggle Section */}
        <div className="relative p-4 pb-0">
          {/* Toggle Buttons */}
          <div className="flex gap-2 p-1 bg-gray-100/80 rounded-xl">
            <button
              onClick={() => handleModeChange("generic")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                mode === "generic"
                  ? "bg-white text-gray-900 shadow-md shadow-gray-200/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
              }`}
            >
              <Globe
                className={`w-4 h-4 transition-colors duration-300 ${
                  mode === "generic" ? "text-sky-600" : "text-gray-400"
                }`}
              />
              <span>Generic</span>
            </button>
            <button
              onClick={() => handleModeChange("personal")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                mode === "personal"
                  ? "bg-white text-gray-900 shadow-md shadow-gray-200/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
              }`}
            >
              <Brain
                className={`w-4 h-4 transition-colors duration-300 ${
                  mode === "personal" ? "text-violet-600" : "text-gray-400"
                }`}
              />
              <span>Personal</span>
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="relative p-4">
          <div
            className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-500 ${
              mode === "personal"
                ? "bg-violet-50/50 border border-violet-100/50"
                : "bg-sky-50/50 border border-sky-100/50"
            }`}
          >
            <div
              className={`flex-shrink-0 p-2 rounded-lg transition-colors duration-500 ${
                mode === "personal"
                  ? "bg-violet-100 text-violet-600"
                  : "bg-sky-100 text-sky-600"
              }`}
            >
              <ActiveIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4
                className={`text-sm font-semibold mb-1 transition-colors duration-500 ${
                  mode === "personal" ? "text-violet-900" : "text-sky-900"
                }`}
              >
                {descriptions[mode].title}
              </h4>
              <p
                className={`text-xs leading-relaxed transition-colors duration-500 ${
                  mode === "personal" ? "text-violet-700/80" : "text-sky-700/80"
                }`}
              >
                {descriptions[mode].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
