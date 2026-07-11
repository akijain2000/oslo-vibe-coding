// Minimal, file-based i18n. English lives at the root; Norwegian under /no.
// No toggle: the two are separate URLs linked by hreflang for SEO.

import { SITE_URL } from "./brand";

export type Locale = "en" | "no";
export const LOCALES: Locale[] = ["en", "no"];

// hreflang codes
export const htmlLang: Record<Locale, string> = { en: "en", no: "nb-NO" };

// Prefix a path for a locale ("/no" for Norwegian, no prefix for English).
export const localePath = (locale: Locale, path: string) =>
  locale === "no" ? `/no${path === "/" ? "" : path}` : path;

export const absoluteUrl = (locale: Locale, path: string) => `${SITE_URL}${localePath(locale, path)}`;

// Build the alternates.languages map for a page that exists in both locales.
export const hreflangAlternates = (path: string) => ({
  en: localePath("en", path),
  "nb-NO": localePath("no", path),
  "x-default": localePath("en", path),
});

type Strings = {
  resourcesEyebrow: string;
  resourcesTitle: string;
  resourcesIntro: string;
  back: string;
  tldrNote: string;
  keyPoints: string;
  openSource: string;
  free: string;
  paid: string;
  onThisPage: string;
  ctaTitle: string;
  ctaBody: string;
  rsvp: string;
  browseAll: string;
  readingTime: (min: number) => string;
};

export const ui: Record<Locale, Strings> = {
  en: {
    resourcesEyebrow: "The library",
    resourcesTitle: "Resources for every stage.",
    resourcesIntro:
      "Start here, keep building, or go to the frontier. Every recommendation includes a plain-English summary before you decide to open it.",
    back: "All resources",
    tldrNote: "A plain summary, so you can get the gist here without leaving.",
    keyPoints: "Key points",
    openSource: "Open the original source",
    free: "Free",
    paid: "Paid",
    onThisPage: "On this page",
    ctaTitle: "New to this? Come build with us.",
    ctaBody: "Reading is good. Building with people is better. Our drop-ins are free and open to total beginners.",
    rsvp: "RSVP for the next session",
    browseAll: "Browse the whole library",
    readingTime: (m) => `${m} min read`,
  },
  no: {
    resourcesEyebrow: "Biblioteket",
    resourcesTitle: "Ressurser for hvert nivå.",
    resourcesIntro:
      "Start her, fortsett å bygge, eller gå til frontier. Hver anbefaling har et enkelt sammendrag før du åpner den.",
    back: "Alle ressurser",
    tldrNote: "Et enkelt sammendrag, så du får med deg poenget her uten å dra videre.",
    keyPoints: "Hovedpunkter",
    openSource: "Åpne originalkilden",
    free: "Gratis",
    paid: "Betalt",
    onThisPage: "På denne siden",
    ctaTitle: "Ny til dette? Kom og bygg med oss.",
    ctaBody: "Å lese er bra. Å bygge sammen med andre er bedre. Samlingene våre er gratis og åpne for helt ferske.",
    rsvp: "Meld deg på neste samling",
    browseAll: "Se hele biblioteket",
    readingTime: (m) => `${m} min lesing`,
  },
};

// Section titles + intros per locale (English mirrors resources.ts).
export const sectionMeta: Record<Locale, Record<string, { title: string; intro: string }>> = {
  en: {
    "start-here": { title: "Start here", intro: "What vibe coding actually means, from the people who named it." },
    tools: { title: "The tools we use", intro: "You only need one to start. Pick whatever gets you building tonight." },
    courses: { title: "Free ways to go from zero", intro: "No prior coding needed. These are the on-ramps we point beginners to." },
    deeper: { title: "When you want to go deeper", intro: "For when the vibes meet a real codebase and you want to understand what is happening." },
    build: { title: "Build your own agents and skills", intro: "Two hands-on courses by Akshat: one on AI agents, one on the skills that make them better." },
    frontier: { title: "Go to the frontier", intro: "Curated from Stanford's CS 153. The deep end, the papers that built modern AI." },
    "guest-lectures": { title: "From the guest lectures", intro: "The work behind the people building the frontier: generative images, video, and voice." },
    "for-everyone": { title: "AI for everyone", intro: "Why we run this for free and in the open. Cheap, safe access should not be a privilege." },
    "oslo-scene": { title: "Other places to learn in Oslo", intro: "We are not the only room in town, and that is a good thing." },
  },
  no: {
    "start-here": { title: "Start her", intro: "Hva vibe coding egentlig betyr, fra de som ga det navnet." },
    tools: { title: "Verktøyene vi bruker", intro: "Du trenger bare ett for å starte. Velg det som får deg i gang i kveld." },
    courses: { title: "Gratis veier fra null", intro: "Ingen koding nødvendig fra før. Dette er inngangene vi anbefaler nybegynnere." },
    deeper: { title: "Når du vil gå dypere", intro: "For når vibene møter en ekte kodebase og du vil forstå hva som skjer." },
    build: { title: "Bygg dine egne agenter og skills", intro: "To praktiske kurs av Akshat: ett om AI-agenter, ett om skillsene som gjør dem bedre." },
    frontier: { title: "Ut til fronten", intro: "Hentet fra Stanfords CS 153. Den dype enden, artiklene som bygde moderne AI." },
    "guest-lectures": { title: "Fra gjesteforelesningene", intro: "Arbeidet bak folkene som bygger fronten: generative bilder, video og stemme." },
    "for-everyone": { title: "KI for alle", intro: "Hvorfor vi gjør dette gratis og åpent. Billig, trygg tilgang bør ikke være et privilegium." },
    "oslo-scene": { title: "Andre steder å lære i Oslo", intro: "Vi er ikke det eneste rommet i byen, og det er en god ting." },
  },
};
