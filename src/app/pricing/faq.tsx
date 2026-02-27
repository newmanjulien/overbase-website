"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl text-gray-900 mb-4">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Will you really help us get millions of dollars?",
              a: "Yes. If you're not sure, sign up for the 8% pricing tier where you pay nothing until you realize the revenue. The 8% tier lets your reps and managers decide what revenue to attribute to Overbase",
            },
            {
              q: "Is Overbase a human service or an AI?",
              a: "A human service. We hire the smartest data scientists and give them the best AI tools",
            },
            {
              q: "Who is the data scientist that gets me insight?",
              a: "A graduate from one of the world's most selective schools. Overbase recruits the smartest students from the best schools in the world. We leverage our CEO's teaching role at Princeton to get access to talent which is out of reach to others",
            },
            {
              q: "Why is Overbase so much more secure than alternatives?",
              a: "Overbase never stores your data longer than 30 days. All data access requires human intervention, making Overbase safer than automated data solutions while still delivering fast, accurate insights. We also only access information about prospective customers",
            },
            {
              q: "How does attribution work for the 8% tier?",
              a: "Your reps and managers decide what to attribute. The 8% tier is the best way to align incentives so we get paid when you get paid. It also means you pay us after you realize the revenue. But Overbase drives so much revenue that 8% ends up being a lot more than the per rep fee",
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
