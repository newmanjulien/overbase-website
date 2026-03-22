import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PricingFAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: PricingFAQItem[] = [
  {
    id: "fully-free",
    question: "Is data gathering fully free?",
    answer:
      "Yes. It's fully free. Overbase will gather detailed, thorough and reliable information from as many sellers as you want and as many systems as you want. There's no limit and it's fully free",
  },
  {
    id: "how-do-you-gather",
    question: "How do you gather data from my team?",
    answer:
      "We usually start with Office 365 or GSuite but we integrate with any system. Overbase typically starts by getting delegate access to the Office 365 accounts of your sellers - this is the same access you already give to personal assistants. But we also integrate with your CRM and any other existing system. Gathering data in a seamless, granular and reliable way is the hardest part of Overbase's service. It's only possible because of advanced technology which wasn't possible until now and building this advanced technology is most of what our engineering team works on",
  },
  {
    id: "delivery-cost",
    question: "How much does data delivery cost?",
    answer:
      "It starts at $5 per user per month. We build custom tools for you and we agree to a per month cost for each tool. The tools most businesses start with typically cost $5 per user per month",
  },
  {
    id: "how-do-you-customize",
    question: "How do you customize data delivery for my business?",
    answer:
      "By partnering with you. We define the most important problems together before deciding to partner. And we agree to data delivery tools or integrations which Overbase will build to solve the problems we identified together",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 lg:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-gray-900 mb-4">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-100 rounded-md px-4"
            >
              <AccordionTrigger className="text-left text-sm font-normal text-gray-800 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
