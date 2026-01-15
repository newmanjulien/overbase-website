/**
 * Standalone Types
 * Copied and adapted from src/lib/questions/types.ts and convex/shared/types.ts
 * Removed dependency on Convex generated types
 */

// ============================================
// PRIMITIVES
// ============================================

// Generic ID replacement since we don't have Convex
export type Id<T extends string> = string & { __tableName?: T };

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
// ATTACHMENT TYPES
// ============================================

export type KpiAttachment = {
  id?: string;
  metric: string;
  definition: string;
  antiDefinition: string;
  value?: string;
};

export type FileAttachment = {
  fileId: string;
  fileName: string;
  context?: string;
};

export type ConnectorReference = {
  id: string;
  title: string;
  logo: string;
};

export type PersonReference = {
  id: string;
  name: string;
  photo?: string;
};

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
// QUESTION VARIANT TYPES
// ============================================

export const FREQUENCY = {
  WEEKLY: "weekly",
  MONTHLY: "monthly",
  QUARTERLY: "quarterly",
} as const;

export type Frequency = (typeof FREQUENCY)[keyof typeof FREQUENCY];

export type SchedulePattern = {
  frequency: Frequency;
  // simplified
};

/**
 * Base question with computed/derived fields.
 */
export type QuestionBase = {
  _id: Id<"questions">;
  _creationTime: number;
  privacy?: Privacy;
  schedule?: SchedulePattern;
  cancelledAt?: number;

  // Derived fields
  displayContent: string;
  askedDate: string;
  askedTimestamp: number;
  displayPrivacy: Privacy;
  isRecurring: boolean;
};

export type AnsweredQuestion = QuestionBase & {
  variant: "answered";
  tableData: TableRow[];
};

export type InProgressQuestion = QuestionBase & {
  variant: "in-progress";
};

export type RecurringQuestion = QuestionBase & {
  variant: "recurring";
  frequency: Frequency;
  scheduledDate: string;
};

export type QuestionVariant =
  | AnsweredQuestion
  | InProgressQuestion
  | RecurringQuestion;

// ============================================
// THREAD TYPES
// ============================================

export type ThreadAnswer = {
  _id: string;
  sender: Sender;
  content?: string;
  privacy?: Privacy;
  tableData?: TableRow[];
  cancelledAt?: number;
  attachedKpis?: KpiAttachment[];
  attachedPeople?: PersonReference[];
  attachedFiles?: FileAttachment[];
  attachedConnectors?: ConnectorReference[];
};
