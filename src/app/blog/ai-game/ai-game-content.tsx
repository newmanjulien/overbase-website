import type {
  BlogSection,
  BlogPageHero,
} from "@/components/layouts/blog-page-layout";

export const hero: BlogPageHero = {
  title: "The AI game is about to start",
  introduction: [
    "Each technology wave has just a few winners. And only one of the couple of markets for AI is known: data management",
    "AI-native data management will replace SaaS vendors like Snowflake, but it will also eat the budget that currently goes to paying employees a salary to do analysis",
    "The value of this market is going to be bigger than all current software combined. And winning this single market is the only thing that matters in business today",
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
      "This decentralized system will deliver this by mimicking human analysis to knock down silos",
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
    title: "Embracing new defensibility is a key to winning",
    content: [
      "Collapsing silos will dismantle the defensibility which legacy database companies like Salesforce and Snowflake built. This will create an innovator's dilemma and prevent legacy vendors from competing",
      "New defensibility will come from getting access to a company's internal systems rather than locking in their data",
      "Businesses already don't want to give that access. They especially don't want to give established vendors that access",
      "And the infosec concerns which are driving this new more powerful defensibility are going to accelerate over the next decades",
    ],
  },
  {
    id: "headwinds",
    title: "Being truthful about headwinds is a key to winning",
    content: [
      "AI hype has hidden the headwinds which are going to tank most tech businesses in the next few years",
      "It's not true that B2B buyers want more SaaS. Boards have been driving spend by pressuring execs to buy AI. But the underlying fatigue with new tools hasn't gone away. We're far from the bottom-up hunger that drove the consumerization of the enterprise",
      "It's also not true that AI is improving faster than in the past decades. LLMs have only been improving incrementally since GPT 2 and the next leap forward - world models - is at least a decade away",
      "Maybe most important, it's not true that anyone is using any of the AI tools which have been sold in the past few years. And the real medium term NRR of the current batch of AI businesses is close to 0",
    ],
  },
  {
    id: "how-new-vendors-win",
    title: "How to build the most valuable company in history",
    content: [
      "Today is the best time to be a B2B software vendor since the 1980s. But startups need to be smart because it's also the most confusing time to build a startup since the 1980s",
      "To build defensibility, we need to start with the least sensitive data and get that data by targeting the most valuable use case",
      "To capture budget, we need to charge for human salaries from day 1. And to overcome headwinds, we need to move away from selling AI hype",
      "In practice, only one path exists",
      "Startups need to ask for low stakes data about sales prospects. Create impossible to ignore value by helping to increase revenue. And deliver quality while cutting through the hype by selling human services",
    ],
  },
  {
    id: "about-to-start",
    title: "The game is about to start",
    content: [
      "The window of opportunity to be the owner of the most valuable company in history is going to open up soon",
      "The market cap created in the past few years is about to get erased. And VC portfolios are all going to be written off",
      "Startups will need to move fast when the AI game starts",
      "The increased speed which is necesary to win will involve a few unpopular strategies. And it'll involve making decisions that feel right to customers but wrong to backwards-facing VCs",
    ],
  },
  {
    id: "unpopular-strategies",
    title: "Unpopular strategies for exponentially more speed",
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
