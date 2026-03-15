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
    answer: (
      <>
        We easily pull data from any system. But we usually start by getting set
        up with a personal assistant login for each seller's Outlook or Gmail
        account. This is called 'delegate access' in{" "}
        <a
          href="https://support.microsoft.com/en-us/office/share-and-access-a-calendar-with-edit-or-delegate-permissions-in-outlook-532e6410-ee80-42b5-9b1b-a09345ccef1b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
        >
          Outlook
        </a>{" "}
        and{" "}
        <a
          href="https://support.google.com/mail/answer/138350?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
        >
          Gmail
        </a>
      </>
    ),
  },
  {
    id: "reliable",
    question: "Why is the information Overbase provides so reliable?",
    answer:
      "Because we analyze real activities, not self-reported data. Looking at what's happening from the bottom-up gives you a second point of vue which you can compare to your seller's perspective",
  },
  {
    id: "time",
    question: "Does this save time for sellers?",
    answer:
      "Yes. Your sellers currently spend 1h - 3h preparing for meetings with you. Overbase turns these hours of hard work into 10 minutes of easy review where they simply need to tweak the notes we prepared",
  },
];

export default function FAQ() {
  return <FAQSection items={FAQ_ITEMS} />;
}
