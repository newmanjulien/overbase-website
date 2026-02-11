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
          <p className="text-neutral-600 text-center max-w-2xl mx-auto">
            Easily get reliable answers from disconnected and dirty data by
            simply sending a DM in Slack to your personal analyst
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Who are the human data analysts who answer my questions?",
              a: "Our human analysts graduated from the world's most selective schools or worked at the world's most selective businesses - BCG, McKinsey, Google, Tesla, etc.",
            },
            {
              q: "How much AI is involved?",
              a: "All work is done by a human. But most of it is done using AI tools. Overbase builds proprietary AI tools which our analysts use to quickly process data. Or to process unstructured data which can only be unlocked with AI",
            },
            {
              q: "What type of question can I ask?",
              a: "Any question you'd ask an internal analyst, a Chief of Staff or a Rev Ops team member. Overbase is built specifically for revenue execs and we're specialized in answering questions for CROs, CMOs, CPOs and CCOs",
            },
            {
              q: "How do you access my business' data?",
              a: "Simply and safely. We use APIs to programatically access data. Or we have humans log into dashboards. Overbase never stores any of your data for more than 30 days",
            },
            {
              q: "How does the Slack app work and do I need Slack?",
              a: "You do need Slack. You send DMs to your personal analyst through the Overbase Slack app. This lets you easily set up datasources and lets us guarantee security and compliance",
            },
            {
              q: "What about data safety and security?",
              a: "Overbase never stores any of your data for more than 30 days. And there needs to be a human intervention for our system to access your data. This means that Overbase is safer than any fully automated data solution",
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
