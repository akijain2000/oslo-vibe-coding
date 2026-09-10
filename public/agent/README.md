# Build your first agent: an Oslo assistant on Telegram

Session 07, Oslo Vibe Coding, 10 September 2026. Everything here is free. No API key, no card.

You will end up with a Telegram bot that answers you, checks live Oslo departures and weather,
remembers what you tell it, and messages you first when a reminder is due.

## What you need

- A Val.town account (free): https://val.town
- Telegram on your phone or laptop
- These six files, from https://oslovibecoding.tech/agent/

## The ten steps

1. **Make the bot.** In Telegram, message `@BotFather`, send `/newbot`, pick a name and a username
   ending in `bot`. Copy the token it gives you. Keep it secret.
2. **Make a project.** In Val.town, create a new project called `oslo-assistant`.
3. **Add the files.** Create these files and paste the contents from the site:
   `agent.ts`, `tools.ts`, `memory.ts`, `model.ts`, `telegram.ts`, `reminders.ts`.
4. **Add the secret.** Project settings, Environment variables, add `TELEGRAM_BOT_TOKEN` with your token.
5. **Set the trigger on `telegram.ts` to HTTP.** Copy the URL Val.town shows for it.
6. **Point Telegram at your val.** Open this in a browser, with your own values filled in:
   `https://api.telegram.org/bot<TOKEN>/setWebhook?url=<YOUR_VAL_URL>`
   You should see `{"ok":true,"result":true}`.
7. **Talk to it.** Open your bot in Telegram, press Start, ask: "What is the weather like this afternoon?"
   Then: "When is the next tram from Jernbanetorget?" Watch the logs in Val.town; you will see the tool calls.
8. **Teach it about you.** "My home stop is Majorstuen." Then ask "Should I leave now?"
9. **Set the trigger on `reminders.ts` to Cron**, every 15 minutes (`*/15 * * * *`).
10. **Ask for a reminder.** "Remind me at 08:00 tomorrow to bring my laptop." Within 15 minutes of that
    time, the agent messages you without being asked. That is the moment it became an agent.

## The four layers, and where they live

| Layer | File | What it adds |
|---|---|---|
| 1. Chat | `model.ts`, `telegram.ts` | A model answers a message. This is a chatbot. |
| 2. Tools | `tools.ts` | The model can *do* things: Entur departures, Yr weather. It chooses which. |
| 3. Memory | `memory.ts` | It remembers across conversations. SQLite, 10 MB free. |
| 4. Autonomy | `reminders.ts` | It acts on a schedule without being asked. Cron, 15 min free. |

The loop that ties them together is `agent.ts`. Forty lines. Read it.

## The guardrail

`maxToolCalls: 5` in `telegram.ts`. Without it, a confused model can call tools forever.
Autonomy without a stop condition is just an expensive while-loop.

## Switching models

The default is Val.town's built-in model, `gpt-5.4-nano`, which needs no key.
To use OpenRouter's free models instead, get a key at https://openrouter.ai/keys (no card),
add `OPENROUTER_API_KEY` to your environment variables, and the code switches to `openrouter/free`.
Free OpenRouter models allow 50 requests a day; a one-time $10 top-up raises that to 1,000.

## Next two sessions, same project

- **Give it an email address.** Val.town can trigger a file when an email arrives at
  `something@valtown.email`. Forward it a newsletter or a receipt; it summarises, extracts dates, files to memory.
- **Give it eyes.** A watchdog: hand it a URL and a question, it checks hourly and messages only when the answer changes.

## Running the tests on your laptop

```bash
node --test agent.test.ts
```

Node 22.18 or newer runs TypeScript directly. `agent.ts` and `tools.ts` have no Val.town dependencies.
