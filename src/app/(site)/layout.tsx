import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
