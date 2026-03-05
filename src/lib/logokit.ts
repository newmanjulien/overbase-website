const LOGOKIT_BRAND_LOGO_BASE_URL = "https://img.logokit.com";
const LOGOKIT_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_LOGOKIT_PUBLISHABLE_KEY?.trim();

type BrandLogoOptions = {
  size?: number;
  fallback?: "monogram" | "monogram-light" | "404";
};

const normalizeDomain = (domain: string) =>
  domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "");

export function getBrandLogoUrl(
  domain: string,
  options: BrandLogoOptions = {},
) {
  const { size = 64, fallback } = options;
  const url = new URL(
    `${LOGOKIT_BRAND_LOGO_BASE_URL}/${normalizeDomain(domain)}`,
  );

  url.searchParams.set("size", String(size));
  if (fallback) {
    url.searchParams.set("fallback", fallback);
  }

  if (LOGOKIT_PUBLISHABLE_KEY) {
    url.searchParams.set("token", LOGOKIT_PUBLISHABLE_KEY);
  }

  return url.toString();
}
