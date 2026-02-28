import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TintedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header background="tinted" />
      {children}
      <Footer />
    </>
  );
}
