import type { SignalsExample } from "./types";

export const signalsExample: SignalsExample = {
  id: "how-it-works-signals",
  signals: [
    {
      id: "repeat-doc-review",
      title: "Whirlpool just looped in their CFO",
      summary:
        "Whirlpool added their CFO to the email thread and the calendar invite for the next call. A few minutes later, the CFO replied asking for the latest pricing sheet, payment terms, and a one-page summary they can review before the meeting.",
      sources: [
        { name: "Outlook", logo: "/logos/posthog.png" },
        { name: "Calendar", logo: "/logos/snowflake.png" },
      ],
    },
    {
      id: "competitor-mention",
      title: "Tyson Foods' conversation has slowed down",
      summary:
        "Tyson Foods was replying same-day last week; it’s been 9 days since their last message. The last two meetings were moved, and the open questions on implementation timeline and support SLAs haven’t been answered.",
      sources: [
        { name: "DocuSign", logo: "/logos/salesforce.png" },
        { name: "Gmail", logo: "/logos/gong.png" },
      ],
    },
    {
      id: "renewal-at-risk",
      title: "IKEA's finance director used to work at a competitor",
      summary:
        "IKEA’s finance director previously spent 6 years at a competitor and referenced their process on the last call (“we handled this in one approval step”). They asked pointed questions about auditability, rollups by region, and how pricing changes at higher volume.",
      sources: [
        { name: "LinkedIn", logo: "/logos/marketo.png" },
        { name: "Excel", logo: "/logos/clari.png" },
      ],
    },
    {
      id: "new-contract-change",
      title: "United Rentals responded to our RFP submission within 2 days",
      summary:
        "United Rentals responded in 2 days with a clarification list and a requested demo window. They asked for security documentation (SOC 2, data retention), a detailed implementation plan, and a revised pricing table in their RFP template.",
      sources: [
        { name: "PDF", logo: "/logos/outreach.png" },
        { name: "Google Docs", logo: "/logos/salesforce.png" },
      ],
    },
    {
      id: "growth-signal",
      title: "John Deere keeps on pushing back meetings",
      summary:
        "John Deere has rescheduled the main stakeholder meeting three times in two weeks, most recently pushing it out another 10 days. Notes from the coordinator mention “internal alignment” and “budget review,” and the same agenda items keep carrying forward.",
      sources: [
        { name: "Calendar", logo: "/logos/sheets.png" },
        { name: "Gmail", logo: "/logos/hubspot.png" },
      ],
    },
    {
      id: "new-commitment",
      title: "Hilton's CFO left our meeting after 15 minutes",
      summary:
        "Hilton’s CFO joined the call, asked for the topline numbers (annual cost, payback period, and contract length), then dropped after 15 minutes and handed off to their FP&A lead. The FP&A lead stayed on and requested the model in spreadsheet form for review.",
      sources: [
        { name: "Gong", logo: "/logos/docusign.png" },
        { name: "Outlook", logo: "/logos/outlook.png" },
      ],
    },
    {
      id: "champion-change",
      title: "Our champion at Delta Airlines' changed jobs",
      summary:
        "Your main Delta Airlines contact updated their title and department in the last week and is no longer listed as the owner on the internal project doc. Their out-of-office reply points to a new lead in Procurement as the interim point of contact.",
      sources: [
        { name: "LinkedIn", logo: "/logos/linkedin.png" },
        { name: "PDF", logo: "/logos/salesforce.png" },
      ],
    },
    {
      id: "major-change",
      title: "Republic Services hinted at a major acquisition",
      summary:
        "On the last call, Republic Services mentioned they’re evaluating an acquisition and expect a decision “in the next 60–90 days.” They asked whether the current plan can scale to additional regions and how contract terms would apply if a new subsidiary is added mid-term.",
      sources: [
        { name: "Gong", logo: "/logos/gong.png" },
        { name: "Outlook", logo: "/logos/outlook.png" },
      ],
    },
    {
      id: "incident-cluster",
      title:
        "3M is expanding to a new site and doing a big shift in operations",
      summary:
        "3M confirmed a new site is coming online next quarter, plus a shift to a different operating model for two teams. They flagged new onboarding volume (about 120 users), asked about SSO for the additional site, and requested an updated rollout plan tied to the launch date.",
      sources: [
        { name: "Gong", logo: "/logos/gong.png" },
        { name: "Gmail", logo: "/logos/salesforce.png" },
      ],
    },
  ],
};
