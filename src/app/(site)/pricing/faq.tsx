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
    id: "fully-free",
    question: "Is sharing data fully free?",
    answer:
      "Yes. It's fully free. You and your ecosystems partners can share data from as many systems as you want for free. You only pay if you select to receive revenue opportunities, and that's perfomance-based",
  },
  {
    id: "how-do-you-gather",
    question: "Do my ecosystem partners need to pay anything?",
    answer:
      "No. Your ecosystem partners can share any data with you for free. They would only pay if they selected to receive revenue opportunities, and that's perfomance-based",
  },
  {
    id: "delivery-cost",
    question: "Are there any upfront costs at all?",
    answer:
      "In most cases, no. Overbase sometimes builds custom tools to help businesses better integrate opportunities into their team's unique workflows. And businesses who request this custom work pay for the custom work",
  },
  {
    id: "how-do-you-customize",
    question: "How does your performance pricing work?",
    answer:
      "You pay 5% of the net new revenue we generate together, and you only pay after you get paid. The specific mechanics are customized to best fit your business model and to reduce administrative overhead. Typically, the revenue is attributed to Overbase by your team in a self-reported way",
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
