"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
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

const logoContainerClass = "h-8 w-auto flex items-center";

function TopLogo({
  logoHref,
  onLogoClickAction,
  logoImage,
}: {
  logoHref?: string;
  onLogoClickAction?: () => void;
  logoImage: ReactNode;
}) {
  if (logoHref) {
    return (
      <Link href={logoHref} className={logoContainerClass}>
        {logoImage}
      </Link>
    );
  }

  if (onLogoClickAction) {
    return (
      <button
        type="button"
        aria-label="Go to previous page"
        className={`${logoContainerClass} cursor-pointer`}
        onClick={onLogoClickAction}
      >
        {logoImage}
      </button>
    );
  }

  return <div className={logoContainerClass}>{logoImage}</div>;
}

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
        <TopLogo
          logoHref={logoHref}
          onLogoClickAction={onLogoClickAction}
          logoImage={logoImage}
        />

        <div className="ml-auto flex items-center gap-1.5">
          {SITE_QUICK_ACTIONS.map((action) => (
            <HotkeyButton
              key={action.hotkey}
              hotkey={action.hotkey}
              variant={action.variant}
              size="sm"
              className={action.className}
              href={action.href}
            >
              {action.label}
            </HotkeyButton>
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
        items={items}
        activeId={activeId}
        logoHref={logoHref}
        onLogoClickAction={onLogoClickAction}
        logoImage={logoImage}
        closeMenu={closeMenu}
      />
    </Dialog.Root>
  );
}
