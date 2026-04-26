import type { ReactNode } from "react";

import Hero from "@/components/hero";
import type { IndustryPageHero } from "@/content/industries/types";

interface IndustryLayoutProps {
  hero: IndustryPageHero;
  children: ReactNode;
}

export function IndustryLayout({ hero, children }: IndustryLayoutProps) {
  return (
    <>
      <Hero
        divider={hero.divider ?? false}
        title={hero.title}
        titleMaxWidthClass={hero.titleMaxWidthClass}
        className={hero.className}
        cta={hero.cta}
      />
      <main>{children}</main>
    </>
  );
}
