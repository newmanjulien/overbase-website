import {
  createContentCollection,
  type ContentEntryDefinition,
  type PageMetadata,
} from "@/content/core";
import type { ChallengePageContent } from "@/content/challenges/types";

export const CHALLENGE_BASE_PATH = "/challenges";

export const CHALLENGE_NAV_SECTIONS = [
  { id: "visibility", label: "Whitespace is hidden" },
  { id: "expertise", label: "Cross-selling doesn't happen" },
  { id: "execution", label: "Leadership has no visibility" },
] as const;

export type ChallengeNavSectionId =
  (typeof CHALLENGE_NAV_SECTIONS)[number]["id"];

type ChallengeEntryData = {
  content: ChallengePageContent;
  metadata: PageMetadata;
};

export interface ChallengeEntryDefinition extends ContentEntryDefinition<ChallengeEntryData> {
  slug: string;
  navLabel: string;
  navSection: ChallengeNavSectionId;
}

export const CHALLENGE_ENTRY_DEFINITIONS = [
  {
    slug: "unmet-demand",
    navLabel: "Clients have needs you can't possibly know about",
    navSection: "visibility",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/unmet-demand.mdx");

      return { content: challenge, metadata };
    },
  },
  {
    slug: "prioritize-needs",
    navLabel: "Only the most profitable gaps are worth solving",
    navSection: "visibility",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/prioritize-needs.mdx");

      return { content: challenge, metadata };
    },
  },
  {
    slug: "capability-awareness",
    navLabel: "Teams don't know about most of what you offer",
    navSection: "expertise",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/capability-awareness.mdx");

      return { content: challenge, metadata };
    },
  },
  {
    slug: "capability-confidence",
    navLabel: "Teams aren't comfortable talking about most of what you offer",
    navSection: "expertise",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/capability-confidence.mdx");

      return { content: challenge, metadata };
    },
  },
  {
    slug: "manager-visibility",
    navLabel: "Managers don't have visibility into expansions",
    navSection: "execution",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/manager-visibility.mdx");

      return { content: challenge, metadata };
    },
  },
  {
    slug: "executive-visibility",
    navLabel: "Senior execs don't have visibility into expansions",
    navSection: "execution",
    load: async () => {
      const { challenge, metadata } =
        await import("@/content/challenges/entries/executive-visibility.mdx");

      return { content: challenge, metadata };
    },
  },
] as const satisfies readonly ChallengeEntryDefinition[];

export type ChallengeSlug =
  (typeof CHALLENGE_ENTRY_DEFINITIONS)[number]["slug"];
export interface ChallengeEntry extends ChallengeEntryData {
  slug: ChallengeSlug;
  navLabel: string;
  navSection: ChallengeNavSectionId;
  pathname: string;
  href: string;
}

const challengeCollection = createContentCollection({
  basePath: CHALLENGE_BASE_PATH,
  definitions: CHALLENGE_ENTRY_DEFINITIONS,
});

export function getChallengeSlugs(): ChallengeSlug[] {
  return challengeCollection.getSlugs();
}

export function getChallengeStaticParams() {
  return challengeCollection.getStaticParams();
}

export function getChallengeEntry(
  slug: string,
): Promise<ChallengeEntry | null> {
  return challengeCollection.getEntry(slug);
}

export function getChallengePathname(slug: ChallengeSlug) {
  return challengeCollection.getPathname(slug);
}

export function getChallengeHref(slug: ChallengeSlug) {
  return challengeCollection.getHref(slug);
}

export function getChallengeNavItems() {
  return challengeCollection.getDefinitions().map((entry) => ({
    id: entry.slug,
    href: entry.href,
    label: entry.navLabel,
    section: entry.navSection,
  }));
}
