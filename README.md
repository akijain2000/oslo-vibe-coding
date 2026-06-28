# Oslo Vibe Coding

The website for [Oslo Vibe Coding](https://oslovibecoding.tech) — a free, open community
for building software with AI in Oslo. No gatekeeping, beginners welcome.

Bold-but-simple Scandinavian identity. See [`BRAND.md`](BRAND.md) for the full brand guide.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- Deployed on Vercel

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit the content

Everything is content-driven and typed. No code changes needed to update the site:

| Change | File |
|---|---|
| The next session, past events | `src/content/events.ts` |
| Talks and decks | `src/content/talks.ts` |
| Resource library | `src/content/resources.ts` |
| Organisers | `src/content/people.ts` |
| LinkedIn updates (drop in a post URN to embed it live) | `src/content/posts.ts` |
| Community links | `src/content/links.ts` |
| Name, tagline, SEO copy | `src/lib/brand.ts` |

## SEO

Metadata, canonical URLs, `sitemap.xml`, `robots.txt`, a dynamic Open Graph image
(`src/app/opengraph-image.tsx`), a generated favicon, a web manifest, and JSON-LD structured data
for the Organization and the next Event are all built in.

## Deploy

```bash
vercel --prod
```

Production: `https://oslovibecoding.tech`. To attach a custom domain later, add it in the
Vercel project and update `SITE_URL` in `src/lib/brand.ts`.
