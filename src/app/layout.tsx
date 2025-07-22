import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hndl — reclaim your day",
  description: "AI + human concierges for C-Suite SaaS execs",
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
