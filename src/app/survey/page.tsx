"use client";

import { useEffect } from "react";
import posthog, { Survey } from "posthog-js";

export default function SurveyPage() {
  useEffect(() => {
    // Initialize PostHog (client-side only)
    posthog.init("phc_azK72AdLBTsfE9LVWyENBcgi5DMHARdjtTHU2XYdj5h", {
      api_host: "https://us.i.posthog.com", // Correct host
      person_profiles: "identified_only",
    });

    // Fetch surveys for this user and page
    posthog.getSurveys((surveys: Survey[]) => {
      console.log("Fetched surveys:", surveys);

      if (surveys.length === 0) {
        console.warn(
          "No surveys returned. Check URL targeting or conditions in PostHog."
        );
        return;
      }

      // Render the first survey for development/testing
      posthog.renderSurvey(surveys[0].id, "body");
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Survey Page</h1>
        <p className="text-gray-600">
          If you don’t see the survey, check the console for logs or review your
          PostHog survey targeting settings.
        </p>
      </div>
    </div>
  );
}
