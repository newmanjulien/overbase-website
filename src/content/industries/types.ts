import type { ReactNode } from "react";

export interface IndustryPageHero {
  title: ReactNode;
  titleMaxWidthClass?: string;
  className?: string;
  divider?: boolean;
  cta?: {
    label: string;
    targetId: string;
  };
}

export interface IndustryComparisonItem {
  title: string;
  description: string;
}

export interface IndustryComparisonCard {
  eyebrow: string;
  title: string;
  items: IndustryComparisonItem[];
  className?: string;
}

export interface IndustryComparisonSection {
  before: IndustryComparisonCard;
  after: IndustryComparisonCard;
}

export type IndustryWorkflowScreenshotVariant = "board" | "detail";

export interface IndustryWorkflowStep {
  title: string;
  description: string;
  points: string[];
  screenshotSrc: string;
  screenshotAlt: string;
  screenshotVariant: IndustryWorkflowScreenshotVariant;
}

export interface IndustryWorkflowSection {
  steps: IndustryWorkflowStep[];
}

export interface IndustryQuoteSection {
  quote: string;
  author: string;
  authorTitle: string;
  avatarInitials: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export type IndustryCtaPlatformName = "openai" | "claude" | "grok";

export interface IndustryBottomCtaLinks {
  openai?: string;
  claude?: string;
  grok?: string;
}

export interface IndustryPageContent {
  hero: IndustryPageHero;
  comparison: IndustryComparisonSection;
  workflowSection: IndustryWorkflowSection;
  quoteSection: IndustryQuoteSection;
}
