import type { Metadata } from "next";

import { PostLayout } from "@/content/blog/components/post-layout";
import {
  getBlogEntry,
  getBlogSlugs,
} from "@/content/blog/registry";
import {
  getRequiredEntry,
  getStaticSlugParams,
  type SlugRouteProps,
} from "@/content/core";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticSlugParams(getBlogSlugs);
}

export async function generateMetadata({
  params,
}: SlugRouteProps): Promise<Metadata> {
  const post = await getRequiredEntry(params, getBlogEntry);

  return post.metadata;
}

export default async function BlogPostPage({ params }: SlugRouteProps) {
  const post = await getRequiredEntry(params, getBlogEntry);
  const Body = post.Body;

  return (
    <PostLayout hero={post.hero}>
      <Body />
    </PostLayout>
  );
}
