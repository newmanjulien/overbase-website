import type { ReactNode } from "react";

import Hero from "@/components/hero";
import type { ChallengePageHero } from "@/content/challenges/types";

interface ChallengeLayoutProps {
  hero: ChallengePageHero;
  children: ReactNode;
}

export function ChallengeLayout({ hero, children }: ChallengeLayoutProps) {
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
