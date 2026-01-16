"use client";

import { LegalPageLayout } from "../../../components/layouts/LegalPageLayout";
import { securityMetadata, securitySections } from "./security-content";

/**
 * Security Addendum component using the reusable LegalPageLayout.
 * Content is loaded from security-content.ts
 */
export function SecurityAddendum() {
  return (
    <LegalPageLayout metadata={securityMetadata} sections={securitySections} />
  );
}
