import type { Metadata } from "next";
import FrontierLecture from "@/components/frontier/FrontierLecture";
import { LectureJsonLd } from "@/components/JsonLd";
import { lectures, getLectureBySlug } from "@/content/frontier";
import { SITE_URL } from "@/lib/brand";

export function generateStaticParams() {
  return lectures.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getLectureBySlug(slug);
  if (!l) return {};
  const path = `/frontier/${slug}`;
  return {
    title: `${l.title} — ${l.speaker} (${l.org})`,
    description: l.lead,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${l.title} · ${l.speaker}`,
      description: l.lead,
      url: `${SITE_URL}${path}`,
      locale: "en_US",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLectureBySlug(slug);
  return (
    <div lang="en">
      {l && <LectureJsonLd lecture={l} />}
      <FrontierLecture slug={slug} />
    </div>
  );
}
