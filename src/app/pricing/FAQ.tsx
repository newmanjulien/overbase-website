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
              q: "How do you get reliable answers?",
              a: "You will get answers which are just as reliable as if you'd asked the best analyst on your team. We get reliable answers by combining the most advanced AI agents which let us get insight from large and complex structured or unstructured datasets. With the most elite human data scientists who guarantee quality and accuracy. We use the most advanced AI models. Our data scientists are amongst the best in the world - having graduated from the world's most selective schools and worked at the world's most selective businesses",
            },
            {
              q: "How do you work with disconnected and dirty data?",
              a: "In the same way the best human analyst works with disconnected and dirty data. You never do any migration or any data cleaning. You simply ask questions then get reliable answers. Overbase's custom AI agents follow the same method which the best human analysts follow. They gather data, look at the results, question the results, ask people in the team for input, go back to gather data again, and wind up with results that are truly reliable. The whole process is coordinated and supervised by the most elite human data scientists",
            },
            {
              q: "How easy is it to ask questions?",
              a: "Simply send a DM in Slack. Your personal analyst lives in your Slack and you ask questions by sending a simple DM",
            },
            {
              q: "What type of question can I ask?",
              a: "Any question you'd ask a human analyst, a Chief of Staff or a Rev Ops team member. Overbase is built specifically for revenue execs and we're specialized in answering questions for CROs, CMOs, CPOs and CCOs",
            },
            {
              q: "What's the role of AI agents in answering my questions?",
              a: "AI agents do most of the work. Our agents run for dozens of hours and use tens of millions of tokens to gather and analyze data for each question. This lets us access any datasource. And lets us process any data - including unstructured data like Gong recordings or emails",
            },
            {
              q: "What's the role of human data scientists in answering my questions?",
              a: "Elite human data scientists coordinate the AI agents and ensure quality. Our data scientists are amongst the best in the world. They have graduated from the world's most selective schools and worked at the world's most selective businesses. When you ask a question, they decide which AI agent will do what and they oversee the agent's work. If the end result isn't perfect, the human data scientist launches the process again to guarantee you get the most reliable answer",
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
