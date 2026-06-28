// Curated LinkedIn updates surfaced on the site.
//
// On "auto-pulling LinkedIn": LinkedIn has no public API to fetch a page/person feed
// without partner approval, and scraping breaks their terms. The robust, legitimate way
// is the official post embed (each post → "Embed this post" → an iframe URN). Drop the URN
// into `embedUrn` to render the real post; otherwise the curated card (text + link) shows.
// Editing this file is the 10-second way to add an update — that's the "modular" promise.

export type Post = {
  author: string;
  authorHandle: string;
  when: string;
  excerpt: string;
  url: string;
  // Optional: official LinkedIn embed URN, e.g. "urn:li:share:7300000000000000000"
  embedUrn?: string;
};

export const posts: Post[] = [
  {
    author: "Vibe Coding Oslo",
    authorHandle: "vibesoslo",
    when: "This week",
    excerpt:
      "No pressure. No gatekeeping. No “you need 5 years of React experience to sit here” energy. Just bring your laptop, an idea if you have one, and a willingness to vibe.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7473379246615388160/",
    embedUrn: "urn:li:activity:7473379246615388160",
  },
  {
    author: "Harsh Trivedi",
    authorHandle: "harshtrivedi13",
    when: "3 weeks ago",
    excerpt:
      "Bring an idea. Bring a project. Bring a half-broken app. Bring curiosity. You don't need to be an expert. You just need to show up. Because honestly, no one should feel lonely while coding.",
    url: "https://www.linkedin.com/in/harshtrivedi13/",
  },
  {
    author: "Akshat Jain",
    authorHandle: "akijain2000",
    when: "3 weeks ago",
    excerpt:
      "Cheap code moves the work up the stack, toward specifying, reviewing and judging. ATMs did it to tellers. Spreadsheets did it to accountants. Compilers did it to programmers. Thanks to everyone who came.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7469147112270798848/",
  },
  {
    author: "Akshat Jain",
    authorHandle: "akijain2000",
    when: "2 weeks ago",
    excerpt:
      "Take advantage of the tokens the labs are offering. Think of this as your seed round. Use it to build, experiment and learn before the cost of acquiring the same knowledge becomes much higher.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7471486687756394497/",
  },
  {
    author: "Harsh Trivedi",
    authorHandle: "harshtrivedi13",
    when: "1 month ago",
    excerpt:
      "We ran our first AI Vibes session and honestly, it was a blast. Come with an idea, a messy project, a random question, or just curiosity. No one should code alone or sit on an idea because they do not know where to start.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7465073264382455808/",
  },
];
