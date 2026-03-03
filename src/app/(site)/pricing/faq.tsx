"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "human-service",
    q: "Is Overbase a human service?",
    a: "Yes. We're a human service. We hire top data scientists and equip them with AI tools designed for analyzing sales deals and for forecasting revenue",
  },
  {
    id: "role-of-ai",
    q: "What's the role of AI in your service?",
    a: "We build custom AI tools for analyzing sales deals and for forecasting revenue. And our human data scientists use these tools",
  },
  {
    id: "security",
    q: "Why is Overbase so secure?",
    a: "We never store your data for more than 30 days and all access requires human approval. This makes Overbase safer than fully automated solutions. We also only use low-risk data about prospective customers",
  },
  {
    id: "attribution-3-percent",
    q: "How does attribution work for the 3% tier?",
    a: "Your reps and managers decide what revenue gets attributed to Overbase and you only pay after you realize the revenue. We create a custom process for attributing revenue that's custom to your business and tracks with how your sales process works",
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
              <AccordionTrigger
                className="text-left text-md font-normal text-gray-800 hover:no-underline"
                style={{ fontSize: "0.92em" }}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
