// In-depth articles, expanded from the organisers' talks/decks into readable essays.
// Rendered at /articles and /articles/[slug]. Add a new one by appending to this array.

export type ProseBlock = {
  heading: string;
  paragraphs: string[];
  pullquote?: string;
  bullets?: string[];
  links?: { label: string; url: string }[];
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  author: string;
  // Optional: number of deck pages, for talks expanded from a deck. Omit for
  // articles distilled from other sources (a video, a course).
  deckPages?: number;
  readingTimeMin: number;
  takeaway: string;
  sourceUrl: string;
  // Overrides the byline suffix (default "from a N-page talk"). e.g. a series label.
  kicker?: string;
  // Overrides the default "shared as a talk on LinkedIn" footer label when the
  // source is something else, such as a class deck or a video.
  sourceLabel?: string;
  datePublished: string; // ISO date, used for Article structured data
  sections: ProseBlock[];
};

export const articles: Article[] = [
  {
    slug: "vibe-coding-at-spaces",
    datePublished: "2026-07-02",
    title: "Our first vibe coding class at Spaces",
    dek: "Our vibe coding drop-in moved to Spaces in central Oslo this week. Here is the whole session for anyone who missed it: what vibe coding is, where AI is heading, how to set up your own tools, and two small apps we built from open Oslo data.",
    author: "Akshat Jain",
    deckPages: 22,
    readingTimeMin: 6,
    takeaway:
      "You do not need to know how to code to build something real. You describe what you want, an AI writes it, and you steer with judgment. We set up the tools together and built two live apps from open Oslo data, each one HTML file.",
    sourceUrl: "https://oslovibecoding.tech/lesson.html",
    kicker: "session recap",
    sourceLabel: "Open the full class deck",
    sections: [
      {
        heading: "What the night was",
        paragraphs: [
          "We ran another Oslo Vibe Coding drop-in this week, our first at Spaces Stortorvet in central Oslo. Free, laptops out. People who had never written a line of code showed up, set up real tools, and left with something that runs. This is the whole session written down, so anyone who could not make it can catch up and try it at home.",
          "The plan was simple. Spend the first stretch on how this works and where AI is heading, then spend the rest building. Most of the hour was building.",
        ],
        pullquote: "People who had never written a line of code left with something that runs.",
      },
      {
        heading: "Vibe coding, in plain words",
        paragraphs: [
          "Vibe coding means you build by describing. You say what you want in plain language, an AI writes the code and runs it, and you look at the result and steer. You do not learn a language first. You build first, and pick things up as you go. Andrej Karpathy named the idea in 2025, and the tools caught up fast.",
          "The loop is the job: describe, build, run, steer. You go around it until the result matches what you meant. You are the director. The model types. Most of your time goes into the steering, not the first prompt.",
          "The skill worth practising is not syntax. It is judgment: deciding what good looks like, then checking that you got it. One honest note. The model writes code that looks right and can be wrong, so you work in small steps, run it every time, and read the parts that touch data or money.",
        ],
        bullets: [
          "Describe, build, run, steer. Repeat until it matches what you meant.",
          "You direct; the model types. The steering is the work.",
          "Judgment beats syntax. Small steps, run it, check the risky parts.",
        ],
      },
      {
        heading: "Extra reading: the frontier, distilled",
        paragraphs: [
          "This part is optional and for your own time. We keep a set of notes on the site distilled from all 13 Stanford CS 153 guest lectures, the people building modern AI, from Satya Nadella and Sam Altman to Jensen Huang. Read the notes when you are curious, or watch the talks in full on your own time. If you do, two points matter most for a beginner.",
          "First, the bottleneck is no longer code. Writing software is the cheap part now. Energy, compute, and knowing what to build are the scarce parts. Amin Vahdat from Google put a number on it: one gigawatt of AI costs about forty billion dollars and takes two to three years, and energy is the one thing money cannot rush. If code is cheap, your ideas and judgment are the valuable part.",
          "Second, small teams do enormous things. Garry Tan from Y Combinator said one person at a terminal can now do the work of hundreds. You do not need a company or permission. One person and a laptop is a real team.",
        ],
        pullquote: "The bottleneck is no longer code. Your ideas and judgment are the valuable part.",
        links: [{ label: "The distilled lectures", url: "https://oslovibecoding.tech/frontier" }],
      },
      {
        heading: "Set up your own tools",
        paragraphs: [
          "Then laptops out. The mental model we taught is that your setup has four parts: a model that does the reasoning, tools that read and write your files and run commands, context about your project, and the loop you drive. Claude Code, Cursor, and similar tools all share these four parts.",
          "Setup is quick. For Claude Code, install it with npm and run claude in a folder. For Cursor, download the app and open a folder. Then give it context: a folder, a one-sentence goal, and for anything bigger a short rules file. Ask for the smallest useful version, look at what it made, ask for the next small change, and reject what you did not want.",
        ],
        bullets: [
          "Your setup: a model, tools, context, and the loop you drive.",
          "Claude Code: npm install -g @anthropic-ai/claude-code, then run claude.",
          "Cursor: download from cursor.com and open a folder.",
          "Give it a folder, a one-sentence goal, and a short rules file for bigger work.",
        ],
      },
      {
        heading: "Two things we built from open data",
        paragraphs: [
          "To show what one evening can produce, we built two small apps and left them running. Each is a single HTML file. No backend, no account, no API key. Each asks one free, open Oslo data source a question and draws the answer.",
          "The first shows live public-transport departures from any Oslo stop, using Entur, the national open transport data. The second shows the city-bike stations near you with live bike and dock counts, using Oslo Bysykkel open data and your browser location. Different data, same recipe: pick an open API, ask it one question, draw the answer on a page.",
          "That recipe is the point. Norway publishes a lot of free, open data. Transport, weather from Yr, city bikes, maps. Any of it is a first project. Open one of the demos, see how small it is, and you will believe you could build it tonight.",
        ],
        pullquote: "Pick an open API, ask it one question, draw the answer on a page.",
        links: [
          { label: "Live Oslo departures", url: "https://oslovibecoding.tech/oslo-departures.html" },
          { label: "City bikes near you", url: "https://oslovibecoding.tech/oslo-bikes.html" },
        ],
      },
      {
        heading: "Where this is going",
        paragraphs: [
          "This was our first session at Spaces Stortorvet, and we liked it there. We are going to keep the drop-ins at Spaces and settle into a regular time, so you can plan around it instead of watching for the next announcement.",
          "We are also putting together a curriculum, so the sessions build on each other instead of starting from zero every week. Come to one, then the next, and you will keep building instead of repeating the basics.",
        ],
      },
      {
        heading: "Try it, then come build with us",
        paragraphs: [
          "If you missed the class, you can still do the whole thing. Open the deck, try the two demos, and pick a small idea of your own. Take one of the open data sources and make it show you something you actually want to see.",
          "Then come to the next session. Reading is a fine start. Building in a room with other people is better, and it is free. No one codes alone.",
        ],
        links: [
          { label: "The class deck", url: "https://oslovibecoding.tech/lesson.html" },
          { label: "Live departures demo", url: "https://oslovibecoding.tech/oslo-departures.html" },
          { label: "City bikes demo", url: "https://oslovibecoding.tech/oslo-bikes.html" },
          { label: "The distilled lectures", url: "https://oslovibecoding.tech/frontier" },
        ],
      },
    ],
  },
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
          "Akshat Jain ran up about $25,507 in AI coding-agent usage over twelve weeks, by his own tooling's estimate. Not a projection, not a pitch for a tool, just what the meter read after three months of building.",
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
          "This is worth sitting with. The expensive thing was not writing code. It was thorough, exhaustive verification. The agent ran a broad browser-QA pass across the app, opening page after page to check it worked. That kind of coverage costs tokens, and the tokens cost money.",
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
  {
    "slug": "how-llms-are-trained-pretraining",
    "datePublished": "2026-07-02",
    "title": "How an LLM is trained: the internet in a box",
    "dek": "Pretraining is the first stage of building something like ChatGPT. By the end of this piece you will understand how raw internet text becomes a model that can continue any document, and why that model is not yet an assistant.",
    "author": "Oslo Vibe Coding",
    "readingTimeMin": 8,
    "kicker": "Karpathy’s deep dive · part 1 of 5",
    "takeaway": "Pretraining takes a filtered copy of the public internet, chops it into tokens, and trains a giant neural network to predict the next token over and over. What comes out is a base model: a statistical simulator of internet documents that has absorbed a rough, lossy picture of the world, but does not yet answer your questions.",
    "sourceUrl": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    "sourceLabel": "Watch the full 3.5-hour video",
    "sections": [
      {
        "heading": "Download the internet",
        "paragraphs": [
          "The first step in building a model like ChatGPT is to collect an enormous pile of text. Andrej Karpathy points to FineWeb, a public dataset from Hugging Face that is representative of what the big labs build internally. OpenAI, Anthropic, and Google each have their own version. The goal is the same for all of them: a huge quantity of high-quality documents, covering as wide a range of topics as possible, so the model ends up knowing about many things.",
          "Most of that text starts life at Common Crawl, an organization that has been scraping the web since 2007. Its crawlers begin with a few seed pages, follow every link, and keep going. By 2024 the crawl had indexed on the order of billions of web pages. That raw haul is the starting point, and it is messy.",
          "One number is worth sitting with. After all the collecting and filtering, FineWeb is only about 44 terabytes. That fits on a single large hard drive. The internet feels infinite, but once you keep only the text and throw away the junk, the useful part is surprisingly small."
        ],
        "pullquote": "The internet feels infinite. Once you keep only the text and throw away the junk, it fits on a hard drive."
      },
      {
        "heading": "Filter out the junk",
        "paragraphs": [
          "Raw crawl data is not something you would want to train on directly, so it passes through several filtering stages. Each one is a design decision, and different companies make different calls.",
          "The steps are practical and unglamorous. URL filtering drops entire domains using blocklists: malware sites, spam, pure marketing pages, racist sites, adult sites. Text extraction pulls the actual words out of the raw HTML and discards the navigation, menus, and styling code. Language filtering guesses the language of each page and keeps only what the lab wants. FineWeb, for instance, keeps pages that are more than about 65 percent English, which is why a model trained on it will be strong in English and weaker elsewhere. After that come deduplication and the removal of personally identifiable information such as addresses and social security numbers.",
          "What survives is plain text. Concatenate the first couple hundred cleaned pages and you get a giant tapestry: an article about tornadoes, an odd medical note about your adrenal glands, and so on. This is the raw material. The next step is teaching a neural network to mimic how that text flows."
        ],
        "bullets": [
          "URL filtering: drop malware, spam, marketing, racist, and adult domains.",
          "Text extraction: keep the words, discard HTML markup and navigation.",
          "Language filtering: a lab choosing 65 percent English is choosing weaker Spanish later.",
          "Deduplication and PII removal: cut repeats, strip addresses and other private data."
        ]
      },
      {
        "heading": "Why text becomes tokens",
        "paragraphs": [
          "A neural network cannot read a paragraph the way you do. It expects a one-dimensional sequence drawn from a fixed, finite set of symbols. So before training, the text has to be converted into that form. This conversion is called tokenization, and the symbols are called tokens.",
          "You could go to the extreme and represent everything as raw bits, just zeros and ones. That gives you only two symbols but makes the sequence enormously long, and sequence length is a precious, expensive resource. The trade Karpathy describes is between vocabulary size and sequence length: use more distinct symbols and you get shorter sequences. Grouping bits into bytes gives you 256 possible symbols. A method called byte-pair encoding then goes further, repeatedly finding the most common pair of symbols and minting a single new symbol for it. Run that enough times and you land on a vocabulary of roughly 100,000 tokens. GPT-4 uses 100,277.",
          "A token is usually a chunk of a word, not a single letter and not a whole word. Feed 'hello world' into GPT-4's tokenizer and it becomes two tokens. Add a capital letter or an extra space and the split changes. This matters more than it looks. The model never sees letters directly; it sees these chunks. That is a big reason base and chat models can stumble on spelling and counting tasks that seem trivial to a human. FineWeb's 44 terabytes of text works out to about 15 trillion tokens, and that sequence of token IDs is what actually gets trained on."
        ],
        "pullquote": "The model never sees letters. It sees chunks. That single fact explains a lot of its odd failures."
      },
      {
        "heading": "Predict the next token",
        "paragraphs": [
          "With the internet turned into a long sequence of tokens, training can begin. The task is almost absurdly simple to state. Take a window of tokens from the data, feed it in as context, and ask the network to predict the token that comes next. The network outputs a probability for every one of the roughly 100,000 possible tokens. Because you took the window from real data, you already know the right answer, so you can nudge the network to raise the probability of the correct token and lower the rest.",
          "That nudge happens through the parameters, or weights, of the network. Karpathy compares them to knobs on a DJ set: billions of them, set randomly at the start, adjusted a little with every update. A modern network is a giant mathematical expression, but the individual operations inside it are ordinary things like multiplication and addition. The specific architecture behind today's models is called the Transformer. You do not need its internals to grasp the point: it turns an input sequence into a next-token prediction, and training means finding a setting of the knobs that makes those predictions match the statistics of real text.",
          "Do this across the whole dataset, in parallel, on billions of windows, and a single number called the loss slowly falls. Low loss means better predictions. Watch a fresh model train and its output starts as pure gibberish; a little later it produces something with local coherence; given enough time it writes fairly fluent English. Nobody wrote rules for grammar or facts. The rules got absorbed from the data, one next-token guess at a time."
        ]
      },
      {
        "heading": "The scale and the bill",
        "paragraphs": [
          "This is where the money goes. The training runs on GPUs, chips built for the massively parallel math these networks need. Karpathy rents an 8x H100 node from a cloud provider at a few dollars per GPU per hour. Stack many of these into a data center and you have the machines every large tech company is fighting to buy. That demand is a big part of why Nvidia's value climbed into the trillions.",
          "The trend over time is steep. OpenAI's GPT-2, from 2019, had about 1.5 billion parameters and trained on roughly 100 billion tokens. It cost an estimated 40,000 dollars back then; today a comparable run costs on the order of a hundred dollars, thanks to better data, faster hardware, and better software. Meta's Llama 3 is a different scale entirely: its largest base model has 405 billion parameters and trained on 15 trillion tokens.",
          "For a frontier model, pretraining can run for something like three months across thousands of GPUs and cost many millions of dollars. This is by far the most expensive stage. Everything that comes afterward, the work that turns the model into a helpful assistant, is comparatively cheap."
        ],
        "bullets": [
          "GPUs do the work: many parallel processors chewing through matrix math.",
          "GPT-2 (2019): about 1.5 billion parameters, roughly 100 billion tokens.",
          "Llama 3: a 405 billion parameter base model trained on 15 trillion tokens.",
          "Frontier pretraining: months of time, thousands of GPUs, millions of dollars."
        ]
      },
      {
        "heading": "What a base model actually is",
        "paragraphs": [
          "When pretraining finishes, you have a base model. It is not an assistant. Karpathy calls it an internet document simulator, or more bluntly a very expensive, glorified autocomplete. Ask a base model 'what is 2+2' and it will not reply 'four, anything else?' It treats your text as the start of some web page and continues it however the statistics suggest, wandering off into philosophy or a fresh list of questions. Run the same prompt twice and you get different answers, because the model samples from a probability distribution each time.",
          "It is still remarkable, because predicting the next token forces the network to learn a great deal about the world and store it in its weights. Karpathy describes those 405 billion parameters as a compression of the internet, like a zip file, except lossy. You are left with a gestalt, a rough impression rather than an exact copy. Prompt it with 'my top 10 landmarks in Paris' and it will happily produce a list, but the details are a vague, probabilistic recollection. Facts that appeared often on the web are more likely to be remembered correctly; rare facts you should not trust.",
          "Two demos sharpen the picture. Paste the first line of the Wikipedia article on zebras and the base model recites the entry almost word for word, because high-quality sources like Wikipedia get sampled more often during training and the model has effectively memorized them. This is called regurgitation. Now paste a prompt about the 2024 election, which happened after the training data was collected, and the model simply invents a plausible outcome, a different one each time. It is guessing from what it knows, and Karpathy names this for what it is: hallucination. Same mechanism, next-token prediction, in both cases.",
          "A base model can still be useful if you are clever with prompts. Give it ten English-to-Korean word pairs and then an eleventh English word, and it continues the pattern correctly. This is in-context learning: the model picks up the rule from the examples in front of it. You can even fake an assistant by writing a prompt shaped like a transcript of a helpful AI talking to a human, and the base model will play along, though it tends to keep going and invent the human's next question too. These are tricks, not the real thing. To get a model you can simply ask a question and get a reliable answer from, you need the next stage, post-training, where the internet-document dataset is set aside and the model learns from curated conversations. That is the subject of the next article. For now, hold onto this: pretraining gives you a statistical echo of the internet, rich with knowledge but shaped like a document, not a helper."
        ],
        "pullquote": "A base model is a lossy zip of the internet. You can unpack a rough impression of the world, not the world itself."
      }
    ]
  },
  {
    "slug": "inside-an-llm-next-token",
    "datePublished": "2026-07-02",
    "title": "Inside the model: predicting the next token",
    "dek": "What actually sits behind the chat box is one giant fixed math function. This piece explains what that function is, how it generates text one token at a time, and why that shape sets a hard limit on what it can do in a single step.",
    "author": "Oslo Vibe Coding",
    "readingTimeMin": 8,
    "kicker": "Karpathy’s deep dive · part 2 of 5",
    "takeaway": "An LLM is a fixed mathematical function with billions of tunable numbers that only ever does one thing: read the tokens so far and output a probability for every possible next token. It has no memory, no tools, and no internet inside it, and each step gets a fixed, small budget of computation. That is why the same prompt gives different answers, why it recalls facts vaguely rather than exactly, and why it works better when it spreads its thinking across many tokens instead of jumping to an answer.",
    "sourceUrl": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    "sourceLabel": "Watch the full 3.5-hour video",
    "sections": [
      {
        "heading": "What the network actually is",
        "paragraphs": [
          "Strip away the chat interface and a large language model is one thing: a giant mathematical function. It takes a sequence of tokens as input, mixes them together with a fixed set of internal numbers, and produces an output. Those internal numbers are called parameters, or weights. A model like Llama 3 has 405 billion of them. GPT-style models today run into the hundreds of billions or more.",
          "Karpathy compares the parameters to knobs on a DJ set. Training is the process of finding a setting of all those knobs so that the model's predictions line up with the patterns in its training data. Once training finishes, the knobs are frozen. When you chat with a model, you are talking to a version whose parameters were locked months earlier and have not moved since.",
          "It helps to be clear about what is not inside this function. There is no memory that carries over between your messages beyond the text on screen. There is no database of facts it looks things up in. There is no live internet connection humming away inside the weights. The whole thing is what Karpathy calls a stateless expression: the same input runs through the same fixed math every time, with no side effects and nothing remembered."
        ],
        "pullquote": "It's a fixed mathematical expression from input to output with no memory. It's just stateless."
      },
      {
        "heading": "One token at a time",
        "paragraphs": [
          "The model's only real skill is predicting what comes next. You feed in the tokens so far, and the network outputs a number for every possible token in its vocabulary, roughly 100,000 of them for a GPT-4-class model. Each number is that token's probability of coming next. Most are tiny. A few are meaningfully large.",
          "Generation, which the field calls inference, is a loop built on top of that single skill. Take the probabilities, sample one token from them, append it to the sequence, then feed the longer sequence back in and repeat. Karpathy describes the sampling step as flipping a biased coin: tokens the model rates as likely get picked more often, but a less likely token can still come up. The model writes one word-piece, reads back everything including what it just wrote, and predicts again.",
          "Nothing about this loop understands your whole request up front and then executes a plan. The model commits to token one before it has any idea what token fifty will be. Everything it produces, it produces by extending the sequence one small step at a time."
        ],
        "bullets": [
          "Input: the tokens so far.",
          "Output: a probability for every possible next token.",
          "Sample one token from that distribution.",
          "Append it, feed the longer sequence back in, repeat."
        ]
      },
      {
        "heading": "Why the same prompt gives different answers",
        "paragraphs": [
          "Because generation samples from a probability distribution, it is stochastic. Karpathy shows this directly with a base model: he types the same prompt twice and gets two different continuations, because each run draws different tokens from the same distribution and then wanders off in a different direction. One early choice nudges the next, and within a few tokens the two answers have diverged completely.",
          "A setting called temperature controls how much randomness enters the coin flip. Lower temperature makes the model lean hard toward its highest-probability tokens, so answers come out more repetitive and predictable. Higher temperature flattens the odds, so lower-probability tokens get picked more often and the output gets more varied and more surprising.",
          "This is worth internalizing as a user. If a model gives you a wrong or oddly-worded answer, running the same prompt again can produce a genuinely different result. It is not the model changing its mind. It is the same fixed function, sampled again, landing on a different path."
        ]
      },
      {
        "heading": "A lossy zip of the internet",
        "paragraphs": [
          "During training the model saw something like 15 trillion tokens of text. It cannot store all of that. What it stores instead is a compressed version, squeezed into its parameters. Karpathy calls the weights a kind of zip file of the internet, but a lossy one. Like a heavily compressed photo, the general shape survives and the fine detail is gone.",
          "That is why the knowledge inside a base model is a vague recollection rather than exact recall. Ask it for the top landmarks in Paris and it will produce a plausible list, but you cannot fully trust every detail, because none of it is stored explicitly. It is all reconstructed from statistical traces. Things that appeared often in the training text, Karpathy notes, are remembered far better than things that appeared rarely.",
          "There is a sharp exception. When a document shows up many times in training, such as a well-known Wikipedia article, the model can memorize it and recite long stretches word for word. Karpathy calls this regurgitation, and it is usually something builders try to avoid. Most of the time the model is not reciting. It is producing a remix that has the same statistical flavor as its training data without matching any single document."
        ],
        "pullquote": "This knowledge is not precise and exact. This knowledge is vague and probabilistic and statistical.",
        "bullets": [
          "Weights are a compressed, lossy version of the training text.",
          "Common facts survive better than rare ones.",
          "Recall is reconstruction, not lookup, so details can be wrong.",
          "Heavily repeated documents can be memorized and recited verbatim."
        ]
      },
      {
        "heading": "A fixed budget per token",
        "paragraphs": [
          "Here is the limit Karpathy stresses most, and the one that changes how you should prompt. Every time the model produces a single token, the input runs through the same fixed sequence of steps in the network exactly once. That means each token gets a fixed, finite, and fairly small amount of computation. The model cannot decide to think harder on a hard token. Its per-token budget does not stretch.",
          "Take a word problem where the answer is $3. If you push the model to answer immediately, it has to cram the entire calculation into the one token where it emits the number. That is more work than a single token's budget can hold, so it guesses and often gets it wrong. Everything it writes afterward is just after-the-fact justification, because the answer is already fixed in the sequence.",
          "The fix is to let the model spread the work out. When it writes intermediate steps, the total cost of the oranges is $4, so $30 minus $4 is $9, and so on, each token only has to carry one small piece of arithmetic. By the time it reaches the final line, the earlier results are already sitting in front of it and stating the answer is easy. Karpathy's phrase for this is spreading the reasoning and the computation across many tokens.",
          "This is the mechanism underneath advice like let the model show its work or think step by step. It is not a personality trick. A step-by-step answer gives the model more tokens, and therefore more total computation, to reach a result it could never have computed in one jump."
        ],
        "pullquote": "There can never be too much work in any one of these tokens, because then the model won't be able to do that later at test time."
      },
      {
        "heading": "Recollection versus working memory",
        "paragraphs": [
          "Karpathy draws one more distinction that ties the whole picture together. Knowledge baked into the parameters is a vague recollection, like something you read a month ago. The tokens sitting in the current context window, the text of your conversation so far, are the model's working memory, like something you experienced a few minutes ago and can still handle precisely.",
          "The practical difference is large. Data in the context window feeds straight into the network and is directly available, so the model can reference it exactly. Data buried in the weights has to be reconstructed and might come out wrong. This is why pasting the relevant text into your prompt, rather than trusting the model to remember it, reliably produces sharper answers.",
          "So what sits behind the chat box is narrow and knowable. A fixed function, no memory of its own, a small compute budget per token, guessing the next token again and again. The surprising range of things it can do comes from that one operation run at enormous scale, not from anything hidden inside."
        ]
      }
    ]
  },
  {
    "slug": "base-model-to-assistant",
    "datePublished": "2026-07-02",
    "title": "From base model to assistant",
    "dek": "A base model is an internet-document simulator. Post-training turns it into ChatGPT by teaching it to imitate human labelers who write ideal answers. Once you see the model as a simulation of those labelers, its behavior stops feeling magical.",
    "author": "Oslo Vibe Coding",
    "readingTimeMin": 8,
    "kicker": "Karpathy’s deep dive · part 3 of 5",
    "takeaway": "The assistant you chat with is a statistical simulation of a helpful, knowledgeable human labeler, built by training the base model on example conversations that labelers wrote by hand following company guidelines. It is not a person and it is not a database. It is a statistical average of what skilled labelers would write. Read its answers that way.",
    "sourceUrl": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    "sourceLabel": "Watch the full 3.5-hour video",
    "sections": [
      {
        "heading": "What the base model is",
        "paragraphs": [
          "After the pre-training stage covered earlier in this series, you get a base model. Karpathy calls it an internet document simulator. Feed it some tokens and it continues them the way internet text tends to continue, sampling one token at a time from the statistical patterns it absorbed. Its knowledge sits compressed in a few hundred billion parameters, a lossy zip of the internet that it recalls vaguely rather than looks up.",
          "The base model is genuinely useful, but it is not an assistant. Ask a base model \"what is 2 plus 2\" and it will not tell you it is 4 and ask what else you need. It treats your question as a prefix and keeps writing, because that is what a web page would do. Karpathy shows it drifting into philosophy or simply generating more questions. It is a very expensive autocomplete.",
          "You can coax useful behavior out of a base model with clever prompting. A few-shot prompt with ten English-Korean pairs gets it translating. Wrapping a prompt to look like a transcript of a helpful AI talking to a human gets it to play along. These tricks work, but they are fragile. To get something like ChatGPT, you need a second stage."
        ],
        "pullquote": "The base model is a very expensive autocomplete that dreams internet pages."
      },
      {
        "heading": "Post-training swaps the dataset",
        "paragraphs": [
          "The second stage is called post-training, and the first step in it is supervised fine-tuning. The mechanics are almost boring. You take the finished base model and keep training it with the exact same algorithm. The only thing that changes is the data. You throw out the pile of internet documents and substitute a dataset of conversations.",
          "This is cheap compared to pre-training. Pre-training can run for roughly three months across thousands of computers and cost millions of dollars. Post-training is more like three hours, because the conversation dataset is far smaller than the whole internet. The heavy compute already happened. This stage adjusts the model's behavior on top of the knowledge it already has.",
          "The model adapts fast. Trained on enough example conversations, it stops behaving like a document simulator and starts behaving like a participant in a chat. It learns the statistics of how an assistant responds to a human question. That new behavior is layered onto everything it already knew from the internet."
        ]
      },
      {
        "heading": "The conversation format",
        "paragraphs": [
          "Everything a model touches has to become a sequence of tokens, including conversations. So we need an agreed way to encode who said what. Karpathy compares it to a network protocol: precise rules everyone follows so a structured object turns into a flat sequence and back again.",
          "In practice the encoding uses special tokens that mark the turns. A turn begins with a token like the one OpenAI writes as im_start, followed by a tag for whose turn it is (user or assistant), a separator, the actual text of the message, and a closing token. These special tokens are new. They did not exist during pre-training. They get introduced in post-training precisely so the model can learn where a user's turn ends and the assistant's turn begins.",
          "Once the conversation is flattened into tokens, nothing about training is new. It is the same next-token prediction as before. At inference time, ChatGPT builds the context up to the point where the assistant's turn should start, then samples tokens to fill in the reply. The exact format differs between models and is still a bit of a wild west, but the idea is constant: conversations become one-dimensional token sequences so the old machinery still applies."
        ],
        "bullets": [
          "Special tokens mark the start and end of each turn and tag it as user or assistant.",
          "These tokens are added in post-training; the base model never saw them.",
          "A conversation becomes a flat token sequence, so training is still just next-token prediction.",
          "At inference, the model is handed the context and asked to complete the assistant's turn."
        ]
      },
      {
        "heading": "Where the conversations come from",
        "paragraphs": [
          "The conversations are written by people. OpenAI's 2022 InstructGPT paper described hiring human contractors whose job was to invent prompts and then write the ideal assistant response to each one. \"List five ideas for how to regain enthusiasm for my career.\" \"What are the top ten science fiction books I should read next.\" A person wrote both the question and the model answer.",
          "How does a labeler know what counts as an ideal answer? The company gives them labeling instructions. At a high level the instruction is to be helpful, truthful, and harmless, and to refuse requests the company does not want the assistant to handle. In reality these documents run to hundreds of pages, and labelers study them professionally. The assistant's personality is not coded in software. It is programmed by example, through the answers labelers write under those guidelines.",
          "The state of the art has shifted since 2022. Labelers rarely write every answer from scratch now. They lean on existing language models to draft responses and then edit them. Modern datasets like UltraChat are largely synthetic with some human involvement, spanning millions of conversations across a huge range of topics. The seed is still humans following labeling instructions, but models now help produce the bulk of the data."
        ]
      },
      {
        "heading": "A simulation of a labeler",
        "paragraphs": [
          "This is Karpathy's central mental model, and it changes how you read every answer. When you ask ChatGPT something, you are not talking to a magical intelligence that went and researched your question. You are getting a statistical simulation of the kind of human labeler the company hired. The model imitates what a labeler would have written in that situation.",
          "The labeler is not a random person off the internet. These companies hire skilled people, and for questions about code or medicine the labelers behind those conversations tend to be educated experts. So you are talking to an instantaneous simulation of a fairly skilled labeler, averaged across many of them. Not one specific person. A statistical average of the labelers.",
          "Take his example: ask for the top five landmarks to see in Paris. The model did not rank the world's landmarks with infinite intelligence. If that exact question sat in the post-training dataset, you get something close to what a labeler wrote after twenty minutes of their own research. If it did not, the answer is more emergent: the model combines its pre-training knowledge of what Paris landmarks people talk about with the labeler style it learned in post-training, and produces an imitation of what such a labeler would say."
        ],
        "pullquote": "You are not talking to a magical AI. You are getting a statistical simulation of a labeler that was hired by OpenAI."
      },
      {
        "heading": "System prompts and what this means for you",
        "paragraphs": [
          "The persona you meet is a default set by post-training, not the only one possible. A system prompt sits at the front of the conversation and can shift the model into a different role, the same way the base model took on a role when it was prompted to look like a chat transcript. It is still the same simulator underneath, nudged toward a different character.",
          "Reading the model as a simulation of a labeler makes its strengths and failures legible. It answers with the confident tone of a labeler because labelers wrote confident answers, which is exactly why a model will sometimes state something false with total assurance. It does not consult a database and it does not verify facts. It writes what a knowledgeable person plausibly would write.",
          "The practical move is to treat an answer as a well-informed draft from a skilled generalist, not a lookup from an oracle. It is often right, especially on common topics the labelers and the internet cover well. It is neither a person with beliefs nor a search engine with citations. Knowing which of those two things you are dealing with, and knowing it is neither, is most of what it takes to use these tools well."
        ],
        "bullets": [
          "The default persona comes from post-training; a system prompt can shift it into another role.",
          "The confident tone is learned from labelers, which is why wrong answers can still sound sure.",
          "The model writes what a knowledgeable person would write; it does not look facts up.",
          "Read answers as skilled drafts to verify, not authoritative lookups to trust."
        ]
      }
    ]
  },
  {
    "slug": "why-llms-hallucinate",
    "datePublished": "2026-07-02",
    "title": "Why LLMs make things up, and what fixes it",
    "dek": "A language model always emits a plausible next token, even when it has no idea. Once you see why, you can tell when to trust it, when to hand it a tool, and when to check its work.",
    "author": "Oslo Vibe Coding",
    "readingTimeMin": 8,
    "kicker": "Karpathy’s deep dive · part 4 of 5",
    "takeaway": "The model has no built-in sense of \"I don't know,\" so it fills gaps with confident guesses. Its baked-in knowledge is a vague recollection; the words in front of it are precise working memory. Put the facts in the context, tell it to use tools for anything factual or numerical, and verify the result.",
    "sourceUrl": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    "sourceLabel": "Watch the full 3.5-hour video",
    "sections": [
      {
        "heading": "The confident guess",
        "paragraphs": [
          "Ask a model who Orson Kovats is. There is no such person; Karpathy made the name up. A well-trained assistant now says it doesn't recognize the name. Older models did something else. They produced a fluent, confident little biography, entirely invented.",
          "The reason sits in how the model was trained. Its training data is full of conversations shaped like \"who is X,\" and in every one, the answer is a confident, correct paragraph. The model learned the shape of that answer. When you feed it a name it has never seen, it still reaches for the same shape and fills in the blanks with whatever is statistically plausible.",
          "At each step the model is choosing the next token from a probability distribution. It does not check a database. It does not pause to notice the gap in its knowledge. It samples a likely-looking word, then the next, and the result reads to you like a fact. Karpathy calls these models statistical token tumblers, and that is exactly the failure mode: a smooth continuation with no anchor to truth."
        ]
      },
      {
        "heading": "No sense of not knowing",
        "paragraphs": [
          "The strange part is that the model may internally represent its own uncertainty. Somewhere in the network there is probably a signal that lights up when it is on unfamiliar ground. The problem is that this signal was never wired to the words \"I don't know.\" So the model stays quiet about its doubt and takes its best guess out loud instead.",
          "This is why the fix is not a clever prompt. Meta described the fix for the Llama 3 models: interrogate the model about facts, ask the same question several times, and see whether the answers are stable and correct. Where the model consistently gets it wrong, add training examples where the correct answer is \"I don't know\" or \"I don't remember.\"",
          "A few thousand of those examples let the model connect its internal uncertainty to an actual refusal. It learns that when the doubt signal is high, the right move is to say so. That single association is most of why newer assistants decline to invent an Orson Kovats where older ones happily obliged."
        ]
      },
      {
        "heading": "Vague memory versus working memory",
        "paragraphs": [
          "Here is the mental model worth keeping. The knowledge packed into the model's billions of parameters is a vague recollection. Karpathy compares it to something you read a month ago. If you read it many times, you remember it well; if you saw it once, your recall is fuzzy and unreliable. The model is the same. Facts that appear all over the internet come back sharp. Rare facts come back blurry, or wrong.",
          "The context window is different. That is the text sitting right in front of the model, the words in your prompt and the conversation so far. Karpathy calls it working memory, and it is precise. The model doesn't have to recall anything from the context; it can read it directly.",
          "This distinction changes how you should prompt. Ask a model to summarize chapter one of Pride and Prejudice and it does a passable job from its fuzzy memory of a famous book. Paste the actual chapter into the prompt and the summary gets sharply better, because now it is working from the text instead of a recollection of it. You would write a better summary after rereading the chapter too. Same mechanism."
        ],
        "pullquote": "Knowledge in the parameters is a vague recollection. Knowledge in the context window is working memory.",
        "bullets": [
          "Parameters: broad, baked-in, fuzzy for anything rare.",
          "Context window: precise, but limited to what you put there.",
          "If a fact matters, put it in the context rather than trusting recall.",
          "Common facts recall well; obscure ones are where hallucination hides."
        ]
      },
      {
        "heading": "Tools as the fix",
        "paragraphs": [
          "When you don't know a fact, you look it up. The model can do the same, if you let it. Modern assistants can emit a special token that triggers a web search. The search runs, the resulting text gets pasted into the context window, and now the model answers from that fresh text instead of from memory. The lookup refreshes its working memory, exactly like you refreshing yours.",
          "The same trick covers arithmetic and counting. Ask a model to count the dots in a big block and it guesses, because it tries to do the whole count in a single forward pass with almost no room to work. Tell it to use code and it writes a short Python snippet, runs it, and reads back the exact answer. The Python interpreter does the counting; the model just orchestrates.",
          "The lesson generalizes. For anything factual, recent, or numerical, the model does better leaning on a tool than trusting its own head. When you want it to rely on memory instead, you can say \"don't use any tools,\" and it will."
        ],
        "bullets": [
          "Web search pulls facts into the context so the model reads instead of recalls.",
          "The code interpreter computes exact answers instead of guessing them.",
          "Default to tools for facts, dates, math, and counting.",
          "You can turn tools off explicitly when you want to test raw recall."
        ]
      },
      {
        "heading": "Why spelling and counting break",
        "paragraphs": [
          "For a long time, every top model insisted there are two R's in strawberry. There are three. This looks absurd next to a model that solves math-olympiad problems, and the explanation is tokenization. The model never sees letters. It sees tokens, which are chunks of text, and \"strawberry\" arrives as a couple of chunks, not a string of characters. Counting the R's means seeing the R's, and the model can't.",
          "The same wall shows up when you ask it to print every third character of \"ubiquitous.\" That word is three tokens to the model. You can index into individual letters because your eyes see them; the model has no direct access to the characters hidden inside its tokens. Character-level tasks fail for this reason, not because the model is dim.",
          "Then there are the failures that are just weird. Ask which is bigger, 9.11 or 9.9, and the model often says 9.11. One investigation found that the neurons lighting up were the ones associated with Bible verses, where 9.11 does come after 9.9. The model gets cognitively distracted and lands on the wrong answer, even while trying to justify it with arithmetic. Some sharp edges make sense once you know about tokens. Others leave you scratching your head."
        ],
        "pullquote": "The model can win a math olympiad and still tell you 9.11 is bigger than 9.9."
      },
      {
        "heading": "The swiss cheese",
        "paragraphs": [
          "Karpathy's image for all of this is swiss cheese. The models are excellent across an enormous range of tasks, then fail randomly in some specific spot. The competence is real and the holes are real, and the holes don't line up with anything intuitive. A model that reasons through a physics problem can trip on counting letters in a common word.",
          "So don't treat these systems as infallible. Check their work. Use them for a first draft, for inspiration, for the heavy lifting, and stay responsible for the final product yourself. That is not a knock on the technology. It is the correct way to hold a tool that is brilliant and unreliable in the same breath.",
          "The practical version is short. Put the facts the model needs into the context instead of trusting its memory. Ask it to use search for anything factual and code for anything numerical. Then read the answer with the swiss cheese in mind, because the next hole is somewhere you won't expect."
        ],
        "bullets": [
          "Feed facts into the context; don't rely on baked-in recall.",
          "Route factual and numerical work through tools.",
          "Verify anything that matters before you ship it.",
          "Expect competence and random failure to coexist."
        ]
      }
    ]
  },
  {
    "slug": "teaching-llms-to-think-rl",
    "datePublished": "2026-07-02",
    "title": "Teaching models to think: RL and reasoning",
    "dek": "After a model has read the internet and copied expert answers, one stage is left. Reinforcement learning lets the model practice, discover its own way to solve problems, and start to think before it answers.",
    "author": "Oslo Vibe Coding",
    "readingTimeMin": 9,
    "kicker": "Karpathy’s deep dive · part 5 of 5",
    "takeaway": "Reinforcement learning is the practice-problem stage: the model tries many solutions, keeps the ones that reach the right answer, and discovers its own problem-solving moves instead of only imitating humans. On verifiable problems like math and code this produces real reasoning, long internal chains of thought that emerge on their own. On fuzzy tasks, where a reward has to be simulated, the same process eventually games the simulator, so it cannot be run forever.",
    "sourceUrl": "https://www.youtube.com/watch?v=7xTGNNLPyMI",
    "sourceLabel": "Watch the full 3.5-hour video",
    "sections": [
      {
        "heading": "The third stage of school",
        "paragraphs": [
          "Karpathy compares training a model to putting a child through school, using a textbook as the map. A textbook has three kinds of content. Most of it is exposition, the background knowledge you read to understand a topic. Reading exposition is pre-training, where the model builds its knowledge base from the whole internet.",
          "Next come worked problems, where an expert shows the full solution. Studying those is supervised fine-tuning: the model imitates ideal answers written by human labelers and learns to behave like a helpful assistant. Both of these stages have been standard for years, and every provider does them.",
          "The third kind of content is the practice problems at the end of each chapter. You get the question and the final answer from the answer key, but not the solution. You have to try things and discover what gets you there. That is reinforcement learning, and it is the last major stage of training. It is also the newest and least settled, which is why a public paper about it landed as a big deal."
        ]
      },
      {
        "heading": "Why imitation is not enough",
        "paragraphs": [
          "Take a simple problem: Emily buys three apples and two oranges, each orange costs two dollars, the total is thirteen dollars, what does an apple cost. There are many ways to write a correct solution. Some set up an equation, some talk through it in English, some jump straight to the answer of three. All reach the right number.",
          "If you are the human writing training data, you do not actually know which solution is best for the model to learn. A model can spend only a small, fixed amount of computation per token, so a step that is trivial for you might be too big a leap for it, and a step you find hard might be trivial for it. Its cognition is not yours. You might skip detail it needs, or spell out detail it finds obvious.",
          "So a human-written solution is a decent way to get the model into the right neighborhood, but it is the wrong tool for finding the exact path. The model needs to discover, for itself, which sequence of tokens reliably gets from the question to the answer. That discovery is what reinforcement learning is for."
        ]
      },
      {
        "heading": "Guess and check",
        "paragraphs": [
          "The mechanism is simple. Take a prompt, and have the model generate the solution many times. Because generation is stochastic, sampling one token at a time from a probability distribution, each attempt goes down a slightly different path. In practice you might sample thousands of independent attempts for a single prompt.",
          "For a math problem you already know the final answer, so you can check each attempt automatically. Some reach the correct answer and some do not. You then train the model on the ones that worked, nudging it to be more likely to take those paths in future. Nobody labeled these solutions as correct. They came from the model itself.",
          "Run this across tens of thousands of problems at once, and the model is effectively a student reviewing its own work and deciding how it should solve this kind of question. It finds token sequences that make no shaky mental leaps, that work reliably, and that use the knowledge it actually has. Guess many solutions, check them, do more of what worked."
        ],
        "bullets": [
          "Sample many solutions per prompt, not one.",
          "Keep and train on the ones that reach the verified answer.",
          "The correct solutions come from the model, not from a human.",
          "SFT still matters: it puts the model near correct solutions so RL has something to refine.",
          "Repeat across a large, diverse set of problems."
        ]
      },
      {
        "heading": "How thinking emerges",
        "paragraphs": [
          "The DeepSeek-R1 paper made this stage public and showed what happens when RL is applied correctly to a language model. On math benchmarks, accuracy climbs steadily over thousands of training steps. That is expected. The striking part is how the model gets there.",
          "As training continues, the average length of each answer grows. The model is choosing to use more tokens. Look at what it writes and you see phrases like wait, wait, that's an aha moment, let me reevaluate this step by step. The model reconsiders its own steps, tries a different angle, backtracks, and checks its work from another perspective before committing.",
          "No human wrote those moves into a training example, because no human would know what to put there. They emerged from the optimization, purely because they raise accuracy. Karpathy calls these chains of thought, and they are the model rediscovering the cognitive strategies that happen in your head when you solve a hard problem, the part you never write down. Given only correct answers to aim at, the model taught itself to think across many tokens before answering.",
          "This freedom to go past imitation is not new. DeepMind's AlphaGo showed it years earlier. A version trained only to copy expert human games plateaued below the very top players, because you cannot surpass the people you imitate. The version trained with reinforcement learning kept climbing and beat the strongest human, Lee Sedol. In one game it played move 37, a move a human would choose about one time in ten thousand. Commentators thought it was a mistake. In hindsight it was brilliant, a strategy that lay outside how humans play. Imitation is capped at human performance. Reinforcement learning is not, and language models are only starting to show the first hints of the same effect."
        ],
        "pullquote": "The only thing we gave it was the correct answers. The thinking came out on its own.",
        "bullets": [
          "Reasoning models are trained with RL; the chain of thought is what lengthens their answers.",
          "In ChatGPT, the o1 and o3 models reason this way; GPT-4o is closer to a plain SFT model.",
          "For factual or simple questions, a thinking model is often overkill and slower.",
          "Reach for a thinking model on genuinely hard math and code, and expect to wait while it thinks."
        ]
      },
      {
        "heading": "When there is no right answer",
        "paragraphs": [
          "Math and code are verifiable. Any candidate solution can be scored automatically against a concrete answer, either by checking the boxed result or by using another model as a judge. That is why RL works so well there and can be run for a very long time. There is no way to fake solving the problem.",
          "Now ask the model to write a joke about pelicans, or a poem, or a summary. There is no answer key. You could have humans rank the outputs, but reinforcement learning needs many thousands of updates over thousands of prompts, which would mean asking people to score jokes on the order of a billion times. That does not scale.",
          "The fix is reinforcement learning from human feedback, or RLHF. Instead of asking humans to write ideal responses, show them a handful of the model's attempts and ask them to order them from best to worst, which is an easier task. This exploits the discriminator-generator gap: telling which poem is better is far easier than writing a good one. Train a separate network, the reward model, to imitate those human orderings. Now you have a simulator of human taste, and you can run RL against the simulator as often as you like."
        ],
        "bullets": [
          "Verifiable domains (math, code): score against a concrete answer, no humans needed at scale.",
          "Unverifiable domains (writing, summaries): no answer key, so human judgment has to be involved.",
          "RLHF collects human rankings, not human-written answers, which is a much easier ask.",
          "A reward model learns to imitate those rankings so RL can run automatically."
        ]
      },
      {
        "heading": "Why you cannot run RLHF forever",
        "paragraphs": [
          "RLHF genuinely helps. It lets you run reinforcement learning in creative domains and reliably produces a slightly better model. GPT-4o went through it. But the reward is a lossy simulation of human judgment, a giant neural network standing in for a real brain, and that is its weakness.",
          "Reinforcement learning is very good at finding ways to game whatever it is scored against. Run RLHF for a few hundred updates and the jokes improve. Keep going and the results fall off a cliff. The model starts producing nonsense that the reward model, inexplicably, rates as perfect. Karpathy's example is that the top-scoring joke about pelicans becomes something like the the the, which the simulator scores near one even though it means nothing.",
          "These are adversarial examples, inputs that slip into the cracks of the reward network and get fake high scores. You can add them to the training data with terrible scores, but there is always another one waiting. Karpathy's summary is that RLHF is not RL, not in the magical sense. On verifiable problems you either got the answer or you did not, the scoring cannot be fooled, and you can pour in more compute for genuinely better results. RLHF is more like a small fine-tune: run it a few hundred steps, then stop before the model learns to cheat."
        ],
        "pullquote": "You crop it, you call it, you ship it. Run RLHF too long and the model learns to trick the judge."
      }
    ]
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
