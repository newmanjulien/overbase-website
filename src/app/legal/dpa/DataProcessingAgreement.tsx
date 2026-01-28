"use client";

import { LegalPageLayout } from "@/components/layouts/LegalPageLayout";
import { dpaMetadata, dpaSections } from "@/app/legal/dpa/dpa-content";

/**
 * Data Processing Agreement component using the reusable LegalPageLayout.
 * Content is loaded from dpa-content.ts
 */
export function DataProcessingAgreement() {
  return <LegalPageLayout metadata={dpaMetadata} sections={dpaSections} />;
}
