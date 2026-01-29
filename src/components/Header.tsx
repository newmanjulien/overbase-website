"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SlackIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  logoSrc?: string; // optional custom logo
  logoHref?: string;
  onLogoClick?: () => void;
  /** Override the initial (non-scrolled) background color of the header */
  initialBackgroundColor?: string;
}

export function Header({
  logoSrc,
  logoHref = "/",
  onLogoClick,
  initialBackgroundColor,
}: BaseHeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Determine the background style based on scroll state
  const getBackgroundStyle = () => {
    if (hasScrolled) {
      return { backgroundColor: "#fbfbfb" };
    }
    if (initialBackgroundColor) {
      return { backgroundColor: initialBackgroundColor };
    }
    return undefined;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${
        hasScrolled ? "border-gray-100" : "bg-surface border-transparent"
      }`}
      style={getBackgroundStyle()}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
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
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="rounded-sm text-sm scale-[0.92]"
              asChild
            >
              <Link href="/login" className="inline-flex items-center gap-1.5">
                <SlackIcon className="size-4" />
                Get started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
