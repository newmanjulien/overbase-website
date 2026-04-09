declare module "@/content/challenges/entries/*.mdx" {
  import type { ChallengePageContent } from "@/content/challenges/types";
  import type { PageMetadata } from "@/content/core";

  export const metadata: PageMetadata;
  export const challenge: ChallengePageContent;
}
