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
              <Link
                href="https://slack.com/oauth/v2/authorize?scope=chat%3Awrite%2Cchat%3Awrite.customize%2Ccommands%2Cim%3Ahistory%2Cim%3Awrite%2Cusers%3Aread&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YWxsT3B0aW9ucyI6eyJzY29wZXMiOlsiY2hhdDp3cml0ZSIsImNoYXQ6d3JpdGUuY3VzdG9taXplIiwiY29tbWFuZHMiLCJpbTpoaXN0b3J5IiwiaW06d3JpdGUiLCJ1c2VyczpyZWFkIl0sInJlZGlyZWN0VXJpIjoiaHR0cHM6Ly9zbGFjay1hcHAtdHdvLnZlcmNlbC5hcHAvc2xhY2svb2F1dGhfcmVkaXJlY3QifSwibm93IjoiMjAyNi0wMS0zMFQxODowNToxMy44MjZaIiwicmFuZG9tIjo4MTgzOTksImlhdCI6MTc2OTc5NjMxM30.6WCQeh0N6rwnYp2D1qqoF1dL0Hkj6Ak77zwsSBCDZCU&client_id=10378013182247.10391416690262&redirect_uri=https%3A%2F%2Fslack-app-two.vercel.app%2Fslack%2Foauth_redirect"
                target="_blank"
                rel="noreferrer"
              >
                <SlackIcon className="size-4" />
                Add to Slack
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
