import { Inter, Newsreader } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const quoteFont = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});
