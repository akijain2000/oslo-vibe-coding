import Image from "next/image";
import type { Resource } from "@/content/resources";
import SparkMark from "../SparkMark";
import { DIAGRAMS } from "./Diagrams";

// The card/header visual for a resource: a self-hosted source preview image,
// an original concept diagram, or the spark fallback.
export default function ResourceVisual({ item }: { item: Resource }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  const Diagram = item.diagram ? DIAGRAMS[item.diagram] : undefined;
  if (Diagram) return <Diagram />;
  return (
    <div className="flex h-full items-center justify-center">
      <SparkMark className="h-8 w-8 text-ember" />
    </div>
  );
}
