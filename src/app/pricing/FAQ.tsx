"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl text-gray-900 mb-4">
            Agentic Analyst vs. Human Analyst
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto">
            Agentic Analysts get answers that are more in-depth and more
            reliable
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "What type of questions can an Agentic Analyst answer?",
              a: "Any question which can be answered by analyzing your internal data. Agentic Analysts can easily access all your internal data sources, find the answers you need, question their own results and get you the most in-depth and reliable answers possible",
            },
            {
              q: "How reliable are Agentic Analysts?",
              a: "Fully reliable as long as there's a human in the loop. Agentic Analysts can process more data, faster and better than the best Human Analyst. And get you the most in-depth and reliable answers possible. But the tech is still new so they need humans to coordinate them and review their work. This is why Overbase has a team of human data scientists who coordinate our agents and review their work",
            },
            {
              q: "Do Agentic Analysts do a better job than Human Analysts?",
              a: "Yes as long as there's a human in the loop. Agentic Analysts can process exponentially more data, faster and better than the best Human Analyst. And get you the most in-depth and reliable answers possible. But the tech is still new so they need humans to coordinate them and review their work. This is why Overbase has a team of human data scientists who coordinate our agents and review their work",
            },
            {
              q: "How do Agentic Analysts access our data?",
              a: "The same way a Human Analyst accesses your data. And the same way legacy data systems access your data. Human Analysts access data by logging into accounts and querying dashboards. Legacy data systems use APIs to connect to data. Agentic Analysts do both easily with almost 0 setup",
            },
            {
              q: "How do Agentic Analysts get data from people on my team?",
              a: "The same way a Human Analyst would, but easier. The Agentic Analysts contacts team members using their preferred channel: email, Slack, text message, etc. Then lets them share data in whatever format is easiest: sending a screenshot, voice notes, sharing a file, etc.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-100 rounded-md px-4 bg-white"
            >
              <AccordionTrigger
                className="text-left text-md font-normal text-gray-800 hover:no-underline"
                style={{ fontSize: "0.95em" }}
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
