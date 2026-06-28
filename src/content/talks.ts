// Talks + decks the organisers have shared. These are the "presentations" section —
// proof that this community produces real, useful material, not just hangouts.
// `postUrl` points at the LinkedIn post where the deck lives (until self-hosted PDFs exist).

export type Talk = {
  title: string;
  pages: number;
  summary: string;
  takeaways: string[];
  postUrl: string;
  author: string;
};

export const talks: Talk[] = [
  {
    title: "What cheap AI does to the developer's job",
    pages: 32,
    author: "Akshat Jain",
    summary:
      "Two old ideas, one new reality. The Bitter Lesson says methods that lean on computation win, so bet on the model and keep your scaffolding thin. Jevons Paradox says efficiency raises total use: when intelligence got 280× cheaper, we used far more of it.",
    takeaways: [
      "Cheap code moves the work up the stack: toward specifying, reviewing and judging.",
      "ATMs did it to tellers. Spreadsheets did it to accountants. Compilers did it to programmers.",
      "Keep the scaffolding thin. Bet on the model.",
    ],
    postUrl: "https://www.linkedin.com/in/akijain2000/recent-activity/all/",
  },
  {
    title: "I spent $25,507 on AI coding agents in 12 weeks",
    pages: 14,
    author: "Akshat Jain",
    summary:
      "An honest breakdown of real spend: two agents, 34.2 billion tokens, ~2,250 commits, 95% into one production codebase. The unit economics: about $11 per commit and under two cents per net line of code.",
    takeaways: [
      "20 of 596 sessions were 85% of all tokens. The work concentrates.",
      "The single biggest run ($5,203) just opened every page of the app in a browser and tested it.",
      "As each token got cheaper, usage grew ~7,800× between March and May.",
    ],
    postUrl: "https://www.linkedin.com/in/akijain2000/recent-activity/all/",
  },
];
