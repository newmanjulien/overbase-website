"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { HeaderLogo } from "./header-logo";
import { Button } from "@/components/ui/button";
import { HotkeyBadge } from "@/components/ui/hotkey-badge";
import { useHotkeyAction } from "@/hooks/use-hotkey-action";
import {
  SITE_DRAWER_CTA_ACTION,
  SITE_NAV_CHILD_SECTIONS,
  type SiteNavItem,
} from "@/lib/site-nav";
import { cn } from "@/lib/utils";

type MobileDrawerProps = {
  items: SiteNavItem[];
  activeId: string | null;
  logoHref?: string;
  onLogoClickAction?: () => void;
  logoImage: ReactNode;
  closeMenuAction: () => void;
  open: boolean;
};

export const MOBILE_NAV_DIALOG_ID = "site-mobile-navigation-dialog";

const mobileNavRowClass =
  "flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left text-[15px] font-medium tracking-[-0.01em] text-gray-900 transition-colors hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2";

const mobileNavChildLinkClass =
  "block w-full py-1 text-[15px] leading-6 text-gray-900 transition-colors hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2";

export function MobileDrawer({
  items,
  activeId,
  logoHref = "/",
  onLogoClickAction,
  logoImage,
  closeMenuAction,
  open,
}: MobileDrawerProps) {
  const pathname = usePathname() ?? "";
  const ctaLinkRef = useRef<HTMLAnchorElement | null>(null);
  const normalizedCtaHotkey = SITE_DRAWER_CTA_ACTION.hotkey.toLowerCase();
  const [expandedItemId, setExpandedItemId] = useState<string | null>(
    () =>
      items.find((item) => item.children?.length && activeId === item.id)?.id ??
      null,
  );

  const triggerCta = useCallback(() => {
    const link = ctaLinkRef.current;
    if (!link) return;

    link.focus();
    link.click();
  }, []);

  useHotkeyAction({
    hotkey: normalizedCtaHotkey,
    onTrigger: triggerCta,
    enabled: open,
  });

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/35 duration-200" />
      <Dialog.Content
        id={MOBILE_NAV_DIALOG_ID}
        aria-describedby={undefined}
        className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] flex flex-col bg-white duration-200 focus-visible:outline-none"
      >
        <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

        <div className="flex h-12 shrink-0 items-center justify-between px-6">
          <HeaderLogo
            logoHref={logoHref}
            onLogoClickAction={onLogoClickAction}
            onActivate={closeMenuAction}
          >
            {logoImage}
          </HeaderLogo>

          <Dialog.Close asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" strokeWidth={2.1} />
            </Button>
          </Dialog.Close>
        </div>

        <div className="flex flex-1 flex-col px-3 py-3">
          <div className="flex-1 overflow-y-auto">
            <nav
              className="divide-y divide-gray-200/60 border-y border-gray-200/60"
              aria-label="Mobile site navigation"
            >
              {items.map((item) => {
                const isActive = activeId === item.id;
                const childSections = SITE_NAV_CHILD_SECTIONS.map(
                  (section) => ({
                    ...section,
                    items:
                      item.children?.filter(
                        (child) => child.section === section.id,
                      ) ?? [],
                  }),
                ).filter((section) => section.items.length > 0);
                const shouldGroupChildren =
                  (item.children?.length ?? 0) > 0 &&
                  childSections.length > 0 &&
                  item.children?.every((child) => child.section);

                if (item.children?.length) {
                  const isExpanded = expandedItemId === item.id;

                  return (
                    <div key={item.id}>
                      <button
                        type="button"
                        className={mobileNavRowClass}
                        onClick={() =>
                          setExpandedItemId((currentId) =>
                            currentId === item.id ? null : item.id,
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 transition-transform duration-200",
                            isExpanded && "rotate-180",
                          )}
                          strokeWidth={1.9}
                        />
                      </button>

                      {isExpanded ? (
                        <div className="space-y-4 pb-4">
                          {shouldGroupChildren
                            ? childSections.map((section) => (
                                <div key={section.id} className="space-y-1">
                                  <div className="py-1 text-[13px] text-gray-400">
                                    {section.label}
                                  </div>
                                  {section.items.map((child) => {
                                    const isChildActive =
                                      pathname === child.href;

                                    return (
                                      <Link
                                        key={child.id}
                                        href={child.href}
                                        aria-current={
                                          isChildActive ? "page" : undefined
                                        }
                                        onClick={closeMenuAction}
                                        className={mobileNavChildLinkClass}
                                      >
                                        {child.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              ))
                            : item.children.map((child) => {
                                const isChildActive = pathname === child.href;

                                return (
                                  <Link
                                    key={child.id}
                                    href={child.href}
                                    aria-current={
                                      isChildActive ? "page" : undefined
                                    }
                                    onClick={closeMenuAction}
                                    className={mobileNavChildLinkClass}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <div key={item.id}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenuAction}
                      className={mobileNavRowClass}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="mt-4">
            <Button
              className="h-10 w-full rounded-full px-3 text-sm font-medium"
              asChild
            >
              <Link
                ref={ctaLinkRef}
                href={SITE_DRAWER_CTA_ACTION.href}
                onClick={closeMenuAction}
                className="inline-flex w-full items-center justify-between"
                aria-keyshortcuts={normalizedCtaHotkey}
              >
                <span>{SITE_DRAWER_CTA_ACTION.label}</span>
                <HotkeyBadge
                  keyChar={SITE_DRAWER_CTA_ACTION.hotkey.toUpperCase()}
                  variant="light"
                />
              </Link>
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
