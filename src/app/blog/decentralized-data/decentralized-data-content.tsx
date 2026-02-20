import type {
  BlogSection,
  BlogPageHero,
} from "@/components/layouts/BlogPageLayout";

export const hero: BlogPageHero = {
  title: "Twilight of the data centralizers",
  introduction: [
    "For decades, businesses were told that centralized data platforms would give them a single source of truth. Salesforce, Snowflake, Oracle, SAP, and similar tools promised clarity, consistency, and actionable insights — all in one place",
    "In practice, centralizers almost always make things worse. Implementations take years — sometimes even decades, require constant maintenance, and frequently never succeed at all",
    "The “single source of truth” often becomes yet another silo, creating one more bottleneck and making it harder to get insight",
  ],
  buttonLabel: "See solution",
  scrollTargetId: "rise-of-decentralized",
};

export const sections: BlogSection[] = [
  {
    id: "centralizer-failures",
    title: "Why centralizers failed",
    content: [
      "Some of the problems with centralizers include:",
      <span>
        <span className="font-medium">Slow implementations:</span> Teams spend
        years building complex pipelines, only to find business questions have
        evolved
      </span>,
      <span>
        <span className="font-medium">Complexity compounds:</span> Centralizing
        means integrating multiple complex systems that work differently. And
        centralizing them compounds their complexcity
      </span>,
      <span>
        <span className="font-medium">Disempowering teams:</span> The technical
        complexity puts an IT team between the business units who use insight
        and the data they need
      </span>,
      <span>
        <span className="font-medium">Lock-in and costs:</span> Centralizers tie
        you to long, costly implementations and force you to migrate all your
        data, making it hard to switch
      </span>,
      <span>
        <span className="font-medium">
          False promises of a single source of truth:
        </span>{" "}
        Centralized systems only duplicate data, and in practice create yet
        another silo that often gets forgotten
      </span>,
      <span>
        <span className="font-medium">The result:</span> Centralizers don’t just
        slow you down — they rob teams of the ability to truly know what’s
        happening
      </span>,
    ],
    image: {
      src: "/snowflake.jpg",
      alt: "Illustrated poster highlighting decentralized systems benefits",
      caption:
        "Centralizers promised insights but delivered headaches and lock-in",
    },
    imagePlacement: "before-heading",
  },
  {
    id: "rise-of-decentralized",
    title: "The rise of decentralized systems",
    content: [
      "Decentralized data systems bring insights closer to the people who need them, removing bottlenecks, improving data quality and speeding decision-making",
      "These systems are designed for speed and reliability. They let teams answer questions immediately without going through IT",
    ],
    image: {
      src: "/netflix.png",
      alt: "Netflix logo on a dark gradient background",
      caption: "Netflix is decentralizing their data using a federated model",
    },
  },
  {
    id: "decentralized-forms",
    title: "Decentralizers are getting better, easier and more complete",
    content: [
      "Leading businesses are building more and more decentralized systems. And these decentralized systems are quickly maturing into complete solutions to data management",
    ],
    subsections: [
      {
        title: "1. Mesh architectures",
        content: [
          <span>Mesh architectures were the first decentralized systems</span>,
          <span>
            <span className="font-medium">What they are:</span> New database
            architectures where data ownership is distributed across domains.
            Each team manages its own “data product” while adhering to shared
            governance standards
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Netflix has
            been using a federated approach since 2017. Each business unit has
            an analytics team that builds their own analytics pipelines
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> Removes central
            bottlenecks and lets each team move faster by managing their own
            data
          </span>,
        ],
      },
      {
        title: "2. User-friendly query tools",
        content: [
          <span>User-friendly query tools were pre-AI pioneers</span>,
          <span>
            <span className="font-medium">What they are:</span> Tools that
            extract data from structured and unstructured data sources,
            including internal documentation and apps
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Glean was
            founded in 2019 and they provide user-friendly data querying from
            Slack, Google Workspace, Salesforce, and other apps to let
            non-technical employees fetch data
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> Lets non-technical
            employees access raw data without relying on and waiting for IT
          </span>,
        ],
      },
      {
        title: "3. Autonomous systems",
        content: [
          <span>The future will be AI-native autonomous data systems</span>,
          <span>
            <span className="font-medium">What they are:</span> AI systems which
            solve all data problem quickly and simply by mimicking how human
            analysts engage with data but at exponentially faster speeds
          </span>,
          <span>
            <span className="font-medium">Real-world example:</span> Overbase
            has built a semi-autonomous system which is still supported by human
            analysts and will over time become increasingly autonomous as the AI
            tech matures
          </span>,
          <span>
            <span className="font-medium">Benefits:</span> Reliability, accuracy
            and simlicity. Autonomous systems scale and speed up the already
            known solution to all data problems by mimicking how human analysts
            have already solved them at small scales
          </span>,
        ],
      },
    ],
  },
  {
    id: "why-it-works",
    title: "Why decentralized systems work — speed and reliability",
    content: [
      "Across all decentralized approaches:",
      <span>
        <span className="font-medium">Speed:</span> Answers are available
        immediately instead of waiting years for over-engineered pipelines
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
        <span className="font-medium">The outcome:</span> In short,
        decentralization creates the ability to truly know what’s happening in
        your business — fast and reliably
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
      "Centralized systems promised insights but delivered headaches. The next era of data is decentralized",
      "Whether it’s mesh architectures, user-friendly query tools, or autonomous systems, the shift is clear: centralizers slow you down and steal your ability to know. Decentralizers give you speed and reliable insight",
    ],
  },
];
