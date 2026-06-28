// The spark — a four-point glint that doubles as a cursor blink.
// Defaults to currentColor so it inherits text color; pass `gradientId` for the
// ember→amber gradient version used in hero and logo.

type Props = {
  className?: string;
  gradientId?: string;
  title?: string;
};

export default function SparkMark({ className, gradientId, title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill={gradientId ? `url(#${gradientId})` : "currentColor"}
    >
      {title ? <title>{title}</title> : null}
      {gradientId ? (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--color-ember)" />
            <stop offset="1" stopColor="var(--color-amber)" />
          </linearGradient>
        </defs>
      ) : null}
      <path d="M12 1.5c.9 5.4 4.2 8.7 9.6 9.6v1.8c-5.4.9-8.7 4.2-9.6 9.6h-1.8c-.9-5.4-4.2-8.7-9.6-9.6v-1.8c5.4-.9 8.7-4.2 9.6-9.6h1.8Z" />
    </svg>
  );
}
