"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, type ReactNode } from "react";
import { HeaderLogo } from "./header-logo";
import { Button } from "@/components/ui/button";
import { HotkeyBadge } from "@/components/ui/hotkey-badge";
import { useHotkeyAction } from "@/hooks/use-hotkey-action";
import { SITE_DRAWER_CTA_ACTION, type SiteNavItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

type MobileDrawerProps = {
  items: SiteNavItem[];
  activeId: string | null;
  logoHref?: string;
  onLogoClickAction?: () => void;
  logoImage: ReactNode;
  closeMenu: () => void;
  open: boolean;
};

const navItemBaseClass =
  "flex h-10 w-full items-center rounded-md px-3 text-sm font-medium transition-colors";

export function MobileDrawer({
  items,
  activeId,
  logoHref = "/",
  onLogoClickAction,
  logoImage,
  closeMenu,
  open,
}: MobileDrawerProps) {
  const ctaLinkRef = useRef<HTMLAnchorElement | null>(null);
  const normalizedCtaHotkey = SITE_DRAWER_CTA_ACTION.hotkey.toLowerCase();

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
      <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] flex flex-col bg-white duration-200 focus-visible:outline-none">
        <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

        <div className="flex h-12 shrink-0 items-center justify-between border-b border-gray-100 px-6">
          <HeaderLogo
            logoHref={logoHref}
            onLogoClickAction={onLogoClickAction}
            onActivate={closeMenu}
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
            <nav className="space-y-2" aria-label="Mobile site navigation">
              {items.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMenu}
                    className={cn(
                      navItemBaseClass,
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    )}
                  >
                    {item.label}
                  </Link>
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
                onClick={closeMenu}
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
