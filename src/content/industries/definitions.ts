import {
  createContentCollection,
  type ContentEntryDefinition,
  type PageMetadata,
} from "@/content/core";
import type { IndustryPageContent } from "@/content/industries/types";

export const INDUSTRY_BASE_PATH = "/industries";

export const INDUSTRY_NAV_SECTIONS = [
  { id: "insurance", label: "Commercial insurance brokers" },
  { id: "consulting", label: "Consulting firms" },
  { id: "law", label: "Law firms" },
] as const;

export type IndustryNavSectionId = (typeof INDUSTRY_NAV_SECTIONS)[number]["id"];

type IndustryEntryData = {
  content: IndustryPageContent;
  metadata: PageMetadata;
};

export interface IndustryEntryDefinition extends ContentEntryDefinition<IndustryEntryData> {
  slug: string;
  navLabel: string;
  navSection: IndustryNavSectionId;
}

export const INDUSTRY_ENTRY_DEFINITIONS = [
  {
    slug: "insurance",
    navLabel: "Find whitespace ahead of renewal conversations",
    navSection: "insurance",
    load: async () => {
      const { industry, metadata } =
        await import("@/content/industries/entries/insurance.mdx");

      return { content: industry, metadata };
    },
  },
  {
    slug: "consulting",
    navLabel: "Accelerate your 'Bring the firm' program",
    navSection: "consulting",
    load: async () => {
      const { industry, metadata } =
        await import("@/content/industries/entries/consulting.mdx");

      return { content: industry, metadata };
    },
  },
  {
    slug: "law",
    navLabel: "Support partners to better leverage their relationships",
    navSection: "law",
    load: async () => {
      const { industry, metadata } =
        await import("@/content/industries/entries/law.mdx");

      return { content: industry, metadata };
    },
  },
] as const satisfies readonly IndustryEntryDefinition[];

export type IndustrySlug = (typeof INDUSTRY_ENTRY_DEFINITIONS)[number]["slug"];
export interface IndustryEntry extends IndustryEntryData {
  slug: IndustrySlug;
  navLabel: string;
  navSection: IndustryNavSectionId;
  pathname: string;
  href: string;
}

const industryCollection = createContentCollection({
  basePath: INDUSTRY_BASE_PATH,
  definitions: INDUSTRY_ENTRY_DEFINITIONS,
});

export function getIndustrySlugs(): IndustrySlug[] {
  return industryCollection.getSlugs();
}

export function getIndustryStaticParams() {
  return industryCollection.getStaticParams();
}

export function getIndustryEntry(slug: string): Promise<IndustryEntry | null> {
  return industryCollection.getEntry(slug);
}

export function getIndustryPathname(slug: IndustrySlug) {
  return industryCollection.getPathname(slug);
}

export function getIndustryHref(slug: IndustrySlug) {
  return industryCollection.getHref(slug);
}

export function getIndustryNavSectionLabel(sectionId: IndustryNavSectionId) {
  const section = INDUSTRY_NAV_SECTIONS.find(({ id }) => id === sectionId);

  if (!section) {
    throw new Error(`Unknown industry nav section "${sectionId}".`);
  }

  return section.label;
}

export function getIndustryNavItems() {
  return industryCollection.getDefinitions().map((entry) => ({
    id: entry.slug,
    href: entry.href,
    label: entry.navLabel,
    section: entry.navSection,
  }));
}
