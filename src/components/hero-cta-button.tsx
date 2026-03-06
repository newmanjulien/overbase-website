"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

import { scrollToSection } from "@/lib/scroll-motion";
import { Button } from "@/components/ui/button";

interface HeroCTAButtonProps {
  label: string;
  targetId: string;
  offset?: number;
}

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>): boolean {
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

export function HeroCTAButton({
  label,
  targetId,
  offset = 100,
}: HeroCTAButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || isModifiedClick(event)) {
      return;
    }

    if (!document.getElementById(targetId)) {
      return;
    }

    event.preventDefault();
    scrollToSection(targetId, offset, true);
  };

  return (
    <Button className="bg-gray-100 hover:bg-gray-200/50 text-gray-900 rounded-full px-3 py-1" asChild>
      <Link href={`#${targetId}`} onClick={handleClick}>
        {label}
      </Link>
    </Button>
  );
}
