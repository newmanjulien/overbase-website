import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { SiteNavItem } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

type MobileDrawerProps = {
  items: SiteNavItem[];
  activeId: string | null;
  logoHref?: string;
  onLogoClickAction?: () => void;
  logoImage: ReactNode;
  closeMenu: () => void;
};

const logoContainerClass = "h-8 w-auto flex items-center";
const navItemBaseClass =
  "flex h-10 w-full items-center rounded-md px-3 text-sm font-medium transition-colors";

function DrawerLogo({
  logoHref,
  onLogoClickAction,
  logoImage,
  closeMenu,
}: Omit<MobileDrawerProps, "items" | "activeId">) {
  if (logoHref) {
    return (
      <Link href={logoHref} className={logoContainerClass} onClick={closeMenu}>
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
        onClick={() => {
          closeMenu();
          onLogoClickAction();
        }}
      >
        {logoImage}
      </button>
    );
  }

  return <div className={logoContainerClass}>{logoImage}</div>;
}

export function MobileDrawer({
  items,
  activeId,
  logoHref = "/",
  onLogoClickAction,
  logoImage,
  closeMenu,
}: MobileDrawerProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/35 duration-200" />
      <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] flex flex-col bg-white duration-200 focus-visible:outline-none">
        <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

        <div className="flex h-12 shrink-0 items-center justify-between border-b border-gray-100 px-6">
          <DrawerLogo
            logoHref={logoHref}
            onLogoClickAction={onLogoClickAction}
            logoImage={logoImage}
            closeMenu={closeMenu}
          />

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

          <div className="mt-4 border-t border-gray-100 pt-4">
            <Button className="h-10 w-full rounded-md text-sm font-medium" asChild>
              <Link href="/waitlist" onClick={closeMenu}>
                Join Waitlist
              </Link>
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
