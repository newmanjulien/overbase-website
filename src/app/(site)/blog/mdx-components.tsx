import type { MDXComponents } from "mdx/types";
import { PostLayout } from "@/app/(site)/blog/post-layout";
import { FullBleedImage } from "@/app/(site)/blog/full-bleed-image";

const mdxComponents: MDXComponents = {
  PostLayout,
  h2: (props) => (
    <h2
      className="text-3xl font-medium text-gray-900 scroll-mt-24 mb-4 mt-14"
      data-scroll-spy-target
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-medium text-gray-900 mb-3" {...props} />
  ),
  p: (props) => (
    <p className="text-md text-gray-900 mb-4 leading-relaxed" {...props} />
  ),
  a: (props) => (
    <a
      className="text-gray-900 underline underline-offset-4 hover:opacity-80"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="my-4 list-disc pl-5 text-md text-gray-900 leading-relaxed space-y-1"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal pl-5 text-md text-gray-900 leading-relaxed space-y-1"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-gray-200 pl-4 text-gray-700 italic"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-gray-100" {...props} />,
  FullBleedImage,
  img: (props) => <img className="my-10 h-auto w-full rounded-xl" {...props} />,
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm"
      {...props}
    />
  ),
  code: ({ className, ...props }) => {
    const isBlock = className?.includes("language-");
    const baseClassName = isBlock
      ? "font-mono text-[0.9em]"
      : "rounded bg-gray-100 px-1 py-0.5 font-mono text-[0.9em]";
    const mergedClassName = [className, baseClassName]
      .filter(Boolean)
      .join(" ");

    return <code className={mergedClassName} {...props} />;
  },
  strong: (props) => (
    <strong className="font-medium text-gray-900" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
