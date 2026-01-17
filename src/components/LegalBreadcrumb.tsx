"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center gap-3 text-sm" ref={dropdownRef}>
      {/* Legal link with dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        >
          Legal
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 py-2 bg-[#1a1a1a] rounded-lg shadow-lg min-w-[200px] z-50">
            {LEGAL_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`block px-4 py-2 text-sm transition-colors ${
                  page.title === currentPageTitle
                    ? "text-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Separator */}
      <span className="text-gray-400">/</span>

      {/* Current page title */}
      <span className="text-gray-900">{currentPageTitle}</span>
    </div>
  );
}
