import { resourceOg, ogSize } from "@/lib/resourceOg";
import { lectures, getLectureBySlug } from "@/content/frontier";

export const alt = "Oslo Vibe Coding lecture notes";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return lectures.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLectureBySlug(slug);
  return resourceOg(
    l?.title ?? "Lecture",
    l ? `Lecture ${l.n}` : "CS 153",
    l ? `${l.speaker} · ${l.org}` : "Oslo Vibe Coding",
  );
}
