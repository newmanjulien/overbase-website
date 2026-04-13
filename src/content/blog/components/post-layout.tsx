import type { ReactNode } from "react";

export interface BlogPostHero {
  title: ReactNode;
  introduction: string | string[];
}

interface PostLayoutProps {
  hero: BlogPostHero;
  children: ReactNode;
}

function createStableTextKeyFactory(prefix: string) {
  const seenCounts = new Map<string, number>();

  return (text: string): string => {
    const normalized = text.trim();
    const count = (seenCounts.get(normalized) ?? 0) + 1;
    seenCounts.set(normalized, count);
    return `${prefix}-${count}-${normalized}`;
  };
}

export function PostLayout({ hero, children }: PostLayoutProps) {
  const introductionKeyFor = createStableTextKeyFactory("introduction");

  return (
    <>
      <section className="w-full bg-white pt-48 pb-10">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-12">
          <div className="mx-auto max-w-xl space-y-6">
            <h1 className="text-5xl font-medium tracking-tight text-gray-900">
              {hero.title}
            </h1>
          </div>
        </div>
      </section>

      <main
        id="blog-sections"
        className="mx-auto max-w-2xl px-6 py-18 md:px-12"
      >
        <article className="min-w-0">
          <div className="border-t border-gray-100 mb-18" />
          {Array.isArray(hero.introduction) ? (
            hero.introduction.map((paragraph) => (
              <p
                key={introductionKeyFor(paragraph)}
                className="mb-8 text-md leading-relaxed text-gray-900"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mb-8 text-md leading-relaxed text-gray-900">
              {hero.introduction}
            </p>
          )}

          {children}
        </article>
      </main>
    </>
  );
}
