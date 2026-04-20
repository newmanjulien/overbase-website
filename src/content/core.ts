import type { Metadata } from "next";
import { notFound } from "next/navigation";

export type PageMetadata = Pick<Metadata, "description">;

export type SlugRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export interface ContentEntryDefinition<TEntryData extends object = object> {
  slug: string;
  pathname?: string;
  load: () => Promise<TEntryData>;
}

export type ResolvedContentDefinition<
  TDefinition extends ContentEntryDefinition,
> = Omit<TDefinition, "pathname" | "load"> & {
    pathname: string;
    href: string;
  };

function validateBasePath(basePath: string) {
  if (!basePath.startsWith("/")) {
    throw new Error(
      `Content collection basePath must start with "/". Received "${basePath}".`,
    );
  }

  if (basePath.length > 1 && basePath.endsWith("/")) {
    throw new Error(
      `Content collection basePath must not end with "/". Received "${basePath}".`,
    );
  }
}

function normalizePathname(pathname: string) {
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function resolveDefinitionPathname(
  basePath: string,
  definition: ContentEntryDefinition,
) {
  if (definition.pathname) {
    return normalizePathname(definition.pathname);
  }

  return `${basePath}/${definition.slug}`.replace(/\/{2,}/g, "/");
}

export function createContentCollection<
  const TDefinitions extends readonly ContentEntryDefinition[],
>({
  basePath,
  definitions,
}: {
  basePath: string;
  definitions: TDefinitions;
}) {
  type Definition = TDefinitions[number];
  type EntryData = Awaited<ReturnType<Definition["load"]>>;
  type Slug = Definition["slug"] & string;
  type InternalResolvedDefinition = Omit<Definition, "pathname"> & {
    pathname: string;
    href: string;
  };
  type ResolvedDefinition = ResolvedContentDefinition<Definition>;

  validateBasePath(basePath);

  if (definitions.length === 0) {
    throw new Error(
      `Content collection "${basePath}" must define at least one entry.`,
    );
  }

  const seenSlugs = new Set<string>();
  const seenPathnames = new Set<string>();

  const resolvedDefinitions = definitions.map((definition) => {
    if (!definition.slug) {
      throw new Error(`Content collection "${basePath}" contains an empty slug.`);
    }

    if (definition.pathname && !definition.pathname.startsWith("/")) {
      throw new Error(
        `Content entry "${definition.slug}" in "${basePath}" has an invalid pathname "${definition.pathname}". Custom pathnames must start with "/".`,
      );
    }

    if (seenSlugs.has(definition.slug)) {
      throw new Error(
        `Content collection "${basePath}" contains duplicate slug "${definition.slug}".`,
      );
    }

    const pathname = resolveDefinitionPathname(basePath, definition);

    if (seenPathnames.has(pathname)) {
      throw new Error(
        `Content collection "${basePath}" contains duplicate pathname "${pathname}".`,
      );
    }

    seenSlugs.add(definition.slug);
    seenPathnames.add(pathname);

    return {
      ...definition,
      pathname,
      href: pathname,
    } as InternalResolvedDefinition;
  });

  const definitionsBySlug = new Map<string, InternalResolvedDefinition>(
    resolvedDefinitions.map((definition) => [definition.slug, definition]),
  );

  function toPublicDefinition(
    definition: InternalResolvedDefinition,
  ): ResolvedDefinition {
    const { load: unusedLoad, ...publicDefinition } = definition;
    void unusedLoad;

    return publicDefinition as ResolvedDefinition;
  }

  function getRequiredDefinition(slug: Slug): InternalResolvedDefinition {
    const definition = definitionsBySlug.get(slug);

    if (!definition) {
      throw new Error(
        `Content collection "${basePath}" is missing definition for slug "${slug}".`,
      );
    }

    return definition;
  }

  return {
    getDefinitions(): ResolvedDefinition[] {
      return resolvedDefinitions.map(toPublicDefinition);
    },
    getSlugs(): Slug[] {
      return resolvedDefinitions.map((definition) => definition.slug) as Slug[];
    },
    getStaticParams(): Array<{ slug: Slug }> {
      return resolvedDefinitions.map((definition) => ({
        slug: definition.slug,
      })) as Array<{ slug: Slug }>;
    },
    getDefinition(slug: Slug): ResolvedDefinition {
      return toPublicDefinition(getRequiredDefinition(slug));
    },
    getPathname(slug: Slug): string {
      return getRequiredDefinition(slug).pathname;
    },
    getHref(slug: Slug): string {
      return getRequiredDefinition(slug).href;
    },
    async getEntry(
      slug: string,
    ): Promise<(ResolvedDefinition & EntryData) | null> {
      const definition = definitionsBySlug.get(slug);

      if (!definition) {
        return null;
      }

      const entry = await definition.load();

      return {
        ...toPublicDefinition(definition),
        ...entry,
      } as ResolvedDefinition & EntryData;
    },
  };
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
