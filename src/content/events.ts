// Events, upcoming + past. The upcoming event drives the homepage hero,
// the JSON-LD Event schema, and the dynamic OG image. Keep `upcoming` first.

export type EventItem = {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  // ISO 8601 with Oslo offset so JSON-LD and humans agree.
  start: string;
  end: string;
  dateLabel: string; // human label, e.g. "Thursday 2 July 2026"
  timeLabel: string; // e.g. "16:00–18:00"
  venue: string;
  address: string;
  city: string;
  rsvpUrl?: string;
  blurb: string;
  recap?: string; // shown for past events
};

export const events: EventItem[] = [
  {
    slug: "drop-in-stortorvet-2026-07-02",
    title: "Vibe Coding Drop-In",
    status: "upcoming",
    start: "2026-07-02T16:00:00+02:00",
    end: "2026-07-02T18:00:00+02:00",
    dateLabel: "Thursday 2 July 2026",
    timeLabel: "16:00–18:00",
    venue: "Spaces Stortorvet",
    address: "Stortorvet 7, 0155 Oslo",
    city: "Oslo",
    rsvpUrl: "https://luma.com/ejyqzry1",
    blurb:
      "Bring your laptop and whatever you're building. Work on your own thing, pair up with someone, ask the question you've been too shy to ask. Beginners genuinely welcome.",
  },
  {
    slug: "drop-in-2026-06-20",
    title: "Vibe Coding Drop-In",
    status: "past",
    start: "2026-06-20T14:00:00+02:00",
    end: "2026-06-20T16:00:00+02:00",
    dateLabel: "Saturday 20 June 2026",
    timeLabel: "14:00–16:00",
    venue: "Oslo",
    address: "Oslo",
    city: "Oslo",
    blurb: "A relaxed Saturday session. Laptops open, ideas out loud.",
    recap: "Small room, big energy. Exactly the point.",
  },
  {
    slug: "session-2-campus-g12-2026-06-06",
    title: "Session 2: Building products the agentic way",
    status: "past",
    start: "2026-06-06T12:00:00+02:00",
    end: "2026-06-06T15:00:00+02:00",
    dateLabel: "Saturday 6 June 2026",
    timeLabel: "12:00",
    venue: "Campus G12",
    address: "Nydalen, Oslo",
    city: "Oslo",
    blurb:
      "Akshat walked through pushing products in a truly agentic way (skills, goals and AI workflows) and the bottlenecks he hit while building.",
    recap:
      "Bring an idea, a project, a half-broken app, or just curiosity. That was the whole brief, and the room delivered.",
  },
  {
    slug: "vibe-code-and-chill-deichman-2026-05-25",
    title: "Vibe Code & Chill",
    status: "past",
    start: "2026-05-25T12:30:00+02:00",
    end: "2026-05-25T15:00:00+02:00",
    dateLabel: "Monday 25 May 2026",
    timeLabel: "12:30",
    venue: "Deichman Nydalen",
    address: "Nydalen, Oslo",
    city: "Oslo",
    blurb:
      "Super casual: come by, code, ask questions, work on your own thing or pair up. Coffee, laptops, and helping each other out.",
    recap: "Hosted in the public library. Open access, the way it should be.",
  },
  {
    slug: "first-session-2026-05",
    title: "The first session",
    status: "past",
    start: "2026-05-17T12:00:00+02:00",
    end: "2026-05-17T15:00:00+02:00",
    dateLabel: "May 2026",
    timeLabel: "Afternoon",
    venue: "Oslo",
    address: "Oslo",
    city: "Oslo",
    blurb:
      "Where it started. We compared Lovable and Claude Code. One gets you to a deployed app fast, the other lets you dig into real codebases.",
    recap:
      "The interesting part wasn't picking a winner. It was watching building-with-AI become about planning, verifying and iterating rather than typing every line.",
  },
];

export const upcomingEvent = events.find((e) => e.status === "upcoming");
export const pastEvents = events.filter((e) => e.status === "past");
