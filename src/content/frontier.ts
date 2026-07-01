// Stanford CS 153 "Frontier Systems" lecture notes, distilled into study guides.
// Auto-built from the course's 13 guest lectures (see scripts/ notes); each entry
// is one lecture with a big idea, themed sections, takeaways, a glossary, verbatim
// quotes, and an on-brand concept diagram (see components/frontier/FrontierDiagrams).
// English only, matching the site's articles/start pages.

import type { DiagramSpec } from "@/components/frontier/FrontierDiagrams";

export type Quote = { text: string; speaker: string };
export type Theme = { heading: string; body: string };
export type GlossaryItem = { term: string; def: string };

export type Lecture = {
  slug: string;
  n: number;
  speaker: string;
  org: string;
  role: string;
  youtubeId: string;
  title: string;
  oneLiner: string;
  lead: string;
  bigIdea: string;
  themes: Theme[];
  takeaways: string[];
  glossary: GlossaryItem[];
  quotes: Quote[];
  diagram: DiagramSpec;
  minutes: number;
};

export const course = {
  code: "CS 153",
  name: "Frontier Systems",
  school: "Stanford",
  term: "Fall 2025",
  url: "https://cs153.stanford.edu/",
  playlistUrl: "https://www.youtube.com/playlist?list=PLoROMvodv4rN447WKQ5oz_YdYbS74M5IA",
};

