import { Geist, Newsreader } from "next/font/google";

export const sansFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const quoteFont = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});
