import type { Metadata } from "next";
import { sansFont } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overbase › Ecosystem-led growth",
  description:
    "Find unseen revenue by sharing sales data with your ecosystem partners",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sansFont.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
