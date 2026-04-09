import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChallengeComparisonSection } from "@/content/challenges/types";

interface ComparisonSectionProps {
  section: ChallengeComparisonSection;
}

type ComparisonTone = "before" | "after";

export function ComparisonSection({ section }: ComparisonSectionProps) {
  return (
    <section className="mx-auto max-w-[75rem] px-6 pt-16 pb-12 md:px-12 lg:px-24">
      <div className="mt-8 md:mt-10">
        <div className="lg:relative lg:pb-64">
          <ComparisonCard
            eyebrow={section.before.eyebrow}
            title={section.before.title}
            tone="before"
            className={cn("lg:w-full lg:max-w-lg", section.before.className)}
            items={section.before.items}
          />
          <ComparisonCard
            eyebrow={section.after.eyebrow}
            title={section.after.title}
            tone="after"
            className={cn(
              "mt-6 lg:absolute lg:top-52 lg:right-0 lg:mt-0 lg:w-full lg:max-w-lg",
              section.after.className,
            )}
            items={section.after.items}
          />
        </div>
      </div>
    </section>
  );
}

interface ComparisonCardProps {
  eyebrow: string;
  title: string;
  tone: ComparisonTone;
  className?: string;
  items: ChallengeComparisonSection["before"]["items"];
}

function ComparisonCard({
  eyebrow,
  title,
  tone,
  className,
  items,
}: ComparisonCardProps) {
  const isBefore = tone === "before";

  return (
    <article
      className={cn(
        "rounded-lg p-6",
        isBefore ? "bg-[#fec2c2]" : "bg-sky-100/80",
        className,
      )}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-black/40 px-3 py-1.5 text-base leading-none text-gray-800">
        <StatusIcon tone={tone} sizeClassName="size-5" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-xl leading-tight tracking-tight text-gray-900 md:text-2xl">
        {title}
      </h2>
      <ul className="mt-8 space-y-6 text-gray-800">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <StatusIcon
              tone={tone}
              sizeClassName="mt-1 size-3.5 shrink-0"
              iconClassName="size-2.5"
            />
            <div className="space-y-0">
              <p className="text-md leading-tight font-medium">{item.title}</p>
              <p className="text-sm leading-snug text-gray-800/90">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StatusIcon({
  tone,
  sizeClassName,
  iconClassName,
}: {
  tone: ComparisonTone;
  sizeClassName?: string;
  iconClassName?: string;
}) {
  const Icon = tone === "before" ? X : Check;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-black",
        sizeClassName,
      )}
    >
      <Icon
        className={cn(
          iconClassName ?? "size-3.5",
          tone === "before" ? "text-[#fec2c2]" : "text-sky-100/80",
        )}
        strokeWidth={3}
      />
    </span>
  );
}
