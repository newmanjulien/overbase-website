import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overbase › Get answers",
  description:
    "C-Suite Execs get the answers they need to pinpoint the right actions to take",
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
