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
              q: "Who are the human data analysts who answer my questions?",
              a: "Our analysts are elite professionals — graduates from the world’s most selective schools or former team members at top-tier companies like BCG, McKinsey, Google, and Tesla. They bring deep expertise and real-world business experience to every answer.",
            },
            {
              q: "How much AI is involved?",
              a: "All analysis is performed by humans. But our analysts are powered by advanced AI tools that speed up data processing and unlock insights from unstructured data — things that only AI can handle. Overbase builds proprietary AI to make every answer fast and reliable.",
            },
            {
              q: "What type of questions can I ask?",
              a: "Anything you would ask an internal analyst, Chief of Staff, or RevOps team. Overbase is designed for revenue leaders — CROs, CMOs, CPOs, and CCOs — providing actionable answers tailored to the most critical business questions.",
            },
            {
              q: "How do you access my business’ data?",
              a: "Simply and securely. We access data via APIs or by having our analysts log into dashboards as needed. Overbase never stores your data for more than 30 days, and all access requires human oversight.",
            },
            {
              q: "How does the Slack app work, and do I need Slack?",
              a: "Yes, you need Slack. You DM your personal analyst through the Overbase Slack app, which lets you quickly connect data sources and ensures security and compliance.",
            },
            {
              q: "What about data safety and security?",
              a: "Overbase never stores your data longer than 30 days. All data access requires human intervention, making Overbase safer than fully automated data solutions while still delivering fast, accurate insights.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-100 rounded-md px-4 bg-white"
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
