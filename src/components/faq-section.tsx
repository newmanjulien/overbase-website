"use client";

import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type FAQSectionProps = {
  title?: string;
  items: FAQItem[];
};

export function FAQSection({
  title = "Frequently asked questions",
  items,
}: FAQSectionProps) {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">{title}</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-100 rounded-md px-4"
            >
              <AccordionTrigger
                className="text-left text-md font-normal text-gray-800 hover:no-underline"
                style={{ fontSize: "0.92em" }}
              >
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
