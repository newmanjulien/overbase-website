"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HotkeyButton } from "@/components/hotkey-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileHeaderNavItem = {
  id: string;
  href: string;
  label: string;
};

type MobileHeaderDrawerProps = {
  items: MobileHeaderNavItem[];
  activeId: string | null;
  logoSrc: string;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;
  onLogoClick?: () => void;
};

export function MobileHeaderDrawer({
  items,
  activeId,
  logoSrc,
  logoWidth = 50,
  logoHeight = 32,
  logoHref = "/",
  onLogoClick,
}: MobileHeaderDrawerProps) {
  const pathname = usePathname() ?? "";
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const closeMenu = () => setOpenPath(null);

  const logoImage = (
    <Image
      src={logoSrc ?? "/logo.png"}
      alt="Logo"
      width={logoWidth}
      height={logoHeight}
      className="object-contain"
      priority
    />
  );

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => setOpenPath(nextOpen ? pathname : null)}
    >
      <div className="flex h-12 items-center gap-2">
        {logoHref ? (
          <Link href={logoHref} className="h-8 w-auto flex items-center">
            {logoImage}
          </Link>
        ) : onLogoClick ? (
          <button
            type="button"
            aria-label="Go to previous page"
            className="h-8 w-auto flex items-center cursor-pointer"
            onClick={onLogoClick}
          >
            {logoImage}
          </button>
        ) : (
          <div className="h-8 w-auto flex items-center">{logoImage}</div>
        )}

        <div className="ml-auto flex items-center gap-1.5">
          <HotkeyButton
            hotkey="l"
            variant="ghost"
            size="sm"
            className="rounded-sm text-sm scale-[0.92] text-secondary-foreground"
            href="/login"
          >
            Login
          </HotkeyButton>
          <HotkeyButton
            hotkey="j"
            variant="light"
            size="sm"
            className="rounded-sm text-sm scale-[0.92]"
            href="/waitlist"
          >
            Join Waitlist
          </HotkeyButton>
          <Dialog.Trigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" strokeWidth={2.1} />
            </Button>
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/35 duration-200",
          )}
        />
        <Dialog.Content
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] flex flex-col bg-white duration-200 focus-visible:outline-none",
          )}
        >
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

          <div className="flex h-12 shrink-0 items-center justify-between border-b border-gray-100 px-6">
            {logoHref ? (
              <Link
                href={logoHref}
                className="h-8 w-auto flex items-center"
                onClick={closeMenu}
              >
                {logoImage}
              </Link>
            ) : onLogoClick ? (
              <button
                type="button"
                aria-label="Go to previous page"
                className="h-8 w-auto flex items-center cursor-pointer"
                onClick={() => {
                  closeMenu();
                  onLogoClick();
                }}
              >
                {logoImage}
              </button>
            ) : (
              <div className="h-8 w-auto flex items-center">{logoImage}</div>
            )}
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

          <div className="flex flex-1 flex-col px-4 py-4">
            <div className="flex-1 overflow-y-auto">
              <nav className="space-y-2" aria-label="Mobile site navigation">
                {items.map((item) => {
                  const active = activeId === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                      className={cn(
                        "flex h-12 w-full items-center rounded-md px-4 text-sm font-medium transition-colors",
                        active
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

            <div className="mt-4 border-t border-gray-100 pt-4">
              <Button
                className="h-10 w-full rounded-md text-sm font-medium"
                asChild
              >
                <Link href="/waitlist" onClick={closeMenu}>
                  Join Waitlist
                </Link>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
