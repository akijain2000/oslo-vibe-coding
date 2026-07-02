import type { Metadata } from "next";
import "../globals.css";
import { fontClass } from "@/lib/fonts";

// connect-linkedin is an internal tool that lives outside the (en)/(no) marketing
// route groups. With multiple root layouts there is no app/layout.tsx, so this
// segment needs its own root layout to emit a valid <html>/<body> document
// (otherwise the page renders without <html lang>, no fonts, no doctype).
export const metadata: Metadata = {
  title: "Internal tools",
  robots: { index: false, follow: false },
};

export default function ToolsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontClass}>
      <body className="min-h-full bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
