import { FAQSection, type FAQItem } from "@/components/faq-section";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "lorem-1",
    question: "What information do you collect?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "lorem-2",
    question: "How do you access that information?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "lorem-3",
    question: "Why is Overbase so secure?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: "lorem-4",
    question: "Does this save time for sellers?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FAQ() {
  return <FAQSection items={FAQ_ITEMS} />;
}
