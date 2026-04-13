declare module "@/content/blog/entries/*.mdx" {
  import type { ComponentType } from "react";

  import type { BlogPostHero } from "@/content/blog/components/post-layout";
  import type { PageMetadata } from "@/content/core";

  export const metadata: PageMetadata;
  export const hero: BlogPostHero;

  const MDXContent: ComponentType;
  export default MDXContent;
}
