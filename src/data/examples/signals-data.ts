import type { PreviewSignal } from "@/data/examples/types";

export const signalsExample: { id: string; signals: PreviewSignal[] } = {
  id: "pricing-signals",
  signals: [
    {
      id: "coo",
      title: "Whirlpool just hired a new COO",
      summary:
        "The Buenos Aires team's close rate has significantly increased since your new GM started. This is hidden in the broader LATAM numbers but you may want to make sure this new GM is properly recognized",
      sources: [
        { name: "LinkedIn", logo: "/logos/linkedin.png" },
        { name: "PR Newswire", logo: "/logos/cision.png" },
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
