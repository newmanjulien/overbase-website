import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hndl › personal chief of staff",
  description: "Chief of Staff for your personal life",
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
