import { TOC_SCROLL_SPY_TARGET_PROPS } from "@/lib/toc-scroll-spy";

import { LegalBreadcrumb } from "./legal-breadcrumb";
import { TableOfContents } from "./table-of-contents";

export interface LegalSection {
  id: string;
  title: string;
  content: string[]; // Array of paragraphs
  compactContent?: string[]; // Array of lines with tight spacing
  subsections?: {
    title: string;
    content: string[];
    compactContent?: string[];
  }[];
  bulletPoints?: string[];
}

export interface LegalPageMetadata {
  title: string;
  lastUpdated: string;
  introduction: string;
}

interface LegalPageLayoutProps {
  metadata: LegalPageMetadata;
  sections: LegalSection[];
  showTableOfContents?: boolean;
}

function hashText(value: string): string {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function createStableTextKeyFactory(prefix: string) {
  const seenCounts = new Map<string, number>();

  return (text: string): string => {
    const normalized = text.trim();
    const count = (seenCounts.get(normalized) ?? 0) + 1;
    seenCounts.set(normalized, count);
    return `${prefix}-${hashText(normalized)}-${count}`;
  };
}

/**
 * Renders a single section of a legal document
 */
function Section({ section }: { section: LegalSection }) {
  const paragraphKeyFor = createStableTextKeyFactory(`${section.id}-paragraph`);
  const compactLineKeyFor = createStableTextKeyFactory(`${section.id}-compact`);
  const subsectionKeyFor = createStableTextKeyFactory(`${section.id}-subsection`);
  const bulletPointKeyFor = createStableTextKeyFactory(`${section.id}-bullet`);

  return (
    <section key={section.id} className="mb-10">
      <h2
        id={section.id}
        className="text-lg font-medium text-gray-900 mb-4 scroll-mt-24"
        {...TOC_SCROLL_SPY_TARGET_PROPS}
      >
        {section.title}
      </h2>

      {/* Main content paragraphs */}
      {section.content.map((paragraph) => (
        <p
          key={paragraphKeyFor(paragraph)}
          className="text-sm text-gray-900 mb-4 leading-relaxed"
        >
          {paragraph}
        </p>
      ))}

      {/* Compact content */}
      {section.compactContent && (
        <div className="text-sm text-gray-900 mb-4 leading-relaxed space-y-1">
          {section.compactContent.map((line) => (
            <div key={compactLineKeyFor(line)}>{line}</div>
          ))}
        </div>
      )}

      {/* Subsections (e.g., "Our intellectual property" under "Intellectual property rights") */}
      {section.subsections?.map((sub) => {
        const subParagraphKeyFor = createStableTextKeyFactory(
          `${section.id}-${sub.title}-paragraph`,
        );
        const subCompactLineKeyFor = createStableTextKeyFactory(
          `${section.id}-${sub.title}-compact`,
        );

        return (
          <div key={subsectionKeyFor(sub.title)} className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {sub.title}
            </h3>
            {sub.content.map((paragraph) => (
              <p
                key={subParagraphKeyFor(paragraph)}
                className="text-sm text-gray-900 mb-4 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            {sub.compactContent && (
              <div className="text-sm text-gray-900 mb-4 leading-relaxed space-y-1">
                {sub.compactContent.map((line) => (
                  <div key={subCompactLineKeyFor(line)}>{line}</div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* Bullet points (e.g., prohibited activities list) */}
      {section.bulletPoints && (
        <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-2">
          {section.bulletPoints.map((point) => (
            <li key={bulletPointKeyFor(point)}>{point}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

/**
 * Reusable legal page layout component with two-column layout:
 * - Left: Main content (title, intro, sections)
 * - Right: Sticky Table of Contents sidebar
 */
export function LegalPageLayout({
  metadata,
  sections,
  showTableOfContents = true,
}: LegalPageLayoutProps) {
  // Generate TOC items from sections
  const tocItems = sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <>
      {/* Hero Section with Title */}
      <section className="w-full pt-18 border-b border-gray-100 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="hidden md:block">
            <LegalBreadcrumb currentPageTitle={metadata.title} />
          </div>
          <h1 className="text-4xl font-medium text-gray-900 mt-26 mb-26">
            {metadata.title}
          </h1>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-18">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            <div className="prose prose-gray max-w-none">
              {/* Last Updated */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm">
                  Last updated: {metadata.lastUpdated}
                </p>
              </div>

              <div className="pb-6 border-t border-gray-100"></div>

              {/* Introduction */}
              <p className="text-sm text-gray-900 mb-8 leading-relaxed">
                {metadata.introduction}
              </p>

              {/* Sections */}
              {sections.map((section) => (
                <Section key={section.id} section={section} />
              ))}
            </div>
          </article>

          {/* Table of Contents Sidebar - Hidden on mobile */}
          {showTableOfContents && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents items={tocItems} />
            </aside>
          )}
        </div>
      </main>
    </>
  );
}
