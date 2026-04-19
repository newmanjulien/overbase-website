import type { ReactNode } from "react";

export interface ChallengePageHero {
  title: ReactNode;
  titleMaxWidthClass?: string;
  className?: string;
  divider?: boolean;
  cta?: {
    label: string;
    targetId: string;
  };
}

export interface ChallengeComparisonItem {
  title: string;
  description: string;
}

export interface ChallengeComparisonCard {
  eyebrow: string;
  title: string;
  items: ChallengeComparisonItem[];
  className?: string;
}

export interface ChallengeComparisonSection {
  before: ChallengeComparisonCard;
  after: ChallengeComparisonCard;
}

export type ChallengeWorkflowScreenshotVariant = "board" | "detail";

export interface ChallengeWorkflowStep {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screenshotSrc: string;
  screenshotAlt: string;
  screenshotVariant: ChallengeWorkflowScreenshotVariant;
}

export interface ChallengeWorkflowSection {
  steps: ChallengeWorkflowStep[];
}

export interface ChallengeQuoteSection {
  quote: string;
  author: string;
  authorTitle: string;
  avatarInitials: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export type ChallengeCtaPlatformName = "openai" | "claude" | "grok";

export interface ChallengeBottomCtaLinks {
  openai?: string;
  claude?: string;
  grok?: string;
}

export type ChallengeBottomCtaSection = Record<string, never>;

export interface ChallengePageContent {
  hero: ChallengePageHero;
  comparison: ChallengeComparisonSection;
  workflowSection: ChallengeWorkflowSection;
  quoteSection: ChallengeQuoteSection;
  bottomCtaSection: ChallengeBottomCtaSection;
}
