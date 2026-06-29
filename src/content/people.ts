// Organisers. Kept human and short. This is a community, not a company.

export type Person = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
};

export const organisers: Person[] = [
  {
    name: "Akshat Jain",
    role: "Organiser",
    bio: "AI researcher, Perplexity AI Fellow and Global Shaper. Builds products end-to-end with coding agents and shares what he learns in the open.",
    linkedin: "https://www.linkedin.com/in/akijain2000/",
    initials: "AJ",
  },
  {
    name: "Harsh Trivedi",
    role: "Organiser",
    bio: "Data scientist who worked on mapping millions of schools worldwide for social good. Believes information, and AI, should reach everyone.",
    linkedin: "https://www.linkedin.com/in/harshtrivedi13/",
    initials: "HT",
  },
];
