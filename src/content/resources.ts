// Curated reading + learning resources for newcomers to vibe coding.
// This is the "useful on-ramp" — kept deliberately small, high-signal, and free where possible.
// Add or reorder freely; each item renders as a card under its section.

export type Resource = {
  title: string;
  by: string;
  url: string;
  blurb: string;
  free: boolean;
};

export type ResourceSection = {
  id: string;
  title: string;
  intro: string;
  items: Resource[];
};

export const resourceSections: ResourceSection[] = [
  {
    id: "start-here",
    title: "Start here",
    intro: "What “vibe coding” actually means, from the people who named it.",
    items: [
      {
        title: "The original “vibe coding” note",
        by: "Andrej Karpathy",
        url: "https://x.com/karpathy/status/1886192184808149383",
        blurb:
          "The tweet that started it: building software by talking to a model and giving in to the vibes. One paragraph, worth reading first.",
        free: true,
      },
      {
        title: "Not all AI-assisted programming is vibe coding",
        by: "Simon Willison",
        url: "https://simonwillison.net/2025/Mar/19/vibe-coding/",
        blurb:
          "The clearest explainer of where vibe coding ends and real engineering begins. Read this so you know when to trust the output and when not to.",
        free: true,
      },
      {
        title: "What is vibe coding, exactly?",
        by: "MIT Technology Review",
        url: "https://www.technologyreview.com/2025/04/16/1115135/what-is-vibe-coding-exactly/",
        blurb: "A grounded, non-hype overview if you want the wider picture before you start.",
        free: true,
      },
    ],
  },
  {
    id: "tools",
    title: "The tools we use",
    intro: "You only need one to start. Pick whatever gets you building tonight.",
    items: [
      {
        title: "Claude Code",
        by: "Anthropic",
        url: "https://docs.claude.com/en/docs/claude-code/overview",
        blurb: "Terminal-native agent that works inside real codebases. Our usual driver at sessions.",
        free: false,
      },
      {
        title: "Cursor",
        by: "Anysphere",
        url: "https://docs.cursor.com/",
        blurb: "An editor built around AI. The fastest way to feel what vibe coding is.",
        free: true,
      },
      {
        title: "Lovable",
        by: "Lovable",
        url: "https://lovable.dev/",
        blurb: "Describe an app, get a deployed one. Great for a first win with zero setup.",
        free: true,
      },
    ],
  },
  {
    id: "courses",
    title: "Free ways to go from zero",
    intro: "No prior coding needed. These are the on-ramps we point beginners to.",
    items: [
      {
        title: "Vibe Coding Essentials",
        by: "Coursera",
        url: "https://www.coursera.org/specializations/vibe-coding",
        blurb: "Build real apps with Cursor, Copilot and Claude Code. Audit it for free.",
        free: true,
      },
      {
        title: "Easy-Vibe: your first modern coding course",
        by: "Datawhale (open source)",
        url: "https://github.com/datawhalechina/easy-vibe",
        blurb: "80+ visual, interactive topics from computer basics to the AI frontier. Fully open.",
        free: true,
      },
      {
        title: "Vibe Code Source",
        by: "Open source",
        url: "https://www.vibecodesource.com/",
        blurb: "A free prompt + workflow library for building real software by prompting AI.",
        free: true,
      },
    ],
  },
  {
    id: "deeper",
    title: "When you want to go deeper",
    intro: "For when the vibes meet a real codebase and you want to understand what is happening.",
    items: [
      {
        title: "Building effective agents",
        by: "Anthropic",
        url: "https://www.anthropic.com/research/building-effective-agents",
        blurb: "The reference for moving from one-shot prompts to agents that plan, act and verify.",
        free: true,
      },
      {
        title: "From vibe coding to agentic engineering",
        by: "Andrej Karpathy",
        url: "https://www.youtube.com/watch?v=96jN2OCOfLs",
        blurb: "Where this is all heading: keeping the scaffolding thin and betting on the model.",
        free: true,
      },
      {
        title: "Vibe coding, the academic version",
        by: "arXiv",
        url: "https://arxiv.org/html/2506.23253v1",
        blurb: "Programming through conversation, written up properly. For the curious and the skeptical.",
        free: true,
      },
    ],
  },
  {
    id: "for-everyone",
    title: "AI for everyone",
    intro:
      "Why we run this for free and in the open. Cheap, safe access to AI should not be a privilege.",
    items: [
      {
        title: "Core Views on AI Safety",
        by: "Anthropic",
        url: "https://www.anthropic.com/news/core-views-on-ai-safety",
        blurb: "The case for building powerful AI carefully and making its benefits broadly shared.",
        free: true,
      },
      {
        title: "The Bitter Lesson",
        by: "Rich Sutton",
        url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
        blurb:
          "The idea behind our talks: methods that lean on computation win. Bet on the model, keep your cleverness thin.",
        free: true,
      },
    ],
  },
];
