import type { Explainer } from "./explainers";

// Generated explainers keyed by resource slug.
export const explainersEn: Record<string, Explainer> = {
  "the-original-vibe-coding-note": {
    "lead": "In early 2025, the AI researcher Andrej Karpathy fired off a short post describing a new way to write software: let the model do almost all the work and just go with the flow. The phrase he used, \"vibe coding,\" caught on fast.",
    "sections": [
      {
        "heading": "What he actually said",
        "paragraphs": [
          "Karpathy posted his note on February 2, 2025. He described a style of building where you lean fully on the AI model, accept the suggestions it gives you, and stop worrying about the underlying code. You talk to the tool, often by voice, describe what you want, and let it generate and run the program. If something breaks, you paste the error back in and ask for a fix rather than reading through the logic yourself.",
          "He framed it as something that only became possible because the models had gotten good enough to handle small projects on their own. It was a casual, almost playful observation, not a manifesto. He later called it a quick throwaway thought. But the name was sticky, and within months people everywhere were using it."
        ]
      },
      {
        "heading": "The core idea in plain terms",
        "paragraphs": [
          "Normally a programmer reads every line, understands it, and takes responsibility for it. Vibe coding flips that. You describe the outcome you want in everyday language, the model writes the code, and you judge it by whether the result feels right when you run it, not by inspecting how it works. You are steering by vibes: does the app do the thing, does it look okay, does the error go away.",
          "Think of it like cooking with a very capable assistant who handles the knife work while you taste and say \"more salt.\" You stay in charge of the direction, but you let go of the mechanics. That trade is the whole point, and also the whole risk."
        ]
      },
      {
        "heading": "Why it matters for building with AI",
        "paragraphs": [
          "This little note named something a lot of people were already starting to feel. Once you can describe software in plain words and watch it appear, the barrier to making a small tool, a quick game, or a weekend prototype drops a lot. People who never thought of themselves as programmers can build working things.",
          "It matters for our community because it sets a starting line. Vibe coding is a great way to learn, to play, and to get a rough idea in front of real users quickly. The caution, which Karpathy himself implied and others spelled out later, is that going purely on vibes works best for low-stakes projects. The moment something needs to be reliable, safe, or maintained over time, you usually want to slow down and understand the code, not just feel it."
        ]
      }
    ],
    "keyPoints": [
      "Coined by Andrej Karpathy in a short post on February 2, 2025.",
      "The idea: describe what you want, let the AI write it, and judge by results rather than reading the code.",
      "Often done by talking to the tool and pasting errors back in for it to fix.",
      "Lowers the barrier to building, which makes it great for learning and quick prototypes.",
      "Best for low-stakes work; reliability and safety usually call for actually understanding the code."
    ]
  },
  "not-all-ai-assisted-programming-is-vibe-coding": {
    "lead": "Soon after the phrase took off, the developer and writer Simon Willison stepped in to clear up a growing confusion: using AI to help you code is not the same thing as vibe coding. He wanted to keep the two ideas separate.",
    "sections": [
      {
        "heading": "The distinction he drew",
        "paragraphs": [
          "In a March 2025 piece, Willison noticed that people had started calling any AI-assisted coding \"vibe coding,\" and he thought that blurred something important. To him, true vibe coding has a specific meaning: you build with an AI model and you do not review the code it produces. You accept it, run it, and move on. The defining trait is that you are not reading or owning the lines.",
          "That, he argued, is very different from the serious work most professional developers do with AI. In that mode you still use the model to go faster, but you read every change, you understand it, and you take responsibility for it. The AI is a fast assistant, not a replacement for your judgment."
        ]
      },
      {
        "heading": "His golden rule",
        "paragraphs": [
          "Willison offered a simple test for whether AI-assisted work is up to a professional standard: he will not add code to his project if he could not explain exactly what it does to another person. If you can explain it, you understand it, and you can stand behind it. If you cannot, you are just hoping it works.",
          "Notice this is not anti-AI. He was clear that vibe coding itself is genuinely useful and fun. His point was narrower. Real software that other people rely on has to be understandable, has to keep working as it grows, and has to account for things like security, performance, and cost. None of that happens by vibes alone."
        ]
      },
      {
        "heading": "Why the difference is worth keeping",
        "paragraphs": [
          "Mixing the two terms can mislead beginners in both directions. It can make responsible AI-assisted programming sound reckless, as if professionals just accept whatever the model spits out. And it can make vibe coding sound more bulletproof than it is, hiding the fact that nobody checked the code.",
          "For our community, the takeaway is freeing rather than strict. Vibe code happily when you are exploring, learning, or prototyping. When you cross into something real, shift gears: read what the AI wrote, ask it to explain anything unclear, and only keep what you actually understand. Same tools, different level of ownership."
        ]
      }
    ],
    "keyPoints": [
      "Willison's article (March 2025) separates two things people kept merging.",
      "True vibe coding means not reviewing the AI's code; serious AI-assisted work means reading and owning every line.",
      "His golden rule: do not keep code you could not explain to someone else.",
      "He is pro vibe coding for play and prototypes, not as a substitute for understanding.",
      "Match your level of review to the stakes: vibes for exploring, ownership for anything real."
    ]
  },
  "what-is-vibe-coding-exactly": {
    "lead": "As the phrase spread far beyond programmers, MIT Technology Review published a 2025 explainer to answer the obvious question for a general audience: what does \"vibe coding\" actually mean, and where did it come from.",
    "sections": [
      {
        "heading": "A definition for non-programmers",
        "paragraphs": [
          "The piece walks a general reader through the basic idea. Vibe coding is using an AI tool to build software by describing what you want in ordinary language, then leaning on the model to produce the working program. You guide it with feedback rather than writing the code line by line yourself. For someone who has never programmed, this is the appeal: you can make a working app by talking to a tool instead of learning a programming language first.",
          "The explainer also traces the origin. The term came from a short post by AI researcher Andrej Karpathy in early 2025, and from there it traveled quickly into mainstream coverage and everyday conversation. A throwaway phrase became a label that news outlets, companies, and newcomers all started using."
        ]
      },
      {
        "heading": "Why a term spreads, and what gets fuzzy",
        "paragraphs": [
          "Part of what the article captures is how slippery a popular word can become. As more people picked up \"vibe coding,\" they stretched it to cover all sorts of AI-and-code activity, not just the original narrow meaning of not looking at the code at all. The explainer helps readers see both the tight definition and the looser everyday usage, so they are not confused when the same phrase seems to mean different things.",
          "That is useful context for anyone new. When a term is fashionable, the hype and the careful meaning travel together. Knowing the difference keeps you from over-trusting a buzzword."
        ]
      },
      {
        "heading": "Why this explainer is a good starting point",
        "paragraphs": [
          "For our community, a piece like this is valuable because it is written for people outside the programming world. It does not assume you already know what a model or a codebase is. It gives you enough to follow the conversation everyone is having and to understand why vibe coding suddenly seems to be everywhere.",
          "Read it as your orientation map. It tells you what the phrase means, who started it, and how it grew, which is exactly the footing you want before you try building anything yourself. From here, the natural next step is to actually open a tool and describe something small you would like to make."
        ]
      }
    ],
    "keyPoints": [
      "A 2025 MIT Technology Review explainer aimed at general readers, not just coders.",
      "Defines vibe coding as building software by describing what you want and letting an AI model produce it.",
      "Traces the term back to Andrej Karpathy's early-2025 post and its fast spread into the mainstream.",
      "Shows how the word stretched from a narrow meaning into looser everyday use.",
      "A good first read to get oriented before you try building with AI yourself."
    ]
  },
  "claude-code": {
    "lead": "Claude Code is an AI helper that lives in your terminal, the plain text window where developers type commands. You tell it what you want in normal language, and it works directly inside your real project files.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "Most coding assistants sit beside your work and suggest snippets you copy over by hand. Claude Code does something different. It runs in your terminal and it can act on the whole project. It reads your files, edits them, runs commands like starting the app or running tests, and it can use Git, the tool developers rely on to save and track versions of their work.",
          "Anthropic, the company behind the Claude models, built it so you can hand over a task and watch it carry the task through, step by step, in the same place where you already build software."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "Think of it less like autocomplete and more like a capable junior teammate who can open the project, look around, make changes, and check whether those changes worked. You might say something like, find why the login page is slow and fix it. Claude Code will search the code, form a guess, try a change, run the app to see if the guess held up, and report back.",
          "Because it operates on the real codebase rather than a chat box copy, it keeps context across many files. That is what lets it handle bigger jobs than a single suggestion at a time."
        ]
      },
      {
        "heading": "Why it matters for building with AI",
        "paragraphs": [
          "This is one of the clearest examples of AI moving from suggesting to doing. For a beginner learning to build, that shift is encouraging. You can describe a goal in your own words and learn from watching how the tool breaks the goal into concrete steps.",
          "It is also a fit for people who like working in the terminal and want their AI close to their tools, not in a separate window. In a community of builders, it is a common shared reference point when people talk about agents that take real action."
        ]
      }
    ],
    "keyPoints": [
      "Runs inside your terminal and works on your actual project, not a copy pasted into chat.",
      "Can read files, edit code, run commands, and use Git on its own.",
      "Built by Anthropic, the makers of the Claude models.",
      "Suited to multi step tasks where it tries something, checks the result, and adjusts.",
      "A clear example of AI that takes action rather than only offering suggestions."
    ]
  },
  "codex": {
    "lead": "Codex is OpenAI's coding agent. It reads, edits, and runs your code, and you can reach it from your terminal, your editor, a desktop app, the web, and inside ChatGPT.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "Codex is one agent you meet through several doors. The terminal version, called the Codex CLI, runs on your own machine in the command-line window where developers type instructions, and it can inspect a repository, change files, and run commands there. A repository, or repo, is the folder that holds all of a project's code and its history. There is also an editor extension that works inside VS Code, Cursor, and JetBrains tools, a desktop app, and a cloud version you open in your browser or inside ChatGPT.",
          "OpenAI builds Codex, and it runs on the company's recent GPT-5 series frontier models, with GPT-5.5 as the default. Beyond writing code, it can explain an unfamiliar codebase, review code, and help debug problems. The CLI is open source under the Apache-2.0 license, so anyone can read how it works, and you can sign in with a ChatGPT plan or with an API key."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "You give Codex a goal in plain language, and it works in a loop: it reads the relevant files, makes an edit, runs something to check the result, then decides what to do next. On your own machine it works inside a sandbox, a walled-off space that limits what it can touch, which lowers the chance of an unwanted change while it tries things out.",
          "The cloud version goes a step further. You hand it a task and it runs on its own in an isolated environment, then hands back a finished change you can review. It can run several tasks at the same time, and it produces a clear diff, a side-by-side view of what changed, along with a pull request. A pull request, or PR, is the standard way to propose changes to a shared codebase so other people can look before they are merged in."
        ]
      },
      {
        "heading": "Why it matters for building with AI",
        "paragraphs": [
          "Codex shows how flexibly an AI agent can fit around the way you already work. You might start a task in your editor, let the cloud finish it while you do something else, then review the result when it is ready. You can also connect Codex to your GitHub account, the service where much of the world's code is hosted, and hand it work by tagging it on an issue or a pull request, which it picks up and turns into a proposed change.",
          "For a beginner, the lesson is that the same agent can sit quietly in your terminal or take a whole job off your plate in the background. You choose how much to hand over, and you stay the one who reviews and approves what comes back."
        ]
      }
    ],
    "keyPoints": [
      "Made by OpenAI, and reachable from the terminal, an editor extension, a desktop app, the web, and inside ChatGPT.",
      "Works in a loop on your real project: reading files, editing code, and running commands to check itself.",
      "Its cloud mode can take a task, work on it on its own in an isolated environment, and hand back a finished change.",
      "Connects to GitHub: tag it on an issue or a pull request and it picks up the task and proposes a change.",
      "Runs locally inside a sandbox to limit unwanted changes, and the terminal version is open source under Apache-2.0."
    ]
  },
  "cursor": {
    "lead": "Cursor is a code editor with AI built into its core. It looks and feels like a familiar editor, but a model is woven through every part of how you write and change code.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "A code editor is the program developers write software in, the way a word processor is where you write documents. Cursor, made by a company called Anysphere, is based on VS Code, one of the most widely used editors, so anyone who has touched VS Code will feel at home right away.",
          "The difference is that Cursor treats AI as a first class part of the workflow rather than a bolt on. You get a chat panel to ask questions, the ability to highlight code and ask for an inline edit, and an agent that can work across your project to make a set of related changes."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "Cursor tries to keep you in flow. Instead of switching to a browser to ask a question and pasting answers back, you ask right where the code lives, and the editor already knows what you are looking at. You can point at a confusing function and ask what it does, or describe a change in a sentence and let Cursor rewrite the relevant lines.",
          "The project agent goes a step further. You give it a goal, and it can touch several files at once to reach that goal, while you stay in control and review what it proposes before accepting."
        ]
      },
      {
        "heading": "Why it matters for builders",
        "paragraphs": [
          "For someone learning to code, Cursor lowers the gap between an idea and a working change. The model has the surrounding code in view, so its suggestions tend to fit your project rather than float in the abstract.",
          "It has become a popular starting point in the building with AI community precisely because it feels familiar. You keep the editor habits you already know and gain an assistant that understands the whole project alongside you."
        ]
      }
    ],
    "keyPoints": [
      "An AI first code editor built on VS Code, so it feels familiar to many developers.",
      "Made by Anysphere.",
      "Offers chat, highlight and edit inline, and a project wide agent.",
      "Keeps you in flow by putting answers and edits where the code already is.",
      "Good entry point for learners who want AI that understands their full project."
    ]
  },
  "lovable": {
    "lead": "Lovable lets you describe the app you want in plain language and get back a working web app that is already online. There is no setup to wrestle with first.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "Normally, turning an idea into a live web app means installing tools, wiring up a server, writing the code, and figuring out how to publish it. Lovable, from the company of the same name, collapses that into a conversation. You type what you have in mind, for example a simple site where people can sign up for a class, and it generates the app for you.",
          "Just as important, it deploys the result. Deploy means making the app available on the internet at a real address, so you and others can open it in a browser straight away rather than only seeing it on your own machine."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "Lovable treats plain English as the way you build. You describe, it builds, you look at the live result, and then you ask for changes in the same conversational way. Make the button blue, add a contact form, show newest items first. Each request shapes the app a little more.",
          "This keeps the focus on what you want the app to do, not on the machinery underneath. The technical scaffolding is handled for you, which is what makes it approachable for people who have never written code."
        ]
      },
      {
        "heading": "Why it matters for the community",
        "paragraphs": [
          "Lovable is a strong example of how building with AI is opening the door to people who are not professional engineers. A small business owner, a teacher, or someone with a weekend idea can get something real and shareable without a long learning curve.",
          "For more experienced builders, it is a fast way to test an idea. You can see a working version quickly, share the link, gather reactions, and decide whether the idea is worth investing more time in."
        ]
      }
    ],
    "keyPoints": [
      "Describe an app in plain language and get a working version back.",
      "Made by Lovable.",
      "Deploys the result, so the app is live on a real web address right away.",
      "No setup or installation needed before you start.",
      "Opens app building to people without coding experience, and speeds up testing ideas for everyone."
    ]
  },
  "github-copilot": {
    "lead": "GitHub Copilot is an AI assistant that works inside your code editor. As you type, it suggests the next lines, and you can ask it questions without leaving your work.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "Copilot is made by GitHub, the company where a huge amount of the world's open source code is hosted and shared. It plugs into popular editors and watches what you are writing. When it sees where you are headed, it offers a suggestion in faint text that you can accept with a single key.",
          "Beyond suggestions, it includes a chat where you can ask things in your editor, like what a piece of code does, how to fix an error message, or how to write a small function. It was one of the first tools to make this kind of in editor AI feel normal."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "The signal idea is gentle, continuous help while you work. You stay the author and keep typing, and Copilot fills in the predictable parts so you spend less time on boilerplate, the repetitive code that every project needs but nobody enjoys writing.",
          "Because the suggestions appear inline and you choose whether to accept them, it feels less like handing the work over and more like having a thoughtful partner finishing your sentences when the next step is obvious."
        ]
      },
      {
        "heading": "Why it matters for builders",
        "paragraphs": [
          "For learners, Copilot is a quiet teacher. Seeing it complete code you were about to write, or asking it to explain a line you do not understand, builds intuition over time.",
          "It is also one of the most widely adopted AI coding tools, so when people in the building community talk about working alongside an AI in the editor, Copilot is often the shared reference. Knowing how it works gives you a useful baseline for understanding the rest of the field."
        ]
      }
    ],
    "keyPoints": [
      "Suggests code inline as you type, which you accept or ignore.",
      "Made by GitHub, home to much of the world's shared code.",
      "Includes a chat for asking questions right inside your editor.",
      "Best at handling repetitive, predictable code so you focus on the interesting parts.",
      "A widely used baseline tool and a quiet way for beginners to learn by example."
    ]
  },
  "v0": {
    "lead": "v0 turns a written prompt into a front-end user interface. You describe a screen, and it produces React components you can copy straight into your own project.",
    "sections": [
      {
        "heading": "What it actually is",
        "paragraphs": [
          "Front end means the visible part of a web app, the buttons, forms, layouts, and everything a person sees and clicks. v0, made by Vercel, is a tool for generating that visible layer from a description. You write something like a pricing page with three plans, and it produces a working design.",
          "What it gives back is React components. React is a popular way to build web interfaces by assembling reusable pieces. Because v0 outputs real components rather than just a picture, you can take them into your codebase and keep building on top of them."
        ]
      },
      {
        "heading": "The core idea, in plain terms",
        "paragraphs": [
          "The leap v0 makes is from words to usable building blocks. Designing and coding a clean interface from scratch takes time and a fair amount of fiddly work. v0 gives you a solid starting point in seconds, which you then refine by editing the prompt or adjusting the code.",
          "You stay in charge of the final result. The generated components are a draft you own, not a locked black box, so you can shape them to match the rest of your app."
        ]
      },
      {
        "heading": "Why it matters for building with AI",
        "paragraphs": [
          "For beginners, v0 removes one of the most intimidating early hurdles, getting something on screen that looks reasonable. You can describe a layout in everyday language and watch it appear, which builds confidence to keep going.",
          "For the wider community of builders, it pairs naturally with the other tools here. You might sketch a screen in v0, then bring the components into an editor like Cursor or a terminal agent to wire up the rest. It is a clear example of AI speeding up the design to code step."
        ]
      }
    ],
    "keyPoints": [
      "Turns a text prompt into a front-end user interface.",
      "Made by Vercel.",
      "Outputs real React components you can copy into your own project.",
      "Gives you an editable draft you own, not a fixed image.",
      "Removes the early hurdle of getting a good looking screen in place, and pairs well with other building tools."
    ]
  },
  "vibe-coding-essentials": {
    "lead": "This is a beginner specialization on Coursera, made by Scrimba, that teaches you to build real apps by working alongside AI coding tools. You bring the curiosity. You do not need any coding background to start.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Vibe Coding Essentials is a short, structured course series hosted on Coursera and produced by Scrimba, a platform known for interactive lessons where you write code right inside the lesson screen. The course is built around the idea of vibe coding, which means describing what you want in plain language and letting an AI assistant help you write, fix, and shape the actual code.",
          "You learn by using the same tools that professional builders reach for today: Cursor, an editor with AI woven into it; GitHub Copilot, which suggests code as you type; Claude Code, an assistant that can read and change a whole project; and MCP, a connector standard that lets these assistants reach out to other tools and data. When you finish, you receive a certificate you can share."
        ]
      },
      {
        "heading": "The core idea, simply",
        "paragraphs": [
          "The old way to learn programming was to memorize syntax first and build things much later. Vibe coding flips that. You start by saying what you want, in your own words, and the AI drafts a first version. Then you read it, run it, notice what is off, and ask for changes. Bit by bit you steer the project toward something that works.",
          "This matters because it lowers the wall between having an idea and seeing it run. The skill you are really building is not typing fast. It is learning to describe a goal clearly, judge what the AI gives back, and keep nudging until the result is right. That is a skill anyone can practice, and it gets sharper the more you build."
        ]
      },
      {
        "heading": "Why it connects to building with AI",
        "paragraphs": [
          "Knowing the tools is half the value. The other half is the working rhythm: prompt, review, run, refine. Once that rhythm feels natural, you can move from one tool to the next without starting over, because the underlying habit travels with you.",
          "For our community, this is a friendly on-ramp. If you have wanted to make a small app but felt locked out by jargon, a course like this gives you a guided first lap with real tools, so your next project is something you build yourself rather than something you only read about."
        ]
      }
    ],
    "keyPoints": [
      "Beginner-friendly: no prior coding experience needed to start.",
      "Hands-on with real tools: Cursor, GitHub Copilot, Claude Code, and MCP.",
      "Teaches the build rhythm of prompt, review, run, and refine.",
      "Hosted on Coursera, produced by Scrimba, and ends with a shareable certificate.",
      "Best treated as a guided first lap, then practiced on your own small project."
    ]
  },
  "easy-vibe-your-first-modern-coding-course": {
    "lead": "Easy-Vibe is a free, open-source course from Datawhale that walks you from a first idea all the way to a shipped AI app. It is open to everyone, and the whole curriculum is out in the open for anyone to read and improve.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Easy-Vibe is a beginner course built and maintained by Datawhale, a community known for free, open learning materials. Because it is open source, the lessons live in a public repository where the content is visible, free to use, and improved by contributors over time. There is no paywall and no gate at the door.",
          "The course is organized into three stages that build on each other. The first stage is about turning an idea into a working prototype. The second stage takes you into full-stack territory, where front end and back end come together into a complete app. The third stage covers more advanced ground for when you want to go deeper. You can move at your own pace and stop wherever your goal is met."
        ]
      },
      {
        "heading": "The core idea, simply",
        "paragraphs": [
          "Most courses teach pieces and leave the assembly to you. Easy-Vibe is shaped around a finish line: a real app you can show people. The three stages act like a staircase. Idea and prototype get you something running fast, so you stay motivated. Full-stack teaches the parts a real app needs, like a server and data. The advanced stage is there when you are ready to push further.",
          "This stage-by-stage shape matters because it keeps you from drowning. You are never asked to learn everything at once. Each stage hands you a working result before the next one raises the difficulty, which is exactly how confidence is built: small wins, stacked."
        ]
      },
      {
        "heading": "Why open source matters here",
        "paragraphs": [
          "Open source means the course is not a sealed product. Anyone can read it, learn from it, suggest fixes, or translate it. That tends to keep the material honest and current, because mistakes are visible and the community can correct them.",
          "For learners, free and open also means low risk. You can try a stage, see if the teaching style fits you, and continue only if it does, all without spending anything. For our community, it is a reminder that some of the best starting points for building with AI are shared freely and improved by the people using them."
        ]
      }
    ],
    "keyPoints": [
      "Completely free and open source, maintained by the Datawhale community.",
      "Built for beginners, with shipping a real AI app as the goal.",
      "Three stages: idea and prototype, then full-stack, then advanced.",
      "Staircase structure delivers a working result before raising difficulty.",
      "Open content means you can read, reuse, and contribute improvements."
    ]
  },
  "vibe-code-source": {
    "lead": "Vibe Code Source is a free, open-source library of copy-ready prompts paired with practical guides. Think of it as a shared toolbox you reach into when you are building with AI and want a proven starting point.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Vibe Code Source is an open-source collection you can browse and use without paying. At its heart is a set of prompts written to be copied straight into your AI assistant. Instead of staring at a blank box wondering how to phrase a request, you grab a prompt that already works and adapt it to your task.",
          "Alongside the prompts sit guides on the parts of building that beginners often stumble over: workflows, which are the steps you follow to get from idea to result; debugging, which is finding and fixing what broke; security, which is keeping your app and its data safe; and deployment, which is putting your app online so other people can use it."
        ]
      },
      {
        "heading": "The core idea, simply",
        "paragraphs": [
          "When you work with AI, the words you choose change the result. A vague request gives a vague answer. A clear, well-shaped prompt gives something you can actually use. Vibe Code Source captures good wording so you do not have to rediscover it every time. The prompts are like recipes: a reliable base you can season to taste.",
          "The guides matter just as much. It is one thing to make a feature appear. It is another to fix it when it misbehaves, keep it secure, and get it live without breaking. Those later steps are where many beginners get stuck, and having plain guidance for each one turns a wall into a set of doable steps."
        ]
      },
      {
        "heading": "Why it connects to our community",
        "paragraphs": [
          "A prompt library is the kind of resource that grows more useful the more people use and add to it. Because it is open source, builders can contribute prompts that worked for them, so the toolbox keeps improving for everyone who comes next.",
          "For anyone learning to build with AI, this is the resource you keep open in another tab while you work. The courses teach you the rhythm. This gives you working pieces to drop in along the way, and steady footing for the harder steps of debugging, securing, and shipping."
        ]
      }
    ],
    "keyPoints": [
      "Free and open source, with no paywall to access the library.",
      "Copy-ready prompts give you a tested starting point instead of a blank box.",
      "Guides cover workflows, debugging, security, and deployment.",
      "Designed as a reference to keep open while you build, not a sit-down course.",
      "Grows more useful as the community contributes prompts that worked for them."
    ]
  },
  "building-effective-agents": {
    "lead": "Anthropic published this guide in 2024 to answer a question many builders were quietly struggling with: when you put a language model in charge of doing real work, what is the simplest setup that actually holds up? Its core advice is calm and a little surprising. Most of the time, you do not need a fancy autonomous agent at all.",
    "sections": [
      {
        "heading": "Workflows versus agents",
        "paragraphs": [
          "The guide draws a clean line between two ways of building with a language model. A workflow is a system where you, the developer, lay out the steps in advance. The model fills in each step, but the path is fixed, like a recipe. An agent is different. You hand the model a goal and let it decide its own steps, call tools when it wants, and keep going until it judges the job is finished.",
          "Neither one is better in the abstract. Workflows are predictable and easy to debug because you know what happens and in what order. Agents are more flexible and can handle messy, open-ended tasks, but that freedom costs you control, money, and the occasional surprise. The honest framing here is that an agent is a tool with tradeoffs, not a trophy you win for being advanced."
        ]
      },
      {
        "heading": "A small kit of composable patterns",
        "paragraphs": [
          "Instead of one grand design, the guide offers a handful of building blocks you can combine. Prompt chaining breaks a job into a sequence of model calls, where each step works on the output of the last. Routing looks at an incoming request and sends it to the right handler, the way a receptionist points you to the correct desk. The orchestrator-worker pattern uses one model to plan and split a task, then hands the pieces to other model calls and stitches the results back together.",
          "These patterns are deliberately plain, and that is the point. You can start with the simplest one that solves your problem and only reach for more structure when you genuinely hit a wall. For anyone building with AI, this is a friendlier mental model than trying to design a clever brain from day one. You assemble small, understandable parts."
        ]
      },
      {
        "heading": "Why staying simple matters",
        "paragraphs": [
          "The thread running through the whole guide is restraint. Add complexity only when it earns its keep, because every extra layer is another thing that can break, cost more, or behave in ways you cannot explain to a teammate or a customer. A simple system you trust beats a sophisticated one you cannot reason about.",
          "This matters for a community learning to build with AI because it lowers the bar in the best way. You do not need to master autonomous agents to ship something useful. You need clear steps, good tools, and the discipline to keep things readable. That is a standard anyone can grow into."
        ]
      }
    ],
    "keyPoints": [
      "A workflow follows steps you define in advance; an agent decides its own steps to reach a goal you set.",
      "Three reusable patterns cover most needs: chaining steps in sequence, routing requests to the right handler, and an orchestrator splitting work among workers.",
      "Pick the simplest pattern that solves the problem, and add complexity only when it clearly pays for itself.",
      "Autonomy buys flexibility but costs control, money, and predictability, so it is a choice, not a default.",
      "Understandable systems you can debug and explain are worth more than impressive ones you cannot reason about."
    ]
  },
  "from-vibe-coding-to-agentic-engineering": {
    "lead": "In this conversation with Sequoia and Stephanie Zhan, Andrej Karpathy describes how building software with AI is growing up. The playful, improvisational style he once called vibe coding is giving way to something more deliberate, where a person directs capable agents and stays responsible for the result.",
    "sections": [
      {
        "heading": "What changes from vibe coding to agentic engineering",
        "paragraphs": [
          "Vibe coding is the loose, fast mode many people first meet: you describe what you want, the model writes code, and you keep nudging it until something works. It is wonderful for sketching ideas and learning, and it lowered the barrier to making things in a way that felt almost magical.",
          "Agentic engineering is the more grown-up cousin. The AI is no longer a clever autocomplete but an agent that can take on real chunks of work. The human shifts from typing every line to directing the effort: framing the task, setting boundaries, and deciding what good looks like. The skill being asked for is less about syntax and more about clear thinking and good judgment."
        ]
      },
      {
        "heading": "Humans in the loop, and the cost of being wrong",
        "paragraphs": [
          "A central theme is that the person does not step away. Karpathy is wary of handing over too much at once, because an agent that runs unsupervised can produce a large amount of plausible work that is subtly wrong, and now you have to untangle all of it. Keeping a human in the loop means working in smaller pieces you can actually follow.",
          "This is a matter of trust calibrated to the situation. Some tasks are safe to let an agent run with, while others touch things that are expensive or dangerous to get wrong, and those deserve a closer hand on the wheel. The judgment of where to draw that line is part of the new craft."
        ]
      },
      {
        "heading": "Verification as the real discipline",
        "paragraphs": [
          "The discipline Karpathy keeps returning to is verification. It is easy to generate code; the hard and valuable part is confirming it does what you intended. That means reading what the agent produced, testing it, and building tight feedback loops so mistakes surface quickly instead of piling up unnoticed.",
          "For anyone building with AI, this reframes the whole job in a hopeful way. The bottleneck is no longer how fast you can write code. It is how well you can describe what you want and how carefully you can check what comes back. Those are learnable habits, and they reward patience and clarity over raw speed."
        ]
      }
    ],
    "keyPoints": [
      "Vibe coding is the fast, improvisational way to build with AI; agentic engineering is the disciplined version where you direct capable agents.",
      "The human role shifts from writing every line to framing tasks, setting limits, and judging quality.",
      "Keeping a person in the loop and working in small pieces prevents large amounts of plausible but wrong output.",
      "How much autonomy to grant should match the risk of the task, not a fixed rule.",
      "Verification, reading and testing what the agent produces, is becoming the core skill rather than typing speed."
    ]
  },
  "vibe-coding-the-academic-version": {
    "lead": "In 2025, researchers Advait Sarkar and Ian Drosos published the first empirical study of vibe coding, the new habit of building software mostly by talking to an AI rather than writing code by hand. Instead of guessing how people do it, they watched them do it and listened to them think out loud.",
    "sections": [
      {
        "heading": "What the paper studied and how",
        "paragraphs": [
          "Vibe coding is the practice of steering a code-generating AI through conversation, prompting it, glancing at what it returns, and prompting again, often without reading every line closely. Because the practice was so new, almost everything written about it was opinion or anecdote. This 2025 study set out to gather real evidence.",
          "The method was careful and human. The researchers gathered curated recordings of people in extended vibe coding sessions who narrated their thinking as they worked, a technique long used in studying how people program. They then analyzed these think-aloud sessions systematically, looking for recurring goals, workflows, prompting habits, debugging moves, and the points where things went wrong."
        ]
      },
      {
        "heading": "The core finding: a loop, not a straight line",
        "paragraphs": [
          "What they saw was not a tidy march from idea to finished program. It was a repeating cycle. A person sets a small goal, prompts the AI, then quickly judges the result by scanning the code or simply running the application to see if it behaves. Based on what they observe, they prompt again, edit by hand, or back up and try a different angle.",
          "Each turn of the loop nudges the work a little closer to what the person wanted. The researchers also recorded the friction in this cycle, the moments where the AI misunderstood, where bugs hid behind plausible-looking code, or where the developer struggled to express exactly what they meant. Naming these pain points is part of what makes the study useful."
        ]
      },
      {
        "heading": "Why this matters for building with AI",
        "paragraphs": [
          "This paper matters because it turns a buzzword into something you can examine and teach. When you can describe the actual loop people follow, you can spot where the loop breaks and design better tools, prompts, and habits around it. That is far more useful than slogans about the future of coding.",
          "For a community learning to build with AI, the gentle lesson is reassuring. Vibe coding is not a single magic trick; it is an iterative conversation full of small checks and corrections. Getting good at it means getting good at setting clear goals and verifying results, the same disciplined habits that show up everywhere else in working with these tools."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2025 by Advait Sarkar and Ian Drosos, this is the first empirical study of vibe coding.",
      "Evidence came from watching curated think-aloud sessions of people coding by conversation, not from opinion or theory.",
      "The central finding is an iterative loop: set a goal, prompt the AI, evaluate by scanning or running it, then prompt or edit again.",
      "The study names common friction points, including misunderstandings and bugs hidden inside plausible-looking code.",
      "Seeing the real loop makes vibe coding teachable and points toward better tools, prompts, and the habit of verifying results."
    ]
  },
  "cs-153-frontier-systems": {
    "lead": "A Stanford course that walks you up the whole ladder of modern AI, from the raw silicon in a chip to the policy debates happening in public, with people who actually built these systems stopping by to talk.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "CS 153 is a university course about the full stack that makes today's frontier AI possible. Instead of teaching one narrow piece, it tries to connect the layers. At the bottom sit the physical chips and the hardware that runs the math. Above that come the systems that schedule and move enormous amounts of data. Then the models themselves, then the products built on top, and finally the questions of safety, governance, and policy that surround all of it.",
          "What makes the course stand out is the guest lineup. People who have personally built parts of the frontier come in to explain how things really work, not just how they look from the outside. That gives students a view that is closer to the workshop floor than to a glossy summary."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Big AI systems do not come from one breakthrough. They come from many layers working together, and a change at one layer ripples through the others. A faster chip changes what models you can train. A bigger model changes what products feel possible. A new product changes what policymakers worry about.",
          "Seeing all of this at once is the point. If you only study the model and ignore the silicon and the policy, you miss why things are shaped the way they are. The course teaches you to read the whole system."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "If you want to build with AI rather than just use it, you benefit from knowing where your tools come from and what constrains them. Understanding the stack helps you make better choices about cost, speed, and risk, and it helps you talk to engineers, founders, and regulators in their own terms.",
          "For a community of builders, a shared map like this is useful. It gives everyone a common vocabulary for discussing what is hard, what is changing, and where the real leverage sits."
        ]
      }
    ],
    "keyPoints": [
      "Covers the entire AI stack: hardware, systems, models, products, and policy.",
      "Features guest speakers who built real frontier systems, not just outside commentary.",
      "Teaches you to see how a change in one layer ripples through the others.",
      "Useful for builders who want to understand the constraints behind their tools.",
      "Gives a shared map and vocabulary for discussing where the leverage in AI sits."
    ]
  },
  "alexnet-imagenet-classification-with-deep-cnns": {
    "lead": "In 2012, three researchers trained a deep neural network on graphics cards to recognize objects in photos, and it won a major contest by such a margin that it changed how the whole field thought about machine learning.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "AlexNet, named after Alex Krizhevsky and built with Ilya Sutskever and Geoffrey Hinton, is a convolutional neural network. That is a kind of model that learns to spot patterns in images by scanning small patches and combining them into larger and larger features, from edges to shapes to whole objects.",
          "The contest was ImageNet, a challenge to correctly label photos across a thousand categories. AlexNet made far fewer mistakes than the methods that came before it. The gap was wide enough that people paid attention immediately."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Two things came together. First, the network was deep, with many layers stacked so it could learn rich features on its own instead of relying on hand-designed rules. Second, the team trained it on GPUs, the chips originally made for video games, which could do the heavy math fast enough to make a big network practical.",
          "There was also plenty of labeled data to learn from. Deep model, fast hardware, and lots of examples turned out to be a powerful recipe, and that combination is still the backbone of modern AI."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "AlexNet is widely seen as the spark of the deep learning era. After it, researchers and companies poured effort into neural networks, and progress in vision, speech, and eventually language followed.",
          "For anyone building with AI today, this paper is the origin story of the tools you use. The lesson it teaches, that scale of data and compute can unlock learning that hand-tuned methods cannot, has guided almost everything since."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2012 by Krizhevsky, Sutskever, and Hinton.",
      "A deep convolutional network that learns image features layer by layer.",
      "Trained on GPUs, which made a large network practical to run.",
      "Won the ImageNet contest by a wide margin over older methods.",
      "Widely credited with starting the modern deep learning era."
    ]
  },
  "word2vec-efficient-estimation-of-word-representations": {
    "lead": "In 2013, a Google team found a fast way to turn words into lists of numbers that capture meaning, so that simple arithmetic on those numbers could answer analogies like king minus man plus woman lands near queen.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Word2Vec, led by Tomas Mikolov and colleagues at Google, is a method for learning vectors for words. A vector here is just a long list of numbers. Each word gets its own vector, and the trick is that the numbers are arranged so that words used in similar ways end up close together.",
          "The model learns these vectors by reading huge amounts of text and trying to predict which words appear near each other. No human labels the meanings. The patterns of usage do the teaching."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "A word is known by the company it keeps. Words that show up in similar contexts, like coffee and tea, get similar vectors. What surprised people was that relationships between words showed up as consistent directions in this number space.",
          "The famous example is that taking the vector for king, subtracting man, and adding woman lands you near queen. The model was never told this. It fell out naturally from learning how words are used, which hinted that meaning has a kind of geometry."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Word2Vec showed that meaning could be captured in a compact, computable form, and it did so efficiently enough to run on ordinary hardware. That made it practical and popular.",
          "The idea of turning things into vectors that capture meaning, now often called embeddings, runs through modern AI. Search, recommendations, and the way large language models handle text all build on this foundation. If you work with AI, you meet embeddings constantly, and this paper is where the idea became widely usable."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2013 by Mikolov and colleagues at Google.",
      "Turns each word into a vector of numbers that reflects its meaning.",
      "Learns from word context in raw text, with no human labels.",
      "Relationships appear as directions, so king minus man plus woman lands near queen.",
      "Launched the embeddings idea that underpins search, recommendations, and LLMs."
    ]
  },
  "playing-atari-with-deep-reinforcement-learning": {
    "lead": "In 2013, DeepMind built a single program that learned to play many different Atari video games well, looking only at the raw screen pixels and the score, with no game-specific instructions.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "This work combined two ideas. One is a deep neural network that can read the pixels on a screen. The other is reinforcement learning, a way of learning by trial and error where the program tries actions and gets rewarded or penalized by the outcome.",
          "Put together, the system watched the game screen, chose moves like a joystick, and learned over many attempts which moves led to higher scores. The same approach was applied to a range of Atari titles."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Reinforcement learning is learning from consequences. There is no teacher showing the right move. The program acts, sees the result, and gradually shifts toward choices that earn more reward over time, much like learning a game by playing it.",
          "What made this notable is that the program received only what a human player sees, the pixels and the score, and figured out useful strategies on its own. One general method, not one hand-built bot per game, handled many games."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Showing that a single learning method could master many games from raw input suggested a path toward more general agents that learn skills rather than having them programmed in.",
          "Reinforcement learning is now part of how modern AI is shaped, including the way large language models are tuned to be more helpful. For builders, this paper is an accessible early look at agents that learn by doing, an idea that keeps growing in importance."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2013 by DeepMind.",
      "Combines a deep network for reading pixels with reinforcement learning.",
      "Learns from only the screen and the score, with no game-specific rules.",
      "One general method learned to play many different Atari games.",
      "An early milestone for agents that learn skills by trial and error."
    ]
  },
  "attention-is-all-you-need": {
    "lead": "In 2017, a Google team introduced the Transformer, a model that drops the older habit of reading text word by word in order and instead lets every word look directly at every other word at once. It became the foundation of modern large language models.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "The paper, by Vaswani and colleagues, presents an architecture called the Transformer. Before it, the leading models for language read sequences step by step, carrying information forward like a chain. That was slow and made it hard to connect words far apart in a sentence.",
          "The Transformer replaces that chain with a mechanism called attention. Attention lets the model weigh how much each word should focus on every other word, all in parallel, which is both faster to train and better at capturing long-range connections."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Attention is a way of deciding what to pay attention to. For each word, the model asks which other words matter most for understanding it, and blends in their information accordingly. The pronoun it, for example, can reach back and link to the noun it refers to.",
          "Because this happens for all words at the same time rather than one after another, the model uses modern hardware efficiently and scales up gracefully. The title makes the bold claim that this attention mechanism, without the older sequential machinery, is enough."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Almost every large language model in use today is a Transformer or a close relative. The architecture proved it could be made bigger and trained on more data with steady gains, which set off the wave of models that followed.",
          "If you build with AI, the Transformer is the engine under the hood. Understanding attention, even at a high level, helps you reason about why these models are good at context and where their limits come from."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2017 by Vaswani and colleagues at Google.",
      "Introduced the Transformer, built on attention instead of step-by-step recurrence.",
      "Attention lets every word weigh every other word in parallel.",
      "Faster to train and better at linking words far apart in text.",
      "The foundation architecture for modern large language models."
    ]
  },
  "bert-pre-training-of-deep-bidirectional-transformers": {
    "lead": "In 2018, Google released BERT, a language model that reads a sentence from both directions at once and learns from huge amounts of plain text first, so it can then be adapted to many specific tasks with little extra training.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "BERT is a Transformer-based model for understanding language. Its name stands for Bidirectional Encoder Representations from Transformers. The key word is bidirectional. When BERT looks at a word, it considers the words on both sides, the left context and the right context together, to understand the full meaning.",
          "It learns in two phases. First it is pretrained on enormous amounts of ordinary text. Then it is fine-tuned, given a smaller dose of task-specific examples, to do a particular job like answering questions or sorting reviews."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "During pretraining, BERT plays a fill-in-the-blank game. Some words in a sentence are hidden, and the model learns to guess them from everything around them. To do that well it has to build a genuine sense of how language works.",
          "This split between general pretraining and targeted fine-tuning is called transfer learning. You do the expensive, broad learning once, then reuse that knowledge cheaply for many specific tasks. BERT made this the standard way to work in language."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "BERT pushed accuracy forward across a wide set of language benchmarks and showed that a single pretrained model could be adapted to many problems. That changed the default workflow in the field.",
          "The pattern of pretrain once, adapt often is now everywhere in AI, including the foundation models you fine-tune or prompt today. For builders, BERT is a clear demonstration of why starting from a model that already understands a lot saves enormous effort."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2018 by Google.",
      "Reads context from both directions at once, hence bidirectional.",
      "Pretrains on huge text by filling in hidden words, then fine-tunes per task.",
      "Made transfer learning, pretrain once and adapt often, the NLP default.",
      "Raised accuracy across many language tasks with a single base model."
    ]
  },
  "scaling-laws-for-neural-language-models": {
    "lead": "In 2020, OpenAI researchers found that the quality of a language model improves in smooth, predictable curves as you give it more compute, more data, and more parameters, so you can forecast how good a model will be before you build it.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "This paper studies how three ingredients shape a model's performance: the amount of computing power used to train it, the amount of text it trains on, and the number of parameters, which are the adjustable internal settings the model learns.",
          "The surprising finding is regularity. As you increase these ingredients, the model's error drops along clean mathematical curves rather than jumping around. The relationships held across a wide range of sizes."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Bigger and more, within reason, means better, and the improvement is predictable. If you know the curve, you can estimate how much better a model will get if you double the compute or the data, before spending the money to train it.",
          "That predictability turns model building into something closer to engineering than guesswork. It lets teams plan where to invest and reason about the returns from each extra unit of scale."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Scaling laws gave the field confidence to invest in much larger models, because the gains were forecastable rather than a gamble. A lot of the recent leap in AI capability traces back to taking these curves seriously.",
          "For builders, the lesson is practical. Capability often comes from scale, and you can reason quantitatively about the tradeoffs between size, data, and compute instead of relying on intuition alone."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2020 by OpenAI.",
      "Model error falls in smooth, predictable curves as scale grows.",
      "The three levers studied are compute, data, and parameter count.",
      "Lets teams forecast a model's quality before training it.",
      "Gave the field confidence to invest in much larger models."
    ]
  },
  "language-models-are-few-shot-learners-gpt-3": {
    "lead": "In 2020, OpenAI showed that a very large language model with 175 billion parameters could perform new tasks just from a few examples written into the prompt, without any retraining.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "GPT-3 is a large language model trained on a vast amount of text to predict the next word. What made it notable was not only its size but a new way of using it. Instead of fine-tuning it for each task, you simply describe the task and show a few examples in the prompt, and the model follows along.",
          "This is called few-shot learning. The model learns what you want from the handful of examples sitting right there in the input, then applies the pattern to your real question."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "A model trained broadly enough can pick up the shape of a new task on the fly. Show it a couple of translations or a couple of question-and-answer pairs, and it infers the rule and continues it, all without changing its internal weights.",
          "This flips the older workflow. Before, adapting a model meant gathering labeled data and retraining. With few-shot prompting, you adapt the model by writing good instructions and examples, which is far faster and more flexible."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "GPT-3 made prompting the main way people interact with large models. The idea that you can steer a single general model with words alone is the basis of how most people use AI today.",
          "For builders, this is the moment the prompt became the interface. Knowing how to give clear instructions and good examples is now a core skill, and this paper is where that approach was shown to work at scale."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2020 by OpenAI.",
      "A 175-billion-parameter model trained to predict the next word.",
      "Performs new tasks from a few examples placed in the prompt.",
      "No retraining needed, the model adapts from the prompt itself.",
      "Established prompting as the main way to use large models."
    ]
  },
  "denoising-diffusion-probabilistic-models": {
    "lead": "In 2020, three researchers showed a clean way to generate images by teaching a model to reverse noise: start from pure static and remove a little noise at a time until a real-looking picture appears.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "This paper, by Jonathan Ho, Ajay Jain, and Pieter Abbeel, develops diffusion models for generating images. The training has two directions. Going forward, you take a real image and gradually add random noise until it becomes meaningless static. Going backward, the model learns to undo that, removing noise step by step.",
          "Once trained, the model can start from fresh random noise and walk the reverse path, cleaning it up bit by bit until a brand new, coherent image emerges."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "It is easier to learn to remove a small amount of noise than to paint a whole image in one go. Diffusion breaks the hard problem of creating an image into many small, gentle steps, each just a little cleanup.",
          "Because the model only ever learns to denoise slightly, the task at each step is manageable, and the steps add up to something remarkable. Many tiny corrections turn random static into a detailed picture."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Diffusion became the engine behind much of today's AI image generation. The step-by-step denoising approach produces high quality and varied results, and it has spread to audio, video, and beyond.",
          "If you have used a tool that turns a text description into a picture, there is a good chance diffusion is doing the work underneath. For builders, this paper is the accessible foundation of modern generative imaging."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2020 by Ho, Jain, and Abbeel.",
      "Trains by adding noise to images, then learns to reverse it.",
      "Generates new images by denoising random static step by step.",
      "Breaks a hard creation task into many small, manageable steps.",
      "Became a core method behind modern AI image generation."
    ]
  },
  "training-language-models-to-follow-instructions-instructgpt": {
    "lead": "In 2022, OpenAI showed how to make a language model genuinely follow instructions by tuning it on human preferences, a method called RLHF that became the basis for ChatGPT.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "A raw language model is good at predicting text, but that is not the same as being helpful. It might ignore your instruction or answer in an unhelpful way. InstructGPT addresses this by adding a layer of human feedback to the training.",
          "People review the model's answers and indicate which ones are better. The model is then adjusted to produce more of the kind of answers humans prefer. This technique is known as reinforcement learning from human feedback, or RLHF."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Rather than only learning from raw text, the model learns from human judgments about quality. Reviewers rank responses, those rankings train a model of what people like, and that preference model then guides the language model toward more helpful, honest, and on-target replies.",
          "The result is a model that actually does what you ask. A smaller model tuned this way can feel more useful than a larger one that was only trained to predict text, because following the instruction is what people care about."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "This alignment recipe is what turned powerful but unwieldy language models into assistants people can talk to. ChatGPT and the wave of chat assistants that followed are built on this idea.",
          "For builders, the takeaway is that capability and helpfulness are different things, and human feedback is a practical way to bridge them. Much of what makes modern AI feel cooperative comes from this step."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2022 by OpenAI.",
      "Uses human feedback to teach a model to follow instructions.",
      "The method is reinforcement learning from human feedback (RLHF).",
      "Makes models more helpful, honest, and on-target than raw prediction alone.",
      "The basis for ChatGPT and modern chat assistants."
    ]
  },
  "training-compute-optimal-llms-chinchilla": {
    "lead": "In 2022, DeepMind found that many large models had been built too big for the amount of data they were trained on, and that a smaller model fed more data can do better for the same training budget.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "This work, which produced a model nicknamed Chinchilla, revisits how to spend a fixed training budget. The two main things you can scale are model size, the number of parameters, and data, the amount of text the model reads. The question is how to balance them.",
          "DeepMind's answer challenged the prevailing habit. Many earlier models had grown very large but had not been trained on proportionally enough data. Chinchilla showed that rebalancing toward more data, with a smaller model, used the same compute more wisely."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "For a given amount of compute, there is a sweet spot between size and data. Going too big without enough text wastes the budget, because the model has more capacity than it has examples to learn from.",
          "Chinchilla, a smaller model trained on much more data, outperformed larger models trained on less, while using a comparable budget. The lesson is that data and size should grow together in a balanced way, not size alone."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "This reshaped how teams plan training runs. Smaller, well-fed models are cheaper to run afterward and can match or beat bloated ones, which matters for both cost and accessibility.",
          "For builders, it is a reminder that more parameters is not automatically better. Thinking about the balance between model size and training data leads to models that are both stronger and more efficient to use."
        ]
      }
    ],
    "keyPoints": [
      "Published in 2022 by DeepMind.",
      "Asks how to split a fixed budget between model size and training data.",
      "Found many big models were undertrained on too little data.",
      "A smaller model with more data beat larger models at similar compute.",
      "Size and data should scale together, which also makes models cheaper to run."
    ]
  },
  "high-resolution-image-synthesis-with-latent-diffusion-models": {
    "lead": "This 2022 paper is the one that put text-to-image generation in everyone's hands. It is the research behind Stable Diffusion, and its big idea was to make image generation cheap enough to run on a single ordinary graphics card.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "A diffusion model learns to make pictures by starting from pure noise, like static on an old television, and slowly cleaning it up step by step until a real image appears. The trick is that during training the model is shown real images with noise added, and it practices guessing what the noise was. Do that millions of times and the model becomes very good at turning randomness into something that looks like a photo or a painting.",
          "The problem before this paper was cost. Doing all that step-by-step cleanup directly on full-size images, where every pixel matters, takes enormous computing power. Only big labs could afford it."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The authors' move was to stop working with the full pixel image and instead work in a compressed space they call the latent space. First a separate small network squeezes an image down into a much smaller code that keeps the meaningful structure and throws away fine detail that can be filled back in later. The diffusion happens inside that compressed code, which is far smaller, so each step is much faster and lighter.",
          "Once the model has produced a finished code, a decoder expands it back up into a full, sharp image. They also added a clean way to steer the result with a text prompt, so you can ask for what you want in words. Same quality, a fraction of the compute."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Because the math now fit on a consumer machine, the model could be released openly. That is what turned image generation from a lab demo into a tool that students, artists, and small teams could actually use and build on. A whole ecosystem of tools and fine-tuned variants grew out of it.",
          "For anyone learning to build with AI, this is a clean example of a recurring lesson. A smart change in where you do the work, rather than a bigger model, can unlock something for an entire community."
        ]
      }
    ],
    "keyPoints": [
      "Diffusion models generate images by gradually removing noise, learned by practicing on noisy versions of real pictures.",
      "The key innovation is doing this in a small compressed latent space instead of on full-resolution pixels, which slashes the compute needed.",
      "An encoder compresses, the diffusion runs on the code, and a decoder expands it back to a full image.",
      "Text prompts are wired in so you can describe what you want in plain words.",
      "Low enough cost to run on a single consumer GPU, which is why it could be released openly as Stable Diffusion and spark a large community."
    ]
  },
  "stable-video-diffusion": {
    "lead": "Released in 2023, this work takes the same recipe that made Stable Diffusion good at single images and stretches it across time, so the model produces short video clips instead of standalone frames.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Stable Video Diffusion is a generative model that creates a short sequence of moving frames. You can give it a starting image and it imagines how that scene might continue, producing a brief clip where things move in a believable way.",
          "It is built directly on top of the latent diffusion approach from the image work. So the heavy lifting still happens in a compressed space, and the model still works by cleaning up noise. The new challenge is making the frames agree with each other over time."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "A video is not just a stack of unrelated pictures. The frames have to be consistent. If a person turns their head, the motion should flow smoothly and the face should stay the same face. A model that generates each frame independently would produce a flickering mess.",
          "The authors added a sense of time to the network so it considers neighboring frames together, not one at a time. Just as important, they were careful about training. They describe a staged process: first learn images, then learn motion on a large video collection, then refine on a smaller, cleaner set of high-quality clips. Good data curation, in their telling, did a lot of the work."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Video is much harder and more expensive than images because you are now generating many frames that all have to hold together. Showing that the open latent-diffusion recipe could be pushed into video, and sharing how, gave the wider community a real foundation to experiment with rather than only watching closed demos.",
          "If you are learning to build with AI, the lesson here is about scaling an idea to a harder problem. You rarely start from scratch. You take something that works, add the one new ingredient the harder task needs, here it is consistency over time, and you pay close attention to the data you train on."
        ]
      }
    ],
    "keyPoints": [
      "Stable Video Diffusion generates short video clips, often starting from a single input image.",
      "It extends the latent diffusion image method by adding a sense of time so frames stay consistent with each other.",
      "Training happened in stages: images first, then motion on a large video set, then refinement on a smaller high-quality set.",
      "Careful data curation was central to the result, not just a bigger model.",
      "It showed the open image-generation recipe could reach into video, giving the community a base to build on."
    ]
  },
  "luma-ai": {
    "lead": "Luma AI is a company working on multimodal AI for video and 3D, led by Amit Jain. Its best-known product, Dream Machine, turns a prompt or an image into video, and the longer ambition is software that understands and simulates the physical world.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Luma AI builds models that generate and understand visual content beyond flat pictures. Multimodal means the system can work across different kinds of input and output, such as text, images, video, and three-dimensional scenes, rather than being locked to a single type.",
          "Their video generator, Dream Machine, is the public face of this. You describe a scene or give it a still image, and it produces a moving clip. The aim is video that feels physically plausible, where objects move and interact the way you expect them to in real life."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The deeper goal Luma talks about is world simulation. Instead of treating a video as a pretty sequence of pixels, the ambition is a model that carries an internal sense of how the world behaves: that things fall, that a moving object keeps moving, that a camera can travel around a solid scene.",
          "This connects to their interest in 3D. A model that truly grasps space and motion is closer to a simulator of reality than a slideshow generator. That is a harder target than making one good-looking frame, and it is why they frame the work as world modeling rather than just video clips."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "A model that understands the physical world, not just how a single picture looks, points toward tools for filmmakers, designers, game makers, and anyone who needs to picture something that does not exist yet. The same understanding could help robots and other systems that have to reason about real space.",
          "For builders, Luma is a useful example of choosing a hard, ambitious target and working backward from it. Dream Machine is a product people can use today, while the company keeps aiming at the larger goal of simulating the world. That pairing, ship something real and chase something big, is worth studying."
        ]
      }
    ],
    "keyPoints": [
      "Luma AI builds multimodal models spanning video and 3D, led by Amit Jain.",
      "Dream Machine is its video generator, turning a prompt or image into a moving clip.",
      "The longer ambition is world simulation: a model with an internal sense of how the physical world behaves.",
      "An understanding of space and motion connects naturally to 3D, not just flat video.",
      "It shows a healthy pattern of shipping a usable product while pursuing a much larger research goal."
    ]
  },
  "elevenlabs": {
    "lead": "ElevenLabs is an AI audio company, co-founded by Mati Staniszewski, built around one focused mission: making synthetic speech sound genuinely human. Its tools cover natural text-to-speech, voice cloning, and real-time translation.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "At its heart, ElevenLabs does text-to-speech: you give it written words and it reads them aloud in a voice. What set the company apart was how natural that voice could sound, with the rhythm, emphasis, and emotion that make a real person pleasant to listen to, rather than the flat robotic tone many older systems produced.",
          "Around that core sit two notable abilities. Voice cloning can learn a particular voice from a sample and speak new words in it. Real-time translation can take speech in one language and render it in another while trying to keep the original speaker's voice and feel."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The thing that makes speech sound alive is not just pronouncing words correctly. It is delivery: where you pause, which words you stress, how your tone rises and falls. ElevenLabs put a lot of effort into getting that delivery right, which is what makes their output feel less like a machine reading and more like a person speaking.",
          "Just as important is focus. There are many directions an AI company can chase. ElevenLabs deliberately concentrated on voice and audio rather than trying to do everything, and that narrowness let them go deep on quality where it counts."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "Good synthetic voice opens up real things: audiobooks for authors without a studio, accessibility for people who cannot easily read a screen, dubbing that crosses language barriers, and characters in games and apps. The technology also carries clear responsibility questions around consent and misuse, which is why how a company handles voice cloning matters as much as how well it works.",
          "For builders, ElevenLabs is a clean case study in doing one thing extremely well. Picking a single hard problem and pushing its quality far past the competition is often a stronger strategy than spreading thin across many."
        ]
      }
    ],
    "keyPoints": [
      "ElevenLabs is an AI audio company co-founded by Mati Staniszewski, focused on voice.",
      "Its core product is natural-sounding text-to-speech with realistic rhythm and emotion.",
      "Voice cloning reproduces a specific voice; real-time translation carries speech across languages while preserving voice and feel.",
      "Lifelike delivery, not just correct pronunciation, is what makes the output feel human.",
      "Deliberate focus on voice rather than doing everything is a deliberate part of the strategy, with real responsibility around consent and misuse."
    ]
  },
  "why-voice-will-be-the-core-interface": {
    "lead": "This is a 2025 podcast episode from Sequoia's Training Data series, featuring ElevenLabs CEO Mati Staniszewski. The conversation makes the case that voice is becoming a primary way we interact with computers, and that staying focused is how a company wins.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Training Data is an interview series where the venture firm Sequoia talks with people building AI. In this episode the guest is Mati Staniszewski, who co-founded and leads ElevenLabs, the voice and audio company.",
          "The discussion is less about any single product and more about a direction: where voice technology is heading, why it is becoming central, and what it takes to build a durable company in a fast-moving field. Treat it as a window into how an operator thinks, not a technical tutorial."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The headline argument is that voice will be a core interface, not a side feature. For most of computing we have typed and tapped. As speech generation and understanding get good enough, talking to a device becomes natural and fast, and in many situations, hands-free or while moving, it is simply the better way to interact.",
          "The second thread is focus. A common temptation, especially when a company is doing well, is to expand into many areas at once. The conversation argues for the opposite: pick the thing you are best at, here it is voice, and keep going deeper rather than wider. That discipline is presented as a feature of the strategy, not a limitation."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "If voice really does become a main way people use software, then how you design products changes. You start thinking about conversations and sound, not only screens and buttons, and that reshapes what is worth building.",
          "For anyone learning to build with AI, this kind of conversation is valuable in a different way than a paper. It teaches judgment: how a founder reads where the technology is going, how they decide what to chase, and why saying no to good options can be as important as saying yes. That is exactly the kind of thinking a guest lecture is meant to share with a community."
        ]
      }
    ],
    "keyPoints": [
      "A 2025 Sequoia Training Data podcast episode with ElevenLabs CEO Mati Staniszewski.",
      "Central claim: voice is becoming a core interface for computers, not just an add-on.",
      "As speech tech improves, talking can be faster and more natural than typing in many settings.",
      "A second theme is the value of focus: go deeper on what you do best rather than expanding everywhere.",
      "It offers founder-level judgment about reading where technology is heading, useful for builders, not just technical detail."
    ]
  },
  "core-views-on-ai-safety": {
    "lead": "This is the 2023 piece where Anthropic lays out, in plain terms, why the company was founded and what keeps its researchers up at night. It is the closest thing to a mission statement for how to build powerful AI without getting burned by it.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Anthropic is an AI research company, and this document is its public explanation of the worldview behind the work. It was written to answer a fair question: if AI could be risky, why build it at all? The honest answer is that powerful AI is coming either way, so it is better to have safety-focused teams in the room helping shape how it arrives. The piece reads less like a manifesto and more like a set of careful, hedged beliefs.",
          "The central worry it names is alignment. As AI systems get more capable, it becomes harder to be sure they are actually doing what we want, rather than something that merely looks right on the surface. A system can be fluent, helpful, and confident while quietly pursuing the wrong goal or hiding a mistake. Anthropic argues that we should treat that gap between appearance and intention as a serious technical problem, not a distant science-fiction one."
        ]
      },
      {
        "heading": "The core idea: bet across many futures",
        "paragraphs": [
          "The most useful idea in the document is humility about the unknown. Nobody can say for certain how hard AI safety will turn out to be. So instead of assuming one fixed future, Anthropic plans for a spread of them. In an optimistic world, safety is fairly easy and modest care is enough. In a middle world, it takes real, sustained effort but is achievable. In a pessimistic world, aligning very capable systems may be extremely hard, and the right move might be to slow down or change course entirely.",
          "Because they cannot know in advance which world they are in, they spread their research bets so that progress in any direction is useful no matter how things unfold. That is why their work mixes empirical testing of current models, interpretability (trying to read what is happening inside a model), and studying how systems behave as they scale up. The aim is to learn which world we are in as early as possible, while the stakes are still small."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "For anyone curious about AI, this document is a clear window into how a serious lab actually reasons. It does not promise that everything will be fine, and it does not claim the sky is falling. It treats safety as ongoing work under deep uncertainty, which is a healthier mindset than blind optimism or pure fear.",
          "It also connects directly to building with AI in everyday life. If you are using these tools to make something, the same instincts apply: check that the system is doing what you meant, not just what sounds plausible, and stay aware that capable does not equal trustworthy. For our community, it is a grounding read before going deeper into how models are trained, tested, and kept honest."
        ]
      }
    ],
    "keyPoints": [
      "Written by Anthropic in 2023 to explain why the company exists and how it thinks about AI risk.",
      "Alignment is the core worry: making sure capable systems truly do what we intend, not just what looks correct.",
      "It plans across optimistic, middling, and pessimistic futures, since no one yet knows how hard safety will be.",
      "Research bets are spread so progress helps in any of those futures, with a focus on learning the truth early.",
      "A practical reminder for builders: a model being fluent and confident is not the same as it being trustworthy."
    ]
  },
  "the-bitter-lesson": {
    "lead": "In this short 2019 essay, the reinforcement learning researcher Rich Sutton points to a pattern that keeps repeating across decades of AI. General methods that ride on raw computing power tend to win, and clever human-crafted shortcuts tend to lose.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "The essay is a reflection on the history of artificial intelligence by someone who lived through much of it. Sutton looks back at fields like chess, the board game Go, speech recognition, and computer vision, and notices the same story playing out again and again. Researchers spend years carefully encoding human knowledge into a system, only to be overtaken by simpler approaches that just learn from data and search through possibilities, given enough computing power.",
          "He calls it bitter because it stings. The handcrafted, knowledge-rich approaches are the ones humans feel proud of. They reflect real insight and hard work. Yet over the long run they keep getting beaten by methods that lean less on human cleverness and more on letting computation do the heavy lifting."
        ]
      },
      {
        "heading": "The core idea in plain terms",
        "paragraphs": [
          "The lesson rests on one steady fact: computers keep getting faster and cheaper, year after year. So a method that improves automatically as you give it more compute will eventually outrun a method that depends on a fixed amount of human-designed cleverness. The first kind keeps climbing as hardware grows. The second kind stalls at whatever the designers managed to put in.",
          "Sutton points to two general methods that scale especially well: search, which means letting the machine explore many options, and learning, which means letting the machine improve from experience and data. Both get better simply by being given more computation. By contrast, hard-coding human assumptions about how the world works often feels satisfying in the short term but becomes a ceiling later, because the system can only be as good as the rules people wrote for it."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "This essay quietly explains a lot about modern AI. Large language models and other recent systems are, in a sense, the bitter lesson in action: relatively general architectures, trained on enormous amounts of data with enormous amounts of compute, rather than tightly specified rules about grammar or meaning. Understanding this helps you read the field with clearer eyes.",
          "For people building with AI today, it carries a humble warning. Be careful before you bake too many of your own assumptions into a system. Sometimes the durable move is to set up a general method, feed it good data and enough compute, and let it find patterns you would not have thought to write down. For our community, it is a foundational mental model: respect human insight, but do not bet against scale."
        ]
      }
    ],
    "keyPoints": [
      "A 2019 essay by reinforcement learning researcher Rich Sutton, reflecting on 70 years of AI history.",
      "The recurring pattern: general methods powered by computation beat handcrafted, knowledge-heavy systems over time.",
      "It works because compute keeps getting cheaper, so methods that scale with compute keep improving while fixed human rules stall.",
      "Search and learning are the two general methods that scale best, since both improve with more computation.",
      "It helps explain why modern AI relies on large-scale data and compute rather than hand-written rules, and it cautions builders against over-encoding their own assumptions."
    ]
  },
  "oslo-ai": {
    "lead": "Oslo AI is a long-running meetup where people in and around the city gather to talk about artificial intelligence in plain, practical terms. It is run by volunteers, it costs nothing to join, and it is one of the bigger AI communities in Norway.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "Oslo AI is a community that meets in person, usually in the evening, to share what people are actually doing with AI. A typical gathering has one or two speakers, a relaxed crowd, and time afterwards to chat. It is non-commercial, which means nobody is there to sell you a course or a product. The volunteers who organise it do so because they like the subject and want others to learn.",
          "The group has been around for years, so it has built up a steady following of engineers, researchers, students, and curious newcomers. You do not need a technical background to walk in the door. If you can follow a talk and ask a question, you belong there."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The whole point is to keep AI grounded in real work. Instead of abstract hype about what machines might do someday, the talks tend to cover things people have built and the problems they hit along the way. You hear how a model was trained, why a project failed, what a dataset looked like, and how a team fixed a stubborn bug.",
          "That focus on real-world stories is what makes a meetup like this valuable. Reading about AI alone can leave you with a tidy but unrealistic picture. Sitting in a room while someone explains their messy, honest experience gives you a much better sense of how the field really works."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "If you are starting to build with AI, the fastest way to learn is to be near people who are a few steps ahead and willing to share. Oslo AI is exactly that kind of place. You pick up vocabulary, you see which tools people trust, and you find collaborators or mentors without paying for the privilege.",
          "It also matters because it is local. The connections you make are with people you can meet again over coffee, which turns a one-off talk into an ongoing community. For anyone in the Oslo area who wants to take AI seriously, this is a natural first stop."
        ]
      }
    ],
    "keyPoints": [
      "Free to attend and run entirely by volunteers, with no sales pitch attached.",
      "One of the larger AI communities in Norway, so the audience is varied and active.",
      "Talks focus on practical, real-world work rather than abstract hype.",
      "Welcoming to beginners as well as engineers and researchers.",
      "Meeting in person makes it easy to build lasting local connections."
    ]
  },
  "ai-tinkerers-oslo": {
    "lead": "AI Tinkerers Oslo is the local branch of a worldwide network for people who like to build things with AI rather than just talk about them. Expect demo nights, hackathons, and a hands-on, roll-up-your-sleeves mood.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "AI Tinkerers is a global builder community with chapters in many cities, and Oslo runs one of them. The format is simple: people who are making something with AI come together, show what they have, and learn from each other. The word tinkerer is the giveaway. This is a crowd that prefers a working prototype over a polished slide deck.",
          "Each chapter is shaped by its local organisers and members, so the Oslo events have their own flavour while still being part of something bigger. Because it sits inside a global network, what you learn locally often connects to ideas and people far beyond Norway."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "The heart of AI Tinkerers is the demo. At a demo night, builders take turns standing up and showing a thing they made, often something rough and recent. You see the idea, the live result, and sometimes the moment it breaks. Then everyone asks questions and trades suggestions. Hackathons push this further by giving people a focused stretch of time to build together from scratch.",
          "This learning-by-doing approach works because making something teaches you what reading cannot. You discover which parts of a project are hard, which tools save time, and how other builders solved the same wall you just hit. It is feedback in its most useful form."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "If your goal is to build with AI, this is the kind of community that pushes you to actually ship. Bringing even a tiny demo to share is a strong motivator, and the response you get sharpens the next version. You leave with concrete ideas instead of a vague sense that you should try something someday.",
          "It also matters for the people you meet. Demo nights and hackathons surface the doers in a city, the ones who will happily debug with you or start a side project together. For builders specifically, that network is hard to find anywhere else."
        ]
      }
    ],
    "keyPoints": [
      "Part of a global AI builder network, with a chapter rooted in Oslo.",
      "Centred on demo nights where people show working prototypes.",
      "Hackathons give you a focused window to build something from scratch.",
      "Hands-on by design, favouring real projects over slides.",
      "A direct way to meet other builders and stay motivated to ship."
    ]
  },
  "vibe-coding-collective": {
    "lead": "The Vibe Coding Collective is an international community built around relaxed, social coding sessions where people build with AI in good company. It is friendly to beginners and leans more toward easy company than intimidating expertise.",
    "sections": [
      {
        "heading": "What it is",
        "paragraphs": [
          "The Vibe Coding Collective gathers people who want to code together in a low-pressure setting. The name captures the spirit. The vibe matters as much as the output. Sessions feel less like a formal class and more like a group of friends sitting down to make things, often with AI tools helping along the way.",
          "Because it is international, the community is not tied to a single city, which means a wide mix of backgrounds and time zones turn up. That openness is part of the appeal. Whether you are a seasoned developer or someone who has never written a line of code, the door is meant to be easy to walk through."
        ]
      },
      {
        "heading": "The core idea",
        "paragraphs": [
          "Vibe coding describes a newer way of building software where you lean on AI to write much of the code while you steer with plain-language descriptions of what you want. Instead of memorising syntax, you describe an idea, see what the AI produces, try it, and adjust. The collective turns that solo practice into a shared, sociable one.",
          "The reason this catches on is that it lowers the barrier to making something real. People who were once shut out by the steep learning curve of programming can now get a working result on their first evening. Doing it alongside others makes the inevitable confusing moments feel like part of the fun rather than a reason to quit."
        ]
      },
      {
        "heading": "Why it matters",
        "paragraphs": [
          "For anyone curious about building with AI but unsure where to start, a beginner-friendly, social group is close to ideal. You get to ask the supposedly silly questions, watch how other people prompt and iterate, and finish a session with something you actually made. Encouragement, not gatekeeping, is the default tone.",
          "It also matters because it reframes coding as a creative, communal activity rather than a lonely technical grind. That shift keeps people coming back, and it is exactly the kind of welcoming community that helps newcomers find their footing in a fast-moving field."
        ]
      }
    ],
    "keyPoints": [
      "An international community organised around relaxed, social coding jams.",
      "Explicitly beginner-friendly, with a warm rather than intimidating tone.",
      "Built for building with AI, where you describe ideas and let AI help write the code.",
      "Lowers the barrier so newcomers can finish a session with something real.",
      "Treats coding as a creative, communal activity instead of a solo grind."
    ]
  }
};
