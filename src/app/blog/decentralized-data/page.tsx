import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  BlogPageLayout,
  type BlogSection,
} from "@/components/layouts/BlogPageLayout";

const hero = {
  title: "The rise of decentralized data systems",
  introduction: [
    "For decades, businesses were told that centralized data platforms would finally give them a single source of truth. Salesforce, Snowflake, Oracle, SAP, and similar tools promised clarity, consistency, and actionable insights — all in one place",
    "In practice, however, centralizers often make things worse. Implementations take years — sometimes even decades, require constant maintenance, and frequently add friction instead of removing it. The “single source of truth” often becomes just another silo, creating yet another bottleneck for teams to navigate",
  ],
  buttonLabel: "See the solution",
  scrollTargetId: "rise-of-decentralized",
};

const sections: BlogSection[] = [
  {
    id: "centralized-failures",
    title: "Why centralized systems fail",
    content: [
      "Some of the most common problems with centralizers include:",
      <span>
        <span className="font-medium">Slow implementations:</span> Teams spend
        years building complex pipelines, only to find business questions have
        evolved
      </span>,
      <span>
        <span className="font-medium">Complexity multiplies:</span> Centralizers
        create dependencies across analysts, engineers, and IT teams, adding
        friction rather than clarity
      </span>,
      <span>
        <span className="font-medium">Bottlenecks and delays:</span> Every new
        question becomes a project; dashboards and reports take weeks to update
      </span>,
      <span>
        <span className="font-medium">
          False promises of a single source of truth:
        </span>{" "}
        Centralized systems rarely capture the full reality of a business; data
        can be incomplete, outdated, or contradictory
      </span>,
      <span>
        <span className="font-medium">The result:</span> In short: centralizers
        don’t just slow you down — they rob teams of the ability to truly know
        what’s happening
      </span>,
    ],
    image: {
      src: "/snowflake.jpg",
      alt: "Illustrated poster highlighting decentralized systems benefits",
      caption:
        "Centralizers like Snowflake promised insights but delivered headaches",
    },
    imagePlacement: "before-heading",
  },
  {
    id: "rise-of-decentralized",
    title: "The rise of decentralized systems",
    content: [
      "Decentralized data systems aim to bring insights closer to the people who need them, removing bottlenecks, speeding decision-making, and reducing massive setup costs",
      "These systems are designed for speed, reliability, flexibility, accessibility, and affordability, empowering teams to answer questions immediately without waiting years for centralized implementations",
    ],
    image: {
      src: "/netflix.png",
      alt: "Netflix logo on a dark gradient background",
      caption: "Netflix uses a federated data model",
    },
  },
  {
    id: "decentralized-forms",
    title: "How decentralization shows up in the real world",
    content: ["Decentralized systems come in several distinct forms:"],
    subsections: [
      {
        title: "1. Data meshes",
        content: [
          <span>
            <span className="font-medium">What they are:</span> Architectural
            frameworks where data ownership is distributed across domains. Each
            team manages its own “data product” while adhering to shared
            governance standards
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Netflix
            uses a federated data model where teams own their analytics
            pipelines and datasets, enabling rapid experimentation while
            maintaining data quality
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> Removes central
            bottlenecks, enables faster insights at the team level, and avoids
            years-long centralized implementations
          </span>,
        ],
      },
      {
        title: "2. Knowledge-first platforms",
        content: [
          <span>
            <span className="font-medium">What they are:</span> Platforms that
            extract actionable knowledge from structured and unstructured data
            sources, including internal documentation, apps, and knowledge bases
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Glean
            provides unified search across Slack, Google Workspace, Salesforce,
            and other apps to surface answers for employees in seconds
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> Reduces time wasted
            hunting for information, accelerates decision-making, and enables
            teams to access insights without expensive, centralized data
            engineering projects
          </span>,
        ],
      },
      {
        title: "3. Personal analyst services",
        content: [
          <span>
            <span className="font-medium">What they are:</span> Human-powered
            services that combine expert analysts with AI tools to deliver
            reliable insights on demand
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Overbase
            analysts integrate with existing tools, combine structured and
            unstructured data, and provide answers directly to teams via Slack
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> True reliability from
            human judgment, zero setup, immediate answers, and a security
            advantage because data is never stored. Over the next decade, as AI
            becomes production-ready, this becomes automated
          </span>,
        ],
      },
    ],
  },
  {
    id: "why-it-works",
    title: "Why decentralized systems work — speed, reliability, and cost",
    content: [
      "Across all decentralized approaches:",
      <span>
        <span className="font-medium">Speed:</span> Answers are available
        immediately instead of waiting years for central pipelines
      </span>,
      <span>
        <span className="font-medium">Reliability:</span> Insights reflect real
        business reality, with context and judgment included when relevant
      </span>,
      <span>
        <span className="font-medium">Accessibility:</span> Any team can get
        answers without specialized expertise or long approval cycles
      </span>,
      <span>
        <span className="font-medium">Flexibility:</span> Decentralized systems
        evolve naturally as business needs change
      </span>,
      <span>
        <span className="font-medium">Cost:</span> Decentralized systems are
        dramatically cheaper to deploy. Centralized implementations often
        require tens of millions of dollars, large consulting teams, and years
        of engineer work. Decentralized approaches deliver answers fast,
        reliable, and at a fraction of the cost
      </span>,
      <span>
        <span className="font-medium">The outcome:</span> In short,
        decentralization restores the ability to truly know what’s happening in
        your business — fast, reliably, and affordably
      </span>,
    ],
    image: {
      src: "/poster.png",
      alt: "Illustrated poster highlighting decentralized systems benefits",
      caption: "Personal analysts are building an AI-native future today",
    },
    imagePlacement: "before-heading",
  },
  {
    id: "the-takeaway",
    title: "The takeaway",
    content: [
      "Centralized systems promised insights but delivered headaches and confusion. The next era of data is decentralized, bringing answers to the people who need them, when they need them",
      "Whether it’s data meshes, knowledge-first platforms like Glean, or personal analysts like Overbase, the shift is clear: centralizers slow you down and steal your ability to know. Decentralizers give you speed and reliable insight",
    ],
  },
];

export default function DecentralizedDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BlogPageLayout hero={hero} sections={sections} />
      <Footer />
    </div>
  );
}
