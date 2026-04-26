import type { Metadata } from "next";

import { BottomCtaSection } from "@/content/industries/components/bottom-cta-section";
import { IndustryLayout } from "@/content/industries/components/industry-layout";
import { ComparisonSection } from "@/content/industries/components/comparison-section";
import { QuoteSection } from "@/content/industries/components/quote-section";
import { ScrollCardsSection } from "@/content/industries/components/scroll-cards-section";
import {
  getIndustryEntry,
  getIndustryNavSectionLabel,
  getIndustryStaticParams,
} from "@/content/industries/registry";
import { getRequiredEntry, type SlugRouteProps } from "@/content/core";

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustryStaticParams();
}

export async function generateMetadata({
  params,
}: SlugRouteProps): Promise<Metadata> {
  const industry = await getRequiredEntry(params, getIndustryEntry);

  return industry.metadata;
}

export default async function IndustryPage({ params }: SlugRouteProps) {
  const industry = await getRequiredEntry(params, getIndustryEntry);

  return (
    <IndustryLayout hero={industry.content.hero}>
      <ComparisonSection section={industry.content.comparison} />
      <QuoteSection section={industry.content.quoteSection} />
      <ScrollCardsSection section={industry.content.workflowSection} />
      <BottomCtaSection
        industryActionLabel={industry.navLabel}
        industryAudienceLabel={getIndustryNavSectionLabel(industry.navSection)}
      />
    </IndustryLayout>
  );
}
