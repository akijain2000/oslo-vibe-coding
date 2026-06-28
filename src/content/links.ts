// Single source of truth for every outbound link + community channel.

export const links = {
  luma: "https://luma.com/ejyqzry1",
  whatsapp: "https://chat.whatsapp.com/JiCEzUuSJwBCuvYbk8E3IG",
  linkedinCompany: "https://www.linkedin.com/company/vibesoslo/",
  github: "https://github.com/akijain2000",
};

// Community channels rendered on the Join section.
export const channels = [
  {
    id: "luma",
    name: "RSVP on Luma",
    description: "Save your spot for the next drop-in. Free, always.",
    href: links.luma,
    cta: "Get a ticket",
  },
  {
    id: "whatsapp",
    name: "WhatsApp community",
    description: "Where we share what we're building between sessions.",
    href: links.whatsapp,
    cta: "Join the chat",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Follow along, see the recaps, meet the room.",
    href: links.linkedinCompany,
    cta: "Follow",
  },
] as const;