export const lectures: Lecture[] = [
  {
    "slug": "satya-nadella-microsoft",
    "n": 1,
    "speaker": "Satya Nadella",
    "org": "Microsoft",
    "role": "Chairman & CEO",
    "youtubeId": "d0Pfu6B7gIM",
    "title": "Building the Frontier Ecosystem",
    "oneLiner": "How Microsoft is building an AI ecosystem where every company keeps its own IP.",
    "lead": "Nadella walks through the $1B OpenAI bet, then lays out Microsoft's plan for a 'frontier ecosystem' where every company trains and owns its own models on its own data.",
    "bigIdea": "Nadella's core worry is what happens to the firm when models learn from data. If a company just consumes a foundation model, it leaks its value away. His answer is the 'hill climbing machine': give every company a licensed model plus the tooling to train it on their own tasks, evals, and traces, so their private IP compounds instead of leaking. The ecosystem only survives if it is positive-sum, meaning many participants operate at the frontier, not a few firms capturing all the returns.",
    "themes": [
      {
        "heading": "The OpenAI bet and prepared mind",
        "body": "Microsoft put $1 billion into OpenAI in 2019 because of what Nadella calls a 'prepared mind': the company had been obsessed with natural language for years and would back anyone with an ambitious angle on it, inside or out. The scaling laws paper convinced them that pushing the transformer with more compute and data was worth a shot. The biggest internal decision was not capital but compute concentration on one effort."
      },
      {
        "heading": "The hill climbing machine",
        "body": "Microsoft shipped seven new models trained on clean-lineage data with no synthetic data mixed in, so reasoning emerged honestly. The point is to license the weights so any company can set up its own 'hill climbing machine': its own RL environment, private evals, and traces, then welcome any model into that gym. This lets a firm keep its IP instead of handing enterprise value to a foundation model."
      },
      {
        "heading": "Agents you can contain",
        "body": "Copilot evolved from chat to co-work (delegated multi-step tasks) to autopilot via a product called Scout, a long-running enterprise agent that runs continuously with your delegated identity. Because these agents generate and execute code, containment matters. Windows will ship a sandbox container (MXC) with process, session, or VM isolation boundaries, so agents can be governed like processes were in the past."
      },
      {
        "heading": "Local compute and new form factors",
        "body": "Nadella pushes 'unmetered intelligence': tap the large install base of PC GPUs so agents run on-device when cloud tokens are scarce. A new dev box built on Nvidia's RTX will pack a petaflop of AI compute, 20 CPU cores, and 128GB unified memory, enough to run a trillion-parameter model locally. Project Solara explores agent-era hardware like a fingerprint-and-camera badge that wakes Copilot and runs tasks in the cloud."
      },
      {
        "heading": "Rethinking the silicon stack",
        "body": "Three new workloads (training, inference, and long-running agents) let Microsoft rethink chips from first principles. Maia 200 is co-designed with Microsoft and OpenAI models and already runs GPT-5.5 in production for a TCO advantage; the Cobalt ARM CPU is tuned on GitHub Copilot traces for agent loops. Microsoft runs a heterogeneous fleet, even using old GPUs to give its Fabric data warehouse a 7x speedup."
      },
      {
        "heading": "Electricity to light",
        "body": "Nadella borrows a metaphor from an earlier speaker: with electricity we sold light, not electricity, and AI still lacks that clear benefit story. He argues the industry has over-hyped the tech for its own sake, and the world will judge AI by real value delivered one community at a time, in healthcare costs or economic opportunity. If returns concentrate in a few firms, the industry loses its social permission to operate."
      }
    ],
    "takeaways": [
      "Microsoft bet $1B on OpenAI in 2019 because of a 'prepared mind' from years of obsession with natural language, not a single lucky call.",
      "The scaling laws paper (more compute plus data on the transformer) is what made the bet appealing, and the capability curve has held.",
      "A company that only consumes a foundation model cannot retain enterprise value; its IP leaks into the model.",
      "The 'hill climbing machine' gives every firm a licensed model plus its own RL environment, evals, and traces to compound private IP.",
      "Long-running agents like Scout need containment; Windows ships an MXC sandbox with process, session, or VM isolation boundaries.",
      "New dev-box hardware can run a trillion-parameter model locally with a petaflop of compute and 128GB unified memory.",
      "Maia 200, co-designed with Microsoft and OpenAI models, already runs GPT-5.5 in production for a total-cost-of-ownership edge.",
      "Nadella frames Microsoft's own culture change through growth mindset: the work is confronting your own fixed mindset, not sloganeering."
    ],
    "glossary": [
      {
        "term": "Prepared mind",
        "def": "Nadella's phrase for being conditioned by years of prior work to recognize and act on a breakthrough when it arrives."
      },
      {
        "term": "Hill climbing machine",
        "def": "A setup where a company trains a licensed model on its own tasks, evals, and traces so its IP compounds instead of leaking."
      },
      {
        "term": "Scaling laws",
        "def": "The finding that model capability keeps improving predictably as you add more compute and data to the transformer."
      },
      {
        "term": "Unmetered intelligence",
        "def": "Running AI models on local PC and edge GPUs so agents keep working without consuming scarce cloud tokens."
      },
      {
        "term": "MXC container",
        "def": "A Windows sandbox that isolates a running agent at the process, session, or VM level so its code execution can be governed."
      },
      {
        "term": "Positive-sum ecosystem",
        "def": "A market where many companies can operate at the AI frontier and keep value, not one where a few firms capture all returns."
      }
    ],
    "quotes": [
      {
        "text": "If you have a model that basically learns from data, what's the future of the firm even?",
        "speaker": "Satya Nadella"
      },
      {
        "text": "It's not about talking about growth mindset, it's about having the courage to confront one's own fixed mindset.",
        "speaker": "Satya Nadella"
      },
      {
        "text": "You will absolutely lose social permission, or we will lose social permission.",
        "speaker": "Satya Nadella"
      }
    ],
    "diagram": {
      "archetype": "loop",
      "title": "The hill climbing machine",
      "steps": [
        "License a model",
        "Set up RL environment",
        "Add private evals",
        "Train on your traces",
        "Keep the IP"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "sam-altman-openai",
    "n": 2,
    "speaker": "Sam Altman",
    "org": "OpenAI",
    "role": "Co-founder & CEO",
    "youtubeId": "F_7M4Hc-usM",
    "title": "Scale, AGI, and the Future of Everything",
    "oneLiner": "Why scaling keeps paying off, how ChatGPT happened by accident, and where AI goes next.",
    "lead": "Sam Altman returns to Stanford, where he once taught How to Start a Startup, to explain why betting on scale beat the consensus and what that means for the people building now.",
    "bigIdea": "Altman's career pattern is one bet: when something already works a little at a small scale, push it to a scale nobody has tried, because interesting new properties tend to emerge there. Most smart people talk you out of it for non-specific reasons, and humans are bad at feeling exponentials, so the move stays underexplored. OpenAI applied this to deep learning, to GPU runs across tens of thousands of chips, and to the org itself, and expects intelligence to become a utility like electricity that everyone plugs into.",
    "themes": [
      {
        "heading": "Startups have changed",
        "body": "Altman says he'd rewrite his 2014 startup class because everything about building one is different now. With an affordable amount of spend on tokens, a solo founder can do what a great engineering team used to do. Ambition, speed, and how much you can attempt at once are all higher. He warns against assigned ideas: if an idea is obvious to him, it's obvious to many, and the good ones are the four-companies-are-working-on-it, non-obvious kind that OpenAI itself was in 2015."
      },
      {
        "heading": "Scale as a design tool",
        "body": "Altman's core empirical claim, which he admits he can't fully explain, is that the most interesting things he's seen came from emergent properties at scale, or from scaling returning value long past what consensus predicts. He learned it at Y Combinator: smart people wanted smaller batches, but the network effects inside big batches were a property nobody had found because nobody had funded startups at that scale. When something works a bit at small scale, pushing it bigger is usually a good and underused idea."
      },
      {
        "heading": "Scaling breaks things",
        "body": "Scaling is always a little broken, and things fail at an accelerating, unpredictable rate, which is why people avoid it. Altman's method is to split each objection into a separate problem and solve them one at a time. For giant model runs that meant the technical question of whether a run across 10,000 to 100,000 GPUs was even possible, the capital and business question, and the cultural fight over concentrating all the compute into one bet instead of spreading it across projects."
      },
      {
        "heading": "How ChatGPT actually happened",
        "body": "OpenAI made GPT-3, needed revenue, and couldn't find a product, so it shipped an API and hoped someone else would. Copywriting was the only real business, but developers kept using their API keys just to chat. Following the YC rule of building what users already love, the team wrapped the new 3.5 model, with better instruction-following, into a chatbot as a research demo. It went viral. By day five of traffic that peaked higher each day, Altman called an emergency to build a company and product at once."
      },
      {
        "heading": "Codex and the research roadmap",
        "body": "Coding was the original plan before ChatGPT: OpenAI saw code as how models act on computers, and robots as how they act in the physical world. Codex got good in early 2026, and with the 5.5 model hit a real inflection point. Altman thinks the current pipeline of pre-training, mid-training, post-training, and RL will get AIs to do incredible work, but expects a major rewrite of it, ideally figured out by the AIs themselves. OpenAI's stated goals: an AI research intern by September 2026, and a full end-to-end researcher inventing new architectures by March 2028."
      },
      {
        "heading": "Intelligence as a utility",
        "body": "Altman frames AI as a new utility, a rare event on the level of electricity or the internet. Early electricity companies couldn't sell electricity because it sounded scary, so they sold light at night. He doesn't yet know OpenAI's version of that pitch, but expects people to buy access to the whole system, thinking in tokens or one level up, not chips. His biggest fork is whether this stays concentrated in a few companies, an attractor state he calls unstable and unfair, or gets democratized. He puts the democratic path at about 80 percent."
      }
    ],
    "takeaways": [
      "A single founder with a modest token budget can now match what took an excellent engineering team, so ambition and speed should go way up.",
      "The best startup ideas are non-obvious and barely contested; if an idea is obvious to Altman, it's already crowded.",
      "When something works a little at small scale, pushing it to an untried larger scale usually reveals valuable emergent properties.",
      "Humans are bad at feeling exponentials, so both scaling laws and organizational complexity get underestimated repeatedly.",
      "ChatGPT was an accidental hit built as a research demo on top of a chatbot pattern users had already discovered on the GPT-3 API.",
      "OpenAI's roadmap targets an AI research intern by September 2026 and an architecture-inventing AI researcher by March 2028.",
      "Frontier labs will have to become inference companies, because delivering cheap, abundant intelligence at scale is underinvested."
    ],
    "glossary": [
      {
        "term": "Scaling laws",
        "def": "The observed pattern that AI models get predictably better as you add more compute, data, and parameters."
      },
      {
        "term": "Emergent property",
        "def": "A useful behavior that appears only at a larger scale and didn't exist at all at smaller sizes."
      },
      {
        "term": "The pipeline",
        "def": "The standard training sequence across labs: pre-training, mid-training, post-training, then reinforcement learning and supervised feedback."
      },
      {
        "term": "Post-training",
        "def": "Tuning a trained model, for example for instruction-following, so it does a good job in conversation."
      },
      {
        "term": "Inference",
        "def": "Running a trained model to actually serve answers; the cost and speed of using AI rather than building it."
      },
      {
        "term": "Intelligence as a utility",
        "def": "The idea that AI becomes like electricity or internet: metered access that every person, company, and government plugs into."
      }
    ],
    "quotes": [
      {
        "text": "We were a research lab first that later had to bolt on a startup. I don't really recommend that.",
        "speaker": "Sam Altman"
      },
      {
        "text": "You are getting from us is not electricity, it's light at night.",
        "speaker": "Sam Altman"
      },
      {
        "text": "All of the frontier labs are going to have to become inference companies to a significant degree.",
        "speaker": "Sam Altman"
      }
    ],
    "diagram": {
      "archetype": "curve",
      "title": "Scaling keeps paying off",
      "xLabel": "Compute / scale",
      "yLabel": "Capability",
      "caption": "Returns keep beating forecasts"
    },
    "minutes": 4
  },
  {
    "slug": "joe-sullivan-resilience-security",
    "n": 3,
    "speaker": "Joe Sullivan",
    "org": "Ukraine Friends",
    "role": "CEO & security advisor",
    "youtubeId": "g50FHC-PzK8",
    "title": "The Road Ahead: Resilience Required",
    "oneLiner": "A convicted-then-vindicated security chief on why transparency and personal resilience decide who survives a crisis.",
    "lead": "Joe Sullivan ran security at PayPal, Facebook, Uber, and Cloudflare, then was criminally charged over the 2016 Uber breach. He walks through what actually happened and what technology leaders should learn from it.",
    "bigIdea": "Sullivan's core argument is that in a crisis, the choice you make about transparency matters more than the technical response, and that career-ending punches are survivable if you build resilience before you need it. He contrasts Uber's 2016 decision to stay quiet, which fed years of legal and reputational damage, with Cloudflare's reflex to publish a blog post during every incident, which turned a company that took down half the internet into one praised for openness. His second theme is personal: he was fired by text, doxxed, and charged with a crime, yet 200-plus letters of support and a judge who ruled 'it wasn't a cover-up' brought him back. His advice is to run toward stressful situations because the wisdom only comes from surviving them.",
    "themes": [
      {
        "heading": "At the government-tech seam",
        "body": "Sullivan has spent his career where government and tech companies collide. He started as a DOJ federal prosecutor in 1995, asking Silicon Valley firms about cybercrime that they had every incentive to hide, then crossed to the company side at eBay, where the number-one problem was trust because the original business model was 'mail cash in an envelope and hope the seller ships.' At Facebook he became the face dealing with the NSA after the Snowden leaks."
      },
      {
        "heading": "The Uber breach and trial",
        "body": "In 2016 Uber received an email from researchers who had dumped a database via a misconfigured AWS setup. Sullivan's team treated it as an incident, found the two young hackers, confirmed the data was deleted, and paid them $100,000 through the bug bounty program with legal and the CEO signed off. In 2020 he was charged with obstruction. The trial hinged on 18 USC 1030: whether Uber could grant permission after access. The judge ruled it could not, gutting his defense, and he lost."
      },
      {
        "heading": "Transparency builds trust",
        "body": "Sullivan credits Cloudflare CEO Matthew Prince, whose first question during any incident was 'who's writing the blog post?' When a bad WAF rule took down half the internet, Cloudflare called every large customer and published a detailed report, and a day later the internet was praising it for transparency instead of slamming it. His lesson: bias hard toward disclosure, because staying quiet, as Uber did, produces years of boiling negativity."
      },
      {
        "heading": "Resilience as a job requirement",
        "body": "Sullivan was fired by Uber via a text from a Bloomberg reporter, then had his company-issued phone bricked mid-crisis. He grew a beard, went into hibernation for two months, and rebuilt. His point: nobody writes 'resilience' into a job description, but in high-visibility tech roles in 2026 you will get punched in the face, so plan for it the way a boxer expects to get hit. Run toward hard situations, because the best companies hire him precisely for the wisdom the bad years gave him."
      },
      {
        "heading": "AI-era security shifts",
        "body": "Two shifts reshaped the field. Around 2018 to 2019, ransomware moved security beyond 'did data leave the building' to operational resilience: Jaguar Land Rover's 2025 ransomware attack halted all production for three months, forced a UK bailout over a billion pounds, and bankrupted supply-chain firms. Now AI-generated code is the new front. One bank went from 250,000 to 1.25 million lines of code a month, and a marketing employee merged a vulnerability to production with no idea how to fix it. Sullivan says guardrails alone cannot contain agents, so you need runtime anomaly detection, watching them like a parent chasing a toddler."
      },
      {
        "heading": "Regulation and model release",
        "body": "Sullivan supports smart regulation at scale, having testified before Congress multiple times, but notes government often shows up not knowing how to turn on a computer. On powerful cyber-capable models like Anthropic's, which he calls as strong as advertised and available to more organizations than the public lists suggest, he wants graduated release: pre-vetted orgs, signed agreements, and best practices. He thinks we are 'walking but not running' toward that, and the same closed-first, good-guys-first logic will apply to quantum, which may arrive by 2030."
      }
    ],
    "takeaways": [
      "In a security crisis, the transparency decision outweighs the technical response; disclosure builds trust while silence compounds damage over years.",
      "Cloudflare's habit of writing a blog post during every incident turned an internet-breaking outage into a reputation win.",
      "The Uber case turned on a legal question: whether a company can authorize access after the fact under 18 USC 1030; the judge said no.",
      "Sullivan's team paid the Uber hackers $100,000 with CEO and legal sign-off, treated it as an incident, and confirmed the data was deleted.",
      "Ransomware pushed cybersecurity from 'protect the data' to 'keep operations running'; Jaguar Land Rover lost three months of production to it.",
      "AI-generated code multiplies volume and lets non-engineers ship vulnerabilities they cannot fix, so security shifts to runtime anomaly detection over static guardrails.",
      "Resilience is unwritten but essential: expect to get punched in the face, plan for it, and run toward hard situations to earn the wisdom.",
      "A security leader should spend more than half their time with the other executives, not their own team, so trust exists before the crisis hits."
    ],
    "glossary": [
      {
        "term": "Responsible disclosure",
        "def": "A policy promising researchers who report a vulnerability that the company will not sue or report them to law enforcement; Sullivan published the first one at PayPal in 2007."
      },
      {
        "term": "Bug bounty",
        "def": "Paying outside researchers cash for the vulnerabilities they find; Sullivan launched one of the first at Facebook and Google now offers up to $250,000 per bug."
      },
      {
        "term": "Operational resilience",
        "def": "A security goal focused on keeping a business running through an attack, not just preventing data from leaking out."
      },
      {
        "term": "18 USC 1030",
        "def": "The U.S. computer-hacking statute; the Uber trial hinged on whether a company can grant access permission after the intrusion has occurred."
      },
      {
        "term": "Runtime anomaly detection",
        "def": "Watching an AI agent's behavior live rather than pre-defining what it may do, because you cannot scope its access purpose by purpose."
      }
    ],
    "quotes": [
      {
        "text": "Who's writing the blog post?",
        "speaker": "Joe Sullivan"
      },
      {
        "text": "You're going to get punched in the face sometimes and you got to think about how am I going to handle getting punched in the face?",
        "speaker": "Joe Sullivan"
      },
      {
        "text": "If you try and steer your career to never go through bad things, you'll never get the wisdom and experience you need to really succeed.",
        "speaker": "Joe Sullivan"
      }
    ],
    "diagram": {
      "archetype": "contrast",
      "title": "Silence vs. transparency",
      "aTitle": "Uber 2016 (silent)",
      "a": [
        "Breach kept quiet",
        "No disclosure",
        "Years of fallout",
        "Criminal charges"
      ],
      "bTitle": "Cloudflare (open)",
      "b": [
        "Blog post every time",
        "Called all customers",
        "Detailed report",
        "Praised, trust grew"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "amin-vahdat-google",
    "n": 4,
    "speaker": "Amin Vahdat",
    "org": "Google",
    "role": "VP & GM, ML, Systems, and Cloud AI",
    "youtubeId": "VeTqsCpcDgg",
    "title": "The Discipline of Delivering Value per Gigawatt",
    "oneLiner": "Why the real AI infrastructure metric is value delivered per gigawatt, not raw capacity.",
    "lead": "Amin Vahdat runs Google's internal compute, the fleet of TPUs behind Gemini. He argues the whole industry is measuring the wrong thing when it counts gigawatts and flops.",
    "bigIdea": "A gigawatt of AI infrastructure costs roughly $40 billion, but two gigawatts are not equal. What matters is how much capability, reliability, and value you extract from every watt and dollar, measured in something real like happy daily active users or intelligence per dollar. Getting there depends on two hard disciplines: keeping nodes reliable (at Google, under 96% node allocation is treated as a major outage) and getting system balance right, so flops, memory bandwidth, and network are provisioned in the correct ratio instead of starving each other.",
    "themes": [
      {
        "heading": "Value per gigawatt",
        "body": "One gigawatt of buildout is about $40 billion of infrastructure, and prices are rising toward $50 billion. Vahdat argues gigawatts and dollars-per-gigawatt are broken measures. The question is value per dollar: if you can deliver the same capability from half the capacity, you win, and you then need to build fewer gigawatts. Reframed at the product layer, the metric is happy daily active users, paying customers, or developers getting work done, not the raw capacity sitting behind them."
      },
      {
        "heading": "Reliability is the multiplier",
        "body": "A gigawatt is roughly 150,000 to 200,000 accelerators, and training runs them synchronously, so one node failing can halt the whole computation. At Google, if node allocation drops below 96% it is considered a major outage. The old web-scale playbook of loose coupling and shrugging off single failures is gone, because in a training job every node holds a specific piece of the model and is not fungible."
      },
      {
        "heading": "System balance",
        "body": "Scaling flops is easy; building a balanced supercomputer is hard. Vahdat leans on Amdahl's law from 1967: for every unit of compute you provision, you need matching IO to feed it, or the compute starves. Today that IO is memory bandwidth (HBM) and network bandwidth. The move to mixture-of-experts and sparse models means current hardware is often out of balance, needing more memory bandwidth relative to compute, which is part of why measured utilization (MFU) is low."
      },
      {
        "heading": "Access over reliability",
        "body": "Five nines of availability means 30 seconds of downtime a year, and delivering it means running redundant 2N power feeds where half your capacity sits idle. Historically enterprises demanded five nines. Now frontier labs training models will happily trade a few days of downtime per year for double the usable capacity, because training is about throughput, not uptime. Vahdat calls this a recent and genuinely new shift in what customers ask for."
      },
      {
        "heading": "Optical circuit switches",
        "body": "Google's TPU differentiator is availability. Racks of 64 TPUs are wired into a 3D torus, and optical circuit switches, chips with 136 tiny steerable mirrors, act like a robot that unplugs and replugs fiber under software control. If a rack fails, a spare rack drops into the exact same topology position in seconds, keeping the torus whole. The same switching also lets Borg point bandwidth at whichever storage cluster a five-hour job needs, avoiding building network everywhere."
      },
      {
        "heading": "Energy and lead times",
        "body": "Vahdat's answer for the single biggest bottleneck he cannot fix with money is energy. Lead time for a net-new gigawatt is two to three years: land, permitting, grading, and a utility contract that now demands paying for the power 24/7 for 20 years because the grid has no slack. Near-term the proven path is solar, wind, and batteries; data centers in space are five-to-ten years out and carry risk. He wants each data center to be an uplift for its local grid and community, including water-sparing designs and giving power back to the grid on peak-demand days."
      }
    ],
    "takeaways": [
      "One gigawatt of AI buildout costs roughly $40 billion, and the number is climbing toward $50 billion.",
      "Stop measuring gigawatts and flops; measure value per dollar, or concretely, happy daily active users and intelligence per dollar.",
      "A gigawatt is around 150,000 to 200,000 accelerators, and in synchronous training one dead node can stop everything.",
      "Google treats node allocation below 96% as a major outage, because reliability is what turns capacity into delivered value.",
      "Amdahl's law from 1967 still holds: provision matching IO (memory and network bandwidth) for your compute or it starves.",
      "Frontier labs now trade uptime for capacity, a reversal of the old enterprise demand for five nines.",
      "Energy is the bottleneck Vahdat can least solve; a new gigawatt has a two-to-three-year lead time.",
      "Specialization is winning: Google's 8th-gen TPUs split into separate inference (8i) and training (8T) chips for the first time."
    ],
    "glossary": [
      {
        "term": "Gigawatt (of infra)",
        "def": "The unit the industry uses to size an AI datacenter buildout; about $40 billion and 150,000-200,000 accelerators."
      },
      {
        "term": "MFU / goodput",
        "def": "Model FLOPs Utilization and useful output; how much of the hardware you actually turn into real work rather than idle waste."
      },
      {
        "term": "System balance",
        "def": "Provisioning flops, memory bandwidth (HBM), and network in the right ratio so no part starves the others."
      },
      {
        "term": "Amdahl's law",
        "def": "1967 rule that a parallel system needs matching IO per unit of compute, or the compute cannot be fed and sits idle."
      },
      {
        "term": "Optical circuit switch",
        "def": "A chip of steerable mirrors that reroutes fiber in software, letting a spare rack instantly replace a failed one in the topology."
      },
      {
        "term": "Five nines",
        "def": "99.999% availability, about 30 seconds of downtime a year, which requires costly 2N redundant power."
      }
    ],
    "quotes": [
      {
        "text": "The measure isn't how much money you spent per gigawatt, it's actually how much value you deliver per dollar.",
        "speaker": "Amin Vahdat"
      },
      {
        "text": "Scaling flops is easy. Building a coordinated supercomputer that scales out to 10,000, 100,000 TPUs that has the right balance point, super hard.",
        "speaker": "Amin Vahdat"
      },
      {
        "text": "There's no such thing as winners and losers in the real world. They're just people who get done and who don't.",
        "speaker": "Amin Vahdat"
      }
    ],
    "diagram": {
      "archetype": "bottleneck",
      "title": "What limits AI infra",
      "input": "$40B/GW capital",
      "constraint": "Energy + balance",
      "output": "Value per gigawatt"
    },
    "minutes": 5
  },
  {
    "slug": "garry-tan-diana-hu-yc",
    "n": 5,
    "speaker": "Garry Tan & Diana Hu",
    "org": "Y Combinator",
    "role": "President & CEO of YC; Group Partner at YC",
    "youtubeId": "Lri2LNYtERM",
    "title": "The AI-Native Company: How One Founder Becomes a 1000x Engineer",
    "oneLiner": "How a single founder plus AI agents now does the work of a whole company.",
    "lead": "Garry Tan and Diana Hu argue the startup unit of production is changing. YC portfolio companies are going from zero to tens of millions in revenue in a year, and they walk through the primitives that make it possible.",
    "bigIdea": "The bottleneck on building a company used to be people: you raised money to hire a team. AI agents change the unit of production, so a person at a terminal can do the work of roughly 500 to 1000 people. That lets a six-person team reach $10M in revenue and pushes revenue per employee to $1-2M, roughly 10x the public-company norm. Building this way means treating your company as a closed feedback loop where agents read every artifact, and treating skills, resolvers, and evals as the new org chart.",
    "themes": [
      {
        "heading": "The unit of production changed",
        "body": "Garry raised $4M and hired 10 people to build Posterous over two years; he says he rebuilt that same software in about five days using a $200/month Claude Code Max plan. Diana notes YC portfolio companies now go from zero to tens of millions in revenue in a year, traction that used to take four or five years and hundreds of millions in capital. The claim: it is 2026 and a six-person team can hit $10M in revenue."
      },
      {
        "heading": "The software factory, not a co-pilot",
        "body": "Garry frames coding agents as a factory rather than autocomplete. He cites Steve Yegge's claim that agent users are 10x to 100x more productive, and says the real production test is not lines of code but 80-90% test coverage and whether customers actually pay. He calls out AI slop and hallucinations as the things you are actively fighting, not proof the tools fail."
      },
      {
        "heading": "Skills, resolvers, and skillify",
        "body": "A skill is a runbook in markdown that an agent follows, and the trick is that it can also call deterministic code. A resolver is a master index that loads an instruction only when needed, which keeps context small. Skillify goes one level up: you do a task once, get the agent to do it right, then have it write the skill plus unit tests, LLM evals, an integration test, and a trigger check so it repeats reliably."
      },
      {
        "heading": "Latent space vs deterministic code",
        "body": "Agentic systems break when you ask the LLM to do work that should be deterministic code, or hard-code work that should stay in the model. Seating eight dinner guests is easy in latent space; seating an 800-person event is not, because the model hallucinates. The pattern is to make the fuzzy LLM layer and the exact code layer work together. Garry's example: a TypeScript context-now file with tests so the agent stops thinking it is 3am in Greenwich."
      },
      {
        "heading": "The company as a closed loop",
        "body": "Diana borrows from control systems: old companies run open-loop, so errors accumulate in unwritten meeting notes, DMs, and vibes until decisions drift. An AI-native company is closed-loop, with an agent that has read access to every artifact the company produces. She says YC's own engineering team cut sprint time in half and produced 10x the work this way, and the org flattens into three roles: individual contributors, DRIs, and the AI founder."
      },
      {
        "heading": "Taste, evals, and the wedge",
        "body": "The cost of shipping code goes to zero; taste does not. Generic benchmarks like MMLU do not tell you if your product works, so founders must build domain-specific evals and label failing traces by hand. The winning go-to-market is a wedge: pick a painful workflow, go undercover as a forward-deployed engineer, and automate messy real work. Examples: Salient (bank loan voice agents), Happy Robot (freight), and Reducto (document processing)."
      }
    ],
    "takeaways": [
      "One person at a terminal can do the work of roughly 500 to 1000 people, and the models themselves have not caught up to this.",
      "A six-person team can now reach $10M in revenue, with revenue per employee around $1-2M, roughly 10x the public-company comp.",
      "Lines of code is a gameable metric; the true test is test coverage, whether it works for customers, and whether they pay.",
      "A skill is a markdown runbook that can call code; a resolver loads instructions on demand to keep context small.",
      "Skillify captures a one-off task as a reusable skill plus its tests, evals, and triggers, so it runs reliably next time.",
      "Run the company as a closed loop: an agent with read access to every artifact suggests next work and self-heals the system.",
      "Generic benchmarks do not prove product quality; you need domain evals and a human labeling failure traces to preserve taste.",
      "The wedge play is going undercover in a painful workflow as a forward-deployed engineer, then automating the messy real work."
    ],
    "glossary": [
      {
        "term": "SAFE",
        "def": "Simple Agreement for Future Equity, YC's two-page funding document that became the seed-stage standard, used as the analogy for what code and markdown will standardize next."
      },
      {
        "term": "Skill",
        "def": "A markdown runbook of steps an agent follows to do a task, which can also invoke deterministic code."
      },
      {
        "term": "Resolver",
        "def": "A master index that tells the agent which instruction file to load only when a task needs it, keeping the context window small."
      },
      {
        "term": "Skillify",
        "def": "Promoting a proven one-off agent task into a reusable skill complete with unit tests, LLM evals, integration tests, and a trigger check."
      },
      {
        "term": "Closed loop",
        "def": "A company run like a control system where an agent reads every artifact and feeds errors back tightly, versus lossy open-loop information trapped in people's heads."
      },
      {
        "term": "DRI",
        "def": "Directly Responsible Individual, the single owner of an outcome who orchestrates ICs and agents to reach a goal."
      }
    ],
    "quotes": [
      {
        "text": "Your generation is going to create the cognitive layer for all of society.",
        "speaker": "Garry Tan"
      },
      {
        "text": "You sitting in front of one of these terminals can do the work of about 500 to 1,000 people.",
        "speaker": "Garry Tan"
      },
      {
        "text": "Shipping code is going to zero, the cost of it. But what is not going to zero is the taste to build something good.",
        "speaker": "Diana Hu"
      }
    ],
    "diagram": {
      "archetype": "contrast",
      "title": "Old vs AI-native company",
      "aTitle": "Old company",
      "a": [
        "Raise, then hire",
        "Open loop, lossy",
        "Middle managers route info",
        "4-5 yrs to Series B",
        "Revenue/head < $100k"
      ],
      "bTitle": "AI-native company",
      "b": [
        "Founder plus agents",
        "Closed feedback loop",
        "ICs, DRIs, AI founder",
        "Zero to tens of M in 1 yr",
        "Revenue/head $1-2M"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "jensen-huang-nvidia",
    "n": 6,
    "speaker": "Jensen Huang",
    "org": "NVIDIA",
    "role": "Founder & CEO",
    "youtubeId": "tsQB0n0YV3k",
    "title": "The Compute Behind Intelligence",
    "oneLiner": "Why co-designing the whole system, not just the chip, made AI compute a million times cheaper.",
    "lead": "Jensen Huang argues computing is being reinvented for the first time in 64 years. The unit of design is no longer the chip, it is the whole rack, and the metric that matters is tokens per watt.",
    "bigIdea": "For 64 years the computer stayed roughly the same, and now it does not. Software is generated by neural networks in real time instead of pre-recorded and retrieved on demand. NVIDIA's edge is co-design: optimizing algorithms, compilers, chips, networking, and storage together rather than in separate silos. That co-design bought about a million times more compute over ten years, which is what let researchers stop curating data and just feed the model everything.",
    "themes": [
      {
        "heading": "Computing is being reinvented",
        "body": "The mental model of a computer has been stable since the IBM System/360 in 1964. Huang's own first architecture textbook was the System/360 manual. What changed is that old computing was pre-recorded content you retrieve on demand, and new computing is generated in real time, so it can be contextually relevant and respond to intent, not just explicit instructions. That shift rewrites every layer: how you write software, how you run it, the systems, the networking, the applications."
      },
      {
        "heading": "Co-design and the million-x",
        "body": "In the old world, chip designers, compiler writers, and language people worked in separate fields. Co-design, in the tradition of John Hennessy's RISC work, optimizes them together: a simpler machine matched to a smart compiler beats two parts each optimized alone. Moore's Law gave about 10x every five years but stalled when Dennard scaling ran out roughly a decade ago. NVIDIA's co-design across CPUs, GPUs, networking, switches, and storage delivered about a million times more compute over ten years instead."
      },
      {
        "heading": "Measure tokens per watt, not FLOPs",
        "body": "FLOPs is a contrived metric: necessary but not sufficient. Huang says he would rather run at LOW MFU (model FLOPs utilization), because that means he is over-provisioned on FLOPs, memory bandwidth, network, and capacity, so no single resource bottlenecks the work (avoiding Amdahl's law). The real unit is tokens per watt, roughly intelligence per watt. He cited a leaked memo that XAI's Memphis cluster runs near 11% MFU."
      },
      {
        "heading": "Prefill vs decode, disaggregated",
        "body": "Running a large model has two phases: prefill (context and attention processing) and decode (generating the output tokens). Decode is the memory-bandwidth-hungry part, and the bandwidth needed is far more than one chip can supply. So NVIDIA ganged 72 GPUs into the first rack-scale computer, Grace Blackwell NVLink 72, delivering high tokens per watt even at very low MFU by disaggregating decode from prefill. That generation was a 50x speedup in two years, where Moore's Law would have given 2x."
      },
      {
        "heading": "A roadmap keyed to the workload",
        "body": "Each chip generation is designed for the compute pattern of the moment. Hopper was built for pre-training. NVLink 72 / Grace Blackwell for inference and decode. Vera Rubin for agents, which need long-term memory in storage wired straight to the GPU and a low-latency CPU (Vera) for the single-threaded tool calls agents fire off. Feynman is aimed at swarms of agents with subagents of subagents."
      },
      {
        "heading": "The economics of intelligence",
        "body": "If computing is a million times faster, everything about computing changes, the way society would change if you could cross the country in ten minutes. Because future compute is both generated and continuous rather than initiated per use, Huang estimates we will need on the order of a thousand times more energy, and would not be shocked to be off by a couple orders of magnitude. The levers are energy efficiency through co-design, plus market forces now strong enough to build sustainable energy without subsidies."
      }
    ],
    "takeaways": [
      "The computer's mental model was stable for 64 years since the IBM System/360, and generative real-time compute breaks it.",
      "Co-design (chips + compilers + networking + storage optimized together) bought roughly a million times more compute over ten years versus about 100x from Moore's Law.",
      "The reason models train on the whole internet is that co-design made compute so fast that curating data became unnecessary.",
      "FLOPs is the wrong scoreboard; tokens per watt (intelligence per watt) is the real one, and low MFU can mean you are healthily over-provisioned.",
      "Decode, not prefill, is the bandwidth bottleneck in inference, which is why NVIDIA built the 72-GPU NVLink rack and disaggregated the two phases.",
      "The chip roadmap tracks the workload: Hopper for pre-training, Grace Blackwell for inference, Vera Rubin for agents, Feynman for agent swarms.",
      "AI compute will likely need about a thousand times more energy, making this the best-ever moment to build sustainable power because the market now pays for it."
    ],
    "glossary": [
      {
        "term": "Co-design",
        "def": "Optimizing algorithms, compilers, chips, networking, and storage together instead of as separate specialized fields."
      },
      {
        "term": "MFU (Model FLOPs Utilization)",
        "def": "The percentage of a chip's FLOPs actually used during work; Huang prefers it low, meaning over-provisioned rather than starved."
      },
      {
        "term": "Tokens per watt",
        "def": "Output tokens generated per unit of energy, Huang's proposed real measure of intelligence delivered, driven more by bandwidth than FLOPs."
      },
      {
        "term": "Prefill vs decode",
        "def": "Prefill processes the input context and attention; decode generates output tokens and is the memory-bandwidth-hungry phase."
      },
      {
        "term": "NVLink 72 / Grace Blackwell",
        "def": "NVIDIA's rack-scale computer ganging 72 GPUs so decode has enough aggregate memory bandwidth; a 50x jump in two years."
      },
      {
        "term": "Dennard scaling",
        "def": "The physics that let transistors shrink at constant power density and underpinned Moore's Law; it ran out roughly a decade ago."
      }
    ],
    "quotes": [
      {
        "text": "In the case of Nvidia and co-design, we got 1 million x over 10 years.",
        "speaker": "Jensen Huang"
      },
      {
        "text": "I just delivered incredibly high tokens per watt with extremely low MFU.",
        "speaker": "Jensen Huang"
      },
      {
        "text": "The goal of AI is not training. The goal of AI is inference.",
        "speaker": "Jensen Huang"
      }
    ],
    "diagram": {
      "archetype": "pipeline",
      "title": "Chip roadmap by workload",
      "stages": [
        "Hopper: pre-train",
        "Blackwell: inference",
        "Vera Rubin: agents",
        "Feynman: agent swarms"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "scott-nolan-general-matter",
    "n": 7,
    "speaker": "Scott Nolan",
    "org": "General Matter",
    "role": "Founder & CEO",
    "youtubeId": "wisccQYTRQc",
    "title": "Energy Bottlenecks",
    "oneLiner": "Energy, not chips, is the real constraint on AI, and it traces down to uranium enrichment.",
    "lead": "Scott Nolan runs a uranium enrichment startup that won a $900M DOE contract 24 months after founding. He walks a chain of bottlenecks from AI down to one missing industrial step the US no longer does.",
    "bigIdea": "Everything in AI converges to the cost of electricity, because chips and models keep getting cheaper but power is what you actually consume to run models. Follow that constraint down and you get a chain: AI needs power, clean base-load power at scale means nuclear, nuclear needs fuel, and fuel needs enrichment, a step where the US holds under 0.1% of world capacity and still imports from Russia. Nolan's argument is that enrichment is the deepest bottleneck on AI scaling on a five-year horizon.",
    "themes": [
      {
        "heading": "Power over chips",
        "body": "The class frames AI as a factory manufacturing intelligence, with compute as one bottleneck. Nolan zooms out: powering the data centers is a separate, larger problem. Even with a data center ready, if you cannot get power to it, you cannot train models. He cites Sam Altman testifying to the Senate that all costs converge to the cost of energy, Jensen Huang and Elon Musk agreeing, and Balaji arguing all costs should be denominated in joules."
      },
      {
        "heading": "The demand shock",
        "body": "ChatGPT in late 2022 was the first consumer killer app and triggered a compute and energy crunch by early 2023, because taping out chips and standing up data centers takes about two years. Nolan marks Claude 4.6 in December 2025 as the enterprise killer app: adults came back from winter break, used it at work, and enterprise demand spiked. US electricity demand is now super-linear while grid growth has been near flat for 20 years, so the country must go from a standstill to a China-like or steeper build rate."
      },
      {
        "heading": "From stranded power to nuclear",
        "body": "Five years ago the play was stranded energy: unused hydro, geothermal, or wind in remote areas, first monetized by Bitcoin miners like Crusoe, which needed little connectivity. Those cheap resources are now claimed. Data centers need uptime and base load, so the field moved to natural gas turbines, but turbine lead times have stretched to years. On safety and emissions, nuclear scores best, lowest carbon and roughly tied with wind for safest, which is why hyperscalers are turning to it despite a 5 to 10 year ramp."
      },
      {
        "heading": "The enrichment gap",
        "body": "Every reactor burns fuel and must be refueled every year or two. Fuel comes from five steps: mine, convert to gas, enrich, convert back to solid, form pellets. Enrichment is the middle step, and the US holds under 0.1% of world capacity today, down from about 86% in the 1980s. The country cannot produce its own nuclear fuel at scale and still imports from Europe and Russia despite sanctions. Enrichment is also the biggest cost in advanced fuel, so it becomes the bottleneck all the way up to AI."
      },
      {
        "heading": "How the US lost it",
        "body": "After the Berlin Wall fell, the Megatons to Megawatts program down-blended Russian warheads into reactor fuel, and cheaper European and Russian supply plus free trade made US enrichment uneconomical. The last US commercial enrichment site shut in 2013. Nolan calls it path dependency: an expensive domestic technology, disarmament supply, and free trade combined to sunset the whole capability, and the need came back faster than anyone planned for."
      },
      {
        "heading": "Building the primitive",
        "body": "General Matter treats enrichment as a fundamental primitive, like SpaceX reducing space to dollars per kilo to orbit. Founded January 2024 by a first-time hardware founder, staffed with people from national labs, Tesla, and SpaceX, it won a $900M DOE contract 24 months later with a ~100-person team. Its facility is in Paducah, Kentucky, the same city as the last US commercial enrichment site, on 100 undeveloped acres. Nolan's advice: ignore surface narratives and memes, go many clicks deeper, and work on the important problem your skills uniquely fit."
      }
    ],
    "takeaways": [
      "Chips and models keep getting cheaper, so AI costs converge on the cost of electricity, which is what you consume to run models.",
      "A ready data center is useless if you cannot get power to it, which is why Nolan draws electricity larger than compute on his factory map.",
      "US electricity demand is now super-linear while grid expansion has been nearly flat for 20 years, requiring a jump from standstill to near-vertical build.",
      "Stranded power, first used by Bitcoin miners, has mostly been claimed, pushing builders to gas turbines with multi-year lead times.",
      "Nuclear has the lowest carbon emissions of any source and is roughly tied with wind for safest, but ramps over 5 to 10 years, not overnight.",
      "The US holds under 0.1% of world enrichment capacity today versus about 86% in the 1980s and still imports fuel from Russia despite sanctions.",
      "General Matter won a $900M DOE enrichment contract 24 months after founding with a team of about 100 people, evidence AI is creating new physical-economy jobs."
    ],
    "glossary": [
      {
        "term": "Enrichment",
        "def": "Refining mined uranium to raise the concentration of the fissile isotope U-235 to the level a reactor needs; the middle of five fuel-making steps."
      },
      {
        "term": "Base load",
        "def": "Power that runs continuously and reliably, the always-on floor of supply that data centers need for uptime, as opposed to intermittent solar or wind."
      },
      {
        "term": "Stranded energy",
        "def": "Power supply with no nearby demand, like remote hydro, geothermal, or West Texas wind, cheap to grab but now mostly claimed."
      },
      {
        "term": "HALEU",
        "def": "High-Assay Low-Enriched Uranium, a more enriched fuel grade that advanced small and micro reactors require."
      },
      {
        "term": "Megatons to Megawatts",
        "def": "A post-Cold War program that down-blended Russian warhead uranium into US reactor fuel, which helped make domestic enrichment uneconomical."
      },
      {
        "term": "Terawatt",
        "def": "A unit of power equal to a trillion watts; a benchmark for how much new generation AI demand may need within a decade."
      }
    ],
    "quotes": [
      {
        "text": "Everything is going to converge to the cost of energy, to the cost of electricity.",
        "speaker": "Scott Nolan"
      },
      {
        "text": "Even if you have a data center ready to go, if you can't get power to it, doesn't matter. It's over.",
        "speaker": "Scott Nolan"
      },
      {
        "text": "The US is actually unable to produce its own nuclear fuel at any scale whatsoever.",
        "speaker": "Scott Nolan"
      }
    ],
    "diagram": {
      "archetype": "bottleneck",
      "title": "What chokes AI scaling",
      "input": "AI compute demand",
      "constraint": "US enrichment",
      "output": "Powered data centers"
    },
    "minutes": 4
  },
  {
    "slug": "ben-horowitz-a16z",
    "n": 8,
    "speaker": "Ben Horowitz",
    "org": "Andreessen Horowitz (a16z)",
    "role": "Co-founder & General Partner",
    "youtubeId": "B8NvdfssGac",
    "title": "Venture Capital Systems & Network Effects",
    "oneLiner": "How a16z redesigned venture capital as a network, and what stays defensible when AI erases old moats.",
    "lead": "Ben Horowitz walks through the systems choices behind a16z: why they centralized control, treated the firm as a network effect, and how AI just rewrote the rules of what makes a company defensible.",
    "bigIdea": "a16z was built as a system, not just a checkbook. They centralized control so the firm could reorganize into new categories, spent fee money on building a relationship network instead of salaries, and bet that software would create ~200 breakout companies a year instead of the industry's assumed 15. The deeper lesson: with AI you can finally throw money at a problem and catch a competitor, so code and UI stop being moats and defensibility shifts to network effects, supply-chain relationships, and culture.",
    "themes": [
      {
        "heading": "Two dated VC ideas",
        "body": "When they started in 2009, Horowitz saw two stale assumptions. First, VC firms had a great product for investors but a bad one for founders, since they mostly just handed over money. Second, everyone believed only about 15 companies a year would ever reach $100M in revenue, so the whole industry just fought to invest in those 15. a16z bet that software eating the world would push that number closer to 200."
      },
      {
        "heading": "Centralize control, share economics",
        "body": "Traditional partnerships share both economics and control, which makes reorganizing almost impossible because everyone gets a vote and nobody willingly gives up power. a16z split those: partners share economics but control is centralized. That let them reorganize and expand into whole new categories like American Dynamism, crypto, and bio. They also kept splitting into small groups, since a real truth-seeking conversation tops out around seven people with good chemistry, and 30 people is a presentation, not a conversation."
      },
      {
        "heading": "The firm as a network effect",
        "body": "Horowitz treated the firm itself as a network. Network value scales like n-squared, so five nodes is worth 25 and six is worth 36, and at internet scale it becomes nearly impossible to rival. a16z tried to build relationships with every engineer, executive, and technology-buying corporation in the Valley, so a founder could tap that network and get powerful instantly. The hard part is always bootstrapping, like selling the first telephone when there is nobody to call."
      },
      {
        "heading": "Bootstrapping with hacks",
        "body": "To bootstrap the network from behind, the partners paid themselves nothing and spent the fee money on building relationships. Their edge was a hack: having sold a prior company to Hewlett-Packard, they knew HP's enterprise briefing center staff, so they called weekly to get the numbers of visiting corporations and invited those companies to see a16z's startups. Overnight they knew more big buyers than firms 50 years old. Rivals nicknamed them 'A-ho' and dismissed the moves as 'just marketing,' which meant they never copied what was working."
      },
      {
        "heading": "AI breaks the old moats",
        "body": "For Horowitz's whole career the rule was you could not throw money at a problem, because nine women can't have a baby in a month and communication overhead kills you. AI changed that: with enough GPUs and data you can now catch a competitor. So code is no longer a moat and neither is UI. Demand is effectively unlimited because the products just work, which is why companies can go from single-digit to tens of billions in run rate fast. The question becomes what actually differentiates you now."
      },
      {
        "heading": "Culture and defensibility",
        "body": "Culture, quoting the samurai, is a set of actions, not a set of beliefs, so it means concrete behaviors like whether you answer a question in an hour or a week, not platitudes about integrity. A clear standard lets you correct people without infighting. On defensibility, Horowitz pointed to Navan, a travel-software company whose moat is thousands of global airline and hotel supply relationships plus the channel to the travel manager, exactly the boring, unglamorous work an AI lab would never bother to replicate."
      }
    ],
    "takeaways": [
      "a16z centralized control and shared only economics, which is what let the firm reorganize into new categories like crypto and bio.",
      "A truth-seeking investment conversation tops out around seven people; beyond that it becomes a presentation, so keep splitting into small groups.",
      "Network value scales like n-squared, but the real difficulty is always bootstrapping the network when it has few nodes.",
      "They bootstrapped a16z's network by paying themselves nothing and spending fee money on relationships, plus an HP briefing-center hack to reach big corporate buyers.",
      "With AI you can finally throw money at a problem and catch a two-year lead, so code and user interface are no longer durable moats.",
      "Defensibility now comes from network effects, hard-to-copy supply-chain relationships (like Navan's global travel deals), and culture, not from the software itself.",
      "The best ideas come from trying to solve a real problem you have, which usually surfaces a bigger problem, rather than trying to swallow the earth from day one.",
      "Culture is a set of actions, not beliefs; a company needs one leader to break ties, because a dictatorship beats a democracy in a competitive fight."
    ],
    "glossary": [
      {
        "term": "Network effect",
        "def": "The property where each new user makes the whole network more valuable, with value scaling roughly like the square of the number of nodes."
      },
      {
        "term": "Bootstrapping a network",
        "def": "The hard early phase of getting a network started when there are too few nodes to be useful, like selling the first telephone."
      },
      {
        "term": "LP (Limited Partner)",
        "def": "An investor, such as a university endowment, that puts money into a venture fund rather than running it."
      },
      {
        "term": "Moat",
        "def": "A durable barrier that stops competitors from copying a company; Horowitz argues code and UI no longer qualify in the AI era."
      },
      {
        "term": "SaaS apocalypse",
        "def": "The Wall Street narrative that AI will one-shot cheap software companies, which Horowitz treats as an overblown, tradable overreaction."
      },
      {
        "term": "Voting vs weighing machine",
        "def": "Buffett's idea that markets price on narrative in the short run and on actual financial results in the long run."
      }
    ],
    "quotes": [
      {
        "text": "You can't share control. We'll share economics but we'll centralize control.",
        "speaker": "Ben Horowitz"
      },
      {
        "text": "A culture is not a set of beliefs, it's a set of actions.",
        "speaker": "Ben Horowitz"
      },
      {
        "text": "With AI you can throw money at the problem, because if you have enough GPUs and enough data you can basically solve most problems right now.",
        "speaker": "Ben Horowitz"
      }
    ],
    "diagram": {
      "archetype": "network",
      "title": "a16z's relationship web",
      "center": "a16z",
      "nodes": [
        "Engineers",
        "Executives",
        "Corporate buyers",
        "Founders",
        "LPs"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "nikhyl-singhal-skip",
    "n": 9,
    "speaker": "Nikhyl Singhal",
    "org": "Skip",
    "role": "Founder & CEO (ex-VP Product at Meta and Google)",
    "youtubeId": "BQrJ4lHAjhc",
    "title": "Product Management in the AI Era",
    "oneLiner": "Why the info-mover PM is dying and the hands-on product builder is booming.",
    "lead": "Nikhyl Singhal has had over a thousand career conversations with product leaders. He maps how the PM role changes at each stage of a company and why AI kills the parts most PMs hate.",
    "bigIdea": "Product management is really two words, and companies bold-faced the wrong one. The last five years grew huge teams of 'product MANAGERS' whose job was moving and packaging information for some other decider, and AI now does that better and cheaper. What survives and gets paid is the 'PRODUCT builder': someone with the judgment to decide what to build, whether it works, and whether it fits the system. So layoffs and record hiring are happening at once, for different classes of person.",
    "themes": [
      {
        "heading": "What a PM actually is",
        "body": "In every tech company some people build stuff and some sell stuff, and the PM is the glue in between, connecting what you're trying to build with how to build it. Old-school enterprise (IBM, Microsoft) ran on a project manager writing a rigid PRD to hand to engineers. Consumer companies had no such playbook: the founder was the product person, and Apple famously ships with just a designer and an engineer, no PMs."
      },
      {
        "heading": "The four-stage S-curve",
        "body": "Singhal's core framework: a company's growth curve creates four totally different PM jobs. Stage 1 is finding product-market fit through rapid experimentation, and PMs don't exist here, only founders. Stage 2, once you feel the 'sucking sound' of real demand, you stop experimenting and add a quieter PM function for predictability, process, and getting multiple teams aligned. Stage 3 is hypergrowth, where big PM teams scale the hit product and expand into adjacent lines. Stage 4 is big-tech late stage, where you fight the innovator's dilemma and force zero-to-one bets again."
      },
      {
        "heading": "Solve real problems, iterate fast",
        "body": "From Google Hangouts failing: it solved an inside-the-building problem (seven code bases, one unified app) that customers didn't actually have, while WhatsApp won with a reliable text-only play in India and layered voice and video on later. Three lessons: solve a real customer problem not an imagined one, stick with things that look weak early, and win on iteration speed. Chrome shipped every six weeks vs Firefox's quarter and IE's year, so it won."
      },
      {
        "heading": "AI kills the info-mover",
        "body": "Three years ago, at zero interest rates, everyone had six job offers but hated their jobs, because product was responsibility without authority: packaging information for someone else to decide. AI removes exactly that drudgery, so leaders now report more joy because they can whip out Claude Code and build directly instead of depending on an engineer, designer, or boss. A morning agent summarizes every customer chat and sales call in prioritized order, which used to sound like science fiction."
      },
      {
        "heading": "Layoffs and record hiring together",
        "body": "Big tech faces 30 to 70 percent layoffs this year alongside skyrocketing salaries; the top 1 percent of PM pay has more than doubled in 18 months and Singhal helped negotiate four eight-figure product-leader contracts. There are more open PM roles now than ever. Companies over-hired PMs during free-money years to organize, not build, and are pulling back to where they were five years ago. The person most at risk is the mid-30s middle manager who only knows how to move information."
      },
      {
        "heading": "How to stay hireable",
        "body": "Brand is at an all-time low; Anthropic and OpenAI don't care what logo you carried, they can tell in an interview how modern you are with the tools. Three things matter: be current and hands-on with AI tools and have an opinion on what to build; build a durable network (he still talks to 25 undergrad classmates who brought him luck); and hold a systems-programming mindset, because when you can build anything by expression, the whole problem becomes should you build it, does it fit, and is it working."
      }
    ],
    "takeaways": [
      "Product management is 'product' plus 'manager', and the last five years wrongly emphasized 'manager'; AI is now collapsing the manager half.",
      "PMs don't exist during the product-market-fit search; that stage belongs to founders doing rapid experimentation.",
      "Product-market fit is a 'sucking sound', a natural pull, and the moment it hits you must stop experimenting and start building consistency.",
      "The winning products at Google always started ugly; what mattered was speed of iteration, not how good the launch looked.",
      "Hangouts failed because it solved an inside-the-building problem customers didn't have; WhatsApp won with a reliable text-only core.",
      "Careers are chapters in a book, not periods in a hockey game: 50 working years at 2 to 3 years per job means 15 to 18 jobs, so optimize the sequence.",
      "Always join an environment growing slightly faster than you; when you get comfortable and stop learning, it's time to leave."
    ],
    "glossary": [
      {
        "term": "PRD",
        "def": "Product requirements document, the rigid spec a project manager once wrote and handed to engineers in old enterprise software."
      },
      {
        "term": "Product-market fit",
        "def": "When enough people naturally pull on your product that you can keep going; Singhal calls it a 'sucking sound'."
      },
      {
        "term": "S-curve of growth",
        "def": "The company growth arc whose four stages (fit, scale, hypergrowth, late-stage) each demand a different kind of PM."
      },
      {
        "term": "Forward deployed engineer",
        "def": "A technical person who embeds with a customer to solve their problem, then pulls those learnings back into the core product."
      },
      {
        "term": "Info-mover",
        "def": "Singhal's term for a PM whose job is packaging and moving information for someone else to decide, the role AI now replaces."
      },
      {
        "term": "Skip",
        "def": "Singhal's company, a talent-agency and community for top 'product builders', with ~125 heads of product from firms like Anthropic and OpenAI."
      }
    ],
    "quotes": [
      {
        "text": "Product-market fit means that you've got a sucking sound. You've built something, all of a sudden there's a natural pull.",
        "speaker": "Nikhyl Singhal"
      },
      {
        "text": "Your career is not like periods in a hockey game. It's like chapters in a book.",
        "speaker": "Nikhyl Singhal"
      },
      {
        "text": "There's no more management. It's all about building. It's all about being hands-on.",
        "speaker": "Nikhyl Singhal"
      }
    ],
    "diagram": {
      "archetype": "curve",
      "title": "The product S-curve",
      "xLabel": "Company maturity",
      "yLabel": "Scale / pull",
      "caption": "Each stage needs a new kind of PM"
    },
    "minutes": 4
  },
  {
    "slug": "amit-jain-luma-ai",
    "n": 10,
    "speaker": "Amit Jain",
    "org": "Luma AI",
    "role": "Co-founder & CEO",
    "youtubeId": "6nUl_w5W9Wk",
    "title": "Unified Intelligence Systems",
    "oneLiner": "One transformer that understands and generates text, image, video, and audio together.",
    "lead": "Amit Jain explains why Luma abandoned 3D capture for video, and why the next models must fuse language-style reasoning with the physics understanding of visual models into one backbone.",
    "bigIdea": "Today's image and video models are 'beautiful pixel generators' with almost no understanding, no memory, and no multi-turn ability. Luma's bet is a single transformer backbone that encodes audio, image, video, text, and code into one space and reasons about them together, like a brain where the modality-specific parts are just encoders feeding one cortex. The point is not prettier pixels but intelligence expressed in whatever medium the user needs, generation and understanding welded together the way an LLM already does for text.",
    "themes": [
      {
        "heading": "Design around the data",
        "body": "Luma started betting on 3D because it carries more information than images, and built a popular capture app (Luma 3D Capture) that productionized NeRF and Gaussian splats. It never mattered: no single company can outscale decades of internet photos and video. The lesson is to design algorithms around where the data already exists, not invent a pristine algorithm and starve it. Robotics hits the same wall now, there is no internet of action data."
      },
      {
        "heading": "Why video, then why not enough",
        "body": "When Nvidia's Hopper GPUs arrived in 2023, learning the world from video became feasible, since video is two dimensions of space plus one of time and the brain learns 3D through that time proxy. Luma shipped Dream Machine in March 2024 and hit 6 million users in weeks because Sora was announced but unreleased. By early 2025 the realization repeated on an annual cycle: video alone lacks human logic, causality, and why an event matters."
      },
      {
        "heading": "Unified vs disparate towers",
        "body": "In 2025 the field bolted separate language, image, video, and audio towers together with a thin fusion bridge, the way Stable Diffusion attaches a small text component. Jain says that thin bridge is the ceiling. Nano Banana is a large diffusion tower and a large language tower joined by a narrow 700-800M-parameter encoder, so it could not draw his schematic diagrams. Luma spent about a year and many failed attempts building a genuinely single backbone that now scales to hundreds of billions of parameters."
      },
      {
        "heading": "Understanding plus generation",
        "body": "In text, an LLM understands and generates in one model with no delta between them. In visual AI those two halves are split: VLMs understand images but cannot generate, diffusion models like Flux generate but do not understand. Jain's frame is that pixels carry information the same way words do, a poem and a math proof are both just words, so how you arrange pixels determines their intelligence. Unified models express that intelligence in text, slides, or video as convenient."
      },
      {
        "heading": "The end-to-end factory",
        "body": "Luma's stack is a model at the bottom orchestrating tool calls and reading multimodal input, a tool harness in the middle for Linux and APIs, and a fat skills layer on top holding domain knowledge as context. The slides in the talk were made one-shot by Uni 1 using an internally-written 50-page slide-design skill. Deployment is a REPL loop (read-eval-print), and Luma bets on mega-models sharing deep connective tissue rather than many small federated models with a judge on top."
      },
      {
        "heading": "The creative economy bet",
        "body": "Luma targets roughly 120 million creatives, two-to-three times the number of coders, whose daily job is replicating real-world physics in computers. Customers include Netflix and Amazon Prime (Prime's Moses show, at $4.5M per episode, is produced largely with Luma agents), Publicis, and Coca-Cola moving $3 billion of annual content production. Luma raised about $1.5 billion total, a billion in the last year, and argues visual AI is a strict superset of language work that will surpass LLMs as robotics arrives."
      }
    ],
    "takeaways": [
      "Scale of data wins over data quality: design your algorithms around where the data already is, because no company can outscale the internet.",
      "Luma pivoted from 3D capture to video because video packs space plus time and no app can capture enough 3D to learn the world.",
      "Dream Machine reached 6 million users in weeks in 2024 largely because Sora was announced but not released.",
      "Fused architectures with a thin bridge (like Nano Banana's ~700M-parameter encoder) hit a hard ceiling on visual reasoning tasks.",
      "A unified model encodes text, image, video, audio, and code into one transformer backbone and reasons about them in one space, like a single cortex.",
      "The multi-turn breakthrough that made LLMs useful (RLHF, memory, iteration) is exactly what image and video models still lack.",
      "The product is part of the lab: user preference and interaction traces are the feedback loop that makes each next model better."
    ],
    "glossary": [
      {
        "term": "Unified model",
        "def": "One transformer backbone that both understands and generates across text, image, video, and audio, instead of separate stitched-together models."
      },
      {
        "term": "Differentiable",
        "def": "A function you can put in a training loop with a loss, so gradient descent can optimize it; if it isn't differentiable, deep learning can't learn it."
      },
      {
        "term": "NeRF / Gaussian splats",
        "def": "Techniques that reconstruct a 3D scene from 2D photos; Luma was first to productionize them in its capture app."
      },
      {
        "term": "VLM",
        "def": "Vision-language model: it can understand images but cannot generate them, unlike a diffusion model which generates but doesn't understand."
      },
      {
        "term": "Skills layer",
        "def": "Domain knowledge given to the model as context (like a 50-page slide-design doc), not baked into weights or tools."
      },
      {
        "term": "PE mindset",
        "def": "Jain's term for private-equity thinking in Hollywood: rent-seek a proven franchise with endless sequels instead of trying many new ideas."
      }
    ],
    "quotes": [
      {
        "text": "When someone says slop, it means they have never seen or used a good AI system before.",
        "speaker": "Amit Jain"
      },
      {
        "text": "Image models and video models that are not unified models are really really stupid. They have no understanding of what the hell they're generating.",
        "speaker": "Amit Jain"
      },
      {
        "text": "Just like language models produce words, how you arrange the pixels determines what they're conveying and how intelligent they are.",
        "speaker": "Amit Jain"
      }
    ],
    "diagram": {
      "archetype": "contrast",
      "title": "Fused towers vs backbone",
      "aTitle": "Stitched towers",
      "a": [
        "Language tower",
        "Image tower",
        "Video tower",
        "Thin fusion bridge",
        "No shared reasoning"
      ],
      "bTitle": "Unified model",
      "b": [
        "One encoder space",
        "One transformer",
        "Reason across modalities",
        "Understand + generate",
        "Multi-turn memory"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "andreas-blattmann-black-forest-labs",
    "n": 11,
    "speaker": "Andreas Blattmann",
    "org": "Black Forest Labs",
    "role": "Co-founder (co-creator of Stable Diffusion)",
    "youtubeId": "CBaLU0dDEY8",
    "title": "Visual Intelligence",
    "oneLiner": "Why image and video generation, not language, is the foundation of real machine intelligence.",
    "lead": "Andreas Blattmann helped invent Stable Diffusion in a small German lab with far less compute than Google or OpenAI. He argues the path to smarter AI runs through pixels, sound, and physical interaction, not just text.",
    "bigIdea": "Blattmann's core claim is that intelligence should be built the way babies learn it: first by observing natural signals like video and audio, then by interacting with the physical world. Text is a compact human invention that carries a lot of meaning per symbol, but it is only one narrow slice of how we understand the world. So instead of stacking vision on top of a language model, Black Forest Labs trains one multimodal model on natural data, because a model that watches a bottle hit a table AND hears the sound learns the physics far better than one trained on a single modality.",
    "themes": [
      {
        "heading": "Latent diffusion origins",
        "body": "As a PhD student in Heidelberg around 2019, Blattmann and co-founders Robin and Patrick had far less compute than Google or OpenAI. Images are much higher-dimensional than text, so training a generator directly on raw pixels is wasteful. Their fix was latent diffusion: first train a compression model (like a learned JPEG encoder) that maps images to a smaller representation that still looks equivalent to humans, then run the generator in that compact latent space. This cut compute by orders of magnitude and became the algorithm behind Stable Diffusion, released in 2022."
      },
      {
        "heading": "Natural vs human-made signals",
        "body": "Blattmann splits data into natural representations (video, audio) and human-made ones (text). Natural signals come from sources we cannot control, like sunlight and sound, and they carry a lot of redundancy, which is exactly why images and video must be compressed before training. Text is the opposite: evolution stripped out redundancy so humans could communicate efficiently, so each symbol packs high information. He argues real intelligence starts from natural signals, the way a three-year-old who cannot yet read still understands the world better than a language model."
      },
      {
        "heading": "From unimodal to multimodal",
        "body": "Stable Diffusion was unimodal, a text-to-image model built for content creation. Today the frontier is one multimodal model trained jointly on image, video, and audio. The payoff is cross-modal correlation: if a model always hears a sound when two rigid bodies collide, it learns what is physically happening far better than a model that only sees. This unlocks capabilities beyond art, including physical AI, robotics, computer use, and world simulation, all from a single unified model."
      },
      {
        "heading": "Bootstrapping the Flux flywheel",
        "body": "When Black Forest Labs started, Blattmann's team focused narrowly on one gap: image models could not even draw hands with five fingers. In three months they shipped Flux 1, a text-to-image model aimed at being 10x better. Watching real users revealed they wanted precise control, not just text prompts, because a prompt like 'a blue bird' matches infinitely many images. That feedback led to Flux 1 Kontext, an editing model with reliable character consistency, letting you drop a real person into a new scene. Revenue from Kontext roughly doubled within six weeks, and Meta partnered with the roughly 25-person team to power image editing across its 2 billion users."
      },
      {
        "heading": "Open weights and verification",
        "body": "Visual quality is hard to verify because 'good' depends on who is looking, unlike code where you can run unit tests. That subjectivity is the argument for open models: give away good general weights and let Meta, or a government with different cultural preferences, customize the last mile for their own users. Physical tasks flip this. Once you hook a model to a robot, the real world enforces what is possible, so post-training becomes actual interaction that closes the feedback loop with verifiable data."
      },
      {
        "heading": "Diffusion vs autoregressive",
        "body": "Blattmann frames diffusion and language models as two sides of one coin. Diffusion models iterate along an artificial noise-to-image time axis, which makes them data-inefficient in training but lets you distill a 50-step model down to two or four steps for fast inference. Autoregressive language models iterate along the data itself, token by token, which is data-efficient to train but hard to speed up at inference. His open research question: combine the training efficiency of autoregressive models with the fast, distillable inference of diffusion models."
      }
    ],
    "takeaways": [
      "Latent diffusion trains the generator in a compressed representation, not raw pixels, cutting compute by orders of magnitude and enabling Stable Diffusion.",
      "Blattmann argues intelligence should be built from natural signals (video, audio) first, then interaction, the way a young child learns before it can read.",
      "Training one multimodal model lets it learn cross-modal correlations, like the sound of a collision, which teaches physics better than any single modality alone.",
      "Focus was the founding move: Black Forest Labs attacked one narrow gap (hands with five fingers) and shipped Flux 1 in three months.",
      "The user feedback loop, not raw research, drove Flux 1 Kontext, an editing model that finally solved character consistency and doubled revenue in six weeks.",
      "Open weights create commercial value where preferences are subjective and heterogeneous, because customers can customize the model for their own audience.",
      "Diffusion models distill from 50 steps down to two or four for fast inference; autoregressive models are data-efficient but must generate token by token."
    ],
    "glossary": [
      {
        "term": "Diffusion model",
        "def": "A generator that starts from pure noise and iteratively denoises it into an image, video, or audio sample."
      },
      {
        "term": "Latent space",
        "def": "A compressed representation of an image that stays perceptually equivalent to humans but is far smaller and cheaper to model."
      },
      {
        "term": "Multimodal model",
        "def": "A single model trained jointly on several natural signals (image, video, audio) rather than one type of input."
      },
      {
        "term": "Character consistency",
        "def": "Editing an image so a specific person or object stays recognizably the same across new scenes and prompts."
      },
      {
        "term": "Adversarial diffusion distillation",
        "def": "A technique that compresses a many-step diffusion model into a two-to-four-step one for fast, cheap generation."
      },
      {
        "term": "Self-Flow",
        "def": "Black Forest Labs' published method for aligning a generative model's internal representations across multiple modalities so it understands, not just draws."
      }
    ],
    "quotes": [
      {
        "text": "You should start with from first principles how we humans do it, and that's clearly learning on natural representations by first observing, and second interacting.",
        "speaker": "Andreas Blattmann"
      },
      {
        "text": "We're training a unified multimodal model for natural representations on natural data that then can give rise to so much more.",
        "speaker": "Andreas Blattmann"
      },
      {
        "text": "The mark of a good leader is to not panic, keep calm, look at the data, assess the landscape, and then come up with a plan step by step.",
        "speaker": "Anshul Ramachandran"
      }
    ],
    "diagram": {
      "archetype": "pipeline",
      "title": "How diffusion models learn",
      "stages": [
        "Natural data",
        "Compress to latent",
        "Multimodal pre-train",
        "Add actions",
        "Interact via robot"
      ]
    },
    "minutes": 5
  },
  {
    "slug": "mati-staniszewski-elevenlabs",
    "n": 12,
    "speaker": "Mati Staniszewski",
    "org": "ElevenLabs",
    "role": "Co-founder & CEO",
    "youtubeId": "vfF011ko89o",
    "title": "The Future of Voice Systems",
    "oneLiner": "How ElevenLabs became a frontier audio lab by fixing one modality: voice.",
    "lead": "Mati Staniszewski walks through building ElevenLabs from a Discord text-to-speech bot to a company past $430M in revenue in 36 months, and lays out where voice AI goes next.",
    "bigIdea": "ElevenLabs won by staying obsessively focused on one modality and one hard problem: making generated speech sound genuinely human. Rather than build every part of the dubbing pipeline, they picked the single component that mattered most (text-to-speech generation) and pushed it past the state of the art, then expanded modality by modality. Voice becomes a core interface because it carries emotion, tone, and context that text strips away, and the systems that capture that will define how people and businesses talk to machines.",
    "themes": [
      {
        "heading": "The Polish dubbing problem",
        "body": "Staniszewski and co-founder Piotr, both Polish and ex-Google/Palantir, were bothered that foreign films in Poland are narrated by a single flat monotone voice reading every character. Their founding bet was that the future lets anyone access any content in any language with real tonality and emotion. That is the AI dubbing problem they set out to solve."
      },
      {
        "heading": "The cascaded pipeline",
        "body": "Dubbing needs three chained models: transcription (who spoke, strip background noise), translation via an LLM, and text-to-speech to recast the audio in the new language while borrowing the original performance. Each component had to work for the whole to work. In 2022, before the GPT moment, LLM translation was still poor, so the full pipeline broke."
      },
      {
        "heading": "Innovate on the last mile only",
        "body": "Talking to studios and creators revealed simpler needs first, like voice-over corrections and reading scripts. So they narrowed to the common denominator across every use case: text-to-speech generation. They chose not to innovate on transcription or the LLM and instead pushed the frontier on making speech sound natural, replicate a voice's characteristics, and follow the delivery a sentence's context demands."
      },
      {
        "heading": "Tiny team, tiny compute",
        "body": "The first ElevenLabs checkpoint was inspired by Tortoise TTS, an open-source model James Betker built at Google on nights and weekends that sounded human on short fragments but was slow and unstable on longer text. ElevenLabs' early models were hundreds of millions of parameters, trained on free credits from programs like NVIDIA Inception, costing tens of thousands of dollars. They skipped a $6,000 patent as too expensive at that stage."
      },
      {
        "heading": "Year by year to real time",
        "body": "2022 was the first natural-speech breakthrough. 2023 brought voice cloning, a voice marketplace, and creator tooling. 2024 delivered AI localization, seen when Javier Milei's UN speech and Lex Fridman's interviews with world leaders were dubbed while keeping each speaker's iconic delivery. 2025 finally made models fast enough for real-time interactive voice agents."
      },
      {
        "heading": "Cascaded versus fused",
        "body": "The open question for voice agents is whether to keep three separate models (cascaded) or train one that generates speech tokens directly (fused). Staniszewski's read: cascaded wins on reliability, intelligence, and tool-calling for enterprise use, so it is right for the next few years. Fused wins on latency (roughly 300ms) and is better for companion-style uses where reliability matters less. Most customers will blend both depending on the moment."
      },
      {
        "heading": "The business engine",
        "body": "ElevenLabs crossed 2025 at $330M in revenue and added over $100M ARR in a quarter to pass $430M, with about 450 people in teams of under 10 that own their decisions and move fast. Revenue scales predictably with deployment, not just compute. On pricing, Staniszewski's rule: start from the value you deliver, never the cost, and aim to capture about one tenth of that value."
      }
    ],
    "takeaways": [
      "Pick one modality and one hard problem, push it past the state of the art, then expand. ElevenLabs did voice generation first, then transcription, dubbing, agents, and music.",
      "Being close to users via Discord and PLG taught them which of three pipeline components (transcription, translation, TTS) to actually fix first.",
      "Text-to-speech was the common denominator across every customer need, so improving it unlocked the most use cases at once.",
      "The two 2022 breakthroughs: making delivery follow a sentence's emotional context, and letting the model infer voice characteristics instead of hardcoding gender, accent, and age.",
      "Cascaded architectures are best when reliability, intelligence, and tool-calling matter; fused models win on latency for lower-stakes interactions.",
      "Emotionality is now becoming controllable in both approaches, which required a large data-labeling effort to teach models what happy, sad, or stressed delivery sounds like.",
      "Voice should not be used for authentication anymore, because voices are now easy to replicate; safety comes from watermarking and traceability instead.",
      "Price from the value delivered, target capturing one tenth of it, and never price up from cost."
    ],
    "glossary": [
      {
        "term": "Cascaded architecture",
        "def": "A voice system that chains three separate models: speech-to-text, an LLM, then text-to-speech."
      },
      {
        "term": "Fused (omni) model",
        "def": "A single model trained to go straight from incoming audio to generated speech tokens without a text step, favoring speed over reliability."
      },
      {
        "term": "Text-to-speech (TTS)",
        "def": "Turning written text into spoken audio; the generation step ElevenLabs chose to specialize in."
      },
      {
        "term": "PLG",
        "def": "Product-led growth, letting creators and developers adopt the product directly rather than through a sales motion."
      },
      {
        "term": "Tortoise TTS",
        "def": "An open-source speech model by James Betker that first sounded human on short fragments but was slow and unstable on long text."
      },
      {
        "term": "Middle-to-middle",
        "def": "Using AI as an iterative step inside a creative workflow rather than an end-to-end prompt-to-output button, to avoid AI slop."
      }
    ],
    "quotes": [
      {
        "text": "You can go further together.",
        "speaker": "Mati Staniszewski"
      },
      {
        "text": "Never start from the cost, start from the value and work backwards from there.",
        "speaker": "Mati Staniszewski"
      },
      {
        "text": "We crossed 2025 at 330 million in revenue, and this quarter was our biggest quarter.",
        "speaker": "Mati Staniszewski"
      }
    ],
    "diagram": {
      "archetype": "pipeline",
      "title": "Cascaded voice pipeline",
      "stages": [
        "Speech in",
        "Transcription",
        "LLM reasoning",
        "Text-to-speech",
        "Speech out"
      ]
    },
    "minutes": 4
  },
  {
    "slug": "anjney-midha-frontier-systems",
    "n": 13,
    "speaker": "Anjney Midha",
    "org": "Andreessen Horowitz (a16z)",
    "role": "General Partner",
    "youtubeId": "O5PfU_uDhS0",
    "title": "Frontier Systems",
    "oneLiner": "The AI economy is a full stack, and its two live bottlenecks are context and compute.",
    "lead": "The instructor's framing lecture for the quarter: AI has triggered a full-stack rewrite of how software is built, and the people who win will control verifiable context and stable compute.",
    "bigIdea": "Every layer of the tech stack, from capital and power down to chips, models, apps and governance, is being rebuilt at once, and that upheaval is the opportunity. The scaling recipe (raise money, buy compute, add data, train, deploy, feed the results back through reinforcement learning) now works so reliably that the real fights have moved to two inputs: who owns a context that can be reliably verified, and who can secure compute that is not fungible and keeps getting more expensive. Progress runs fastest in domains you can verify, like code and materials, and slowest in ones you cannot, like beauty and love.",
    "themes": [
      {
        "heading": "The full stack",
        "body": "Midha lays out the stack every guest speaker maps onto: capital, then land/power/shell (energy and data centers), then chips, then cloud software, then models and agents, then applications, then governance and safety. For 15 years this stack was stable. AI has forced everyone at every layer to revisit basic assumptions about where they sit in the value chain, which he calls the great transition."
      },
      {
        "heading": "The scaling recipe",
        "body": "The path from research to product is now industrial, not bespoke. You raise money, buy compute, add data, pre-train a state-of-the-art model, deploy it for inference, and get two flywheels: inference revenue funds the next batch of compute, and usage generates context feedback that you pipe back through reinforcement learning. Base models train roughly twice a year on the order of 100,000 top-end GPUs; the reinforcement learning step now eats nearly as much compute as everything else combined."
      },
      {
        "heading": "Context is the moat",
        "body": "Since the recipe is repeatable, value accrues to whoever has unique, defensible, and verifiable context, meaning the environment an agent learns in. Ask where a task can be reliably measured: code passes unit tests, materials can be physically checked (Periodic Labs uses RL from physical verification to hunt superconductors). Midha's example of the fight: when OpenAI moved to buy the coding tool Windsurf, Anthropic cut off its model access within days, because a rival distilling your customer interactions is context leakage."
      },
      {
        "heading": "Sovereign context",
        "body": "Not all context is equal. Developer code is fine to send to a cloud server abroad; government records, defense, and national data are not. That is why Mistral, founded by the co-creators of Llama and the Chinchilla scaling paper, ships open-weight models that run locally under a customer's control. The U.S. Cloud Act, which lets the government reach data on U.S.-run servers anywhere, is why sovereign AI and infrastructure independence are now real markets breaking the cloud oligopoly."
      },
      {
        "heading": "Compute is not a commodity",
        "body": "The dogma that chips are a commodity is wrong right now. Anthropic's revenue tracks its compute buildout closely: about 60 to 90 days after new compute comes online, capability jumps, then revenue jumps. A dollar of hardware (land, power, chips, trading at 3 to 4x revenue) converts into software revenue worth 30 to 40x, roughly a 10x value transformation. Prices of the 2-year-old H100 are rising, not falling, and chips are not fungible even within one vendor's lineup."
      },
      {
        "heading": "History rhymes, so standardize",
        "body": "Steel, fiber optics, DRAM, shipping, uranium: every general-purpose technology runs a cycle of buildout, hoarding, panic, crash, then stabilization. AI is unusual because it marshals massive physical atoms (land, power, chips) to make a purely digital thing (intelligence). To move past the boom-bust, compute needs to become fungible, which takes agreed standards (like TCP/IP or AC/DC) and institutions to enforce them for public benefit. We are in the pre-standardization era, and the students' assignment is to help design that peaceful transition."
      }
    ],
    "takeaways": [
      "The AI stack has clear layers: capital, land/power, chips, cloud, models, apps, governance, and every layer is being renegotiated at the same time.",
      "The scaling recipe is now repeatable, so competitive advantage shifts from the recipe to owning context that can be reliably verified.",
      "Reinforcement learning started working at scale about two years ago because LLM priors are general enough to keep learning instead of plateauing.",
      "RL progress is fastest in verifiable domains (code, materials) and weak where verification is hard (creative writing, aesthetics, love).",
      "Compute is not fungible today: H100 prices are rising, chips differ across and within vendors, and demand is spiky and hard to forecast.",
      "Anthropic's revenue lags its compute buildout by about 60 to 90 days, showing capability scales predictably with compute.",
      "Turning compute into a real commodity needs standards plus institutions to enforce them and reallocate hoarded capacity toward public benefit."
    ],
    "glossary": [
      {
        "term": "Context",
        "def": "The environment and feedback an agent learns from; whoever owns verifiable context can keep improving a model in that domain."
      },
      {
        "term": "Context feedback loop",
        "def": "Piping real usage results (like whether a coding agent solved a task) back through RL to keep raising capability."
      },
      {
        "term": "Reinforcement learning (RL)",
        "def": "Training by rewarding a system for completing a task rather than telling it how, now the compute-heaviest stage of model training."
      },
      {
        "term": "Sovereign AI",
        "def": "AI infrastructure a government or org runs on its own hardware so sensitive data never leaves its control."
      },
      {
        "term": "Fungible",
        "def": "Interchangeable unit for unit; megawatts are fungible, but GPUs today are not, which is why compute behaves like a scarce commodity."
      },
      {
        "term": "Recursive self-improvement",
        "def": "When the compute and context flywheels get good enough to propel themselves; Midha frames it at the system level, not one super-model."
      }
    ],
    "quotes": [
      {
        "text": "We are now in the full-stack rewrite, and I need you guys to start thinking up and down the stack.",
        "speaker": "Anjney Midha"
      },
      {
        "text": "Anybody who told you chips are a commodity should probably get a phone call from you.",
        "speaker": "Anjney Midha"
      },
      {
        "text": "Progress is fastest in easily verifiable domains.",
        "speaker": "Anjney Midha"
      }
    ],
    "diagram": {
      "archetype": "stack",
      "title": "The frontier AI stack",
      "layers": [
        "Capital",
        "Land / power",
        "Chips",
        "Cloud",
        "Models",
        "Apps",
        "Governance"
      ]
    },
    "minutes": 5
  }
];

export const getLectureBySlug = (slug: string): Lecture | undefined =>
  lectures.find((l) => l.slug === slug);

export const allLectureSlugs = (): string[] => lectures.map((l) => l.slug);

export const youtubeUrl = (id: string): string => `https://www.youtube.com/watch?v=${id}`;
