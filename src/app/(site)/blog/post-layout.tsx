import type { ReactNode } from "react";

export interface PostHero {
  title: ReactNode;
  introduction: string | string[];
}

interface PostLayoutProps {
  hero: PostHero;
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
      <section className="w-full pt-48 pb-10 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-5xl text-gray-900 font-medium tracking-tight">
              {hero.title}
            </h1>
          </div>
        </div>
      </section>

      <main
        id="blog-sections"
        className="max-w-2xl mx-auto px-6 md:px-12 py-18"
      >
        <div className="flex flex-col">
          <article className="min-w-0">
            <div>
              <div className="border-t border-gray-100 mb-18" />
              {Array.isArray(hero.introduction) ? (
                hero.introduction.map((paragraph) => (
                  <p
                    key={introductionKeyFor(paragraph)}
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

              {children}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
