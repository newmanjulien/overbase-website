import Hero from "@/components/hero";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const beforePoints = [
  {
    title: "Late to market",
    description: "Competitors move while you wait on design and web.",
  },
  {
    title: "Ideas die waiting",
    description: "Campaigns get cut or watered down to ship faster.",
  },
  {
    title: "Can't iterate",
    description: "No bandwidth to test, learn, and optimize.",
  },
];

const afterPoints = [
  {
    title: "Live in hours, not weeks",
    description: "Build landing pages and ads without dependencies.",
  },
  {
    title: "Test and learn quickly",
    description: "Launch variants, see what works, iterate fast.",
  },
  {
    title: "Run the campaigns you actually want",
    description: "No more simplifying to fit bandwidth.",
  },
];

export default function Radar() {
  return (
    <>
      <Hero
        divider={false}
        title={
          <>
            See all accounts in a <span className="italic">single map</span>
          </>
        }
      />
      <section className="mx-auto max-w-[75rem] px-6 pt-16 pb-12 md:px-12 lg:px-24">
        <div className="mt-8 md:mt-10">
          <div className="lg:relative lg:pb-64">
            <ComparisonCard
              eyebrow="Before"
              title="Stuck in the queue"
              tone="before"
              className="lg:w-full lg:max-w-lg"
              items={beforePoints}
            />
            <ComparisonCard
              eyebrow="After"
              title="Launch and iterate fast"
              tone="after"
              className="mt-6 lg:absolute lg:top-52 lg:right-0 lg:mt-0 lg:w-full lg:max-w-lg"
              items={afterPoints}
            />
          </div>
        </div>
      </section>
    </>
  );
}

type ComparisonCardProps = {
  eyebrow: string;
  title: string;
  tone: "before" | "after";
  className?: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

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
      <h3 className="mt-3 text-xl leading-tight tracking-tight text-gray-900 md:text-2xl">
        {title}
      </h3>
      <ul className="mt-8 space-y-6 text-gray-800">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <StatusIcon
              tone={tone}
              sizeClassName="mt-1 size-3.5 shrink-0"
              iconClassName="size-2.5"
            />
            <div className="space-y-0">
              <p className="text-lg leading-tight font-semibold">
                {item.title}
              </p>
              <p className="text-base leading-snug text-gray-800/90">
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
  tone: "before" | "after";
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
