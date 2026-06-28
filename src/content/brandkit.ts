// The brand kit content. Visual foundations (palette, type, sizes) plus the copy
// library (bios, captions, hashtags, playbook) written from a 2026 social-media
// research pass (Instagram + LinkedIn best practices for a local community).
// Used by /branding-kit.

export type Swatch = { name: string; hex: string; role: string; dark?: boolean };

export const palette: Swatch[] = [
  { name: "Ember", hex: "#FF5A2C", role: "Signature accent. The spark.", dark: true },
  { name: "Amber", hex: "#FFB020", role: "Spark gradient partner.", dark: true },
  { name: "Glow", hex: "#FF7A4D", role: "Ember on dark backgrounds." },
  { name: "Ember ink", hex: "#B8300C", role: "Ember text on cream (passes AA)." },
  { name: "Night", hex: "#110F17", role: "Deepest dark. Heroes, posts.", dark: true },
  { name: "Ink", hex: "#16151C", role: "Near-black text.", dark: true },
  { name: "Paper", hex: "#FBF7F0", role: "Warm cream. Default background." },
  { name: "Mist", hex: "#F3EDE1", role: "Card and panel wash." },
];

export type TypeSpec = { name: string; family: string; use: string };

export const typography: TypeSpec[] = [
  { name: "Space Grotesk", family: "Display", use: "Headlines, the wordmark, big statements. Bold, tight tracking." },
  { name: "Geist", family: "Body", use: "Running text, captions, longer copy." },
  { name: "Geist Mono", family: "Mono", use: "Eyebrows, labels, dates, URLs. Uppercase, wide tracking." },
];

export type SizeSpec = { name: string; size: string; where: string };

export const dimensions: SizeSpec[] = [
  { name: "Instagram post", size: "1080 × 1080", where: "Square feed post." },
  { name: "Instagram portrait", size: "1080 × 1350", where: "Taller feed post, more screen space." },
  { name: "Instagram story / Reel", size: "1080 × 1920", where: "Stories and Reels cover." },
  { name: "Instagram profile photo", size: "320 × 320", where: "Upload at 1080, shows as a circle." },
  { name: "LinkedIn profile banner", size: "1584 × 396", where: "Personal profile cover." },
  { name: "LinkedIn page cover", size: "1128 × 191", where: "Company page cover." },
  { name: "LinkedIn page logo", size: "300 × 300", where: "Company page avatar." },
  { name: "LinkedIn post image", size: "1200 × 627", where: "Shared link / image post." },
];

export type Bios = {
  instagram: string;
  instagramShort: string;
  linkedinTagline: string;
  linkedinAbout: string;
  twitter: string;
};

export const bios: Bios = {
  instagram: `Free vibe coding meetups in Oslo. Build software with AI.
Beginners, devs & the curious. No gatekeeping.
Next session + guide ↓
oslovibecoding.tech`,
  instagramShort: `Free AI coding meetups in Oslo. Beginners welcome, no gatekeeping.
Bring a laptop and an idea ↓
oslovibecoding.tech`,
  linkedinTagline: "A free, beginner-first community in Oslo for building software with AI. Drop-in sessions, no gatekeeping.",
  linkedinAbout: `Oslo Vibe Coding is a free, open community for building software with AI in Oslo. We run drop-in sessions where you bring a laptop and an idea, and leave having built or fixed something. No pressure, no gatekeeping, no "you need five years of React to sit here" energy.

It is for everyone. Beginners trying their first project with tools like Claude Code and Cursor, developers sharpening their workflow, designers and product people who want to ship, and curious people who just want to see what AI coding is. You do not need to know anything before you walk in.

The idea is simple. No one should feel lonely while coding. So we sit in one room, share what we are working on, get unstuck together, and learn out loud. Build something, break something, fix it again.

We are run by two volunteers, Akshat Jain and Harsh Trivedi, and it stays free because the point is people showing up in a room, not a product to sell.

To join: RSVP to the next session on our Luma, follow this page for recaps and dates, or read the getting-started guide at oslovibecoding.tech. New to all of this is exactly who we built it for.`,
  twitter: "Free vibe coding meetups in Oslo. Build software with AI, no gatekeeping. Beginners, devs and the curious welcome. RSVP + guide: oslovibecoding.tech",
};

export type CaptionTemplate = { name: string; when: string; text: string };

