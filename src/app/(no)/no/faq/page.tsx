import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Section";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { hreflangAlternates } from "@/lib/i18n";
import { links } from "@/content/links";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Vanlige spørsmål om Oslo Vibe Coding",
  description:
    "Svar på de vanligste spørsmålene om Oslo Vibe Coding: hva vibe coding er, om du må kunne kode, om det er gratis, og hvor og når vi møtes.",
  alternates: { canonical: "/no/faq", languages: hreflangAlternates("/faq") },
  openGraph: {
    title: "Vanlige spørsmål · Oslo Vibe Coding",
    description: "Hva vibe coding er, om du må kunne kode, om det er gratis, og hvor vi møtes.",
    url: `${SITE_URL}/no/faq`,
    locale: "nb_NO",
    alternateLocale: ["en_US"],
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Hva er vibe coding?",
    a: "Vibe coding betyr å bygge programvare ved å beskrive hva du vil ha til en AI-modell og styre den med tilbakemeldinger, i stedet for å skrive hver linje selv. Andrej Karpathy ga det navnet tidlig i 2025, og Collins kåret det til årets ord for 2025.",
  },
  {
    q: "Må jeg kunne kode fra før?",
    a: "Nei. Oslo Vibe Coding er for nybegynnere først. Mange som kommer har aldri skrevet en linje kode. Du tar med en idé, og verktøyene og folkene hjelper deg å bygge den.",
  },
  {
    q: "Er det virkelig gratis?",
    a: "Ja, helt gratis. Vi er et ideelt fellesskap. Det er ingenting å kjøpe og ingen hake. Vi mener at rimelig og trygg tilgang til AI ikke bør være et privilegium.",
  },
  {
    q: "Hvor og når er samlingene?",
    a: "Vi møtes i Oslo, omtrent ukentlig, på steder som Spaces Stortorvet og andre lokaler rundt i byen. Neste dato dukker alltid opp på Luma først, så bli med der eller på WhatsApp for å høre når den er satt.",
  },
  {
    q: "Hva bør jeg ta med?",
    a: "En laptop, en idé hvis du har en, og lyst til å prøve. Det er hele listen.",
  },
  {
    q: "Hvem er det for?",
    a: "Alle. Helt ferske, nysgjerrige ikke-utviklere, designere, studenter og erfarne utviklere som vil bygge med AI. Ingen erfaring nødvendig.",
  },
  {
    q: "Hvilke verktøy bruker dere?",
    a: "Det som får deg i gang. Vanlige valg er Lovable (beskriv en app, få en ferdig utrullet), Cursor (en AI-først-editor) og Claude Code (en terminalagent for ekte kodebaser). Du trenger bare ett for å starte.",
  },
  {
    q: "Er det på engelsk eller norsk?",
    a: "Begge deler. Samlingene går på en blanding, og du trenger ikke norsk for å delta. Denne nettsiden finnes på engelsk og norsk.",
  },
  {
    q: "Kan en helt fersk person faktisk bygge noe på én kveld?",
    a: "Ja. De fleste går fra en første samling med noe lite de faktisk har laget selv. Jobben er mest å beskrive hva du vil ha og styre modellen, ikke å pugge syntaks.",
  },
  {
    q: "Hvordan blir jeg med?",
    a: "Meld deg på neste samling på Luma, eller bli med i WhatsApp-fellesskapet for å holde deg oppdatert. Begge deler er gratis.",
  },
];

export default function FaqPageNo() {
  return (
    <div lang="nb-NO">
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd
        locale="no"
        items={[
          { name: "Hjem", path: "/" },
          { name: "Vanlige spørsmål", path: "/faq" },
        ]}
      />

      <header className="bg-night text-paper">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-40">
          <Eyebrow dark>Spørsmål og svar</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Vanlige spørsmål
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-dim">
            Alt folk vanligvis lurer på om Oslo Vibe Coding, våre gratis drop-in-samlinger for koding med AI
            i Oslo. Fortsatt usikker? Bare kom på en samling.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <dl className="divide-y divide-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-7 first:pt-0">
              <dt className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{f.q}</dt>
              <dd className="mt-3 leading-relaxed text-ink-soft">{f.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 rounded-card bg-night p-8 text-center text-paper sm:p-10">
          <h2 className="font-display text-2xl font-bold tracking-tight">Kom og bygg med oss.</h2>
          <p className="mx-auto mt-3 max-w-md text-cream-dim">
            Den beste måten å lære dette på er i et rom med andre. Samlingene våre er gratis og åpne for helt
            ferske.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={links.luma}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ember px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ff6f47]"
            >
              Meld deg på neste samling
            </a>
            <Link
              href="/no/kom-i-gang"
              className="rounded-pill border border-night-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
            >
              Ny til dette? Start her
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
