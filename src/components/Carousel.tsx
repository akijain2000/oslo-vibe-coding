"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CarouselProps = {
  ariaLabel: string;
  header: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
};

// A manual, scroll-snap carousel. Never auto-rotates (auto-advancing carousels
// are a known usability anti-pattern). Touch and trackpad swipe natively; the
// arrows are a desktop affordance that hides itself when everything already fits.
export default function Carousel({ ariaLabel, header, action, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.82, 260), behavior: reduce ? "auto" : "smooth" });
  };

  const hasControls = canPrev || canNext;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        {header}
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          {action}
          {hasControls && (
            <div className="flex items-center gap-2">
              <ArrowButton dir="prev" onClick={() => page(-1)} disabled={!canPrev} />
              <ArrowButton dir="next" onClick={() => page(1)} disabled={!canNext} />
            </div>
          )}
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carousel"
        tabIndex={0}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}

function ArrowButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink transition enabled:hover:border-ink/30 enabled:hover:bg-mist disabled:cursor-not-allowed disabled:opacity-35"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {dir === "prev" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}
