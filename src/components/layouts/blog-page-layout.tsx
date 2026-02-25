"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface BlogSectionBase {
  id: string;
  content: ReactNode[];
  image?: {
    src: string;
    alt: string;
    id?: string;
    caption?: string;
  };
  imagePlacement?: "before-heading" | "after-content";
  subsections?: {
    title: string;
    content: ReactNode[];
    compactContent?: ReactNode[];
  }[];
}

export type BlogSection =
  | (BlogSectionBase & { title: string; subtitle?: never })
  | (BlogSectionBase & { subtitle: string; title?: never });

export interface BlogPageHero {
  title: ReactNode;
  introduction: string | string[];
  buttonLabel?: string;
  scrollTargetId?: string;
}

interface BlogPageLayoutProps {
  hero: BlogPageHero;
  sections: BlogSection[];
}

function Section({ section }: { section: BlogSection }) {
  const renderImage = () => {
    if (!section.image) return null;

    return (
      <div className="mt-18 mb-24">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="mx-auto w-full max-w-4xl px-6">
            <img
              id={section.image.id}
              src={section.image.src}
              alt={section.image.alt}
              className="w-full h-auto rounded-xl scroll-mt-28"
            />
            {section.image.caption && (
              <p className="mt-6 text-sm text-gray-900 text-center">
                {section.image.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const imageFirst = section.imagePlacement === "before-heading";

  return (
    <section key={section.id} className="mb-14">
      {imageFirst && renderImage()}
      <div className="mb-4">
        {(() => {
          const heading = "title" in section ? section.title : section.subtitle;
          const sizeClass = "title" in section ? "text-3xl" : "text-xl";

          return (
            <h2
              id={section.id}
              className={`${sizeClass} font-medium text-gray-900 scroll-mt-24`}
              data-scroll-spy-target
            >
              {heading}
            </h2>
          );
        })()}
      </div>

      {section.content.map((paragraph, idx) => (
        <p key={idx} className="text-md text-gray-900 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}

      {!imageFirst && renderImage()}

      {section.subsections?.map((sub, idx) => (
        <div key={idx} className="mt-6">
          <h3 className="text-xl font-medium text-gray-900 mb-3">
            {sub.title}
          </h3>
          {sub.content.map((paragraph, pIdx) => (
            <p
              key={pIdx}
              className="text-md text-gray-900 mb-4 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
          {sub.compactContent && (
            <div className="text-md text-gray-900 mb-4 leading-relaxed space-y-1">
              {sub.compactContent.map((line, lIdx) => (
                <div key={lIdx}>{line}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export function BlogPageLayout({ hero, sections }: BlogPageLayoutProps) {
  return (
    <>
      <section className="w-full pt-48 pb-10 bg-surface">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
              {hero.title}
            </h1>
            {hero.buttonLabel && (
              <div className="pt-2">
                <Button
                  className="bg-gray-100 hover:bg-gray-200/50 text-gray-900 rounded-full px-3 py-1 cursor-pointer"
                  onClick={() => {
                    const targetId = hero.scrollTargetId ?? "blog-sections";
                    document
                      .getElementById(targetId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {hero.buttonLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <main
        id="blog-sections"
        className="max-w-2xl mx-auto px-6 md:px-12 py-18"
      >
        <div className="flex flex-col">
          <article className="min-w-0">
            <div className="prose prose-gray">
              <div className="border-t border-gray-100 mb-18" />
              {Array.isArray(hero.introduction) ? (
                hero.introduction.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-md text-gray-900 mb-8 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-md text-gray-900 mb-8 leading-relaxed">
                  {hero.introduction}
                </p>
              )}

              {sections.map((section) => (
                <Section key={section.id} section={section} />
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
