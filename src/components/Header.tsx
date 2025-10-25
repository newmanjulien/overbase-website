"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

// --- Base props shared by all pages ---
interface BaseHeaderProps {
  onJoinWaitlist: () => void;
}

// --- When on home page ---
interface HeaderOnHome extends BaseHeaderProps {
  onLogoClick?: never;
  onPricingClick: () => void;
}

// --- When on pricing page ---
interface HeaderOnPricing extends BaseHeaderProps {
  onLogoClick: () => void;
  onPricingClick?: never;
}

// --- For all other routes ---
interface HeaderDefault extends BaseHeaderProps {
  onLogoClick: () => void;
  onPricingClick: () => void;
}

type HeaderProps = HeaderOnHome | HeaderOnPricing | HeaderDefault;

export function Header({
  onLogoClick,
  onJoinWaitlist,
  onPricingClick,
}: HeaderProps) {
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            className={`h-8 w-auto flex items-center ${
              onLogoClick ? "cursor-pointer" : ""
            }`}
            onClick={onLogoClick}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={54}
              height={32}
              className="object-contain"
              priority
            />
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-7">
            <button
              onClick={onPricingClick}
              className={`text-sm font-medium transition-colors ${
                isPricingPage
                  ? "text-gray-800"
                  : "text-gray-800 hover:text-[#FC3636]"
              }`}
            >
              Pricing
            </button>

            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-md text-sm"
              onClick={onJoinWaitlist}
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
