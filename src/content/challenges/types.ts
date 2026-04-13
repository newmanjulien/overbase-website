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

export interface ChallengeScrollCard {
  label: string;
  title: string;
  subtitle: string;
}

export interface ChallengeCardsSection {
  title: string;
  description: string;
  cards: ChallengeScrollCard[];
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
  cardsSection: ChallengeCardsSection;
  bottomCtaSection: ChallengeBottomCtaSection;
}
