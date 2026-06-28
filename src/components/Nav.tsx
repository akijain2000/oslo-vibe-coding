"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { links } from "@/content/links";

const NAV = [
  { label: "Next session", href: "/#next" },
  { label: "How it works", href: "/#how" },
  { label: "Talks", href: "/#talks" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the dark hero → use light treatment. Solid paper bar → dark.
  const solid = scrolled || open;
  const overDark = !solid;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo tone={overDark ? "dark" : "light"} />

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
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
              overDark
                ? "bg-paper text-ink hover:bg-white"
                : "bg-ink text-paper hover:bg-[#26242f]"
            }`}
          >
            RSVP · it&apos;s free
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
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
        <div className="border-t border-line bg-paper px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
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
              RSVP for Thursday · it&apos;s free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
