import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overbase › Agentic data",
  description:
    "Easily get complete and accurate data by replacing APIs with AI agents",
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
