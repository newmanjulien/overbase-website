import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { HeroCTAButton } from "@/components/hero-cta-button";

type HeroProps = {
  title: ReactNode;
  titleMaxWidthClass?: string;
  className?: string;
  divider?: boolean;
  cta?: {
    label: string;
    targetId: string;
  };
};

export default function Hero({
  title,
  titleMaxWidthClass = "max-w-xl",
  className,
  divider = true,
  cta,
}: HeroProps) {
  return (
    <section className={cn("px-6 pt-28 md:pt-48 max-w-5xl mx-auto", className)}>
      <div className="max-w-md mx-auto text-center space-y-12">
        <div className={cn("space-y-6 mx-auto", titleMaxWidthClass)}>
          <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
            {title}
          </h1>
          {cta ? (
            <div className="pt-2">
              <HeroCTAButton label={cta.label} targetId={cta.targetId} />
            </div>
          ) : null}
        </div>
      </div>
      {divider ? <div className="mt-25 border-t border-gray-100"></div> : null}
    </section>
  );
}
