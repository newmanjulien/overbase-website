"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          {[
            {
              q: "Will you really help us get millions of dollars?",
              a: "Yes. Chck out the 6% pricing tier where you pay nothing until you realize the revenue. And where your reps and managers decide what revenue gets attributed to Overbase",
            },
            {
              q: "Is Overbase a human service?",
              a: "Yes. we’re a human service, not just AI. We hire top data scientists from the world’s best schools and equip them with custom AI tools designed specifically for analyzing sales deals",
            },
            {
              q: "Who is the data scientist that works for me?",
              a: "A graduate from one of the world's most selective schools. Overbase recruits the smartest students from the best schools. We leverage our CEO's teaching role at Princeton to access talent that's out of reach to others",
            },
            {
              q: "Why is Overbase so much more secure than alternatives?",
              a: "We never store your data for more than 30 days and all access requires human approval. Which makes Overbase safer than fully automated solutions. We also only handle low-risk data about prospective customers",
            },
            {
              q: "How does attribution work for the 6% tier?",
              a: "Your reps and managers decide what revenue to attribute. The 6% tier aligns our incentives with yours—you only pay after you realize revenue",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
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
