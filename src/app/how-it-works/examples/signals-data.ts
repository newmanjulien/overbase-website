import type { PreviewSignal } from "./types";

export const signalsExample: { id: string; signals: PreviewSignal[] } = {
  id: "how-it-works-signals",
  signals: [
    {
      id: "coo",
      title: "Whirlpool hasn't gotten past welcome screens",
      summary:
        "Whirlpool is doing a POC and the data we've noted down regarding their progress in our mutual success plan says they've logged in multiple times. But they actually never got past the welcome screens",
      sources: [
        { name: "Posthog", logo: "/logos/posthog.png" },
        { name: "Snowflake", logo: "/logos/snowflake.png" },
      ],
    },
    {
      id: "teammates",
      title: "Laura is selling the AI Teammates add-on more than other reps",
      summary:
        "Many of the reps seem to struggle with selling the AI Teammates add-on and prospects don't seem to be receptive on calls. But Laura seems to be selling it easily. There might be an opportunity for the team to learn from Laura",
      sources: [
        { name: "Salesforce", logo: "/logos/salesforce.png" },
        { name: "Gong", logo: "/logos/gong.png" },
      ],
    },
    {
      id: "icp",
      title: "ICP in the manufacturing sector might be wrong",
      summary:
        "The manufacturing deals seem to end up getting signed by Directors not by C-Suite execs. You might be able to close deals faster by targeting Directors more specifically in that vertical",
      sources: [
        { name: "Marketo", logo: "/logos/marketo.png" },
        { name: "Docusign", logo: "/logos/docusign.png" },
      ],
    },
  ],
};
