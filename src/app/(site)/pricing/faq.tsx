import { FAQSection, type FAQItem } from "@/components/faq-section";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "human-service",
    question: "Is Overbase a human service?",
    answer:
      "Yes. We're a human service. We hire top data scientists and equip them with AI tools designed for analyzing sales deals and for forecasting revenue",
  },
  {
    id: "role-of-ai",
    question: "What's the role of AI in your service?",
    answer:
      "We build custom AI tools for analyzing sales deals and for forecasting revenue. And our human data scientists use these tools",
  },
  {
    id: "meetings",
    question: "How many meetings do you prepare for each seller?",
    answer:
      "As many as you have with them. In most cases, we prepare one meeting per week",
  },
  {
    id: "attribution-3-percent",
    question: "How does attribution work for the 3% tier?",
    answer:
      "Your reps and managers decide what revenue gets attributed to Overbase and you only pay after you realize the revenue. We create a custom process for attributing revenue that's custom to your business and tracks with how your sales process works",
  },
];

export default function FAQ() {
  return <FAQSection items={FAQ_ITEMS} />;
}
