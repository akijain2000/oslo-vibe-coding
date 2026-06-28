# Oslo Vibe Coding — Brand Guide

The one-page source of truth for the identity. The website reads its brand facts from
[`src/lib/brand.ts`](src/lib/brand.ts) and its visual tokens from
[`src/app/globals.css`](src/app/globals.css). Change them there and the whole site follows.

## The idea in one line

A free, open, beginner-first community for building software with AI in Oslo.
The feeling is a lit room in the dark: warm, welcoming, no gatekeeping.

> **No one codes alone.**

## Name

- **Canonical name:** Oslo Vibe Coding
- **Why this name:** It says exactly what it is (Norwegians trust straightforward), it owns the
  local search term, and it consolidates the four scattered names the community had been using
  (AI Vibes, Vibe Coding Oslo, Vibe Code and Chill, Vibe Coding Drop-In) under one banner.
- **Modular by city:** the format is `Oslo Vibe Coding` today; a future chapter is simply
  `Bergen Vibe Coding`. The whole site is parameterised, so a rename or a new chapter is a
  one-line change in `src/lib/brand.ts`.
- **Event formats are sub-brands, not new names:** Drop-In, Sessions, Build Nights. This is how
  you stay consistent while still running different kinds of events.

## Voice

Plain, warm, honest. Norwegian-functional: say the true thing simply. No marketing slop, no
hype, no em-dashes, no manufactured aphorisms. The community's own words are the north star:

- "No pressure. No gatekeeping. No 'you need 5 years of React experience to sit here' energy."
- "Bring an idea, a half-broken app, or just curiosity."
- "Build something, break something, fix it again."
- "No one should feel lonely while coding."

**Eyebrow / motif:** `Code. Chill. Learn.`

## Colour

| Token | Hex | Use |
|---|---|---|
| Paper | `#FBF7F0` | Default background (warm cream) |
| Mist | `#F3EDE1` | Cards and section washes |
| Ink | `#16151C` | Text and dark UI |
| Night | `#110F17` | Hero, mission, footer (the dark room) |
| **Ember** | **`#FF5A2C`** | **The spark. Primary accent.** |
| Ember Ink | `#D83C12` | Ember as text on cream (passes AA) |
| Amber | `#FFB020` | Gradient partner for the spark |
| Glow | `#FF7A4D` | Lighter ember for dark backgrounds |

The system is deliberately small: cream, ink, and one bold ember accent. Use ember sparingly so
it stays a spark, not a flood.

## Type

- **Display:** Space Grotesk (bold, techy-but-warm) — headlines and the wordmark.
- **Body:** Geist Sans — clean, highly legible, functional.
- **Mono:** Geist Mono — eyebrows, labels, code texture.

## The mark

A four-point spark (`src/components/SparkMark.tsx`) that doubles as a cursor blink. It carries
the ember→amber gradient in the logo and hero, and `currentColor` everywhere else. It scales into
a constellation of drifting sparks on dark backgrounds. The favicon is the spark on a night tile.

**Wordmark:** `Oslo `**`Vibe`**` Coding` — "Vibe" in the ember gradient, the rest in ink (on light)
or cream (on dark).

## Do / Don't

- **Do** keep backgrounds calm and let one ember accent do the work.
- **Do** write like a person inviting a friend, not a brand running a campaign.
- **Don't** reintroduce the old indigo identity or the fragmented names.
- **Don't** add salesy stats or growth-hacky copy. The only pitch is "it's free, come build."

## Where things live

| What | File |
|---|---|
| Brand facts (name, tagline, URL, keywords) | `src/lib/brand.ts` |
| Colour + type tokens | `src/app/globals.css` |
| Events (drives hero, JSON-LD, OG) | `src/content/events.ts` |
| Talks / decks | `src/content/talks.ts` |
| Resource library | `src/content/resources.ts` |
| Organisers | `src/content/people.ts` |
| LinkedIn updates (add a post here) | `src/content/posts.ts` |
| Community links | `src/content/links.ts` |
