/**
 * Smoothly scrolls to a section by ID.
 * Optionally syncs the URL hash without triggering hard navigation.
 */
export function scrollToSection(
  id: string,
  offset: number = 100,
  updateHash: boolean = true,
): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = Math.max(elementPosition + window.scrollY - offset, 0);

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  if (!updateHash) {
    return;
  }

  const nextHash = `#${id}`;
  if (window.location.hash === nextHash) {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;
  window.history.pushState(null, "", nextUrl);
}
