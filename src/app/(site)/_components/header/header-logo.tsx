import Link from "next/link";
import type { ReactNode } from "react";

const defaultContainerClass = "h-8 w-auto flex items-center";

type HeaderLogoProps = {
  logoHref?: string;
  onLogoClickAction?: () => void;
  onActivate?: () => void;
  className?: string;
  children: ReactNode;
};

export function HeaderLogo({
  logoHref,
  onLogoClickAction,
  onActivate,
  className = defaultContainerClass,
  children,
}: HeaderLogoProps) {
  if (logoHref) {
    return (
      <Link href={logoHref} className={className} onClick={onActivate}>
        {children}
      </Link>
    );
  }

  if (onLogoClickAction) {
    return (
      <button
        type="button"
        aria-label="Go to previous page"
        className={`${className} cursor-pointer`}
        onClick={() => {
          onActivate?.();
          onLogoClickAction();
        }}
      >
        {children}
      </button>
    );
  }

  return <div className={className}>{children}</div>;
}
