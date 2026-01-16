"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Lock, Users, MoreHorizontal } from "lucide-react";
import DataTable from "./DataTable";
import { AttachmentChipList } from "./AttachmentChipList";
import {
  SENDER_LABEL,
  type Privacy,
  type Sender,
  type KpiAttachment,
  type FileAttachment,
  type ConnectorReference,
  type TableRow,
  type PersonReference,
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
  onPrivacyChange?: (newPrivacy: Privacy) => void;
  onForward?: () => void;
  attachedKpis?: KpiAttachment[];
  attachedPeople?: PersonReference[];
  attachedFiles?: FileAttachment[];
  attachedConnectors?: ConnectorReference[];
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
  onPrivacyChange?: (newPrivacy: Privacy) => void;
  onForward?: () => void;
  showMenu?: boolean;
  attachedKpis?: KpiAttachment[];
  attachedPeople?: PersonReference[];
  attachedFiles?: FileAttachment[];
  attachedConnectors?: ConnectorReference[];
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

  const handlePrivacyClick = () => {
    // Toggle: undefined (private) -> team, team -> undefined
    const newPrivacy: Privacy = !props.privacy ? "team" : undefined;
    props.onPrivacyChange?.(newPrivacy);
  };

  // Show menu for response cards when showMenu prop is true
  const showMenu = props.type === "response" && props.showMenu;

  return (
    <div className="bg-white rounded-2xl border border-gray-200">
      <div className="p-4">
        {/* Header: avatar + labels + menu */}
        <div className="flex items-center justify-between">
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
                <button
                  type="button"
                  onClick={handlePrivacyClick}
                  className="text-gray-400 text-xs capitalize hover:underline cursor-pointer flex items-center gap-1"
                >
                  {!props.privacy ? (
                    <Lock size={11} className="shrink-0" />
                  ) : (
                    <Users size={11} className="shrink-0" />
                  )}
                  {props.privacy ?? "private"}
                </button>
              </div>
            </div>
          </div>

          {/* Menu for cancel action */}
          {showMenu && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-md"
                >
                  <MoreHorizontal className="h-4 w-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-100">
                  Cancel
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Main content */}
        {derived.content && (
          <div className="text-sm text-gray-800 mt-3">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {derived.content}
            </p>
          </div>
        )}

        {/* Attachment chips (for user question and follow-up messages) */}
        <AttachmentChipList
          kpis={derived.attachedKpis}
          people={derived.attachedPeople}
          files={derived.attachedFiles}
          connectors={derived.attachedConnectors}
        />
      </div>

      {/* Table content */}
      {derived.tableData && (
        <DataTable tableData={derived.tableData} onForward={props.onForward} />
      )}
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
  attachedKpis?: KpiAttachment[];
  attachedPeople?: PersonReference[];
  attachedFiles?: FileAttachment[];
  attachedConnectors?: ConnectorReference[];
}

function deriveDisplayValues(
  props: AnswerCardProps,
  userAvatar: string | null,
  overbaseIcon: string | null
): DerivedValues {
  switch (props.type) {
    case "question":
      return {
        topLabel: "You asked",
        subLabel: props.date,
        content: props.content,
        avatar: userAvatar,
        avatarFallback: "U",
        attachedKpis: props.attachedKpis,
        attachedPeople: props.attachedPeople,
        attachedFiles: props.attachedFiles,
        attachedConnectors: props.attachedConnectors,
      };

    case "response":
      return {
        topLabel: SENDER_LABEL[props.sender],
        subLabel: undefined,
        content: props.content,
        avatar: props.sender === "user" ? userAvatar : overbaseIcon,
        avatarFallback: props.sender === "user" ? "U" : "AI",
        tableData: props.tableData,
        // Pass attachments only for user messages
        ...(props.sender === "user" && {
          attachedKpis: props.attachedKpis,
          attachedPeople: props.attachedPeople,
          attachedFiles: props.attachedFiles,
          attachedConnectors: props.attachedConnectors,
        }),
      };
  }
}
