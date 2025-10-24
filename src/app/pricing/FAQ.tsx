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
              a: "Start using hndl immediately with full access to your chosen plan's features. No credit card required. If you're satisfied after the trial, simply add your payment information to continue. Otherwise, your account will automatically pause with no charges.",
            },
            {
              q: "Do I pay a fee for each customer or for each user?",
              a: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features and we'll prorate the billing. When downgrading, the change takes effect at the start of your next billing cycle.",
            },
            {
              q: "Do you reimburse me if my customer churns?",
              a: "We'll notify you when you're approaching your plan limits. You can either upgrade or purchase additional capacity. We never cut off service unexpectedly—your workflow comes first.",
            },
            {
              q: "Do I get unlimited data requests or is there a cap?",
              a: "Absolutely. We use enterprise-grade encryption for all data. Our team signs NDAs, and we're SOC 2 Type II compliant. Enterprise plans include SSO and custom retention policies.",
            },
            {
              q: "Can an unlimited number of CSMs use Overbase or is there a per user fee?",
              a: "Absolutely. We use enterprise-grade encryption for all data. Our team signs NDAs, and we're SOC 2 Type II compliant. Enterprise plans include SSO and custom retention policies.",
            },
            {
              q: "How secure and compliant is Overbase?",
              a: "Enterprise plans are customized and include unlimited usage, dedicated teams, API access, advanced security, and SLA guarantees.",
            },
            {
              q: "Does Overbase use my data to train your AI?",
              a: "Enterprise plans are customized and include unlimited usage, dedicated teams, API access, advanced security, and SLA guarantees.",
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
