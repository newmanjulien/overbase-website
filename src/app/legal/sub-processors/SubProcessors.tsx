"use client";

import { LegalPageLayout } from "../../../components/layouts/LegalPageLayout";
import {
  subProcessorsMetadata,
  subProcessorsSections,
} from "./sub-processors-content";

/**
 * Sub-processors component using the reusable LegalPageLayout.
 * Content is loaded from sub-processors-content.ts
 */
export function SubProcessors() {
  return (
    <LegalPageLayout
      metadata={subProcessorsMetadata}
      sections={subProcessorsSections}
      showTableOfContents={false}
    />
  );
}
