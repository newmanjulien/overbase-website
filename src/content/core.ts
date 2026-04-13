import type { Metadata } from "next";
import { notFound } from "next/navigation";

export type PageMetadata = Pick<Metadata, "description">;

type EntryLoader<TEntry> = () => Promise<TEntry>;

export type SlugRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function createEntryRegistry<
  const TLoaders extends Record<string, EntryLoader<object>>,
>(loaders: TLoaders) {
  type Slug = keyof TLoaders & string;
  type EntryData = Awaited<ReturnType<TLoaders[Slug]>>;

  const hasSlug = (slug: string): slug is Slug => slug in loaders;

  return {
    getSlugs(): Slug[] {
      return Object.keys(loaders) as Slug[];
    },
    async getEntry(slug: string): Promise<(EntryData & { slug: Slug }) | null> {
      if (!hasSlug(slug)) {
        return null;
      }

      const entry = await loaders[slug]();

      return {
        slug,
        ...entry,
      } as EntryData & { slug: Slug };
    },
  };
}

export function getStaticSlugParams<Slug extends string>(
  getSlugs: () => Slug[],
) {
  return getSlugs().map((slug) => ({ slug }));
}

export async function getRequiredEntry<TEntry>(
  params: SlugRouteProps["params"],
  getEntry: (slug: string) => Promise<TEntry | null>,
): Promise<TEntry> {
  const { slug } = await params;
  const entry = await getEntry(slug);

  if (!entry) {
    notFound();
  }

  return entry;
}
