declare module "@/content/industries/entries/*.mdx" {
  import type { IndustryPageContent } from "@/content/industries/types";
  import type { PageMetadata } from "@/content/core";

  export const metadata: PageMetadata;
  export const industry: IndustryPageContent;
}
