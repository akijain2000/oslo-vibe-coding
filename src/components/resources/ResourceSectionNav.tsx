"use client";

import { useEffect, useState } from "react";

type NavSection = { id: string; title: string; count: number };

// Sticky scrollspy nav for the long resources page. Real anchors (deep-linkable,
// open-in-new-tab safe), JS-driven aria-current, active state by weight + fill so
// it does not rely on color alone.
export default function ResourceSectionNav({
  sections,
  label,
}: {
  sections: NavSection[];
  label: string;
}) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav aria-label={label} className="sticky top-16 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <ul className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                onClick={(e) => jump(e, s.id)}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex items-center gap-1.5 rounded-pill px-3.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-ink font-semibold text-paper"
                    : "font-medium text-ink-soft hover:bg-mist hover:text-ink"
                }`}
              >
                {s.title}
                <span className={`font-mono text-xs ${isActive ? "text-paper/70" : "text-ink-faint"}`}>
                  {s.count}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
