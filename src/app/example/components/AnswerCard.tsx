"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Lock, Users } from "lucide-react";
import DataTable from "./DataTable";
import {
  SENDER_LABEL,
  type Privacy,
  type Sender,
  type TableRow,
} from "../lib/types";

// ============================================
// PROP TYPES (discriminated union)
// ============================================

/** Props for question card variant */
type QuestionCardProps = {
  type: "question";
  content: string;
  date: string;
  privacy: Privacy;
  userAvatarUrl?: string | null;
  overbaseIconUrl?: string | null;
};

/** Props for response card variant */
type ResponseCardProps = {
  type: "response";
  answerId: string;
  sender: Sender;
  content: string;
  privacy: Privacy;
  tableData?: TableRow[];
  userAvatarUrl?: string | null;
  overbaseIconUrl?: string | null;
};

/** Discriminated union of card variants */
export type AnswerCardProps = QuestionCardProps | ResponseCardProps;

// ============================================
// COMPONENT
// ============================================

export default function AnswerCard(props: AnswerCardProps) {
  // Use passed props directly instead of queries
  const userAvatar = props.userAvatarUrl ?? null;
  const overbaseIcon = props.overbaseIconUrl ?? null;

  // Derive display values based on card type
  const derived = deriveDisplayValues(props, userAvatar, overbaseIcon);

  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="p-4">
        {/* Header: avatar + labels */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 flex-shrink-0">
            <AvatarImage src={derived.avatar ?? undefined} />
            <AvatarFallback>{derived.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm text-gray-700">{derived.topLabel}</span>
            <div className="flex items-center gap-1.5">
              {derived.subLabel && (
                <>
                  <span className="text-xs text-gray-400">
                    {derived.subLabel}
                  </span>
                  <span className="text-gray-300 text-[10px]">·</span>
                </>
              )}
              <span className="text-gray-400 text-xs capitalize flex items-center gap-1">
                {!props.privacy ? (
                  <Lock size={11} className="shrink-0" />
                ) : (
                  <Users size={11} className="shrink-0" />
                )}
                {props.privacy ?? "private"}
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        {derived.content && (
          <div className="text-sm text-gray-800 mt-3">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {derived.content}
            </p>
          </div>
        )}
      </div>

      {/* Table content */}
      {derived.tableData && <DataTable tableData={derived.tableData} />}
    </div>
  );
}

// ============================================
// HELPER: Derive display values from props
// ============================================

interface DerivedValues {
  topLabel: string;
  subLabel?: string;
  content: string;
  avatar: string | null;
  avatarFallback: string;
  tableData?: TableRow[];
}

function deriveDisplayValues(
  props: AnswerCardProps,
  userAvatar: string | null,
  overbaseIcon: string | null,
): DerivedValues {
  switch (props.type) {
    case "question":
      return {
        topLabel: "You asked",
        subLabel: props.date,
        content: props.content,
        avatar: userAvatar,
        avatarFallback: "U",
      };

    case "response":
      return {
        topLabel: SENDER_LABEL[props.sender],
        subLabel: undefined,
        content: props.content,
        avatar: props.sender === "user" ? userAvatar : overbaseIcon,
        avatarFallback: props.sender === "user" ? "U" : "AI",
        tableData: props.tableData,
      };
  }
}
