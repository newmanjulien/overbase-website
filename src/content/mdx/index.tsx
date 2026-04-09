import type { MDXComponents } from "mdx/types";

import { baseMdxComponents } from "@/content/mdx/base-components";
import { FullBleedImage } from "@/content/blog/components/full-bleed-image";

const mdxComponents: MDXComponents = {
  ...baseMdxComponents,
  FullBleedImage,
};

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
