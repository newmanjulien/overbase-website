import type { ReactNode } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { SITE_NAV_ITEMS, SITE_TINTED_PATHS } from "@/lib/site-nav";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const logo = {
    src: "/logo.png",
    width: 46,
    height: 22,
  };

  return (
    <>
      <Header
        navItems={SITE_NAV_ITEMS}
        logoSrc={logo.src}
        logoWidth={logo.width}
        logoHeight={logo.height}
        tintedPaths={SITE_TINTED_PATHS}
      />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
