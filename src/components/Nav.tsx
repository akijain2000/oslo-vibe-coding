"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { links } from "@/content/links";

// English chrome links to the full site. The Norwegian site is currently the
// resources library, so /no shows an in-locale nav (no bounce back to English).
const NAV_EN = [
  { label: "Next session", href: "/#next" },
  { label: "Start here", href: "/start" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/#about" },
];
const NAV_NO = [{ label: "Ressurser", href: "/no/resources" }];

export default function Nav() {
  const pathname = usePathname();
  const isNo = pathname.startsWith("/no");
  const nav = isNo ? NAV_NO : NAV_EN;
  const rsvp = isNo ? "Meld deg på" : "RSVP · it's free";
  const rsvpMobile = isNo ? "Meld deg på neste samling" : "RSVP for Thursday · it's free";
  const homeHref = isNo ? "/no/resources" : "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const overDark = !solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo tone={overDark ? "dark" : "light"} href={homeHref} />

        <div className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                overDark ? "text-cream-dim hover:text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.luma}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
              overDark ? "bg-paper text-ink hover:bg-white" : "bg-ink text-paper hover:bg-[#26242f]"
            }`}
          >
            {rsvp}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            overDark ? "text-paper" : "text-ink"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-pill bg-ember px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {rsvpMobile}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
