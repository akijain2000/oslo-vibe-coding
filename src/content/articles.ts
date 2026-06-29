// In-depth articles, expanded from the organisers' talks/decks into readable essays.
// Rendered at /articles and /articles/[slug]. Add a new one by appending to this array.

export type ProseBlock = {
  heading: string;
  paragraphs: string[];
  pullquote?: string;
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  author: string;
  deckPages: number;
  readingTimeMin: number;
  takeaway: string;
  sourceUrl: string;
  datePublished: string; // ISO date, used for Article structured data
  sections: ProseBlock[];
};

export const articles: Article[] = [
  {
    slug: "cheap-ai-developers-job",
    datePublished: "2026-05-15",
    title: "What cheap AI does to the developer's job",
    dek: "Two old ideas, one from AI research and one from economics, explain why writing code got cheap and what that means for someone learning to build today.",
    author: "Akshat Jain",
    deckPages: 32,
    readingTimeMin: 8,
    takeaway:
      "When code gets cheap, the job moves up a level: the skills that hold their value are describing what you want clearly, reviewing what the model gives back, and judging whether it is right.",
    sourceUrl: "https://www.linkedin.com/in/akijain2000/recent-activity/all/",
    sections: [
      {
        heading: "Two old ideas do all the work",
        paragraphs: [
          "This started as a talk with a blunt title: what cheap AI does to the developer's job. The argument underneath it is not really about AI at all. It rests on two ideas that are older than the current models, and once you have them in hand, most of the confusion about coding and AI gets quieter.",
          "The first idea comes from AI research. The second comes from economics. Neither is complicated. Both have been true for a long time, in places that had nothing to do with chatbots. The reason they matter now is that cheap, capable models put them on a collision course with the daily work of building software.",
          "If you are learning to build today, you do not need to predict the future to make good decisions. You need to understand these two ideas well enough to see which of your habits are worth keeping and which were always going to be temporary.",
        ],
        pullquote: "The argument is not really about AI at all.",
      },
      {
        heading: "The Bitter Lesson: bet on the model, keep the scaffolding thin",
        paragraphs: [
          "Rich Sutton, a researcher who spent decades in AI, wrote a short essay called The Bitter Lesson. The pattern he noticed: over and over, the methods that win are the ones that lean on raw computation, not the ones built from handcrafted human cleverness. People spend years encoding their knowledge of chess, or language, or vision into careful rules. Then a simpler approach that just uses more compute comes along and beats it.",
          "It is called bitter because it stings. The clever, human-shaped work is the part we are proud of, and it keeps losing to the brute approach that scales. The lesson is not that cleverness is worthless. It is that betting against more compute has been a losing trade for a long time.",
          "For someone building with AI, this has a very practical edge. The clever scaffolding you wrap around a model (the elaborate prompt templates, the hand-tuned rule chains, the rigid pipelines that try to outsmart the model) tends to age badly. The next model is often better than your workaround. So keep your own scaffolding thin. Lean on the model. Build the part that is genuinely yours, and let the model carry the part that compute is already good at.",
          "Thin scaffolding is not laziness. It is a bet that the model underneath you will keep improving, and that the lighter your structure, the more of that improvement you get for free.",
        ],
        pullquote: "Betting against more compute has been a losing trade for a long time.",
        bullets: [
          "Methods that lean on computation tend to beat handcrafted cleverness.",
          "Elaborate workarounds age badly because the next model often makes them unnecessary.",
          "Thin scaffolding lets you inherit model improvements instead of fighting them.",
        ],
      },
      {
        heading: "Jevons Paradox: cheaper means more, not less",
        paragraphs: [
          "The second idea is from a 19th-century economist named William Stanley Jevons. He noticed something odd about coal. When engines got more efficient and used less coal per unit of work, people did not burn less coal. They burned far more. Efficiency made coal cheaper to use, so it got used everywhere, and total demand went up.",
          "That is Jevons Paradox: making something more efficient often raises its total use rather than lowering it. It feels backwards the first time you hear it, and then you start seeing it everywhere.",
          "Now put intelligence in place of coal. By one common comparison, the price of GPT-3.5-level capability fell from roughly 20 dollars per million tokens to roughly 0.07 dollars in about eighteen months, taking the cheapest model that cleared that bar at each point. That is not a discount. That is the floor dropping out. And usage rose rather than fell, much as Jevons would predict. Things that were never worth paying a person to do, or never worth the engineering time, suddenly became cheap enough to just do.",
          "So the cheaper code gets, the more code gets written, generated, and thrown away. Demand for the output goes up, not down. The work does not evaporate. It floods in. The question is what kind of work it becomes.",
        ],
        pullquote:
          "From about 20 dollars to about 0.07 dollars per million tokens in roughly eighteen months.",
        bullets: [
          "Jevons Paradox: efficiency tends to raise total use, not lower it.",
          "GPT-3.5-level intelligence fell from roughly 20 dollars to 0.07 dollars per million tokens in about eighteen months.",
          "Cheaper intelligence pulled in far more usage, not less.",
        ],
      },
      {
        heading: "The work moves up the stack",
        paragraphs: [
          "Put the two ideas together. Compute keeps winning, so the model does more of the typing. Intelligence gets cheap, so we ask for far more of it. The result is that the work does not disappear, it moves up a level. It moves toward specifying what you want, reviewing what comes back, and judging whether it is right. It moves away from typing every line yourself.",
          "This is not the first time a tool has done this to a job, at least by a comparison often cited. ATMs did it to bank tellers: the machine handled the cash, and the teller's work moved toward the things a machine could not do. Spreadsheets did it to accountants: the formula did the arithmetic, and the accountant moved up to judgment and analysis. Compilers did it to programmers: nobody hand-writes machine code anymore, because the compiler does the tedious translation and the programmer works at a higher level.",
          "In none of those cases did the tool simply delete the job. Each time, it moved the job up a level. The boring, mechanical part got automated, and the part that needed a human moved to where the human was still needed. Cheap AI is the same shape of change, pointed at writing code.",
          "If that pattern holds, the fear that the job vanishes is aimed at the wrong thing. Typing is becoming a smaller share of the work. It was always the cost of doing the job, not the job itself.",
        ],
        pullquote: "Typing was always the cost of doing the job, not the job itself.",
        bullets: [
          "ATMs are often cited as moving the bank teller's work up a level instead of deleting it.",
          "Spreadsheets moved accountants from arithmetic to judgment.",
          "Compilers moved programmers off machine code to higher-level work.",
        ],
      },
      {
        heading: "What to actually learn",
        paragraphs: [
          "Here is the useful part if you are learning today. The skills that hold their value are the ones the model cannot do for you, and they are exactly the ones the historical pattern points at.",
          "First, describing what you want clearly. A model will build what you ask for, which means a vague ask gets you a vague result. Being precise about the goal, the constraints, and what done looks like is now a core skill, not a soft one. Second, reviewing what the model produces. Cheap generation means a flood of output, and someone has to read it with a careful eye and catch what is wrong. Third, judging whether it is right. Not whether it runs, whether it is actually correct and actually what was needed. That judgment is the part that stays yours.",
          "And carry the Bitter Lesson into how you build: keep your own scaffolding thin and lean on the model. Do not spend your energy building elaborate structure around the model that the next version will make pointless. Spend it on the parts that are genuinely yours, the specifying, the reviewing, the judging.",
          "None of this requires you to be an economist or to predict where the models go next. It asks something simpler. Learn to say clearly what you want, learn to check what you get, and learn to tell whether it is right. Those skills were valuable before cheap AI. They are just more of the job now.",
        ],
        pullquote: "A vague ask gets you a vague result.",
        bullets: [
          "Describe what you want clearly: precise goals and constraints, and a real definition of done.",
          "Review what the model produces: read the output with a careful eye and catch what is wrong.",
          "Judge whether it is right: not just whether it runs, but whether it is correct and needed.",
          "Keep your scaffolding thin and lean on the model.",
        ],
      },
    ],
  },
  {
    slug: "25507-on-ai-coding-agents",
    datePublished: "2026-06-05",
    title: "I spent $25,507 on AI coding agents in twelve weeks",
    dek: "A twelve-week receipt from real agentic engineering, and what the numbers actually mean for your own spend.",
    author: "Akshat Jain",
    deckPages: 14,
    readingTimeMin: 8,
    takeaway:
      "Cheaper tokens do not lower your AI bill. They raise how much you do, so the question is not “can I afford a session” but “is the work this session produces worth more than it costs.”",
    sourceUrl: "https://www.linkedin.com/in/akijain2000/recent-activity/all/",
    sections: [
      {
        heading: "The number, said plainly",
        paragraphs: [
          "Akshat Jain spent $25,507 on AI coding agents over twelve weeks. That is the whole headline. Not a projection, not a pitch for a tool, just what the meter read after three months of building.",
          "Two agents did the work: Codex and Claude Code. Between them they moved 34.2 billion tokens and produced about 2,250 commits. That is the raw shape of it. Big numbers, but numbers you can hold.",
          "Before going further, the honest caveats, because they change how much weight any of this carries. These are ccusage estimates derived from model pricing, not a bill from a provider. Commits are a rough proxy for output, not a clean measure of value. And the repo has a second contributor, so not every line traces back to one person and one agent. Keep all three in mind as you read.",
        ],
        pullquote: "$25,507 over twelve weeks. Not a projection. What the meter read.",
        bullets: [
          "$25,507 spent over twelve weeks",
          "Two agents: Codex and Claude Code",
          "34.2 billion tokens, about 2,250 commits",
        ],
      },
      {
        heading: "Where the money actually went",
        paragraphs: [
          "The first instinct on seeing a number like this is to imagine it scattered across experiments, side quests, and half-finished toys. It was not. 95% of the spend went into a single codebase: the product he was building.",
          "And almost all of that was production engineering. Feature work. QA. Onboarding flows. Deploys. Debugging. Not prompt-tinkering, not chatting with a model about ideas. The unglamorous middle of shipping software, done over and over.",
          "If you are trying to reason about your own spend, this is the first useful divide. Money spent exploring is different from money spent building the thing you already decided to build. This was overwhelmingly the second kind.",
        ],
        pullquote: "95% went into one codebase. Almost all of it was the unglamorous middle of shipping software.",
        bullets: [
          "95% of spend went into one product codebase",
          "Almost all of it was production engineering",
          "Feature work, QA, onboarding, deploys, debugging",
        ],
      },
      {
        heading: "Spend concentrates, and a few runs dominate",
        paragraphs: [
          "Here is the part that surprises most people. The cost was not spread evenly across the work. It clumped. Of 596 sessions, the 20 largest accounted for 85% of all tokens. A small handful of runs ate almost the entire budget.",
          "The single biggest run makes the point on its own. A $5,203 Codex session did exactly one job: open every page of the app in a browser and test it. That one session was 19% of the whole bill. One run, nearly a fifth of three months of spending, just to walk the product like a user and check that it worked.",
          "This is worth sitting with. The expensive thing was not writing code. It was thorough, exhaustive verification. The agent did the kind of QA pass a human tester would do, except it did all of it, every page, without getting bored or cutting corners. That completeness costs tokens, and the tokens cost money.",
        ],
        pullquote: "One session, $5,203, did one job: open every page and test it. That was 19% of the whole bill.",
        bullets: [
          "596 sessions total; the 20 largest were 85% of tokens",
          "Biggest run: a $5,203 Codex browser-QA session",
          "That one session alone was 19% of the bill",
        ],
      },
      {
        heading: "What the work looked like underneath",
        paragraphs: [
          "Strip away the dollar figure and look at the actual shape of the activity, and it looks much more like ordinary engineering than like a chatbot conversation. By volume: 106,000 shell commands, 36,000 sed edits, 18,000 git calls, 15,000 ripgrep searches, and a couple thousand browser-QA passes.",
          "Read that list again. Running commands. Editing files with sed. Committing with git. Searching the codebase with ripgrep. Checking the live app in a browser. These are the same moves a developer makes by hand, just done at a volume no person would sustain.",
          "This is what people miss when they picture AI coding as one clever answer to one clever prompt. Real agentic engineering is mostly grinding: search, edit, run, check, commit, repeat, thousands of times. The intelligence shows up in the loop, not in a single brilliant reply.",
        ],
        pullquote: "Real agentic engineering is mostly grinding: search, edit, run, check, commit, repeat, thousands of times.",
        bullets: [
          "106,000 shell commands",
          "36,000 sed edits, 18,000 git calls",
          "15,000 ripgrep searches, a couple thousand browser-QA passes",
        ],
      },
      {
        heading: "The unit economics, and the trap inside them",
        paragraphs: [
          "Per unit of output, the work was cheap. About $11 per commit. Under two cents per net line of code. By those numbers, an individual commit or an individual line feels almost free, which is exactly the feeling that drives the total up.",
          "That is the trap, and it has a name. As each token got cheaper, he used far more of them. Weekly usage grew roughly 7,800x between March and May. The price per unit fell, and consumption rose so much faster that the bill climbed anyway. This is Jevons Paradox, the old observation that making a resource cheaper to use often increases, not decreases, how much of it you burn.",
          "So the cheap unit cost is not the reassuring fact it looks like. It is the engine. When each commit costs $11, you do not do fewer commits to save money. You do more of them, because each one is so affordable, and the aggregate is what shows up on the statement. Cheaper tokens did not produce a smaller bill. They produced a much larger appetite.",
        ],
        pullquote: "The price per unit fell, and consumption rose so much faster that the bill climbed anyway.",
        bullets: [
          "About $11 per commit",
          "Under two cents per net line of code",
          "Weekly usage grew roughly 7,800x from March to May",
        ],
      },
      {
        heading: "What a normal person should take from this",
        paragraphs: [
          "First, do not anchor on the total. $25,507 is what twelve weeks of full-time, near-continuous agentic engineering on one product costs at this point in time. If you are dabbling, fixing a bug here, generating a script there, your number will look nothing like this. The headline is a ceiling for a specific, intense way of working, not a typical monthly bill.",
          "Second, expect your spend to concentrate. A few big, thorough runs, especially exhaustive QA passes that walk the whole app, can dwarf everything else. If you want to control cost, that is where to look first. Watch the long sessions, not the short ones. One careful browser-test run was a fifth of the entire bill here.",
          "Third, and most important, plan for Jevons Paradox in your own usage. As the tools get cheaper, your instinct will be to do more, not to save. That is not a flaw to fix, it is just the dynamic to expect. The right question is never “can I afford this session.” It is whether the work a session produces is worth more than what it costs. If a $5,203 run finds the bugs across every page of your product before your users do, that may be a bargain. If it does not, no per-line price makes it cheap. Judge the output, not the unit price, and the economics stay legible.",
        ],
        pullquote: "The right question is never “can I afford this session.” It is whether the work is worth more than what it costs.",
        bullets: [
          "The total reflects intense full-time use, not a typical bill",
          "Watch the few long runs; they dominate the cost",
          "Judge sessions by output value, not by per-line price",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
