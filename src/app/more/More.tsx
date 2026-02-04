"use client";

import { BlogPageLayout } from "@/components/layouts/BlogPageLayout";
import { moreHero, moreSections } from "@/app/more/more-content";

export function More() {
  return <BlogPageLayout hero={moreHero} sections={moreSections} />;
}
