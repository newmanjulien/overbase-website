import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PricingFAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: PricingFAQItem[] = [
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
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-100 rounded-md px-4"
            >
              <AccordionTrigger className="text-left text-sm font-normal text-gray-800 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
