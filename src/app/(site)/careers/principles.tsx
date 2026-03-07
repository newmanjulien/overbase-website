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
    id: "pareto",
    title: "Talent is Pareto distributed",
    description: (
      <>
        A handful of people are smarter and more capable than everyone else
        combined. We work with those people (
        <a
          href="https://drive.google.com/file/d/16uhq5ibxdItJj5IIHqH0kSC-FltpcK_K/view"
          target="_blank"
          rel="noopener noreferrer"
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
    id: "exceptional",
    title: "Exceptional isn't good enough",
    description: (
      <>
        We're here to do work that's much better than exceptional. If work is
        merely exceptional, we start again (
        <a
          href="https://drive.google.com/file/d/1y0RXd-1DeeTFJ80e_Dcs3sLzu9e3svDV/view"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          link
        </a>
        )
      </>
    ),
    pattern: "dots",
  },
  {
    id: "trust",
    title: "Trust and collaboration",
    description: (
      <>
        Low IQ people front on each other because they can't engage with the
        content at hand. Our team is smart enough to be trustworhy (
        <a
          href="https://drive.google.com/file/d/1i6BepM49--IKvrbD7bzhprxpq-tu9p78/view"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          link
        </a>
        )
      </>
    ),
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
