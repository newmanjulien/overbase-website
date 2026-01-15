"use client";

import { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// ============================================
// PROP TYPES
// ============================================

interface StatusCardProps {
  label: string;
  subLabel?: string;
  overbaseIconUrl?: string | null;
}

// ============================================
// COMPONENT
// ============================================

/**
 * StatusCard (Standalone)
 * - Removed Convex query
 * - Accepts icon URL via prop or defaults to fallback
 */
export default function StatusCard({
  label,
  subLabel,
  overbaseIconUrl,
}: StatusCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="p-4">
        {/* Header: avatar + labels */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={overbaseIconUrl ?? undefined} />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm text-gray-700">{label}</span>
            {subLabel && (
              <span className="text-xs text-gray-400">{subLabel}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