export const captionTemplates: CaptionTemplate[] = [
  {
    name: "Event announcement",
    when: "3 to 4 weeks before a session, as a carousel (slide 1 the hook, last slide the date and RSVP).",
    text: `We're back in a room together on [DATE].

Vibe Coding Drop-In at [VENUE], [TIME]. Bring a laptop and an idea. That's the whole entry fee.

What actually happens: you sit down, open whatever you're building or want to start, and we get unstuck together. Beginners trying their first project with AI, developers sharpening a workflow, anyone curious. No gatekeeping.

Free, like always. RSVP link is in our bio so we know how many chairs to pull up.

Not sure if it's for you? It is. That's who we built it for.`,
  },
  {
    name: "Day-of reminder",
    when: "The morning of the session, as a clean poster image or a short Reel. Add a Countdown sticker in Stories.",
    text: `Tonight: [DATE], [TIME] at [VENUE].

Doors are open, the kettle's on. Bring a laptop and whatever you're building, half-broken apps included.

A few seats left. RSVP in bio, or just show up. Beginners genuinely welcome.

Bring the friend you'd want to build with.`,
  },
  {
    name: "Post-session recap",
    when: "Within 48 hours while engagement is warm, as a carousel of real photos. Save the Stories to a Highlight.",
    text: `That was a good one. [N] people, one room, a lot of things built and broken.

A few moments from [DATE]: [WHAT SOMEONE SHIPPED], [WHAT SOMEONE LEARNED], [A QUESTION THAT CAME UP].

Thank you to everyone who pulled up, and to [VENUE] for the space.

Next session is [NEXT DATE]. Save this post so the date's there when you need it. RSVP in bio.`,
  },
  {
    name: "Beginner welcome / values",
    when: "Once or twice a month as a carousel. The save-and-share content that explains who you are.",
    text: `You do not need to know how to code to come to Oslo Vibe Coding.

That's the actual rule, not a slogan. Bring an idea, a half-broken app, or just curiosity. We'll figure the rest out in the room.

No pressure. No gatekeeping. No "you need five years of React to sit here" energy. Just people building software with AI and helping each other get unstuck.

No one should feel lonely while coding. That's the whole reason this exists.

Next session and a getting-started guide are at oslovibecoding.tech, link in bio.`,
  },
  {
    name: "Resource / tip share",
    when: "Weekly as a carousel of how-to slides or a short Reel. Saveable content that earns reach from non-followers.",
    text: `A small thing that makes building with AI easier: [TIP IN PLAIN WORDS].

[ONE OR TWO SENTENCES OF HOW, WITH A CONCRETE EXAMPLE.]

We go through stuff like this together at the sessions, out loud, no question too basic.

More plain-English guides at oslovibecoding.tech, link in bio. Save this one for next time you're stuck.`,
  },
];

export type HashtagSet = { name: string; tags: string[] };

// Instagram caps hashtags at 5 (enforced since late 2025), so every set is 5 or
// fewer and "copy all" is always safe. Keywords in the caption matter more now.
export const hashtagSets: HashtagSet[] = [
  { name: "Use per post (recommended)", tags: ["OsloTech", "OsloMeetup", "VibeCoding", "BuildWithAI", "OsloVibeCoding"] },
  { name: "Oslo / local", tags: ["OsloTech", "OsloMeetup", "Oslo", "OsloEvents", "OsloStartup"] },
  { name: "AI & vibe coding", tags: ["VibeCoding", "AICoding", "BuildWithAI", "ClaudeCode", "Cursor"] },
  { name: "Beginners & learning", tags: ["LearnToCodeWithAI", "CodingForBeginners", "CodeNewbie", "TechMeetup", "NoGatekeeping"] },
];

export type Playbook = {
  instagramDo: string[];
  instagramDont: string[];
  linkedinDo: string[];
  linkedinDont: string[];
  cadence: string[];
  contentPillars: { name: string; idea: string }[];
};

