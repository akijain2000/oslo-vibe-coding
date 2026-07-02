import type { Metadata } from "next";
import ResourcesIndex from "@/components/resources/ResourcesIndex";
import { CollectionPageJsonLd } from "@/components/JsonLd";
import { allResources } from "@/content/resources";
import { hreflangAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Ressurser: lær vibe coding fra null",
  description:
    "En gratis, kuratert inngang til å bygge programvare med AI. Hver ressurs har et sammendrag på vanlig norsk som du kan lese her før du klikker deg videre. Valgt ut av Oslo Vibe Coding.",
  alternates: { canonical: "/no/resources", languages: hreflangAlternates("/resources") },
  openGraph: {
    title: "Ressurser: lær vibe coding fra null · Oslo Vibe Coding",
    description: "En gratis, kuratert inngang til å bygge med AI, hver med et sammendrag du kan lese på siden.",
    url: `${SITE_URL}/no/resources`,
    locale: "nb_NO",
    alternateLocale: ["en_US"],
  },
};

export default function Page() {
  return (
    <div lang="nb-NO">
      <CollectionPageJsonLd
        locale="no"
        name="Ressurser: lær vibe coding fra null"
        description="En gratis, kuratert inngang til å bygge programvare med AI, hver med et sammendrag på norsk."
        path="/resources"
        items={allResources.map((r) => ({ name: r.titleNo ?? r.title, path: `/resources/${r.slug}` }))}
      />
      <ResourcesIndex locale="no" />
    </div>
  );
}
