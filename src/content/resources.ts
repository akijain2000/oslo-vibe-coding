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
      {
        title: "GitHub Copilot",
        by: "GitHub",
        url: "https://github.com/features/copilot",
        blurb: "Autocomplete on steroids inside your editor. A gentle on-ramp if you already write a little code.",
        free: true,
      },
      {
        title: "v0",
        by: "Vercel",
        url: "https://v0.dev/",
        blurb: "Describe a UI, get React components you can ship. Handy for the front-end of your first app.",
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
    id: "frontier",
    title: "Go to the frontier",
    intro:
      "Curated from Stanford's CS 153: Frontier Systems. This is the deep end, research papers, and you do not need any of it to start. But if you want to understand where all of this came from, here is the canon.",
    items: [
      {
        title: "CS 153: Frontier Systems",
        by: "Stanford",
        url: "https://cs153.stanford.edu/",
        blurb:
          "The Stanford course this list comes from: the whole AI stack, from silicon to policy, with the people building the frontier.",
        free: true,
      },
      {
        title: "AlexNet: ImageNet classification with deep CNNs",
        by: "Krizhevsky, Sutskever & Hinton",
        url: "https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        blurb:
          "2012. The result that started the modern era by crushing image recognition. The moment “just train a big neural net” began to win.",
        free: true,
      },
      {
        title: "Word2Vec: Efficient Estimation of Word Representations",
        by: "Mikolov et al., Google",
        url: "https://arxiv.org/abs/1301.3781",
        blurb:
          "2013. Words become vectors with meaning, where king minus man plus woman lands near queen. The seed of modern embeddings.",
        free: true,
      },
      {
        title: "Playing Atari with Deep Reinforcement Learning",
        by: "DeepMind",
        url: "https://arxiv.org/abs/1312.5602",
        blurb: "2013. A network learns to play Atari from raw pixels. An early glimpse of agents that learn by doing.",
        free: true,
      },
      {
        title: "Attention Is All You Need",
        by: "Vaswani et al., Google",
        url: "https://arxiv.org/abs/1706.03762",
        blurb: "2017. Introduced the transformer. Every model you touch at a session descends from this one paper.",
        free: true,
      },
      {
        title: "BERT: Pre-training of Deep Bidirectional Transformers",
        by: "Google",
        url: "https://arxiv.org/abs/1810.04805",
        blurb: "2018. Pre-train on a mountain of text, then fine-tune. Made transfer learning the default in language.",
        free: true,
      },
      {
        title: "Scaling Laws for Neural Language Models",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2001.08361",
        blurb: "2020. Why more compute, more data and bigger models kept winning. The empirical backbone of the boom.",
        free: true,
      },
      {
        title: "Language Models are Few-Shot Learners (GPT-3)",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2005.14165",
        blurb:
          "2020. A big enough model can do new tasks from a couple of examples. The moment language models started to feel general.",
        free: true,
      },
      {
        title: "Denoising Diffusion Probabilistic Models",
        by: "Ho, Jain & Abbeel",
        url: "https://arxiv.org/abs/2006.11239",
        blurb: "2020. The math behind today's image and video generators.",
        free: true,
      },
      {
        title: "Training Language Models to Follow Instructions (InstructGPT)",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2203.02155",
        blurb:
          "2022. How raw models became helpful assistants that do what you ask. The RLHF technique behind the chat era.",
        free: true,
      },
      {
        title: "Training Compute-Optimal LLMs (Chinchilla)",
        by: "DeepMind",
        url: "https://arxiv.org/abs/2203.15556",
        blurb: "2022. The correction to scaling laws: for a given budget, train on far more data than people assumed.",
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
  {
    id: "oslo-scene",
    title: "Other places to learn in Oslo",
    intro: "We are not the only room in town, and that is a good thing. Go to these too.",
    items: [
      {
        title: "Oslo AI",
        by: "Meetup",
        url: "https://www.meetup.com/oslo-ai/",
        blurb: "The largest AI community in Norway. Bigger talks, more of an industry crowd. Worth following.",
        free: true,
      },
      {
        title: "AI Tinkerers Oslo",
        by: "AI Tinkerers",
        url: "https://oslo.aitinkerers.org/",
        blurb: "Hands-on builder meetups for people shipping with AI. Demo-friendly and practical.",
        free: true,
      },
      {
        title: "Vibe Coding Collective",
        by: "Meetup",
        url: "https://www.meetup.com/vibe-coding-collective/",
        blurb: "An international community running relaxed social coding jams. Good if you travel or want the wider scene.",
        free: true,
      },
    ],
  },
];
