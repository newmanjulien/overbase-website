import type { ChallengePageContent } from "@/content/challenges/types";
import { createEntryRegistry, type PageMetadata } from "@/content/core";

type ChallengeEntryData = {
  content: ChallengePageContent;
  metadata: PageMetadata;
};

const CHALLENGE_ENTRY_LOADERS = {
  proactive: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/proactive.mdx"
    );

    return { content: challenge, metadata };
  },
  bundle: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/bundle.mdx"
    );

    return { content: challenge, metadata };
  },
  updates: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/updates.mdx"
    );

    return { content: challenge, metadata };
  },
  reports: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/reports.mdx"
    );

    return { content: challenge, metadata };
  },
  multiple: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/multiple.mdx"
    );

    return { content: challenge, metadata };
  },
  radar: async () => {
    const { challenge, metadata } = await import(
      "@/content/challenges/entries/radar.mdx"
    );

    return { content: challenge, metadata };
  },
} satisfies Record<string, () => Promise<ChallengeEntryData>>;

const challengeEntryRegistry = createEntryRegistry(CHALLENGE_ENTRY_LOADERS);

export type ChallengeSlug = keyof typeof CHALLENGE_ENTRY_LOADERS;

export interface ChallengeEntry extends ChallengeEntryData {
  slug: ChallengeSlug;
}

export function getChallengeSlugs(): ChallengeSlug[] {
  return challengeEntryRegistry.getSlugs();
}

export function getChallengeEntry(
  slug: string,
): Promise<ChallengeEntry | null> {
  return challengeEntryRegistry.getEntry(slug);
}
