"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-gray-900 font-medium">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Can users make an unlimited amount of data requests?",
              a: "Yes. Unlimited. Each user can request any amount of data with no cap. There is a limit on the number of tokens which we use to complete each request but that limit is extremely high",
            },
            {
              q: "How does the token limit work?",
              a: "It's a limit on how many tokens Overbase uses for each request. But it doesn't stop you from making an unlimited amount of requests. In other words, you can make an unlimited amount of requests but there's a limit to how complex each request can be",
            },
            {
              q: "Why do you use so many tokens?",
              a: "Overbase breaks each data request down into several subtasks. We run multiple AI agents for each of those subtasks. And each of those multiple agents runs for many hours. This uses millions of tokens. And it sometimes uses tens of millions of tokens when you work in a large enterprise with siloed data",
            },
            {
              q: "Do humans review the data before I get it?",
              a: "Yes. AI agents gather, analyze and format your data. Then we guarantee reliable results by having a human data scientist coordinate the agents then review and correct the data before it's sent to you",
            },
            {
              q: "Why does Overbase cost thousands of dollars per user?",
              a: (
                <span>
                  Because we spend so much on tokens. 50 million Anthropic
                  tokens{" "}
                  <a
                    href="https://openrouter.ai/anthropic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                  >
                    costs $1,750.
                  </a>{" "}
                  Collecting data in a reliable and complete manner means
                  running multiple AI agents in parallel then picking the best
                  result. And these AI agents can run for several hours
                </span>
              ),
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="ring ring-gray-200 rounded-xl px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
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
