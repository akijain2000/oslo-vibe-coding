// The flagship "Getting Started with Vibe Coding" guide, rendered at /start.
// Prose written from researched, source-backed material; links are hand-verified.

export type GuideLink = { label: string; url: string };

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  pullquote?: string;
  bullets?: string[];
  links?: GuideLink[];
};

export const guide = {
  title: "Getting started with vibe coding",
  dek: "Vibe coding means building software by describing what you want to a model and steering it with feedback. This is the page that takes you from never having coded to building your first small thing.",
  readingTimeMin: 11,
  sections: [
    {
      id: "what-vibe-coding-is",
      heading: "What vibe coding actually is",
      paragraphs: [
        "Vibe coding is building software by describing what you want to an AI model and letting it write the code, then guiding it with feedback instead of typing every line yourself. You say what you want in plain language, the model produces code, you run it, you tell it what is wrong, and you go around again.",
        "Andrej Karpathy named it in early 2025. The idea caught on fast enough that Collins made it their word of the year for 2025. So if it feels new, that is because it is.",
        "The honest part most people skip: not every kind of AI-assisted programming is vibe coding. Simon Willison drew a useful line. True vibe coding means you lean on the model and trust the result without reading every line. That is great for playing, learning, and throwaway prototypes. But for anything you will keep maintaining or put in front of real users, you still need to read and understand the code the model wrote. We will come back to where that line sits, because it is the difference between fun and getting burned.",
      ],
      pullquote: "You say what you want, the model writes it, you run it, you tell it what is wrong, and you go around again.",
      bullets: [
        "Vibe coding: describe what you want, let the model write the code, steer with feedback.",
        "Named by Andrej Karpathy in early 2025; Collins word of the year for 2025.",
        "Not all AI-assisted coding is vibe coding (a distinction from Simon Willison).",
        "Fine to fully trust the model for play and prototypes; read the code for anything you ship or maintain.",
      ],
      links: [
        { label: "Karpathy's original note", url: "https://x.com/karpathy/status/1886192184808149383" },
        { label: "Simon Willison: not all AI-assisted programming is vibe coding", url: "https://simonwillison.net/2025/Mar/19/vibe-coding/" },
      ],
    },
    {
      id: "why-now",
      heading: "Why this is possible now",
      paragraphs: [
        "A few years ago, building software meant learning syntax, setup, tooling, and a long list of small frustrations before you could make anything at all. That wall is mostly gone, and the reason is simple: intelligence got cheap.",
        "Here is the one number worth knowing. By one common comparison, taking the cheapest model that cleared that capability bar at each point, the cost of GPT-3.5-level capability fell from about $20 per million tokens to about $0.07 in roughly eighteen months. The capability that used to be expensive became much cheaper to use. That drop is what makes a beginner-friendly model patient enough to walk you through a build at almost no cost.",
        "What that means for you tonight: the barrier to building something is lower than it has ever been. You do not need to be the kind of person who codes. You need a small idea and a willingness to go back and forth a few times.",
      ],
      pullquote: "GPT-3.5-level intelligence fell from about $20 to about $0.07 per million tokens in roughly eighteen months.",
      bullets: [
        "Intelligence got dramatically cheaper, fast.",
        "GPT-3.5-level cost dropped from about $20 to about $0.07 per million tokens in about eighteen months.",
        "Cheap models make patient, beginner-friendly help affordable.",
        "The barrier to building has never been lower.",
      ],
    },
    {
      id: "pick-one-tool",
      heading: "Pick one tool (you only need one)",
      paragraphs: [
        "You do not need to research every option. Pick one of these three, start tonight, and switch later if you want. The biggest mistake beginners make here is comparing tools for an hour instead of building for an hour.",
        "Lovable: you describe an app and get a working, deployed one back. There is no setup. If you want a first win with zero friction, this is the gentlest place to start. You type what you want, and a real thing appears that other people can open.",
        "Cursor: an editor built around AI. It is the fastest way to actually feel what vibe coding is, because you watch code appear, run it, and shape it in the same place. A little more involved than Lovable, but it teaches you the loop.",
        "Claude Code: a terminal-native agent that works inside real codebases. This is what our community usually uses at sessions. It is a step up from the other two and worth growing into once you are comfortable, not necessarily your first night.",
        "If you cannot decide, start with Lovable for the quickest win, or Cursor if you want to see the code as it happens. One tool. Tonight.",
      ],
      pullquote: "The biggest mistake beginners make here is comparing tools for an hour instead of building for an hour.",
      bullets: [
        "Lovable: describe an app, get a deployed one. Best first win, zero setup.",
        "Cursor: an AI-first editor. Fastest way to feel the loop.",
        "Claude Code: a terminal agent inside real codebases. A step up, what we usually use at sessions.",
        "You only need one to start. Switch later if you want.",
      ],
      links: [
        { label: "Lovable", url: "https://lovable.dev/" },
        { label: "Cursor", url: "https://docs.cursor.com/" },
        { label: "Claude Code", url: "https://docs.claude.com/en/docs/claude-code/overview" },
      ],
    },
    {
      id: "your-first-build",
      heading: "Your first build, tonight",
      paragraphs: [
        "Pick something tiny and real. A personal tool you would actually use, a small one-page site, a calculator for something you do by hand, a tracker for a habit. Small and real beats clever and abstract. If you finish it tonight, you win.",
        "Then describe it in plain language. You do not need the right words. Something like: a page where I type a number of hours and it tells me what I earned. The model fills in the parts you did not say. If it guesses wrong, you correct it, which is the whole point.",
        "Now run the loop. Run it. Look at it. Tell the model what is wrong (the button does nothing, the total is off, make it bigger). Repeat. This is the part that surprises people: building with AI is mostly planning, looking carefully, and iterating, not typing. The typing is the model's job. Your job is knowing what you want and noticing when it is not that yet.",
        "Expect it to be wrong sometimes. That is normal and not a sign you are doing it wrong. Every correction is you steering. A few rounds in, you will have made a thing.",
      ],
      pullquote: "Small and real beats clever and abstract. If you finish it tonight, you win.",
      bullets: [
        "Choose something tiny and real: a personal tool, a small site, a calculator.",
        "Describe it in plain words; let the model fill the gaps.",
        "Loop: run it, look at it, say what is wrong, repeat.",
        "The work is planning, verifying, and iterating, not typing.",
      ],
    },
    {
      id: "how-not-to-get-burned",
      heading: "How to not get burned",
      paragraphs: [
        "Vibe coding is genuinely great for prototypes, learning, and small personal tools. It gets risky when you stop reading and the thing starts touching something that matters. A few simple habits keep you safe.",
        "Read what it gives you when it matters. For a throwaway toy, a light read may be enough. For anything you will share, maintain, or hand to other people, slow down and actually understand what the code does. If you cannot explain roughly what a piece does, that is your signal to ask the model to explain it before you keep going.",
        "Test it. Click the buttons. Try the weird input. Try the empty input. The model will tell you it works; you confirm it works.",
        "Be especially careful with anything touching passwords, payments, or other people's data. That is the zone where a confident wrong answer causes real harm, not just a broken page. When you are there, do not vibe past it. Read the code, ask what it does, and ask someone if you are unsure. There is no shame in that. It is what experienced people do too.",
      ],
      pullquote: "For a throwaway toy, a light read may be enough. For anything real, read the code and understand it.",
      bullets: [
        "Read the code when it matters; trust freely only for throwaway and learning projects.",
        "Test it yourself: real input, weird input, empty input.",
        "Be extra careful with passwords, payments, and other people's data.",
        "If you cannot explain what a piece does, ask the model to explain it before moving on.",
      ],
    },
    {
      id: "levelling-up",
      heading: "From prompts to agents",
      paragraphs: [
        "Once the basic loop feels natural, the next step is moving from one-shot prompts to agents. A one-shot prompt is you asking for one thing and getting one answer. An agent plans, takes several actions on its own, and checks its own work before handing it back. You describe a goal, and it works through the steps.",
        "If you want to understand how this works under the hood, read Anthropic's writeup “Building effective agents”. It is a clear explanation of how these systems are put together, and it will make you much better at directing them.",
        "Notice what changes about your role. As the model does more of the doing, your skill shifts to specifying clearly, reviewing what comes back, and judging whether it is actually good. You become the person who knows what “right” looks like and can tell when it is not there yet. That judgment is the durable skill, and it is one you can start building on your very first night.",
      ],
      pullquote: "As the model does more of the doing, your job becomes specifying clearly, reviewing, and judging what is actually good.",
      bullets: [
        "One-shot prompt: ask once, get one answer.",
        "Agent: plans, acts over several steps, and verifies its own work.",
        "Read Anthropic's “Building effective agents” to understand how they are built.",
        "Your growing skill is specifying, reviewing, and judging quality.",
      ],
      links: [
        { label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents" },
      ],
    },
    {
      id: "why-we-do-this",
      heading: "Why we do this for free",
      paragraphs: [
        "Oslo Vibe Coding is a free, nonprofit, beginner-first community. We exist because cheap, safe access to AI should not be a privilege. The tools got good enough that many more people can build, and we do not think the people who get to use that should only be the people who already knew how to code or could pay to learn.",
        "We are also honest about something: the best way to learn this is in a room with other people. You hit a wall, someone next to you has hit the same one, and you are unstuck in two minutes instead of two hours. That is hard to get alone at a desk at midnight.",
        "So this guide is the start, not the whole thing. Build something tonight using one tool and one tiny idea. Then come to a free Oslo Vibe Coding drop-in and build the next thing with people around you. No one should code alone.",
      ],
      pullquote: "No one should code alone.",
      bullets: [
        "Free, nonprofit, beginner-first. Cheap, safe AI access should not be a privilege.",
        "Learning happens fastest in a room with other people.",
        "Use this guide to start tonight, then come build with us.",
        "Drop-ins are free and open to total beginners.",
      ],
    },
    {
      id: "start-tonight",
      heading: "Your checklist to start tonight",
      paragraphs: [
        "You have everything you need. Here is the whole thing in one place, in order. Do not overthink any single step. The point is to finish something small and feel the loop for yourself.",
        "If you get stuck and cannot get unstuck, that is exactly what a drop-in is for. Bring the thing you were building and the place it broke.",
      ],
      pullquote: "Pick one tool, pick one tiny real thing, and go around the loop until it works.",
      bullets: [
        "Pick one tool: Lovable for the easiest start, Cursor to see the code, Claude Code when you are ready for agents.",
        "Pick one tiny, real thing to build.",
        "Describe it in plain language; let the model write it.",
        "Run it, look at it, say what is wrong, repeat.",
        "Test it yourself, and slow down near passwords, payments, or other people's data.",
        "When you want to go further, read Anthropic's “Building effective agents”.",
        "Bring it to a free Oslo Vibe Coding drop-in and keep going with people around you.",
      ],
    },
  ] as GuideSection[],
};
