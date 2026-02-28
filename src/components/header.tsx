"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HotkeyButton } from "@/components/hotkey-button";
import { HeaderNav } from "@/components/header-nav";
import { cn } from "@/components/ui/utils";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  logoSrc?: string; // optional custom logo
  logoHref?: string;
  onLogoClick?: () => void;
  className?: string;
}

export function Header({
  logoSrc,
  logoHref = "/",
  onLogoClick,
  className,
}: BaseHeaderProps) {
  const pathname = usePathname() ?? "";
  const isTinted =
    pathname === "/" || pathname === "/legal" || pathname.startsWith("/legal/");
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    if (!isTinted) {
      setIsScrolled(false);
      return;
    }

    const update = () => {
      setIsScrolled(window.scrollY > 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isTinted]);

  const navItems = [
    { id: "how-it-works", href: "/how-it-works", label: "How it works" },
    { id: "pricing", href: "/pricing", label: "Pricing" },
  ];

  const activeId = navItems.find((item) => isActive(item.href))?.id ?? null;

  const backgroundClass =
    isTinted && !isScrolled ? "bg-[#f9f9f9]" : "bg-white";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/40 transition-all duration-200",
        backgroundClass,
        className,
      )}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="relative flex items-center justify-between h-13">
          {/* Logo */}
          {logoHref ? (
            <Link href={logoHref} className="h-8 w-auto flex items-center">
              <Image
                src={logoSrc ?? "/logo.png"}
                alt="Logo"
                width={50}
                height={32}
                className="object-contain"
                priority
              />
            </Link>
          ) : (
            <div
              className={`h-8 w-auto flex items-center ${
                onLogoClick ? "cursor-pointer" : ""
              }`}
              onClick={onLogoClick}
            >
              <Image
                src={logoSrc ?? "/logo.png"}
                alt="Logo"
                width={50}
                height={32}
                className="object-contain"
                priority
              />
            </div>
          )}

          <HeaderNav items={navItems} activeId={activeId} />

          {/* Right side buttons */}
          <div className="flex items-center justify-end">
            <HotkeyButton
              hotkey="l"
              variant="ghost"
              size="sm"
              className="rounded-sm text-sm scale-[0.92] text-secondary-foreground"
              href="/login"
            >
              Login
            </HotkeyButton>

            <HotkeyButton
              hotkey="j"
              variant="light"
              size="sm"
              className="rounded-sm text-sm scale-[0.92]"
              href="/waitlist"
            >
              Join Wailist
            </HotkeyButton>
          </div>
        </div>
      </div>
    </header>
  );
}
