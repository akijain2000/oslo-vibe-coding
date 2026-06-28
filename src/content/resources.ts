// Curated reading + learning resources for newcomers to vibe coding.
// Each item carries a TL;DR (read before you click) and a visual: either a real
// preview image pulled from the source (self-hosted under /resources, credited via
// the link + source name) or an original on-brand concept diagram (see Diagrams.tsx).

export type Resource = {
  title: string;
  by: string;
  url: string;
  tldr: string;
  image?: string; // path under public/, a source preview image
  diagram?: string; // key into DIAGRAMS, an original concept diagram
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
        diagram: "vibe-loop",
        tldr:
          "The short 2025 post where Andrej Karpathy first described “vibe coding”: leaning into the model, talking to it, accepting its suggestions, and barely reading the code. It is the source everyone quotes, so reading it shows you exactly what the phrase meant before the internet reshaped it. The one-minute origin point before you form your own opinion.",
        free: true,
      },
      {
        title: "Not all AI-assisted programming is vibe coding",
        by: "Simon Willison",
        url: "https://simonwillison.net/2025/Mar/19/vibe-coding/",
        diagram: "vibe-vs-eng",
        tldr:
          "Simon Willison draws a clear line between true vibe coding, where you ignore the code the model writes, and serious AI-assisted work, where you read and own every line. The piece argues the two get lumped together and explains why that confusion matters for quality and trust. A careful practitioner's view rather than the hype.",
        free: true,
      },
      {
        title: "What is vibe coding, exactly?",
        by: "MIT Technology Review",
        url: "https://www.technologyreview.com/2025/04/16/1115135/what-is-vibe-coding-exactly/",
        image: "/resources/mit.jpg",
        tldr:
          "A 2025 explainer that defines vibe coding for a general audience and traces how the term spread after Karpathy coined it. It covers what the practice is good for, where it breaks down, and what it means for who gets to build software. Pick this if you want plain context rather than a developer's deep dive.",
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
        image: "/resources/claude-code.jpg",
        tldr:
          "Anthropic's command-line coding assistant that lives in your terminal and works directly on your codebase: reading files, editing, running commands, and handling Git. This is the official documentation, covering setup, everyday use, and how to wire it into your own workflows. Read it if you want an agent that does real work in your repo, not just snippets in a chat window.",
        free: false,
      },
      {
        title: "Cursor",
        by: "Anysphere",
        url: "https://docs.cursor.com/",
        image: "/resources/cursor.png",
        tldr:
          "Cursor is a code editor built around AI. It looks and feels like VS Code but adds chat, inline edits, and an agent that can work across your whole project. These docs explain the features and how to set them up, useful if you are deciding whether to switch editors or just want to understand what it can do.",
        free: true,
      },
      {
        title: "Lovable",
        by: "Lovable",
        url: "https://lovable.dev/",
        image: "/resources/lovable.png",
        tldr:
          "Lovable lets you describe an app in plain language and watch it build a working web app, no local setup required. It is aimed at people who want to ship a real product quickly, including those without a deep coding background. Visit the site to see how the prompt-to-app approach works and what you can build.",
        free: true,
      },
      {
        title: "GitHub Copilot",
        by: "GitHub",
        url: "https://github.com/features/copilot",
        image: "/resources/copilot.png",
        tldr:
          "Copilot is GitHub's AI assistant that suggests code as you type and answers questions inside your editor. It plugs into the tools most developers already use, like VS Code and the GitHub workflow, so the friction to start is low. This page covers what it offers across editing, chat, and code review.",
        free: true,
      },
      {
        title: "v0",
        by: "Vercel",
        url: "https://v0.dev/",
        image: "/resources/v0.jpg",
        tldr:
          "v0 by Vercel turns a text prompt into front-end UI, generating React components you can copy into your project. It is handy for quickly sketching interfaces or getting past a blank page when you know roughly what you want. Try it when you need working UI fast and want to iterate by chatting rather than hand-coding every element.",
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
        image: "/resources/coursera.jpeg",
        tldr:
          "A beginner specialization from Scrimba on Coursera that teaches you to build real apps with AI tools, no coding background needed. Across five short courses you work hands-on with Cursor, GitHub Copilot, Claude Code, and the Model Context Protocol, plus an intro to web basics and deployment. Aimed at marketers, designers, and other non-programmers, with a shareable certificate at the end.",
        free: true,
      },
      {
        title: "Easy-Vibe: your first modern coding course",
        by: "Datawhale (open source)",
        url: "https://github.com/datawhalechina/easy-vibe",
        image: "/resources/easy-vibe.jpg",
        tldr:
          "A free, open-source curriculum from the Datawhale community that walks you from complete beginner to shipping AI-enabled apps. It moves through three stages: validating an idea and prototyping, then full-stack work with databases and deployment, then advanced topics like Claude Code workflows, MCP, and mobile and web builds. A good fit if you want a structured path rather than scattered tutorials.",
        free: true,
      },
      {
        title: "Vibe Code Source",
        by: "Open source",
        url: "https://www.vibecodesource.com/",
        image: "/resources/vibecodesource.png",
        tldr:
          "A free, open-source library for building software by describing what you want to AI instead of writing it by hand. You get around 50 copy-ready prompts sorted by area (frontend, backend, databases, DevOps, testing), plus guides on workflows, debugging, security, and deployment. It is a reference collection to pull from while you build, not a step-by-step course.",
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
        image: "/resources/anthropic-agents.png",
        tldr:
          "Anthropic's 2024 engineering guide on building LLM agents that actually hold up in production. It draws a clear line between workflows, where you orchestrate the model along fixed paths, and agents, where the model decides its own steps, then walks through composable patterns like prompt chaining, routing, and orchestrator-worker setups. The steady advice: stay simple and add complexity only when a real gain justifies it.",
        free: true,
      },
      {
        title: "From vibe coding to agentic engineering",
        by: "Andrej Karpathy",
        url: "https://www.youtube.com/watch?v=96jN2OCOfLs",
        image: "/resources/karpathy-yt.jpg",
        tldr:
          "A recorded conversation between Andrej Karpathy and Sequoia's Stephanie Zhan about how programming changes as AI coding tools mature. Karpathy walks through the shift from loose, prompt-and-pray vibe coding toward a more disciplined practice where you direct agents deliberately, keep humans in the loop, and treat verification as part of the job. A builder's honest read on what these tools are good at today.",
        free: true,
      },
      {
        title: "Vibe coding, the academic version",
        by: "arXiv",
        url: "https://arxiv.org/html/2506.23253v1",
        diagram: "vibe-loop",
        tldr:
          "A 2025 research paper by Advait Sarkar and Ian Drosos that studies vibe coding by analysing think-aloud videos of developers working with AI. It is the first empirical look at how this style actually plays out: people mix vague goals with precise instructions, debug in a hybrid way, and shift their effort toward judging output and deciding when to take over by hand. The takeaway: expertise does not disappear, it moves to new places.",
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
        diagram: "stack",
        tldr:
          "The Stanford course this list comes from. It covers the whole AI stack, from energy and silicon up through models, applications, security, and deployment policy, with guest lectures from people building the frontier. Useful if you want the systems angle on how modern AI is actually built and run, not only the algorithms.",
        free: true,
      },
      {
        title: "AlexNet: ImageNet classification with deep CNNs",
        by: "Krizhevsky, Sutskever & Hinton",
        url: "https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html",
        diagram: "deep-stack",
        tldr:
          "The 2012 paper that showed a deep convolutional neural network, trained on GPUs, could win the ImageNet image recognition contest by a wide margin. It is widely credited with kicking off the modern deep learning era, proving that bigger networks plus more data and compute beat hand-designed features. A good first read to see where the current wave started.",
        free: true,
      },
      {
        title: "Word2Vec: Efficient Estimation of Word Representations",
        by: "Mikolov et al., Google",
        url: "https://arxiv.org/abs/1301.3781",
        diagram: "vectors",
        tldr:
          "A 2013 paper from Google showing how to turn words into dense numeric vectors that capture meaning, trained cheaply on huge text collections. Its famous result was that simple vector arithmetic could reflect relationships between words, where king minus man plus woman lands near queen. It made word embeddings a standard building block for language tasks.",
        free: true,
      },
      {
        title: "Playing Atari with Deep Reinforcement Learning",
        by: "DeepMind",
        url: "https://arxiv.org/abs/1312.5602",
        diagram: "rl-loop",
        tldr:
          "A 2013 DeepMind paper where a single neural network learned to play Atari video games straight from the raw screen pixels, using reinforcement learning and only the game score as feedback. It showed one general method could master many different games without game-specific tuning, and helped launch the modern field of deep reinforcement learning.",
        free: true,
      },
      {
        title: "Attention Is All You Need",
        by: "Vaswani et al., Google",
        url: "https://arxiv.org/abs/1706.03762",
        diagram: "transformer",
        tldr:
          "The 2017 Google paper that introduced the Transformer, an architecture built entirely on attention rather than the recurrent networks used before. By processing sequences in parallel and letting each token weigh every other token, it trained faster and scaled better. It became the foundation for nearly every large language model that followed.",
        free: true,
      },
      {
        title: "BERT: Pre-training of Deep Bidirectional Transformers",
        by: "Google",
        url: "https://arxiv.org/abs/1810.04805",
        diagram: "transformer",
        tldr:
          "A 2018 Google paper that pre-trained a Transformer to understand text by reading words in both directions at once, then fine-tuned it for specific tasks. This pretrain-then-adapt recipe set new records across many language benchmarks and made transfer learning the default approach in natural language processing.",
        free: true,
      },
      {
        title: "Scaling Laws for Neural Language Models",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2001.08361",
        diagram: "scaling-curve",
        tldr:
          "A 2020 OpenAI paper that measured how language model quality improves as you add more data, parameters, and compute, and found the gains follow smooth, predictable curves. These relationships let researchers forecast performance and budget resources before training, and shaped the strategy of building ever-larger models.",
        free: true,
      },
      {
        title: "Language Models are Few-Shot Learners (GPT-3)",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2005.14165",
        diagram: "few-shot",
        tldr:
          "The 2020 OpenAI paper introducing GPT-3, a 175-billion-parameter language model that could perform new tasks from just a few examples given in the prompt, with no retraining. It demonstrated that scale alone unlocked surprising general-purpose abilities, and reframed how people think about what a single model can do.",
        free: true,
      },
      {
        title: "Denoising Diffusion Probabilistic Models",
        by: "Ho, Jain & Abbeel",
        url: "https://arxiv.org/abs/2006.11239",
        diagram: "diffusion",
        tldr:
          "A 2020 paper that made diffusion models practical for generating high-quality images by learning to reverse a process that gradually adds noise. Starting from pure noise, the model denoises step by step until a clean image appears. This approach underpins many of today's leading image and video generators.",
        free: true,
      },
      {
        title: "Training Language Models to Follow Instructions (InstructGPT)",
        by: "OpenAI",
        url: "https://arxiv.org/abs/2203.02155",
        diagram: "rlhf",
        tldr:
          "A 2022 OpenAI paper showing how to make language models more helpful by fine-tuning them on human feedback about which responses people prefer. The result followed instructions better and produced fewer unwanted outputs than far larger raw models. This alignment technique (RLHF) became the backbone of assistant-style products like ChatGPT.",
        free: true,
      },
      {
        title: "Training Compute-Optimal LLMs (Chinchilla)",
        by: "DeepMind",
        url: "https://arxiv.org/abs/2203.15556",
        diagram: "scaling-curve",
        tldr:
          "A 2022 DeepMind paper arguing that many large models were undertrained, and that for a fixed compute budget you should balance model size against the amount of training data. Their Chinchilla model was smaller than some rivals yet outperformed them by training on much more text. It changed how teams allocate compute between parameters and data.",
        free: true,
      },
    ],
  },
  {
    id: "guest-lectures",
    title: "From the guest lectures",
    intro:
      "CS 153 puts you in the room with the people building the frontier. Here is some of the work behind them: generative images, video, and voice.",
    items: [
      {
        title: "High-Resolution Image Synthesis with Latent Diffusion Models",
        by: "Rombach, Blattmann et al.",
        url: "https://arxiv.org/abs/2112.10752",
        diagram: "diffusion",
        tldr:
          "The 2022 paper behind Stable Diffusion, co-authored by CS 153 guest Andreas Blattmann. Its key move was running the diffusion process in a compressed latent space rather than on raw pixels, which made high-quality image generation fast enough for consumer hardware and cheap enough to open up to everyone. A big reason AI image generation went mainstream.",
        free: true,
      },
      {
        title: "Stable Video Diffusion",
        by: "Blattmann et al., Stability AI",
        url: "https://arxiv.org/abs/2311.15127",
        diagram: "diffusion",
        tldr:
          "A 2023 paper that extends the Stable Diffusion approach from still images to short video, learning to produce consistent motion across frames. It shares authors with the original Stable Diffusion work and was an important step toward open, practical video generation.",
        free: true,
      },
      {
        title: "Luma AI",
        by: "Amit Jain",
        url: "https://lumalabs.ai/",
        image: "/resources/luma.jpg",
        tldr:
          "The company founded by CS 153 guest Amit Jain, building multimodal AI for video and 3D, including the Dream Machine video generator and research on simulating the world. A good look at where generative media is heading beyond text and images.",
        free: true,
      },
      {
        title: "ElevenLabs",
        by: "Mati Staniszewski",
        url: "https://elevenlabs.io/",
        image: "/resources/elevenlabs.png",
        tldr:
          "The AI audio company co-founded by CS 153 guest Mati Staniszewski, known for natural text-to-speech, voice cloning, and real-time translation. A clear example of a frontier company that stays focused on one modality, voice, rather than chasing every modality at once.",
        free: true,
      },
      {
        title: "Why voice will be the core interface",
        by: "Sequoia · Training Data",
        url: "https://sequoiacap.com/podcast/training-data-mati-staniszewski/",
        image: "/resources/elevenlabs-pod.png",
        tldr:
          "A 2025 Training Data podcast conversation with ElevenLabs CEO Mati Staniszewski on why he thinks voice will become a core interface for technology, and how a small, focused team competed with much larger labs. A good listen on building a frontier company around a narrow bet.",
        free: true,
      },
    ],
  },
  {
    id: "for-everyone",
    title: "AI for everyone",
    intro: "Why we run this for free and in the open. Cheap, safe access to AI should not be a privilege.",
    items: [
      {
        title: "Core Views on AI Safety",
        by: "Anthropic",
        url: "https://www.anthropic.com/news/core-views-on-ai-safety",
        image: "/resources/anthropic-safety.jpg",
        tldr:
          "Anthropic's 2023 explanation of why it exists and how it thinks about making powerful AI safe. It lays out the case that AI is advancing fast because of compute and scaling, names the central worry of keeping capable systems aligned with human intent, and walks through research bets spread across optimistic and pessimistic futures, such as interpretability and scalable oversight. A plain-language entry point to the safety reasoning behind a frontier lab.",
        free: true,
      },
      {
        title: "The Bitter Lesson",
        by: "Rich Sutton",
        url: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
        diagram: "compute-curve",
        tldr:
          "A short 2019 essay by reinforcement-learning pioneer Rich Sutton, arguing that over seventy years of AI, general methods that lean on raw computation, mainly search and learning, keep beating clever systems hand-built from human knowledge. He points to chess, Go, speech, and vision. It matters because it became a guiding intuition behind today's large models and the bet on scale over handcrafted rules.",
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
        image: "/resources/oslo-ai.jpeg",
        tldr:
          "One of the city's longest-running and largest AI communities, run by volunteers as a non-commercial meetup with several thousand members. It holds evening gatherings where practitioners share honest lessons from putting machine learning into real products, spanning fintech, startups, careers, and AI-assisted coding. A good fit for practical, real-world AI and a friendly local network rather than vendor pitches.",
        free: true,
      },
      {
        title: "AI Tinkerers Oslo",
        by: "AI Tinkerers",
        url: "https://oslo.aitinkerers.org/",
        diagram: "community",
        tldr:
          "The local chapter of a global network for people who actually build with AI, not just talk about it. Events centre on demo nights where members show working prototypes and side projects live, plus occasional hackathons, so you leave with concrete ideas and contacts. Worth a look if you are an engineer, founder, or maker who wants a hands-on room. Signing up may involve a short application.",
        free: true,
      },
      {
        title: "Vibe Coding Collective",
        by: "Meetup",
        url: "https://www.meetup.com/vibe-coding-collective/",
        image: "/resources/vibe-collective.jpeg",
        tldr:
          "Relaxed, social coding sessions where people use AI to turn ideas into working software, from small games and prototypes to generative art. It is deliberately beginner-friendly and welcomes anyone curious, with no requirement to be an experienced developer. Part of an international group with chapters in several cities, so check the listing for the next session and bring a laptop.",
        free: true,
      },
    ],
  },
];

// Stable slug from a title, used for the per-resource explainer pages.
export const resourceSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[“”"’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type FlatResource = Resource & { sectionId: string; sectionTitle: string; slug: string };

export const allResources: FlatResource[] = resourceSections.flatMap((s) =>
  s.items.map((it) => ({ ...it, sectionId: s.id, sectionTitle: s.title, slug: resourceSlug(it.title) })),
);

export const getResourceBySlug = (slug: string) => allResources.find((r) => r.slug === slug);
