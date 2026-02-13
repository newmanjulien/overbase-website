"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LegalBreadcrumbProps {
  currentPageTitle: string;
}

const LEGAL_PAGES = [
  { title: "Terms of Service", href: "/legal/terms-of-service" },
  { title: "Data Processing Agreement", href: "/legal/dpa" },
  { title: "Security Addendum", href: "/legal/security" },
  { title: "Sub-Processors", href: "/legal/sub-processors" },
];

/**
 * Breadcrumb navigation for legal pages with dropdown menu.
 * Displays "Legal / [Current Page]" where "Legal" opens a dropdown
 * to navigate to other legal pages.
 */
export function LegalBreadcrumb({ currentPageTitle }: LegalBreadcrumbProps) {
  return (
    <div className="flex items-center gap-3 text-sm">
      {/* Legal link with dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center gap-1"
          >
            Legal
            <ChevronDown className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={8}>
          {LEGAL_PAGES.map((page) => (
            <DropdownMenuItem asChild className="cursor-pointer" key={page.href}>
              <Link
                href={page.href}
                className={
                  page.title === currentPageTitle
                    ? "font-medium"
                    : undefined
                }
              >
                {page.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Separator */}
      <span className="text-gray-400">/</span>

      {/* Current page title */}
      <span className="text-gray-900">{currentPageTitle}</span>
    </div>
  );
}
