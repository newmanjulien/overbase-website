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
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-gray-900">Frequently asked questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "Why do you get reliable answers when others don't?",
              a: "We get reliable answers by using exponentially more tokens and by having humans in the loop. Overbase runs the most advanced AI agents to gather and analyze your data. These agents can run for days on end, complete the most complex tasks and they can consume millions of tokens for each question. Then we get human data scientists to coordinate those agents and review their work each step of the way",
            },
            {
              q: "Why does Overbase cost so much?",
              a: "Because we use so many tokens. Getting reliable answers means that we spend on average ~$500 on tokens for each question you ask. AI that actually works will become accessible to everyone in the future. But Overbase only makes sense today for the most senior execs in the best businesses",
            },
            {
              q: "How do you access data from our systems?",
              a: "Safely, reliably and easily. AI agents can access any of your systems using APIs and tradional connectors. Or AI agents can also simply log in using the same credentials your team uses. AI agents can also quickly access and convert unstructured data",
            },
            {
              q: "How do you access our data when we have complex systems?",
              a: "Our connectors typically connect to most business' data systems. If your business needs more customization, we recommend the Enterprise tier which includes a named technical lead who works with your team on data integrations",
            },
            {
              q: "How do you get data from people on my team?",
              a: "By making it easy for your team to share data. We contact team members using their preferred channel: email, Slack, text message, etc. Then we let them share data in whatever format is easiest: sending a screenshot, voice notes, sharing a file, etc.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-100 rounded-lg px-4 bg-white"
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
