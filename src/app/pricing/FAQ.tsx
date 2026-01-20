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
    <section className="px-6 md:px-12 lg:px-24 py-24">
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
              q: "What type of questions can my Personal LLM answer?",
              a: "Any question which can be answered by analyzing your internal data. Your Personal LLM can easily access all your internal data sources, find the answers you need, question their own results and get you the most in-depth and reliable answers possible. And your Personal LLM knows your business, your data and your preferences",
            },
            {
              q: "How reliable are the answers from my Personal LLM?",
              a: "Fully reliable as long as one of our Data Scientists supervises it. Personal LLM can process more data, faster and better than the best human analyst. And get you the most in-depth and reliable answers possible. But the tech is still new so they need humans to coordinate them and review their work. This is why Overbase has a team of human data scientists who supervise our Personal LLMs",
            },
            {
              q: "How does my Personal LLM compare to Generic LLMs?",
              a: (
                <>
                  Personal LLMs know you, your business and your data. This
                  means you can ask them anything and get reliable answers.
                  Check out this{" "}
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
                  Actually good answers and actually real security. We can train
                  your Personal LLM on your data and still keep it isolated from
                  the public internet. And our Personal LLMs actually know you,
                  your business and your data. Check out this{" "}
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
              q: "How do Personal LLMs work and how are they trained?",
              a: (
                <>
                  Overbase's Personal LLMs start with GPT OSS as their base
                  model. We then train the base model using proprietary machine
                  generated data which shows the model how to do data analysis
                  work for Revenue Execs and how to navigate the most complex
                  and disconnected data systems. Then our Data Scientists
                  continue training and fine-tuning the model using the data
                  which is created from answering your questions. Our Personal
                  LLMs always run on Overbase's local servers and never connect
                  to APIs or any other AI services. What this means for you is
                  that your Personal LLM gets better and better over time and
                  can answer your questions in an in-depth and reliable way.
                  Check out this{" "}
                  <Link
                    href="/example"
                    target="_blank"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    example
                  </Link>{" "}
                  to see how much better Personal LLMs are compared to Generic
                  LLMs
                </>
              ),
            },
            {
              q: "Do I own the IP of my Personal LLM?",
              a: "Yes with our Team and Enterprise plans. Overbase never uses your Personal LLM for any purpose other than to answer your questions. But with the Team or Enterprise tier, you own the IP and can download your Personal LLM to run it on your own infrastructure",
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