export const playbook: Playbook = {
  instagramDo: [
    `Front-load real keywords in captions and your Name field: "free vibe coding meetup in Oslo", "build with AI", "beginners welcome". Instagram search and Google read these now, more than hashtags.`,
    "Default to carousels for recaps, values posts and how-tos (they get saved and re-served for two days), and Reels for reaching people who don't follow you yet, like a 60-second clip from the last session.",
    "Write alt text on every poster image and transcribe the date, time and venue into it. Screen readers cannot read text baked into an image, and it doubles as a search signal.",
    "Use the Collab feature to co-post Reels with speakers or attendees so the post lands in their followers' feeds too. For a small account this is the fastest honest reach.",
    "Run the before, during, after arc on every session: tease three to four weeks out, post live to Stories on the day, then a recap carousel within 48 hours while it's still warm.",
    "Cap hashtags at five (Instagram enforces it): roughly two Oslo tags, two niche tags, one branded tag, rotated across posts.",
  ],
  instagramDont: [
    `No engagement bait. "Tag a friend", "like if you agree", "comment X for the link" are suppressed in 2026. Invite genuinely instead: "bring the friend you'd want to build with".`,
    "Don't put the link in the caption body and expect clicks. Keep one RSVP destination in the bio and point to it plainly.",
    "Don't make single images your default. Their reach and engagement have fallen hard. Reserve them for a clean poster or a quote card.",
    "Never buy followers or join engagement pods. A meetup's whole value is real humans in a room, and fake engagement makes the algorithm throttle real reach.",
    "Don't go silent. Two posts every week beats ten one week and nothing the next. Pick a rhythm you can hold as two volunteers.",
    `Don't add salesy stats or growth-hack copy. The only pitch is "it's free, come build".`,
  ],
  linkedinDo: [
    "Reshare Page posts from the founders' personal profiles. Personal reach is many times higher than a company Page, so people are the real distribution channel.",
    "Use LinkedIn's native Events feature for each session and drive RSVPs there, not to an external link, to avoid the outbound-link reach penalty.",
    "Post document carousels (PDF, five to ten slides). They are the highest-reach format on LinkedIn right now and people save them.",
    `Open posts with a specific claim, number or moment from the room, never a greeting. Only the first ~210 characters show before "see more".`,
    "Reply to every comment in the first hour. Posts with three or more early commenters get far wider reach.",
    "Post real photos from past sessions: a full room, people building, faces. It humanises the community and beats stock or text-only posts.",
  ],
  linkedinDont: [
    "Don't ask many people to reshare the same Page post at once. LinkedIn reads the burst as coordinated amplification and cuts combined reach. Stagger reshares with original comments.",
    "Don't put the link in the post body. Deliver the value in the post and drop the link in the first comment or the native event.",
    "Don't lean on hashtags. Posts with zero to three now outperform hashtag-heavy ones. Reserve four to five only for an event push.",
    "Don't post more than once a day. Two or more posts a day drops per-post reach sharply. Aim for two to three a week.",
    "Don't add throwaway commentary to a reshare. Either repost clean or add 100-plus words of real perspective.",
    "Don't leave Page fields blank. Complete the logo, cover, tagline, city, website and About. Complete pages out-rank sparse ones in search.",
  ],
  cadence: [
    "Monday: Instagram resource or tip carousel, saveable, with a keyword-rich first line.",
    "Tuesday: LinkedIn document carousel, a build tip or what we learned. Founders reshare on Wednesday in their own words.",
    "Wednesday: Instagram community or beginner-welcome post. Near-daily Stories all week.",
    "Thursday morning: LinkedIn post (the peak day), session promo or a member spotlight.",
    "Friday: Instagram Reel, a clip from the last session or a quick build, plus the next-session promo as the date nears.",
    "Around each session, layer the before, during, after arc on top. Target two to three feed posts and two to three Reels a week, and never drop to zero.",
  ],
  contentPillars: [
    { name: "Sessions and RSVP", idea: "The next drop-in: date, venue, what happens in the room, countdowns as it nears, one clear RSVP. The engine that fills chairs." },
    { name: "Recaps and proof", idea: "Photos and three things built or learned from the last session, within 48 hours. Proof, and a soft nudge toward the next one." },
    { name: "Beginner welcome", idea: `The no-gatekeeping promise in plain words, for people who haven't come yet. "You don't need to know how to code to come."` },
    { name: "Plain-English tips", idea: "Small, useful things about building with AI: a Claude Code or Cursor habit, a prompt, a fix. Saveable how-tos." },
    { name: "People and behind the scenes", idea: "Member and speaker spotlights, organiser intros, the work of setting up a room. Faces and names build belonging." },
    { name: "Community moments", idea: "Things people shipped between sessions, a half-broken app that got fixed, a first project. Reposted with credit under the branded hashtag." },
  ],
};
