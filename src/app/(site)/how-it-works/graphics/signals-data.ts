import type { SignalsExample } from "./types";

export const signalsExample: SignalsExample = {
  id: "how-it-works-signals",
  signals: [
    {
      id: "coo",
      title: "Whirlpool hasn't gotten past welcome screens",
      summary:
        "The CRM says Whirlpool's buyers logged in multiple times to their demo environment. But they actually never got past the welcome screens",
      sources: [
        { name: "PostHog", logo: "/logos/posthog.png" },
        { name: "Snowflake", logo: "/logos/snowflake.png" },
      ],
    },
    {
      id: "teammates",
      title: "Laura is selling the AI Teammates add-on more than other reps",
      summary:
        "Most reps struggle with selling the AI Teammates add-ons. But Laura seems to be selling it easily. There might be an opportunity for the team to learn from Laura",
      sources: [
        { name: "Salesforce", logo: "/logos/salesforce.png" },
        { name: "Gong", logo: "/logos/gong.png" },
      ],
    },
    {
      id: "icp",
      title: "ICP in the manufacturing sector might be wrong",
      summary:
        "The manufacturing deals get signed by Directors without C-Suite involvement. But we're targeting C-Suite execs in our process which might be slowing several deals",
      sources: [
        { name: "Marketo", logo: "/logos/marketo.png" },
        { name: "DocuSign", logo: "/logos/docusign.png" },
      ],
    },
  ],
};
