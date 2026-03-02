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
        { name: "Clari", logo: "/logos/clari.png" },
      ],
    },
    {
      id: "pricing-engagement",
      title: "Kroger's CFO opened pricing emails eight times this week",
      summary:
        "The pricing email sent to Kroger was opened eight times by their CFO. They haven't responded. But it might make sense to send a follow up",
      sources: [
        { name: "Outreach", logo: "/logos/outreach.png" },
        { name: "Salesforce", logo: "/logos/salesforce.png" },
      ],
    },
    {
      id: "trial-usage",
      title: "Tyson Foods is a one month ahead of the mutual success plan",
      summary:
        "Tyson Foods' team seems to be aggressively moving forward on the evaluation. There might be an opportunity to accelerate the deal",
      sources: [
        { name: "Google Sheets", logo: "/logos/sheets.png" },
        { name: "Hubspot", logo: "/logos/hubspot.png" },
      ],
    },
    {
      id: "security-review",
      title: "Security reviews hasn't move forward at IKEA",
      summary:
        "The IKEA deal is progressing but their security team is dragging their feet. We might need to make sure infosec doesn't kill the deal",
      sources: [
        { name: "DocuSign", logo: "/logos/docusign.png" },
        { name: "Outlook", logo: "/logos/outlook.png" },
      ],
    },
    {
      id: "champion-left",
      title: "Northwind's champion just changed jobs",
      summary:
        "The main contact at Northwind hasn't answered recent emails. This might be because he changed jobs and we may need a new champion",
      sources: [
        { name: "LinkedIn", logo: "/logos/linkedin.png" },
        { name: "Salesforce", logo: "/logos/salesforce.png" },
      ],
    },
    {
      id: "demo-length",
      title: "Hilton's champion might not be the decision-maker",
      summary:
        "The champion on the Hilton deal is marked as the economic buyer too. But it seems that someone else might be piloting the conversation in the background",
      sources: [
        { name: "Gong", logo: "/logos/gong.png" },
        { name: "Outlook", logo: "/logos/outlook.png" },
      ],
    },
    {
      id: "doc-turnaround",
      title: "FedEx's engagement is way up",
      summary:
        "The last call with FedEx with their VP seems to have changed the tone of the conversation. We might want to strike while the iron is hot",
      sources: [
        { name: "Gong", logo: "/logos/gong.png" },
        { name: "Salesforce", logo: "/logos/salesforce.png" },
      ],
    },
  ],
};
