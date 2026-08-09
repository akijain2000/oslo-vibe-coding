// Single source of truth for every outbound link + community channel.

import { upcomingEvent } from "./events";

// Every RSVP surface tracks the next upcoming session automatically: add the
// next event to events.ts and every Luma link on the site follows at the next
// build (the daily brief publish rebuilds the site, so rollover after a session
// passes happens within a day). Falls back to the Luma profile — which lists
// all sessions — when nothing is scheduled.
const LUMA_PROFILE = "https://luma.com/user/akijain2000";

export const links = {
  luma: upcomingEvent?.rsvpUrl ?? LUMA_PROFILE,
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
