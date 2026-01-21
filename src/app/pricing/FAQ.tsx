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
          <h2 className="text-4xl text-gray-900 mb-4">About Personal LLMs</h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto">
            Your Personal Large Language Model knows you, understands your data
            and can answer your questions in an in-depth and reliable way
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Is a Personal LLM actually a standalone Large Language Model?",
              a: "Yes, it's a standalone Large Language Model that's trained for you. It's not connected to any APIs or other AI services. It's not ChatGPT with a system prompt. It's a +200 GB file which lives on Overbase's servers, is run locally on our machines and is only used to answer your questions.",
            },
            {
              q: "How does my Personal LLM compare to Generic LLMs?",
              a: (
                <>
                  Personal LLMs know you, your business and your data. This
                  means you can easily ask them anything and get reliable and
                  in-depth answers. Check out this{" "}
                  <Link
                    href="/example"
                    target="_blank"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    example
                  </Link>
                </>
              ),
            },
            {
              q: "What are the advantages of Personal LLMs?",
              a: (
                <>
                  Good answers and real security. We can train your Personal LLM
                  on your data and still keep it isolated from the public
                  internet. And our Personal LLMs actually know you, your
                  business and your data. Check out this{" "}
                  <Link
                    href="/example"
                    target="_blank"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    example
                  </Link>
                </>
              ),
            },
            {
              q: "How common are Personal LLMs?",
              a: "More and more common amongst Software Engineers and Data Scientists, but not yet common with non-technical professionals. Many Software Engineers and Data Scientists train and run a Personal LLM on their local machines instead of using Generic LLMs through APIs",
            },
            {
              q: "Do I own the IP of my Personal LLM?",
              a: "With our Team and Enterprise plans. Overbase never uses your Personal LLM for any purpose other than to answer your questions. But with the Team or Enterprise tier, you own the IP and can download your Personal LLM to run it on your own infrastructure",
            },
            {
              q: "How do Personal LLMs work and how are they trained?",
              a: "Overbase's Personal LLMs are a +200 GB file which lives on Overbase's servers, is run locally on our machines and is only used to answer your questions. Our Personal LLMs are not connected to any APIs or other AI services. Rather, they're a whole standalone Large Language Model that's trained for you. We build this Personal LLM by starting with GPT OSS (OpenAI's open source model) as the base model. We then train this base model so it learns how to do data analysis work for Revenue Execs and how to navigate the most complex and disconnected data systems. This extra training adds billions of parameters to the model. We then create a copy of this specialized and proprietary LLM and continue training and fine-tuning it for you. As you ask questions and get answers, our Data Scientists supervise the LLM to show it the right answers and teach it your preferences and your context",
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
