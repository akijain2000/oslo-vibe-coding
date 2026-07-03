// Norwegian bokmål translation of the flagship "Getting Started with Vibe Coding"
// guide, rendered at /no/start. Section ids match guide.ts (anchor hrefs); link
// urls are shared, only labels are translated.

import type { GuideSection } from "./guide";

export const guideNo = {
  title: "Kom i gang med vibe coding",
  dek: "Vibe coding er å bygge programvare ved å beskrive hva du vil ha til en modell og styre den med tilbakemeldinger. Dette er siden som tar deg fra aldri å ha kodet til å bygge den første lille tingen din.",
  readingTimeMin: 11,
  sections: [
    {
      id: "what-vibe-coding-is",
      heading: "Hva vibe coding egentlig er",
      paragraphs: [
        "Vibe coding er å bygge programvare ved å beskrive hva du vil ha til en KI-modell og la den skrive koden, for så å styre den med tilbakemeldinger i stedet for å skrive hver linje selv. Du sier hva du vil ha med vanlig språk, modellen lager kode, du kjører den, du forteller hva som er feil, og så går du en runde til.",
        "Andrej Karpathy ga det navn tidlig i 2025. Ideen slo an raskt nok til at Collins gjorde det til sitt ord for 2025. Så hvis det føles nytt, er det fordi det er det.",
        "Den ærlige delen de fleste hopper over: ikke all KI-assistert programmering er vibe coding. Simon Willison trakk opp en nyttig grense. Ekte vibe coding betyr at du lener deg på modellen og stoler på resultatet uten å lese hver linje. Det er glimrende til lek, læring og prototyper du kaster. Men til alt du skal vedlikeholde eller sette foran ekte brukere, må du fortsatt lese og forstå koden modellen skrev. Vi kommer tilbake til hvor den grensen går, for det er forskjellen på moro og å brenne seg.",
      ],
      pullquote: "Du sier hva du vil ha, modellen skriver det, du kjører det, du forteller hva som er feil, og så går du en runde til.",
      bullets: [
        "Vibe coding: beskriv hva du vil ha, la modellen skrive koden, styr med tilbakemeldinger.",
        "Ga navn av Andrej Karpathy tidlig i 2025; Collins sitt ord for 2025.",
        "Ikke all KI-assistert koding er vibe coding (et skille fra Simon Willison).",
        "Greit å stole fullt på modellen til lek og prototyper; les koden til alt du sender ut eller vedlikeholder.",
      ],
      links: [
        { label: "Karpathys opprinnelige notat", url: "https://x.com/karpathy/status/1886192184808149383" },
        { label: "Simon Willison: ikke all KI-assistert programmering er vibe coding", url: "https://simonwillison.net/2025/Mar/19/vibe-coding/" },
      ],
    },
    {
      id: "why-now",
      heading: "Hvorfor dette er mulig nå",
      paragraphs: [
        "For noen få år siden betydde det å bygge programvare at du måtte lære deg syntaks, oppsett, verktøy og en lang liste med små frustrasjoner før du kunne lage noe som helst. Den veggen er stort sett borte, og grunnen er enkel: intelligens ble billig.",
        "Her er det ene tallet det er verdt å kunne. Etter en vanlig sammenligning, der man tar den billigste modellen som klarte den evneterskelen på hvert tidspunkt, falt kostnaden for GPT-3.5-nivå fra rundt $20 per million tokens til rundt $0.07 på omtrent atten måneder. Evnen som pleide å være dyr, ble mye billigere å bruke. Det fallet er det som gjør en nybegynnervennlig modell tålmodig nok til å lose deg gjennom en bygging til nesten ingen kostnad.",
        "Det det betyr for deg i kveld: terskelen for å bygge noe er lavere enn den noen gang har vært. Du trenger ikke være den typen som koder. Du trenger en liten idé og vilje til å gå noen runder fram og tilbake.",
      ],
      pullquote: "GPT-3.5-nivå intelligens falt fra rundt $20 til rundt $0.07 per million tokens på omtrent atten måneder.",
      bullets: [
        "Intelligens ble dramatisk billigere, fort.",
        "GPT-3.5-nivå falt fra rundt $20 til rundt $0.07 per million tokens på omtrent atten måneder.",
        "Billige modeller gjør tålmodig, nybegynnervennlig hjelp rimelig.",
        "Terskelen for å bygge har aldri vært lavere.",
      ],
    },
    {
      id: "pick-one-tool",
      heading: "Velg ett verktøy (du trenger bare ett)",
      paragraphs: [
        "Du trenger ikke å undersøke hvert eneste alternativ. Velg ett av disse tre, start i kveld, og bytt senere hvis du vil. Den største tabben nybegynnere gjør her, er å sammenligne verktøy i en time i stedet for å bygge i en time.",
        "Lovable: du beskriver en app og får en fungerende, publisert app tilbake. Det er ikke noe oppsett. Vil du ha en første seier helt uten friksjon, er dette det mildeste stedet å starte. Du skriver hva du vil ha, og en ekte ting dukker opp som andre kan åpne.",
        "Cursor: en editor bygget rundt KI. Det er den raskeste måten å faktisk kjenne hva vibe coding er, fordi du ser kode dukke opp, kjører den og former den på samme sted. Litt mer omfattende enn Lovable, men det lærer deg løkken.",
        "Claude Code: en terminalnær agent som jobber inne i ekte kodebaser. Det er det fellesskapet vårt som regel bruker på samlinger. Det er et steg opp fra de to andre og verdt å vokse inn i når du er komfortabel, ikke nødvendigvis din første kveld.",
        "Klarer du ikke å bestemme deg, start med Lovable for den kjappeste seieren, eller Cursor hvis du vil se koden mens den skjer. Ett verktøy. I kveld.",
      ],
      pullquote: "Den største tabben nybegynnere gjør her, er å sammenligne verktøy i en time i stedet for å bygge i en time.",
      bullets: [
        "Lovable: beskriv en app, få en publisert app. Beste første seier, null oppsett.",
        "Cursor: en KI-først editor. Raskeste måten å kjenne løkken.",
        "Claude Code: en terminalagent inne i ekte kodebaser. Et steg opp, det vi som regel bruker på samlinger.",
        "Du trenger bare ett for å starte. Bytt senere hvis du vil.",
      ],
      links: [
        { label: "Lovable", url: "https://lovable.dev/" },
        { label: "Cursor", url: "https://docs.cursor.com/" },
        { label: "Claude Code", url: "https://docs.claude.com/en/docs/claude-code/overview" },
      ],
    },
    {
      id: "your-first-build",
      heading: "Din første bygging, i kveld",
      paragraphs: [
        "Velg noe lite og ekte. Et personlig verktøy du faktisk ville brukt, en liten enkeltsideside, en kalkulator for noe du gjør for hånd, en tracker for en vane. Lite og ekte slår smart og abstrakt. Blir du ferdig i kveld, har du vunnet.",
        "Beskriv det så med vanlig språk. Du trenger ikke de riktige ordene. Noe sånt som: en side der jeg skriver inn et antall timer og den forteller meg hva jeg tjente. Modellen fyller inn de delene du ikke sa. Gjetter den feil, retter du den, som er hele poenget.",
        "Nå kjører du løkken. Kjør den. Se på den. Fortell modellen hva som er feil (knappen gjør ingenting, summen stemmer ikke, gjør den større). Gjenta. Dette er delen som overrasker folk: å bygge med KI er stort sett planlegging, å se nøye etter og å iterere, ikke å skrive. Skrivingen er modellens jobb. Din jobb er å vite hva du vil ha og legge merke til når det ikke er der ennå.",
        "Regn med at den tar feil av og til. Det er normalt og ikke et tegn på at du gjør noe galt. Hver korrigering er deg som styrer. Noen runder inn har du laget en ting.",
      ],
      pullquote: "Lite og ekte slår smart og abstrakt. Blir du ferdig i kveld, har du vunnet.",
      bullets: [
        "Velg noe lite og ekte: et personlig verktøy, en liten side, en kalkulator.",
        "Beskriv det med vanlige ord; la modellen fylle hullene.",
        "Løkke: kjør den, se på den, si hva som er feil, gjenta.",
        "Arbeidet er planlegging, verifisering og iterering, ikke skriving.",
      ],
    },
    {
      id: "how-not-to-get-burned",
      heading: "Hvordan du unngår å brenne deg",
      paragraphs: [
        "Vibe coding er virkelig glimrende til prototyper, læring og små personlige verktøy. Det blir risikabelt når du slutter å lese og tingen begynner å røre ved noe som betyr noe. Noen få enkle vaner holder deg trygg.",
        "Les det den gir deg når det betyr noe. For et leketøy du kaster, kan en lett gjennomlesing holde. Til alt du skal dele, vedlikeholde eller gi videre til andre, senk farten og forstå faktisk hva koden gjør. Klarer du ikke å forklare omtrent hva en bit gjør, er det signalet ditt til å be modellen forklare den før du går videre.",
        "Test det. Klikk på knappene. Prøv den rare inndataen. Prøv den tomme inndataen. Modellen vil fortelle deg at det virker; du bekrefter at det virker.",
        "Vær spesielt forsiktig med alt som rører ved passord, betalinger eller andres data. Det er sonen der et selvsikkert feil svar gjør reell skade, ikke bare en ødelagt side. Når du er der, ikke vibe forbi det. Les koden, spør hva den gjør, og spør noen hvis du er usikker. Det er ingen skam i det. Det er det erfarne folk gjør også.",
      ],
      pullquote: "For et leketøy du kaster, kan en lett gjennomlesing holde. Til alt som er ekte, les koden og forstå den.",
      bullets: [
        "Les koden når det betyr noe; stol fritt bare på prosjekter du kaster og lærer av.",
        "Test det selv: ekte inndata, rar inndata, tom inndata.",
        "Vær ekstra forsiktig med passord, betalinger og andres data.",
        "Klarer du ikke å forklare hva en bit gjør, be modellen forklare den før du går videre.",
      ],
    },
    {
      id: "levelling-up",
      heading: "Fra prompter til agenter",
      paragraphs: [
        "Når den grunnleggende løkken føles naturlig, er neste steg å gå fra engangsprompter til agenter. En engangsprompt er at du ber om én ting og får ett svar. En agent planlegger, tar flere handlinger på egen hånd og sjekker sitt eget arbeid før den leverer tilbake. Du beskriver et mål, og den jobber seg gjennom stegene.",
        "Vil du forstå hvordan dette fungerer under panseret, les Anthropics tekst «Building effective agents». Det er en klar forklaring på hvordan disse systemene settes sammen, og den vil gjøre deg mye bedre til å styre dem.",
        "Legg merke til hva som endrer seg med rollen din. Etter hvert som modellen gjør mer av selve arbeidet, forskyver ferdigheten din seg mot å spesifisere tydelig, gå gjennom det som kommer tilbake og vurdere om det faktisk er bra. Du blir den som vet hvordan «riktig» ser ut og kan se når det ikke er der ennå. Den dømmekraften er den varige ferdigheten, og det er en du kan begynne å bygge fra din aller første kveld.",
      ],
      pullquote: "Etter hvert som modellen gjør mer av selve arbeidet, blir jobben din å spesifisere tydelig, gå gjennom og vurdere hva som faktisk er bra.",
      bullets: [
        "Engangsprompt: spør én gang, få ett svar.",
        "Agent: planlegger, handler over flere steg og verifiserer sitt eget arbeid.",
        "Les Anthropics «Building effective agents» for å forstå hvordan de bygges.",
        "Ferdigheten som vokser hos deg, er å spesifisere, gå gjennom og vurdere kvalitet.",
      ],
      links: [
        { label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents" },
      ],
    },
    {
      id: "why-we-do-this",
      heading: "Hvorfor vi gjør dette gratis",
      paragraphs: [
        "Oslo Vibe Coding er et gratis, ideelt fellesskap for nybegynnere først. Vi finnes fordi billig, trygg tilgang til KI ikke bør være et privilegium. Verktøyene ble gode nok til at mange flere kan bygge, og vi mener ikke at de som får bruke det, bare skal være de som allerede kunne kode eller hadde råd til å lære.",
        "Vi er også ærlige om én ting: den beste måten å lære dette på er i et rom med andre mennesker. Du treffer en vegg, noen ved siden av deg har truffet den samme, og du er løs i to minutter i stedet for to timer. Det er vanskelig å få til alene ved et skrivebord ved midnatt.",
        "Så denne guiden er starten, ikke det hele. Bygg noe i kveld med ett verktøy og én liten idé. Kom så på en gratis Oslo Vibe Coding-samling og bygg den neste tingen med folk rundt deg. Ingen bør kode alene.",
      ],
      pullquote: "Ingen bør kode alene.",
      bullets: [
        "Gratis, ideelt, for nybegynnere først. Billig, trygg KI-tilgang bør ikke være et privilegium.",
        "Læring skjer raskest i et rom med andre mennesker.",
        "Bruk denne guiden til å starte i kveld, kom så og bygg med oss.",
        "Samlingene er gratis og åpne for helt ferske.",
      ],
    },
    {
      id: "start-tonight",
      heading: "Sjekklisten din for å starte i kveld",
      paragraphs: [
        "Du har alt du trenger. Her er hele greia på ett sted, i rekkefølge. Ikke tenk for mye på noe enkelt steg. Poenget er å bli ferdig med noe lite og kjenne løkken på egen kropp.",
        "Setter du deg fast og ikke kommer løs, er det akkurat det en samling er til for. Ta med tingen du bygde og stedet den knakk.",
      ],
      pullquote: "Velg ett verktøy, velg én liten ekte ting, og gå rundt løkken til den virker.",
      bullets: [
        "Velg ett verktøy: Lovable for den enkleste starten, Cursor for å se koden, Claude Code når du er klar for agenter.",
        "Velg én liten, ekte ting å bygge.",
        "Beskriv det med vanlig språk; la modellen skrive det.",
        "Kjør det, se på det, si hva som er feil, gjenta.",
        "Test det selv, og senk farten nær passord, betalinger eller andres data.",
        "Når du vil gå videre, les Anthropics «Building effective agents».",
        "Ta det med på en gratis Oslo Vibe Coding-samling og fortsett med folk rundt deg.",
      ],
    },
  ] as GuideSection[],
};
