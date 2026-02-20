"use client";

import Image from "next/image";
import Link from "next/link";
import { HotkeyButton } from "@/components/HotkeyButton";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  logoSrc?: string; // optional custom logo
  logoHref?: string;
  onLogoClick?: () => void;
}

export function Header({
  logoSrc,
  logoHref = "/",
  onLogoClick,
}: BaseHeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/40 transition-all duration-200"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-13">
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

          {/* Right side buttons */}
          <div className="flex items-center">
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
