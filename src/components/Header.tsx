"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  logoSrc?: string; // optional custom logo
  onLogoClick?: () => void;
  onPricingClick?: (() => void) | "static"; // function for clickable, "static" for non-hover
  onJoinWaitlist?: () => void;
}

export function Header({
  logoSrc,
  onLogoClick,
  onPricingClick,
  onJoinWaitlist,
}: BaseHeaderProps) {
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine pricing button class based on prop type and current page
  let pricingButtonClass = "";
  if (typeof onPricingClick === "function") {
    pricingButtonClass = isPricingPage
      ? "text-gray-600" // Already on pricing page → no hover
      : "text-gray-600 hover:text-[#FC3636]"; // Hover if not on pricing page
  } else if (onPricingClick === "static") {
    pricingButtonClass = "text-gray-600"; // Static → always show, no hover
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface border-b transition-all duration-200 ${
        hasScrolled ? "border-gray-100" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-13">
          {/* Logo */}
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

          {/* Right side buttons */}
          <div className="flex items-center gap-6">
            {onPricingClick && (
              <button
                onClick={
                  typeof onPricingClick === "function"
                    ? onPricingClick
                    : undefined
                }
                className={`text-sm font-medium transition-colors ${pricingButtonClass}`}
              >
                Pricing
              </button>
            )}

            {onJoinWaitlist && (
              <Button
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm scale-[0.97]"
                onClick={onJoinWaitlist}
              >
                Join waitlist
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
