import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hndl",
  description: "Task handler for C-Suite Execs",
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
