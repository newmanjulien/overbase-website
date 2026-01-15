"use client";

import { LegalPageLayout } from "../../../components/layouts/LegalPageLayout";
import { termsMetadata, termsSections } from "./terms-content";

/**
 * Terms of Service component using the reusable LegalPageLayout.
 * Content is loaded from terms-content.ts
 */
export function TermsOfService() {
  return <LegalPageLayout metadata={termsMetadata} sections={termsSections} />;
}
