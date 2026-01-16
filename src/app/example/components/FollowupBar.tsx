"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Mic } from "lucide-react";

interface FollowupBarProps {
  userAvatarUrl?: string | null;
}

export default function FollowupBar({ userAvatarUrl }: FollowupBarProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatarUrl ?? undefined} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-full text-sm px-4 py-2 text-gray-500">
          Do you have follow up questions?
        </div>

        <button
          disabled
          className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-300 cursor-not-allowed"
          title="Dictate"
        >
          <Mic className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
