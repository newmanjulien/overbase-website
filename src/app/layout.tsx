import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Customer Success data",
  description:
    "Easily get complete, up-to-date and accurate Customer Success data",
  icons: {
    icon: "/favicon.ico",
  },
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
