import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

// Shared font setup. Imported by both locale root layouts so the CSS variables
// and class string stay identical across /(en) and /(no).
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const fontClass = `${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`;
