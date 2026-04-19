"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeaderLogo } from "./header-logo";
import { HotkeyButton } from "./hotkey-button";
import { MobileDrawer } from "./mobile-drawer";
import { Button } from "@/components/ui/button";
import { SITE_QUICK_ACTIONS, type SiteNavItem } from "@/lib/site-nav";

type MobileHeaderProps = {
  items: SiteNavItem[];
  activeId: string | null;
  logoSrc: string;
  logoWidth?: number;
  logoHeight?: number;
  logoHref?: string;
  onLogoClickAction?: () => void;
};

export function MobileHeader({
  items,
  activeId,
  logoSrc,
  logoWidth = 50,
  logoHeight = 32,
  logoHref = "/",
  onLogoClickAction,
}: MobileHeaderProps) {
  const pathname = usePathname() ?? "";
  const [isOpen, setIsOpen] = useState(false);
  const [openedPathname, setOpenedPathname] = useState<string | null>(null);
  const open = isOpen && openedPathname === pathname;
  const closeMenuAction = () => {
    setIsOpen(false);
    setOpenedPathname(null);
  };
  const handleOpenChange = (nextOpen: boolean) => {
    setIsOpen(nextOpen);
    setOpenedPathname(nextOpen ? pathname : null);
  };

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
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <div className="flex h-12 items-center gap-2">
        <HeaderLogo
          logoHref={logoHref}
          onLogoClickAction={onLogoClickAction}
        >
          {logoImage}
        </HeaderLogo>

        <div className="ml-auto flex items-center gap-1.5">
          {SITE_QUICK_ACTIONS.map((action) => (
            <HotkeyButton
              key={action.hotkey}
              action={action}
              size="sm"
              enabled={!open}
            />
          ))}

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

      <MobileDrawer
        key={`${pathname}:${open ? "open" : "closed"}`}
        items={items}
        activeId={activeId}
        logoHref={logoHref}
        onLogoClickAction={onLogoClickAction}
        logoImage={logoImage}
        closeMenuAction={closeMenuAction}
        open={open}
      />
    </Dialog.Root>
  );
}
