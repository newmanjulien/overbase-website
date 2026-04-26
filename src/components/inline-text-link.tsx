import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type InlineTextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const inlineTextLinkClassName =
  "text-[#4F769E] underline underline-offset-2 decoration-[#4F769E]/65";

export function InlineTextLink({
  className,
  href,
  rel,
  target,
  ...props
}: InlineTextLinkProps) {
  const resolvedClassName = cn(inlineTextLinkClassName, className);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    return <Link href={href} className={resolvedClassName} {...props} />;
  }

  const resolvedRel =
    target === "_blank"
      ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
      : rel;

  return (
    <a
      href={href}
      target={target}
      rel={resolvedRel}
      className={resolvedClassName}
      {...props}
    />
  );
}
