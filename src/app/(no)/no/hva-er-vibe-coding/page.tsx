import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import SparkMark from "@/components/SparkMark";
import { FrontierDiagram } from "@/components/frontier/FrontierDiagrams";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import type { ProseBlock } from "@/content/articles";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

const DEFINITION =
  "Vibe coding betyr å bygge programvare ved å beskrive hva du vil ha til en AI-modell på vanlig språk og styre den med tilbakemeldinger, i stedet for å skrive hver linje kode selv.";

const LANGS = {
  en: "/what-is-vibe-coding",
  "nb-NO": "/no/hva-er-vibe-coding",
  "x-default": "/what-is-vibe-coding",
};

export const metadata: Metadata = {
  title: "Hva er vibe coding? En forklaring på vanlig norsk",
  description: DEFINITION,
  alternates: { canonical: "/no/hva-er-vibe-coding", languages: LANGS },
  openGraph: {
    type: "article",
    title: "Hva er vibe coding? En forklaring på vanlig norsk",
    description: DEFINITION,
    url: `${SITE_URL}/no/hva-er-vibe-coding`,
    locale: "nb_NO",
    alternateLocale: ["en_US"],
  },
};

const sections: ProseBlock[] = [
  {
    heading: "Slik fungerer det egentlig",
    paragraphs: [
      "Du beskriver hva du vil ha, modellen skriver koden og kjører den, du ser på resultatet, og du forteller den hva som er galt. Så tar du en runde til. Det er den loopen, ikke skrivingen, som er hele aktiviteten.",
      "Andrej Karpathy ga det navnet tidlig i 2025. Ideen tok av raskt nok til at Collins kåret «vibe coding» til årets ord for 2025. Så hvis det føles nytt, er det fordi det er det.",
    ],
    pullquote: "Du sier hva du vil ha, modellen skriver det, du kjører det, du sier hva som er galt, og du tar en runde til.",
    links: [{ label: "Karpathys opprinnelige notat", url: "https://x.com/karpathy/status/1886192184808149383" }],
  },
  {
    heading: "Hva det er bra til, og hvor det brister",
    paragraphs: [
      "Vibe coding er virkelig bra for å leke, lære og lage små personlige verktøy. Du kan bygge noe som fungerer på en kveld uten å kunne et programmeringsspråk fra før.",
      "Men ikke all AI-assistert programmering er vibe coding. Simon Willison trakk en nyttig grense: ekte vibe coding betyr at du lener deg på modellen og godtar resultatet uten å lese hver linje. Det er greit for prototyper. For noe du skal vedlikeholde eller sette foran ekte brukere, og spesielt noe som rører ved passord, betalinger eller andres data, må du fortsatt lese og forstå koden modellen skrev.",
    ],
    links: [
      { label: "Simon Willison: ikke all AI-assistert programmering er vibe coding", url: "https://simonwillison.net/2025/Mar/19/vibe-coding/" },
    ],
  },
  {
    heading: "Hvorfor det er mulig nå",
    paragraphs: [
      "For noen år siden betydde det å bygge programvare at du måtte lære syntaks, oppsett og en lang liste med små irritasjoner før du kunne lage noe i det hele tatt. Den muren er stort sett borte, fordi intelligens ble billig.",
      "Etter én vanlig sammenligning falt kostnaden for GPT-3.5-nivå fra rundt $20 per million tokens til rundt $0,07 på omtrent atten måneder. Billige modeller er tålmodige nok til å lose en nybegynner gjennom et bygg for nesten ingenting. Terskelen for å bygge har aldri vært lavere.",
    ],
  },
  {
    heading: "Slik prøver du det i kveld",
    paragraphs: [
      "Velg ett verktøy og én liten, ekte idé. Et personlig verktøy, en enkel én-sides side, en liten kalkulator. Beskriv det med vanlige ord, kjør det, si hva som er galt, og gjenta til det fungerer. Lite og ekte slår smart og abstrakt.",
      "Kom-i-gang-guiden vår går gjennom hele greia fra null, inkludert hvilket verktøy du bør velge og hvordan du unngår å brenne deg. Og den raskeste måten å lære på er i et rom med andre: kom på en gratis Oslo Vibe Coding-samling og bygg det neste sammen med folk rundt deg.",
    ],
    links: [
      { label: "Kom i gang med vibe coding", url: "/no/kom-i-gang" },
      { label: "Verktøyene og gratiskursene vi anbefaler", url: "/no/resources" },
    ],
  },
];

export default function HvaErVibeCodingPage() {
  return (
    <div lang="nb-NO">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: "Hva er vibe coding? En forklaring på vanlig norsk",
                description: DEFINITION,
                author: { "@id": `${SITE_URL}/#org` },
                publisher: { "@id": `${SITE_URL}/#org` },
                datePublished: "2026-07-03",
                inLanguage: "nb-NO",
                about: "Vibe coding",
                mainEntityOfPage: `${SITE_URL}/no/hva-er-vibe-coding`,
                image: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630 },
                url: `${SITE_URL}/no/hva-er-vibe-coding`,
              },
              {
                "@type": "DefinedTerm",
                "@id": `${SITE_URL}/no/hva-er-vibe-coding#term`,
                name: "Vibe coding",
                description: DEFINITION,
                inDefinedTermSet: `${SITE_URL}/no/hva-er-vibe-coding`,
              },
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        locale="no"
        items={[
          { name: "Hjem", path: "/" },
          { name: "Hva er vibe coding?", path: "/hva-er-vibe-coding" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <p className="font-mono text-xs uppercase tracking-wider text-glow">Forklart enkelt</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Hva er vibe coding?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-cream-dim">
            En forklaring på vanlig norsk, for deg som stadig hører uttrykket og vil ha den ærlige versjonen.
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-card border border-ember/25 bg-ember/[0.06] p-6 sm:p-7">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ember-ink">
            <SparkMark className="h-3.5 w-3.5" />
            Det korte svaret
          </div>
          <p className="mt-3 font-display text-lg font-medium leading-snug text-ink sm:text-xl">{DEFINITION}</p>
        </div>

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-card border border-line bg-night">
          <FrontierDiagram
            spec={{
              archetype: "loop",
              title: "Vibe coding-loopen",
              steps: ["Beskriv hva du vil ha", "Modellen skriver koden", "Kjør og se", "Si hva som er galt"],
            }}
          />
        </div>

        <div className="mt-14 space-y-14">
          {sections.map((s, i) => (
            <Prose key={i} section={s} />
          ))}
        </div>

        <div className="mt-12 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Gå og bygg noe lite.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Å lese er bra. Å bygge sammen med folk er bedre. Drop-in-samlingene våre i Oslo er gratis og åpne
            for helt ferske.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/no/kom-i-gang"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              Start her
            </Link>
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              Meld deg på neste samling
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
