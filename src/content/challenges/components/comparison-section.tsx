import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChallengeComparisonSection } from "@/content/challenges/types";

interface ComparisonSectionProps {
  section: ChallengeComparisonSection;
}

type ComparisonTone = "before" | "after";

const COMPARISON_CARD_STYLES: Record<
  ComparisonTone,
  {
    surface: string;
    glow: string;
    wash: string;
    badge: string;
    iconWrap: string;
    icon: string;
  }
> = {
  before: {
    surface:
      "border-[#ece2dc] bg-[linear-gradient(180deg,rgba(255,250,248,0.99)_0%,rgba(255,247,244,0.994)_100%)]",
    glow: "bg-[linear-gradient(90deg,rgba(228,86,52,0.072)_0%,rgba(239,118,79,0.052)_44%,rgba(255,196,151,0.032)_100%)]",
    wash: "bg-[radial-gradient(circle_at_top,rgba(255,211,191,0.095),transparent_55%)]",
    badge: "border-[#dfc5bb]/35 bg-white/7 text-[#6d4337]",
    iconWrap: "bg-[#4b3430]",
    icon: "text-[#ffe0d2]",
  },
  after: {
    surface:
      "border-[#dfe8ef] bg-[linear-gradient(180deg,rgba(249,253,255,0.99)_0%,rgba(245,249,253,0.994)_100%)]",
    glow: "bg-[linear-gradient(90deg,rgba(44,121,225,0.064)_0%,rgba(62,173,235,0.048)_48%,rgba(128,225,255,0.032)_100%)]",
    wash: "bg-[radial-gradient(circle_at_top,rgba(197,232,255,0.095),transparent_55%)]",
    badge: "border-[#bccfe0]/33 bg-white/7 text-[#25455f]",
    iconWrap: "bg-[#334657]",
    icon: "text-[#def4ff]",
  },
};

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
  const styles = COMPARISON_CARD_STYLES[tone];

  return (
    <article
      className={cn(
        "relative isolate overflow-hidden rounded-xl border p-6",
        styles.surface,
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-1/2 h-42 w-[115%] -translate-x-1/2 -translate-y-[42%] rounded-full blur-[82px]",
          styles.glow,
        )}
      />
      <div
        className={cn("pointer-events-none absolute inset-0", styles.wash)}
      />
      <div className="pointer-events-none absolute inset-px rounded-[inherit] bg-white/7" />

      <div className="relative">
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-base leading-none",
            styles.badge,
          )}
        >
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
                <p className="text-md leading-tight font-medium">
                  {item.title}
                </p>
                <p className="text-sm leading-snug text-gray-800/90">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
  const styles = COMPARISON_CARD_STYLES[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        styles.iconWrap,
        sizeClassName,
      )}
    >
      <Icon
        className={cn(iconClassName ?? "size-3.5", styles.icon)}
        strokeWidth={3}
      />
    </span>
  );
}
