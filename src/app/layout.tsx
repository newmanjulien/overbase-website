import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FACT › Customer Success answers",
  description:
    "FACT is a Customer Success tool that lets CSMs easily ask questions then quickly get a complete and accurate answer",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
