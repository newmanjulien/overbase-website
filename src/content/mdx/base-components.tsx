import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

import { TOC_SCROLL_SPY_TARGET_PROPS } from "@/lib/toc-scroll-spy";

export const baseMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="text-3xl font-medium text-gray-900 scroll-mt-24 mb-4 mt-14"
      {...TOC_SCROLL_SPY_TARGET_PROPS}
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mb-3 text-xl font-medium text-gray-900" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 text-md leading-relaxed text-gray-900" {...props} />
  ),
  a: ({ href, className, target, rel, ...props }) => {
    const linkClassName = [
      "text-gray-900 underline underline-offset-4 hover:opacity-80",
      className,
    ]
      .filter(Boolean)
      .join(" ");
    const resolvedHref = href ?? "";
    const isInternal =
      resolvedHref.startsWith("/") || resolvedHref.startsWith("#");

    if (isInternal) {
      return <Link href={resolvedHref} className={linkClassName} {...props} />;
    }

    const resolvedRel =
      target === "_blank"
        ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
        : rel;

    return (
      <a
        href={resolvedHref}
        target={target}
        rel={resolvedRel}
        className={linkClassName}
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul
      className="my-4 list-disc space-y-1 pl-5 text-md leading-relaxed text-gray-900"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal space-y-1 pl-5 text-md leading-relaxed text-gray-900"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-gray-200 pl-4 italic text-gray-700"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-gray-100" {...props} />,
  img: ({ src, alt, width, height, className, ...props }) => {
    if (!src) {
      return null;
    }

    const parsedWidth =
      typeof width === "number" ? width : Number(width) || 1200;
    const parsedHeight =
      typeof height === "number" ? height : Number(height) || 675;
    const imageClassName = ["my-10 h-auto w-full rounded-xl", className]
      .filter(Boolean)
      .join(" ");
    const shouldBypassOptimization =
      src.startsWith("http://") || src.startsWith("https://");

    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={parsedWidth}
        height={parsedHeight}
        sizes="(min-width: 1024px) 768px, 100vw"
        className={imageClassName}
        unoptimized={shouldBypassOptimization}
        {...props}
      />
    );
  },
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
