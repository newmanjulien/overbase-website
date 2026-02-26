import type {
  BlogSection,
  BlogPageHero,
} from "@/components/layouts/blog-page-layout";

export const hero: BlogPageHero = {
  title: "The AI game is about to start",
  introduction: [
    "One of the couple of markets for AI is known: data management",
    "AI-native data management will replace SaaS vendors like Snowflake, but it will also own the budget that currently goes to paying employees a salary to do analysis",
    "Meaning that the value of this market is going to be bigger than all current software combined",
  ],
  buttonLabel: "See how to win",
  scrollTargetId: "how-new-vendors-win",
};

export const sections: BlogSection[] = [
  {
    id: "decentralized-data-system",
    title: "The decentralized data system",
    content: [
      "This new category will be a decentralized data system where business units get information without needing to go through a technical team",
      "They will quickly get insight from even the most dirty and disconnected data and with minimal setup",
      "The system will deliver this by mimicking human analysis to knock down silos",
    ],
    image: {
      src: "/analyst.webp",
      alt: "Analyst working at a multi-monitor workstation",
      caption:
        "Decentralized data systems will own SaaS budgets and human salaries",
    },
    imagePlacement: "after-content",
  },
  {
    id: "defensibility",
    title: "Embracing new defensibility is the key to winning",
    content: [
      "Collapsing these silos will dismantle the defensibility legacy database companies like Salesforce and Snowflake created, creating an innovator's dilemma and preventing them from competing",
      "New defensibility will come from getting access to a company's internal systems rather than accumulating more of their data",
      "Businesses already don't want to give that type of access, even to established vendors",
      "And the infosec concerns which are driving this new powerful defensibility are going to accelerate over the next decades",
    ],
  },
  {
    id: "how-new-vendors-win",
    title: "How new vendors win",
    content: [
      "To build defensibility, new vendors will need to start with the least sensitive data and get that data by targeting the most valuable use case",
      "To capture budget, new vendors will need to charge for human salaries from day 1",
      "In practice, the only path is to ask for data about sales prospects, help increase revenue, and sell a human service rather than an AI product",
    ],
  },
  {
    id: "about-to-start",
    title: "The game is about to start",
    content: [
      "The window of opportunity to be the owner of this market is going to open up soon",
      "The AI game is about to start. The market cap created in the past few years is about to get erased and VC portfolios are going to 0",
      "Startups still have time, but we'll need to move fast when the game starts, and moving fast will involve a few unpopular strategies",
    ],
  },
  {
    id: "unpopular-strategies",
    title: "Unpopular strategies for even more speed",
    content: [
      "Quickly getting customers will mean delivering quality in a market filled with slop, even if that means less automation in the short term",
      "Building defensibility will mean getting all the best customers right away by taking advantage of how large enterprises now want PLG-type sales, even if reinventing go-to-market is usually wrong",
      "And executing faster than others will mean building a one-person unicorn, even if everyone else is getting bogged down in building a team, even if it does not feel as fun and even if most founders are disqualified because they don't have the skills",
    ],
    image: {
      src: "/997.jpg",
      alt: "Photo illustration",
      caption: "996 used to be enough but now we need the 997",
    },
    imagePlacement: "before-heading",
  },
];
