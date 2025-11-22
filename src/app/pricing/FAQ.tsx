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
              q: "How does Overbase's pricing work?",
              a: "You pay a flat monthly fee for each user. Then each user can make an unlimited amount of data requests. A data request is when you request that we gather, analyze and present data you need",
            },
            {
              q: "Do humans review the data before I get it?",
              a: "Yes. AI agents gather, analyze and format your data. Then we guarantee reliable results by having a human data scientist coordinate the agents and review the data before it's sent to you",
            },
            {
              q: "Do I get unlimited data requests or is there a cap?",
              a: "Unlimited. Each user can request any amount of data with no cap. There is a limit on the number of tokens which we use to complete each request but that limit is extremely high",
            },
            {
              q: "Why does Overbase cost thousands of dollars per user?",
              a: (
                <span>
                  Because we spend so much money on tokens. As a point of
                  reference,{" "}
                  <a
                    href="https://openrouter.ai/openai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                  >
                    100 million OpenAI tokens costs us $1,000
                  </a>
                  . Collecting data in a reliable and complete manner means
                  running multiple AI agents in parallel then picking the best
                  result. And these AI agents can run for several hours. This
                  cost will drop as LLMs get better.
                </span>
              ),
            },

            {
              q: "Do I need 100 million tokens per request?",
              a: "Most of the time you do not. Overbase typically uses less than 1 million tokens per request which is sufficient to get any data from anywhere in a reliable and complete way. And most ChatGPT conversations you've had likely used a few hundred tokens. But requests can require tens of millions of tokens if you work in the largest enterprises with the most siloed data",
            },
            {
              q: "What does 100 million tokens actually mean?",
              a: "Even 10 million tokens is likely more horsepower than any AI tool you've used. And it's this horsepower that lets us get actually reliable and useful results. Overbase breaks each of your data requests down into several subtasks, we run multiple AI agents for each of those subtasks and each of those multiple agents runs for many hours",
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
