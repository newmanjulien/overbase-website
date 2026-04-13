import type { ComponentType } from "react";

import type { BlogPostHero } from "@/content/blog/components/post-layout";
import { createEntryRegistry, type PageMetadata } from "@/content/core";

type BlogEntryData = {
  hero: BlogPostHero;
  metadata: PageMetadata;
  Body: ComponentType;
};

const BLOG_ENTRY_LOADERS = {
  "decentralized-data": async () => {
    const { default: Body, hero, metadata } = await import(
      "@/content/blog/entries/decentralized-data.mdx"
    );

    return { Body, hero, metadata };
  },
  "new-talent-strategy": async () => {
    const { default: Body, hero, metadata } = await import(
      "@/content/blog/entries/new-talent-strategy.mdx"
    );

    return { Body, hero, metadata };
  },
} satisfies Record<string, () => Promise<BlogEntryData>>;

const blogEntryRegistry = createEntryRegistry(BLOG_ENTRY_LOADERS);

export type BlogSlug = keyof typeof BLOG_ENTRY_LOADERS;

export interface BlogEntry extends BlogEntryData {
  slug: BlogSlug;
}

export function getBlogSlugs(): BlogSlug[] {
  return blogEntryRegistry.getSlugs();
}

export function getBlogEntry(slug: string): Promise<BlogEntry | null> {
  return blogEntryRegistry.getEntry(slug);
}
