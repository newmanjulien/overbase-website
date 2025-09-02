import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hndl › unbusy life",
  description: "Assistant to unbusy your personal life",
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
