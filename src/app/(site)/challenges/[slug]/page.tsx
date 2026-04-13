import type { Metadata } from "next";

import { BottomCtaSection } from "@/content/challenges/components/bottom-cta-section";
import { ChallengeLayout } from "@/content/challenges/components/challenge-layout";
import { ComparisonSection } from "@/content/challenges/components/comparison-section";
import { QuoteSection } from "@/content/challenges/components/quote-section";
import { ScrollCardsSection } from "@/content/challenges/components/scroll-cards-section";
import { DEFAULT_CHALLENGE_QUOTE_SECTION } from "@/content/challenges/defaults";
import {
  getChallengeEntry,
  getChallengeSlugs,
} from "@/content/challenges/registry";
import {
  getRequiredEntry,
  getStaticSlugParams,
  type SlugRouteProps,
} from "@/content/core";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticSlugParams(getChallengeSlugs);
}

export async function generateMetadata({
  params,
}: SlugRouteProps): Promise<Metadata> {
  const challenge = await getRequiredEntry(params, getChallengeEntry);

  return challenge.metadata;
}

export default async function ChallengePage({ params }: SlugRouteProps) {
  const challenge = await getRequiredEntry(params, getChallengeEntry);

  return (
    <ChallengeLayout hero={challenge.content.hero}>
      <ComparisonSection section={challenge.content.comparison} />
      <ScrollCardsSection section={challenge.content.cardsSection} />
      <QuoteSection section={DEFAULT_CHALLENGE_QUOTE_SECTION} />
      <BottomCtaSection slug={challenge.slug} />
    </ChallengeLayout>
  );
}
