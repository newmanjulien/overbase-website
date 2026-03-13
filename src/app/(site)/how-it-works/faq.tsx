import { FAQSection, type FAQItem } from "@/components/faq-section";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "collect",
    question: "What information do you collect?",
    answer:
      "Overbase analyzes activities sellers perform. And documents they produce. We might analyze an email to understand how a deal is progressing. Or the PDF of a proposal to get a better sense of the specific terms",
  },
  {
    id: "access",
    question: "How do you access that information?",
    answer:
      "We can pull data from any system. In many cases, the information you need lives in the Office Suite - Outlook, OneDrive, Excel, etc. so we integrate with those services for each of your sellers",
  },
  {
    id: "reliable",
    question: "Why is the information Overbase provides so reliable?",
    answer:
      "Because we analyze real activities and not self-reported data. Looking at what's happening from the bottom-up gives you a second point of vue which you can compare to your seller's perspective",
  },
  {
    id: "time",
    question: "Does this save time for sellers?",
    answer:
      "Yes. Your sellers currently spend 1h - 3h preparing for meetings with you. Overbase turns these hours of hard work into 10 minutes of easy review",
  },
];

export default function FAQ() {
  return <FAQSection items={FAQ_ITEMS} />;
}
