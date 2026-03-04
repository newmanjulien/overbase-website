import type { ReactNode } from "react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const navItems = [
    { id: "how-it-works", href: "/how-it-works", label: "How it works" },
    { id: "pricing", href: "/pricing", label: "Pricing" },
  ];
  const tintedPaths = {
    exact: ["/", "/legal"],
    prefix: ["/legal/"],
  };
  const logo = {
    src: "/logo.png",
    width: 46,
    height: 22,
  };

  return (
    <>
      <Header
        navItems={navItems}
        logoSrc={logo.src}
        logoWidth={logo.width}
        logoHeight={logo.height}
        tintedPaths={tintedPaths}
      />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
