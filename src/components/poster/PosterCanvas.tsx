// The poster canvas: a fixed 1080x1920 Instagram-story node rendered at true size so
// html-to-image can export it crisp. The actual look comes from the selected template
// (see templates.tsx). The maker scales this node down for preview via a CSS transform.

import { forwardRef } from "react";
import { POSTER_TEMPLATES } from "./templates";

export type PosterData = {
  eyebrow: string;
  title: string;
  tagline: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  address: string;
  rsvpLabel: string;
  qrDataUrl: string;
  footer: string;
};

const PosterCanvas = forwardRef<HTMLDivElement, { data: PosterData; templateId?: string }>(
  function PosterCanvas({ data, templateId = "night" }, ref) {
    const tpl = POSTER_TEMPLATES.find((t) => t.id === templateId) ?? POSTER_TEMPLATES[0];
    return (
      <div
        ref={ref}
        style={{ width: 1080, height: 1920, position: "relative", overflow: "hidden", boxSizing: "border-box" }}
      >
        <tpl.Render data={data} />
      </div>
    );
  },
);

export default PosterCanvas;
