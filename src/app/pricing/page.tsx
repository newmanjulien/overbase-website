// src/app/pricing/page.tsx
"use client";

import { Button } from "../../components/ui/button";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "$1,000",
      period: "customer per year",
      description:
        "For a Chief of Staff or a Data Science Team who support CSMs",
      features: [
        "Up to 200 emails triaged per month",
        "5 presentation decks per month",
        "Basic data gathering",
        "Email support",
        "48-hour response time",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
    {
      name: "Team",
      price: "$1,500",
      period: "customer per year",
      description: "For a team of CSMs who easily get their own data",
      features: [
        "Up to 1,000 emails triaged per month",
        "20 presentation decks per month",
        "Advanced data gathering & analysis",
        "Priority email & chat support",
        "24-hour response time",
        "Dedicated account manager",
        "Custom templates",
      ],
      cta: "Join waitlist",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$2,500",
      period: "customer per year",
      description: "For enterprises who need extra security and compliance",
      features: [
        "Unlimited email triage",
        "Unlimited presentation decks",
        "Enterprise data integration",
        "24/7 priority support",
        "Dedicated team",
        "Custom workflows",
        "API access",
        "Advanced security & compliance",
      ],
      cta: "Join waitlist",
      highlighted: false,
    },
  ];

  const handleJoinWaitlist = () => {
    window.location.href = "/waitlist";
  };

  const handleHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
      // onJoinWaitlist={handleJoinWaitlist}
      // onHome={handleHome}
      // currentPage="pricing"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-40 pb-30 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-6xl text-gray-900 tracking-tight font-bold">
            $0 if your customer churns
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            <span className="bg-red-500/10 text-[#FC3636] px-1 rounded font-bold">
              Giving CSMs easy data increases renewals
            </span>
            reliably and consistently. Which is why we will reimburse you if
            your customer churns while you're using Overbase
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border-1 p-6 ${
                tier.highlighted
                  ? "border-gray-900 shadow-xl scale-105 border-2"
                  : "border-gray-100"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-sm text-xs">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-xl text-gray-900">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-gray-900">{tier.price}</span>
                  <span className="text-sm text-gray-900">/ {tier.period}</span>
                </div>
                <p className="text-sm text-gray-900 min-h-[2.5rem]">
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 mt-6 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                // onClick={onJoinWaitlist}
                className={`w-full mt-6 rounded-lg py-5 ${
                  tier.highlighted
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-gray-100 hover:bg-gray-50 text-gray-900"
                }`}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl text-gray-900 font-medium">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                How does the 14-day trial work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Start using hndl immediately with full access to your chosen
                plan's features. No credit card required. If you're satisfied
                after the trial, simply add your payment information to
                continue. Otherwise, your account will automatically pause with
                no charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                Can I upgrade or downgrade my plan?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Yes, you can change your plan at any time. When upgrading,
                you'll get immediate access to new features and we'll prorate
                the billing. When downgrading, the change takes effect at the
                start of your next billing cycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                What happens if I exceed my plan's limits?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We'll notify you when you're approaching your plan limits. You
                can either upgrade to a higher tier or purchase additional
                capacity on a per-use basis. We never cut off service
                unexpectedly—your workflow comes first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                How does the AI + human combination work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Our AI handles the initial processing and organization of your
                emails and data. Then, our trained specialists review and refine
                the output to ensure accuracy and context. This hybrid approach
                delivers the speed of AI with the nuance and judgment of human
                expertise.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                Is my data secure and confidential?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely. We use enterprise-grade encryption for all data in
                transit and at rest. Our team members sign strict NDAs, and
                we're compliant with SOC 2 Type II standards. Enterprise plans
                include additional security features like SSO and custom data
                retention policies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="ring ring-gray-200 rounded-lg px-6 bg-white"
            >
              <AccordionTrigger className="text-left text-md font-normal text-gray-900 hover:no-underline">
                What's included in Enterprise pricing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Enterprise plans are customized to your organization's needs.
                This typically includes unlimited usage, dedicated team members,
                custom integrations, API access, advanced security features, SLA
                guarantees, and white-glove onboarding. Contact our sales team
                for a tailored quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
