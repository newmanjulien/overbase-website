import type { ReactNode } from "react";
import ArcPattern from "./patterns/arc-pattern";
import CrossPattern from "./patterns/cross-pattern";
import DotPattern from "./patterns/dot-pattern";

interface Principle {
  id: string;
  title: string;
  description: ReactNode;
  pattern: "dots" | "arc" | "crosses";
}

const PRINCIPLES: Principle[] = [
  {
    id: "difficulty",
    title: "Talent is paretto distributed",
    description: (
      <>
        A handful of people are smarter and more capable than everyone else
        combined. We work with those people (
        <a
          href="https://drive.google.com/file/d/16uhq5ibxdItJj5IIHqH0kSC-FltpcK_K/view"
          className="underline"
        >
          link
        </a>
        )
      </>
    ),
    pattern: "crosses",
  },
  {
    id: "average",
    title: "Great gets your fired",
    description:
      "We're not here to do great work. We're here to do exceptional work. If your work is merely great, you're fired",
    pattern: "dots",
  },
  {
    id: "accountability",
    title: "Speed without mistakes",
    description:
      "We go faster and make fewer mistakes than everyone else. Sound impossible? Maybe Overbase isn't for you",
    pattern: "arc",
  },
];

function Pattern({ pattern }: Pick<Principle, "pattern">) {
  if (pattern === "dots") return <DotPattern />;
  if (pattern === "arc") return <ArcPattern />;
  return <CrossPattern />;
}

export default function CareersPrinciples() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-18 md:pt-30 max-w-7xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {PRINCIPLES.map((principle) => (
          <article key={principle.id}>
            <div className="relative h-52 md:h-56 rounded-3xl border border-gray-200 bg-[#f7f7f8]">
              <Pattern pattern={principle.pattern} />
            </div>
            <h3 className="mt-5 text-sm text-gray-900 font-medium leading-tight">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
