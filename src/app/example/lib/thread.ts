/**
 * Thread Derivation (Standalone)
 *
 * Simplified for static example page
 */

import type { Question, ThreadAnswer, ThreadCard } from "./types";

export function deriveThread(
  question: Question | undefined,
  answers: ThreadAnswer[],
): ThreadCard[] {
  if (!question) {
    return [];
  }

  const thread: ThreadCard[] = [];

  // 1. Original question card
  thread.push({
    type: "question",
    content: question.displayContent,
    date: question.askedDate,
    privacy: question.displayPrivacy,
  });

  // 2. Answer cards
  for (const answer of answers) {
    thread.push({
      type: "response",
      answerId: answer._id,
      sender: answer.sender,
      content: answer.content ?? "",
      privacy: answer.privacy,
      tableData: answer.tableData,
    });
  }

  return thread;
}
