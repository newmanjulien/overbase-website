"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  type FocusEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { buttonVariants } from "@/components/ui/button";
import { SITE_NAV_CHILD_SECTIONS, type SiteNavChildItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";
import {
  HEADER_NAV_DROPDOWN_CONTENT_CLASS,
  HEADER_NAV_DROPDOWN_ITEM_CLASS,
  HEADER_NAV_DROPDOWN_LAYER_CLASS,
  HEADER_NAV_DROPDOWN_PANEL_CLASS,
  HEADER_NAV_DROPDOWN_SECTION_CLASS,
  HEADER_NAV_DROPDOWN_SECTIONED_CONTENT_CLASS,
  HEADER_NAV_DROPDOWN_SECTION_LABEL_CLASS,
  HEADER_NAV_TRIGGER_CLASS,
} from "./header-nav-styles";

type HeaderNavDropdownProps = {
  label: string;
  items: SiteNavChildItem[];
  pathname: string;
  active: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FLYOUT_CLOSE_DELAY_MS = 120;

export function HeaderNavDropdown({
  label,
  items,
  pathname,
  active,
  open,
  onOpenChange,
}: HeaderNavDropdownProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const sections = SITE_NAV_CHILD_SECTIONS.map((section) => ({
    ...section,
    items: items.filter((item) => item.section === section.id),
  })).filter((section) => section.items.length > 0);
  const shouldGroupItems =
    sections.length > 0 && items.every((item) => item.section);
  const panelSizeClass = shouldGroupItems
    ? HEADER_NAV_DROPDOWN_SECTIONED_CONTENT_CLASS
    : HEADER_NAV_DROPDOWN_CONTENT_CLASS;

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }, []);

  const openFlyout = useCallback(() => {
    clearCloseTimeout();
    onOpenChange(true);
  }, [clearCloseTimeout, onOpenChange]);

  const closeFlyout = useCallback(() => {
    clearCloseTimeout();
    onOpenChange(false);
  }, [clearCloseTimeout, onOpenChange]);

  const scheduleClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      onOpenChange(false);
    }, FLYOUT_CLOSE_DELAY_MS);
  }, [clearCloseTimeout, onOpenChange]);

  const focusFirstLink = useCallback(() => {
    containerRef.current
      ?.querySelector<HTMLAnchorElement>("[data-header-nav-link]")
      ?.focus();
  }, []);

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (nextTarget && containerRef.current?.contains(nextTarget)) {
      return;
    }

    closeFlyout();
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openFlyout();
      requestAnimationFrame(focusFirstLink);
      return;
    }

    if (event.key === "Escape" && open) {
      event.preventDefault();
      closeFlyout();
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, [clearCloseTimeout]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current?.contains(event.target as Node)) {
        return;
      }

      closeFlyout();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      closeFlyout();
      triggerRef.current?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFlyout, open]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex"
      onPointerEnter={openFlyout}
      onPointerLeave={scheduleClose}
      onFocusCapture={openFlyout}
      onBlurCapture={handleBlurCapture}
    >
      <div className="relative inline-flex">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => (open ? closeFlyout() : openFlyout())}
          onKeyDown={handleTriggerKeyDown}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            HEADER_NAV_TRIGGER_CLASS,
            active && "text-accent-foreground",
          )}
        >
          {label}
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <div
        className={cn(
          HEADER_NAV_DROPDOWN_LAYER_CLASS,
          panelSizeClass,
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-1 opacity-0",
        )}
      >
        <div
          className={HEADER_NAV_DROPDOWN_PANEL_CLASS}
        >
          {shouldGroupItems ? (
            <div className="grid grid-cols-3">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={HEADER_NAV_DROPDOWN_SECTION_CLASS}
                >
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-4 bottom-4 left-0 w-px bg-border"
                    />
                  ) : null}
                  <div className={HEADER_NAV_DROPDOWN_SECTION_LABEL_CLASS}>
                    {section.label}
                  </div>
                  {section.items.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      data-header-nav-link
                      className={cn(
                        HEADER_NAV_DROPDOWN_ITEM_CLASS,
                        pathname === child.href && "font-medium text-gray-900",
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-1">
              {items.map((child) => (
                <Link
                  key={child.id}
                  href={child.href}
                  data-header-nav-link
                  className={cn(
                    HEADER_NAV_DROPDOWN_ITEM_CLASS,
                    pathname === child.href && "font-medium text-gray-900",
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
