import type { Metadata } from "next";
import ResourceExplainer from "@/components/resources/ResourceExplainer";
import { ResourceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { allResources, getResourceBySlug } from "@/content/resources";
import { getExplainer } from "@/content/explainers";
import { hreflangAlternates } from "@/lib/i18n";
import { SITE_URL } from "@/lib/brand";

export function generateStaticParams() {
  return allResources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getResourceBySlug(slug);
  const e = getExplainer("no", slug);
  if (!r) return {};
  const path = `/resources/${slug}`;
  const title = r.titleNo ?? r.title;
  const description = e?.lead ?? r.tldr;
  return {
    title,
    description,
    alternates: { canonical: `/no${path}`, languages: hreflangAlternates(path) },
    openGraph: {
      type: "article",
      title: `${title} · Oslo Vibe Coding`,
      description,
      url: `${SITE_URL}/no${path}`,
      locale: "nb_NO",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResourceBySlug(slug);
  const e = getExplainer("no", slug);
  const title = r ? r.titleNo ?? r.title : "";
  return (
    <div lang="nb-NO">
      {r && (
        <>
          <ResourceJsonLd resource={r} locale="no" title={title} description={e?.lead ?? r.tldr} />
          <BreadcrumbJsonLd
            locale="no"
            items={[
              { name: "Hjem", path: "/" },
              { name: "Ressurser", path: "/resources" },
              { name: title, path: `/resources/${slug}` },
            ]}
          />
        </>
      )}
      <ResourceExplainer locale="no" slug={slug} />
    </div>
  );
}
