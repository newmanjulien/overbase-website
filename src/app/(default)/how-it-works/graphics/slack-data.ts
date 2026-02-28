import type { SlackExample } from "./types";

export const slackExample: SlackExample = {
  id: "how-it-works-slack",
  threads: [
    {
      id: "slack-thread-1",
      dayLabel: "Today",
      message: {
        id: "deal-review",
        userName: "Howard @ Overbase",
        avatarUrl: "/analyst.jpg",
        paragraphs: [
          "Hey Rob. We're preparing the deal report Laura needs for her pipeline review meeting with you",
          "I'm wondering about the dynamics between the economic buyer and the champion in the Acme deal (eg. what's happening in the background)",
          "Could you ask a question about this on your call with the Acme team tomorrow? I would prepare notes to make it easy",
        ],
      },
      composerPlaceholder: "Message Howard",
    },
    {
      id: "slack-thread-2",
      dayLabel: "Today",
      message: {
        id: "deal-review-approvals",
        userName: "Howard @ Overbase",
        avatarUrl: "/analyst.jpg",
        paragraphs: [
          "I couldn't find any engagement from Acme in the past 2 weeks. And also from Whirlpool",
          "If you feel we should reach back out ahead of your pipeline review meeting with Laura. I could propose emails you could send to each account if that made it easier. ",
          "Or if there's a good reason we didn't hear back which I didn't find. Let me know so I can flag it to Laura and save you guys time",
        ],
      },
      composerPlaceholder: "Message Howard",
    },
    {
      id: "slack-thread-3",
      dayLabel: "Today",
      message: {
        id: "deal-review-usage",
        userName: "Howard @ Overbase",
        avatarUrl: "/analyst.jpg",
        paragraphs: [
          "There are a couple of deals with potentially missing data which I put in Laura's list for your pipeline review meeting",
          "Do you want me to send you a summary?",
          "If you have the data, you could just tell me and I would update the CRM for you. I'd also update Laura's list so she has the most up-to-date information when she prepares for your meeting. Which would help you use your time together more productively",
        ],
      },
      composerPlaceholder: "Message Howard",
    },
  ],
};
