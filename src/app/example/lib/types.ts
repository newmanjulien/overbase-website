/**
 * Standalone Types
 * Simplified for static example page
 */

// ============================================
// PRIMITIVES
// ============================================

export const SENDER = {
  USER: "user",
  OVERBASE: "overbase",
} as const;

export type Sender = (typeof SENDER)[keyof typeof SENDER];

export const SENDER_LABEL: Record<Sender, string> = {
  user: "You asked",
  overbase: "Overbase answered",
};

export type Privacy = "team" | undefined;

// ============================================
// TABLE DATA TYPE
// ============================================

export type TableRow = {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
};

// ============================================
// QUESTION TYPE
// ============================================

/**
 * Question with display fields.
 */
export type Question = {
  displayContent: string;
  askedDate: string;
  displayPrivacy: Privacy;
};

// ============================================
// THREAD TYPES
// ============================================

export type ThreadAnswer = {
  _id: string;
  sender: Sender;
  content?: string;
  privacy?: Privacy;
  tableData?: TableRow[];
};

// ============================================
// THREAD CARD TYPES
// ============================================

export type ThreadCardQuestion = {
  type: "question";
  content: string;
  date: string;
  privacy?: Privacy;
};

export type ThreadCardResponse = {
  type: "response";
  answerId: string;
  sender: Sender;
  content: string;
  privacy?: Privacy;
  tableData?: TableRow[];
};

export type ThreadCard = ThreadCardQuestion | ThreadCardResponse;
