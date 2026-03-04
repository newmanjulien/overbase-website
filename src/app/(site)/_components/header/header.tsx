"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderLogo } from "./header-logo";
import { MobileHeader } from "./mobile-header";
import { HeaderNav } from "./header-nav";
import { HotkeyButton } from "./hotkey-button";
import {
  SITE_QUICK_ACTIONS,
  type SiteNavItem,
  type SiteTintedPaths,
} from "@/lib/site-nav";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logoSrc: string;
  logoHref?: string;
  onLogoClickAction?: () => void;
  navItems: SiteNavItem[];
  tintedPaths: SiteTintedPaths;
  logoWidth?: number;
  logoHeight?: number;
  className?: string;
}

export function Header({
  logoSrc,
  logoHref = "/",
  onLogoClickAction,
  navItems,
  tintedPaths,
  logoWidth = 50,
  logoHeight = 32,
  className,
}: HeaderProps) {
  const pathname = usePathname() ?? "";
  const isTinted =
    tintedPaths.exact.includes(pathname) ||
    tintedPaths.prefix.some((prefix) => pathname.startsWith(prefix));
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const existingPrefetch = document.querySelector(
      'link[rel="prefetch"][as="video"][href="/form.mp4"]',
    );
    if (existingPrefetch) {
      return;
    }

    const prefetch = document.createElement("link");
    prefetch.rel = "prefetch";
    prefetch.as = "video";
    prefetch.href = "/form.mp4";
    document.head.appendChild(prefetch);
  }, []);

  useEffect(() => {
    if (!isTinted) {
      return;
    }

    const update = () => {
      setIsScrolled(window.scrollY > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isTinted]);

  const activeId = navItems.find((item) => isActive(item.href))?.id ?? null;

  const backgroundClass = isTinted && !isScrolled ? "bg-[#f9f9f9]" : "bg-white";
  const logoImage = (
    <Image
      src={logoSrc ?? "/logo.png"}
      alt="Logo"
      width={logoWidth}
      height={logoHeight}
      className="object-contain"
      priority
    />
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/40 transition-all duration-200",
        backgroundClass,
        className,
      )}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="md:hidden">
          <MobileHeader
            items={navItems}
            activeId={activeId}
            logoSrc={logoSrc}
            logoWidth={logoWidth}
            logoHeight={logoHeight}
            logoHref={logoHref}
            onLogoClickAction={onLogoClickAction}
          />
        </div>

        <div className="relative hidden h-12 items-center justify-between md:flex">
          <HeaderLogo logoHref={logoHref} onLogoClickAction={onLogoClickAction}>
            {logoImage}
          </HeaderLogo>

          <HeaderNav items={navItems} activeId={activeId} />

          {/* Right side buttons */}
          <div className="flex items-center justify-end">
            {SITE_QUICK_ACTIONS.map((action) => (
              <HotkeyButton key={action.hotkey} action={action} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
