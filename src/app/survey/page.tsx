"use client";

import { useEffect } from "react";
import posthog, { Survey } from "posthog-js";

export default function SurveyPage() {
  useEffect(() => {
    // Initialize PostHog
    posthog.init("phc_azK72AdLBTsfE9LVWyENBcgi5DMHARdjtTHU2XYdj5h", {
      api_host: "https://us.posthog.com",
      person_profiles: "identified_only",
    });

    // Fetch surveys and render them
    posthog.getSurveys((surveys: Survey[]) => {
      surveys.forEach((survey) => {
        // Render each survey into the body
        posthog.renderSurvey(survey.id, "body");
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Survey</h1>
        <p className="text-gray-600">
          If you don’t see the survey, check your PostHog targeting settings in
          the dashboard.
        </p>
      </div>
    </div>
  );
}
