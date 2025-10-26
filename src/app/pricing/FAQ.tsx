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
              a: "You pay a flat annual fee for each customer which you add to Overbase. Then you get unlimited data requests about those customers. The shortest countract length is 2 years",
            },
            {
              q: "What's the shortest contract length?",
              a: "The shortest contract length is 2 years. And you pay upfront for the 2 years",
            },
            {
              q: "Do you reimburse me if my customer churns?",
              a: "Yes. You pay us for the duration of your contract. Then we reimburse all the money you gave us if the customer churns during that time",
            },
            {
              q: "Do I get unlimited data requests or is there a cap?",
              a: "Unlimited. You can request any amount of data with no cap about the customers you add to Overbase",
            },
            {
              q: "Can an unlimited number of CSMs use Overbase or is there a per user fee?",
              a: "There's no user cap or per user fee for Team and Enterprise plans. The Starter plan is designed for a Chief of Staff or a dedicated Data Science team member who handles all data for CSMs. The Team and Enterprise plans are designed for CSMs to get their own data. The Starter plan allows 1 user and doesn't have collaboration features. The Team and Enterprise plans include unlimited users",
            },
            {
              q: "How secure and compliant is Overbase?",
              a: "Overbase is safer than all other data systems. We store 0 of your business' data and only access it when needed. We are also GDPR and SOC2 compliant. And you can get enterprise-ready security features like SAML/OIDC SSO with the Enterprise plan",
            },
            {
              q: "Does Overbase use my data to train your AI?",
              a: "No. We do not use your data to train our AI. We also do not store any of your data",
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
