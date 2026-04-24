import type { ReactNode } from "react";
import CrossPattern from "./patterns/cross-pattern";
import DotPattern from "./patterns/dot-pattern";
import OverlapPattern from "./patterns/overlap-pattern";

interface Principle {
  id: string;
  title: string;
  description: ReactNode;
  pattern: "dots" | "overlap" | "crosses";
}

const PRINCIPLES: Principle[] = [
  {
    id: "pareto",
    title: "Talent is Pareto distributed",
    description: (
      <>
        A handful of people are smarter and more capable than everyone else
        combined. Join if you're one of those people (
        <a
          href="https://drive.google.com/file/d/16uhq5ibxdItJj5IIHqH0kSC-FltpcK_K/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
        >
          link
        </a>
        )
      </>
    ),
    pattern: "crosses",
  },
  {
    id: "good",
    title: "Actually good engineers",
    description: (
      <>
        Almost no engineers even try to be good at their job. Join if you're
        actually trying to be good at engineering (
        <a
          href="https://drive.google.com/file/d/1goXlfE8MOjjiMro_sEC45FNAyUdQJH70/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
        >
          link
        </a>
        )
      </>
    ),
    pattern: "dots",
  },
  {
    id: "learn",
    title: "Learning with the best",
    description: (
      <>
        Learning happens when you're with the best people and they're helping
        you improve. Join if you're going to help us learn (
        <a
          href="https://drive.google.com/file/d/1BCWhO2YK0UMhWqukDNKN_pzF8xyblVhu/view"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65"
        >
          link
        </a>
        )
      </>
    ),
    pattern: "overlap",
  },
];

function Pattern({ pattern }: Pick<Principle, "pattern">) {
  if (pattern === "dots") return <DotPattern />;
  if (pattern === "overlap") return <OverlapPattern />;
  return <CrossPattern />;
}

export default function CareersPrinciples() {
  return (
    <section className="px-6 md:px-12 lg:px-24 pt-[4.5rem] md:pt-[7.5rem] max-w-7xl mx-auto">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
        {PRINCIPLES.map((principle) => (
          <article key={principle.id}>
            <div className="relative h-52 md:h-56 rounded-lg border border-gray-200 bg-zinc-50">
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
