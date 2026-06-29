import { resourceOg, ogSize } from "@/lib/resourceOg";
import { allResources, getResourceBySlug } from "@/content/resources";

export const alt = "Oslo Vibe Coding ressurs";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return allResources.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResourceBySlug(slug);
  return resourceOg(r?.titleNo ?? r?.title ?? "Ressurs", "Ressurs", r?.by ?? "Oslo Vibe Coding");
}
