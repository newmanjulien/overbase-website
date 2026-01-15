/**
 * Thread Derivation (Standalone)
 *
 * Modified to source types from local definitions
 */

import { SENDER } from "./types";
import type { QuestionVariant, ThreadAnswer, ThreadCard } from "./types";

export function deriveThread(
  question: QuestionVariant | undefined,
  answers: ThreadAnswer[]
): ThreadCard[] {
  if (!question) {
    return [];
  }

  const thread: ThreadCard[] = [];

  // Filter out cancelled answers
  const activeAnswers = answers.filter((a) => !a.cancelledAt);

  // Determine if we're awaiting response
  const lastAnswer = activeAnswers[activeAnswers.length - 1];
  const isAwaitingResponse = lastAnswer?.sender === SENDER.USER;
  const isRecurringWithSingleQuestion =
    question.isRecurring && activeAnswers.length === 1;

  // Note: Menu logic removed for static version

  // 1. Original question card
  const firstAnswer = activeAnswers[0];
  thread.push({
    type: "question",
    content: question.displayContent,
    date: question.askedDate,
    privacy: question.displayPrivacy,
    attachedKpis: firstAnswer?.attachedKpis,
    attachedPeople: firstAnswer?.attachedPeople,
    attachedFiles: firstAnswer?.attachedFiles,
    attachedConnectors: firstAnswer?.attachedConnectors,
  });

  // 2. Answer cards
  const answerCards = activeAnswers.slice(1);
  for (let i = 0; i < answerCards.length; i++) {
    const answer = answerCards[i];
    thread.push({
      type: "response",
      answerId: answer._id,
      sender: answer.sender,
      content: answer.content ?? "",
      privacy: answer.privacy,
      tableData: answer.tableData,
      showMenu: false, // Force false
      ...(answer.sender === SENDER.USER && {
        attachedKpis: answer.attachedKpis,
        attachedPeople: answer.attachedPeople,
        attachedFiles: answer.attachedFiles,
        attachedConnectors: answer.attachedConnectors,
      }),
    });
  }

  // 3. Status: "Overbase is answering..."
  if (isAwaitingResponse && !isRecurringWithSingleQuestion) {
    thread.push({
      type: "status",
      label: "Overbase is answering...",
    });
  }

  // 4. Recurring status
  if (question.variant === "recurring") {
    thread.push({
      type: "status",
      label: `Next answer will be on ${question.scheduledDate}`,
    });
  }

  // 5. Info card
  if (question.variant === "in-progress") {
    thread.push({
      type: "info",
      text: "It can take up to 48h for our AI agents to answer in depth and accurately",
      linkText: "See how our AI agents work",
      href: "#",
    });
  }

  return thread;
}
