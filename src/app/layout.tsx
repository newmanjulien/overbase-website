import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FACT › Customer Success data",
  description:
    "Request any Customer Success data then easily get the complete, up-to-date and accurate data you need",
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
