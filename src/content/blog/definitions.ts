import type { ComponentType } from "react";

import type { BlogPostHero } from "@/content/blog/components/post-layout";
import {
  createContentCollection,
  type ContentEntryDefinition,
  type PageMetadata,
} from "@/content/core";

export const BLOG_BASE_PATH = "/blog";

type BlogEntryData = {
  hero: BlogPostHero;
  metadata: PageMetadata;
  Body: ComponentType;
};

interface BlogEntryDefinition extends ContentEntryDefinition<BlogEntryData> {
  slug: string;
}

export const BLOG_ENTRY_DEFINITIONS = [
  {
    slug: "decentralized-data",
    load: async () => {
      const { default: Body, hero, metadata } = await import(
        "@/content/blog/entries/decentralized-data.mdx"
      );

      return { Body, hero, metadata };
    },
  },
  {
    slug: "new-talent-strategy",
    load: async () => {
      const { default: Body, hero, metadata } = await import(
        "@/content/blog/entries/new-talent-strategy.mdx"
      );

      return { Body, hero, metadata };
    },
  },
] as const satisfies readonly BlogEntryDefinition[];

export type BlogSlug = (typeof BLOG_ENTRY_DEFINITIONS)[number]["slug"];
export interface BlogEntry extends BlogEntryData {
  slug: BlogSlug;
  pathname: string;
  href: string;
}

const blogCollection = createContentCollection({
  basePath: BLOG_BASE_PATH,
  definitions: BLOG_ENTRY_DEFINITIONS,
});

export function getBlogSlugs(): BlogSlug[] {
  return blogCollection.getSlugs();
}

export function getBlogStaticParams() {
  return blogCollection.getStaticParams();
}

export function getBlogEntry(slug: string): Promise<BlogEntry | null> {
  return blogCollection.getEntry(slug);
}

export function getBlogPathname(slug: BlogSlug) {
  return blogCollection.getPathname(slug);
}

export function getBlogHref(slug: BlogSlug) {
  return blogCollection.getHref(slug);
}
