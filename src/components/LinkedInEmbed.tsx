// Renders an official LinkedIn post embed. The /embed/feed/update endpoint is the
// only legitimate way to surface a real post — no scraping, no fragile API. If LinkedIn
// declines to frame a given post, the surrounding card + link still carry the content.

export default function LinkedInEmbed({ urn, title }: { urn: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-white">
      <iframe
        src={`https://www.linkedin.com/embed/feed/update/${urn}`}
        title={title}
        loading="lazy"
        className="h-[560px] w-full"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
}
