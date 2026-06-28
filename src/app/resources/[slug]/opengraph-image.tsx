import { resourceOg, ogSize } from "@/lib/resourceOg";
import { allResources, getResourceBySlug } from "@/content/resources";

export const alt = "Oslo Vibe Coding resource";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return allResources.map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResourceBySlug(slug);
  return resourceOg(r?.title ?? "Resource", "Resource", r?.by ?? "Oslo Vibe Coding");
}
