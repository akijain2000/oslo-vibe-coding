"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { links } from "@/content/links";

const NAV_EN = [
  { label: "Home", href: "/" },
  { label: "Attend a session", href: "/events" },
  { label: "Resources", href: "/resources" },
  { label: "AI Brief", href: "/brief" },
  { label: "Community", href: "/community" },
];
const NAV_NO = [
  { label: "Hjem", href: "/no" },
  { label: "Bli med på en samling", href: "/no#next" },
  { label: "Ressurser", href: "/no/resources" },
  { label: "Fellesskap", href: "/no#join" },
];

// Pages that exist in both locales, keyed EN path -> NO path. Used by the
// language switcher so it lands on the real counterpart, not the /no homepage.
const EN_TO_NO: Record<string, string> = {
  "/": "/no",
  "/start": "/no/kom-i-gang",
  "/what-is-vibe-coding": "/no/hva-er-vibe-coding",
  "/faq": "/no/faq",
  "/resources": "/no/resources",
};
const NO_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_NO).map(([en, no]) => [no, en]),
);

// The counterpart path in the other locale. Falls back to the locale homepage
// when a page has no translation yet.
function switchPath(pathname: string, toNo: boolean): string {
  if (toNo) {
    if (pathname.startsWith("/no")) return pathname;
    if (EN_TO_NO[pathname]) return EN_TO_NO[pathname];
    if (pathname.startsWith("/resources/")) return "/no" + pathname; // resource detail
    return "/no";
  }
  if (!pathname.startsWith("/no")) return pathname;
  if (NO_TO_EN[pathname]) return NO_TO_EN[pathname];
  if (pathname.startsWith("/no/resources/")) return pathname.slice(3); // resource detail
  return pathname.slice(3) || "/";
}

export default function Nav() {
  const pathname = usePathname();
  const isNo = pathname.startsWith("/no");
  const nav = isNo ? NAV_NO : NAV_EN;
  const rsvp = isNo ? "Meld deg på" : "RSVP · it's free";
  const rsvpMobile = isNo ? "Meld deg på neste samling" : "RSVP for the next session · it's free";
  const homeHref = isNo ? "/no" : "/";

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

        <div className="hidden items-center gap-6 lg:flex">
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
          <span className="flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider">
            {isNo ? (
              <Link href={switchPath(pathname, false)} className={overDark ? "text-cream-dim hover:text-paper" : "text-ink-soft hover:text-ink"}>EN</Link>
            ) : (
              <span className={overDark ? "text-paper" : "text-ink"}>EN</span>
            )}
            <span className={overDark ? "text-night-line" : "text-line"}>/</span>
            {isNo ? (
              <span className={overDark ? "text-paper" : "text-ink"}>NO</span>
            ) : (
              <Link href={switchPath(pathname, true)} className={overDark ? "text-cream-dim hover:text-paper" : "text-ink-soft hover:text-ink"}>NO</Link>
            )}
          </span>
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
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            overDark ? "text-paper" : "text-ink"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 pb-5 pt-2 lg:hidden">
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
            <div className="flex items-center gap-2 border-b border-line/70 py-3 font-mono text-sm uppercase tracking-wider">
              {isNo ? (
                <Link href={switchPath(pathname, false)} onClick={() => setOpen(false)} className="text-ember-ink">EN</Link>
              ) : (
                <span className="text-ink">EN</span>
              )}
              <span className="text-line">/</span>
              {isNo ? (
                <span className="text-ink">NO</span>
              ) : (
                <Link href={switchPath(pathname, true)} onClick={() => setOpen(false)} className="text-ember-ink">NO</Link>
              )}
            </div>
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
