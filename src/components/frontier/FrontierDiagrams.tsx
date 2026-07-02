// Original, on-brand concept diagrams for the Frontier Systems lecture notes.
// One parameterized archetype per core mental model, in the same ember/cream
// palette and 320x200 viewBox as the resources Diagrams. The lecture data picks
// an archetype and supplies short labels; FrontierDiagram renders it. Static SVG,
// server-rendered, no client state.

const C = {
  bg: "#1b1822",
  panel: "#221f2b",
  hot: "#2c2233",
  line: "#33303d",
  ember: "#ff5a2c",
  amber: "#ffb020",
  glow: "#ff7a4d",
  cream: "#fbf7f0",
  dim: "#b8b2c0",
  faint: "#9590a0",
};
const MONO = "var(--font-geist-mono), monospace";
const VB = "0 0 320 200";
const r = (n: number) => Math.round(n * 10) / 10;

export type DiagramSpec =
  | { archetype: "stack"; title: string; layers: string[] }
  | { archetype: "loop"; title: string; steps: string[] }
  | { archetype: "curve"; title: string; xLabel: string; yLabel: string; caption: string }
  | { archetype: "bottleneck"; title: string; input: string; constraint: string; output: string }
  | { archetype: "network"; title: string; center: string; nodes: string[] }
  | { archetype: "spectrum"; title: string; left: string; right: string; caption: string }
  | { archetype: "pipeline"; title: string; stages: string[] }
  | { archetype: "contrast"; title: string; aTitle: string; a: string[]; bTitle: string; b: string[] };

// ---- primitives --------------------------------------------------------------

function Svg({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="200" fill={C.bg} />
      {title ? (
        <text x="160" y="21" fill={C.faint} fontFamily={MONO} fontSize="9.5" textAnchor="middle" letterSpacing="0.4">
          {wrap(title, 34, 1)[0]}
        </text>
      ) : null}
      {children}
    </svg>
  );
}

const SPARK = "M0 -7c.5 3.1 2.4 5 5.5 5.5C2.4 -1 .5 1 0 7c-.5-6-2.4-8-5.5-8.5C-2.4 -2-.5 -3.9 0 -7Z";
function spark(cx: number, cy: number, s = 1, fill = C.ember) {
  return <path d={SPARK} transform={`translate(${r(cx)} ${r(cy)}) scale(${s})`} fill={fill} />;
}

function line(x1: number, y1: number, x2: number, y2: number, color = C.line, w = 1.4) {
  return <line x1={r(x1)} y1={r(y1)} x2={r(x2)} y2={r(y2)} stroke={color} strokeWidth={w} />;
}

function arrow(x1: number, y1: number, x2: number, y2: number, color = C.faint, w = 1.6) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 6;
  const hx = x2 - Math.cos(a) * 2;
  const hy = y2 - Math.sin(a) * 2;
  return (
    <g stroke={color} fill={color}>
      <line x1={r(x1)} y1={r(y1)} x2={r(x2)} y2={r(y2)} strokeWidth={w} />
      <path
        d={`M${r(hx)} ${r(hy)} L${r(hx - Math.cos(a - 0.5) * h)} ${r(hy - Math.sin(a - 0.5) * h)} L${r(hx - Math.cos(a + 0.5) * h)} ${r(hy - Math.sin(a + 0.5) * h)} Z`}
        stroke="none"
      />
    </g>
  );
}

function box(x: number, y: number, w: number, h: number, fill = C.panel, stroke = C.line) {
  return <rect x={r(x)} y={r(y)} width={r(w)} height={r(h)} rx={8} fill={fill} stroke={stroke} strokeWidth={1.4} />;
}

// Wrap a short label to at most `maxLines` lines of ~`max` chars, on word breaks.
function wrap(t: string, max: number, maxLines = 2): string[] {
  const words = String(t ?? "").split(/\s+/).filter(Boolean);
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if (cur && (cur + " " + w).length > max) {
      out.push(cur);
      cur = w;
    } else {
      cur = cur ? cur + " " + w : w;
    }
  }
  if (cur) out.push(cur);
  if (out.length > maxLines) {
    const kept = out.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\W+\S*$/, "") + "…";
    return kept;
  }
  return out;
}

// Centered, wrapping text block. y is the vertical center.
function text(
  x: number,
  y: number,
  t: string,
  { fill = C.dim, size = 10, anchor = "middle", max = 18, lh = 11, maxLines = 2 } = {},
) {
  const ls = wrap(t, max, maxLines);
  const startY = y - ((ls.length - 1) * lh) / 2;
  return (
    <text x={r(x)} y={r(startY)} fill={fill} fontFamily={MONO} fontSize={size} textAnchor={anchor as "middle"}>
      {ls.map((l, i) => (
        <tspan key={i} x={r(x)} dy={i === 0 ? 0 : lh}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

// ---- archetypes --------------------------------------------------------------

function StackD({ title, layers }: { title: string; layers: string[] }) {
  const n = Math.max(1, layers.length);
  const g = n > 5 ? 6 : 7;
  const areaTop = 34;
  const areaH = 154; // fits between the title and the bottom edge, even at 7 layers
  const h = Math.min(24, (areaH - (n - 1) * g) / n);
  const total = n * h + (n - 1) * g;
  const top = areaTop + (areaH - total) / 2;
  return (
    <Svg title={title}>
      {layers.map((l, i) => {
        const y = top + (n - 1 - i) * (h + g); // layers[0] sits at the bottom
        const hot = i === n - 1;
        return (
          <g key={i}>
            {box(58, y, 204, h, hot ? C.hot : C.panel, hot ? C.ember : C.line)}
            {text(160, y + h / 2 + 0.5, l, { fill: hot ? C.cream : C.dim, size: h < 20 ? 9.5 : 10.5, max: 26, maxLines: 1 })}
          </g>
        );
      })}
    </Svg>
  );
}

function LoopD({ title, steps }: { title: string; steps: string[] }) {
  const cx = 160;
  const cy = 114;
  const rad = 50;
  const n = Math.max(1, steps.length);
  return (
    <Svg title={title}>
      <circle cx={cx} cy={cy} r={rad} fill="none" stroke={C.ember} strokeWidth="2.2" strokeDasharray="3 7" />
      {arrow(cx + rad, cy - 8, cx + rad + 4, cy + 6, C.ember, 2)}
      {spark(cx, cy, 1.5, C.glow)}
      {steps.map((s, i) => {
        const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        const lx = cx + Math.cos(ang) * (rad + 22);
        const ly = cy + Math.sin(ang) * (rad + 16) + 3;
        const cos = Math.cos(ang);
        const anchor = Math.abs(cos) < 0.34 ? "middle" : cos > 0 ? "start" : "end";
        const max = anchor === "middle" ? 16 : 12;
        return <g key={i}>{text(lx, ly, s, { fill: C.cream, size: 9.5, anchor, max, lh: 10 })}</g>;
      })}
    </Svg>
  );
}

function CurveD({ title, xLabel, yLabel, caption }: { title: string; xLabel: string; yLabel: string; caption: string }) {
  return (
    <Svg title={title}>
      {line(54, 46, 54, 168)}
      {line(54, 168, 286, 168)}
      <path d="M58 162 C 150 158, 214 120, 284 54" fill="none" stroke={C.ember} strokeWidth="3" strokeLinecap="round" />
      {spark(284, 54, 1.2, C.glow)}
      <text
        x="30"
        y="108"
        fill={C.faint}
        fontFamily={MONO}
        fontSize="9.5"
        textAnchor="middle"
        transform="rotate(-90 30 108)"
      >
        {wrap(yLabel, 18, 1)[0]}
      </text>
      {text(170, 186, xLabel, { fill: C.faint, size: 9.5, max: 34, maxLines: 1 })}
      {caption ? text(206, 74, caption, { fill: C.dim, size: 9, anchor: "middle", max: 18 }) : null}
    </Svg>
  );
}

function BottleneckD({ title, input, constraint, output }: { title: string; input: string; constraint: string; output: string }) {
  const gx = 150;
  return (
    <Svg title={title}>
      {/* many flows converge into one narrow gate, then out the far side */}
      {[94, 114, 134].map((y) => arrow(46, y, gx - 10, 114, C.faint, 1.6))}
      <rect x={gx - 4} y="84" width="9" height="60" rx="3" fill={C.hot} stroke={C.ember} strokeWidth="1.8" />
      {arrow(gx + 9, 114, 250, 114, C.ember, 2)}
      {spark(268, 114, 1.3)}
      {/* constraint sits above the gate; input and output at the two ends */}
      {text(gx + 1, 68, constraint, { fill: C.glow, size: 9.5, max: 18 })}
      {text(46, 172, input, { fill: C.dim, size: 9.5, anchor: "start", max: 18 })}
      {text(272, 172, output, { fill: C.dim, size: 9.5, anchor: "end", max: 18 })}
    </Svg>
  );
}

function NetworkD({ title, center, nodes }: { title: string; center: string; nodes: string[] }) {
  const cx = 160;
  const cy = 112;
  const rad = 62;
  const n = Math.max(1, nodes.length);
  const pts = nodes.map((_, i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return { x: cx + Math.cos(ang) * rad, y: cy + Math.sin(ang) * rad, cos: Math.cos(ang) };
  });
  return (
    <Svg title={title}>
      {pts.map((p, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={r(p.x)} y2={r(p.y)} stroke={C.line} strokeWidth="1.3" />
      ))}
      {pts.map((p, i) => {
        const anchor = Math.abs(p.cos) < 0.34 ? "middle" : p.cos > 0 ? "start" : "end";
        const lx = p.x + (anchor === "start" ? 8 : anchor === "end" ? -8 : 0);
        const ly = p.y + (Math.abs(p.cos) < 0.34 ? (p.y < cy ? -8 : 14) : 3);
        return (
          <g key={`n${i}`}>
            <circle cx={r(p.x)} cy={r(p.y)} r="6" fill={C.panel} stroke={C.line} strokeWidth="1.3" />
            {text(lx, ly, nodes[i], { fill: C.dim, size: 9, anchor, max: 12, lh: 10 })}
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="21" fill={C.hot} stroke={C.ember} strokeWidth="1.8" />
      {text(cx, cy + 0.5, center, { fill: C.cream, size: 9, max: 9, lh: 9.5 })}
    </Svg>
  );
}

function SpectrumD({ title, left, right, caption }: { title: string; left: string; right: string; caption: string }) {
  return (
    <Svg title={title}>
      <defs>
        <linearGradient id="fspec" x1="40" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.ember} />
          <stop offset="1" stopColor={C.amber} />
        </linearGradient>
      </defs>
      <rect x="40" y="100" width="240" height="14" rx="7" fill="url(#fspec)" opacity="0.85" />
      <circle cx="160" cy="107" r="8" fill={C.cream} />
      {text(44, 140, left, { fill: C.glow, size: 10, anchor: "start", max: 18 })}
      {text(276, 140, right, { fill: C.amber, size: 10, anchor: "end", max: 18 })}
      {caption ? text(160, 170, caption, { fill: C.faint, size: 9.5, max: 40, maxLines: 1 }) : null}
    </Svg>
  );
}

function PipelineD({ title, stages }: { title: string; stages: string[] }) {
  const n = Math.max(1, stages.length);
  const x0 = 34;
  const x1 = 286;
  const gap = 15;
  const bw = (x1 - x0 - (n - 1) * gap) / n;
  const cy = 112;
  const bh = 46;
  return (
    <Svg title={title}>
      {stages.map((s, i) => {
        const x = x0 + i * (bw + gap);
        const last = i === n - 1;
        return (
          <g key={i}>
            {box(x, cy - bh / 2, bw, bh, last ? C.hot : C.panel, last ? C.ember : C.line)}
            {text(x + bw / 2, cy, s, { fill: last ? C.cream : C.dim, size: bw < 44 ? 8.5 : 9.5, max: bw < 44 ? 9 : 12, lh: 10 })}
            {i < n - 1 ? arrow(x + bw + 2, cy, x + bw + gap - 2, cy, C.ember, 1.7) : null}
          </g>
        );
      })}
    </Svg>
  );
}

function ContrastD({ title, aTitle, a, bTitle, b }: { title: string; aTitle: string; a: string[]; bTitle: string; b: string[] }) {
  const col = (cx: number, head: string, items: string[], headFill: string) => {
    const rows = items.slice(0, 5);
    const dense = rows.length > 4;
    const pitch = dense ? 24 : 27;
    return (
      <>
        {text(cx, 50, head, { fill: headFill, size: 10.5, max: 18, maxLines: 1 })}
        {rows.map((it, i) => {
          const y = 71 + i * pitch;
          return (
            <g key={i}>
              <circle cx={cx - 58} cy={y - 3} r="2" fill={headFill} />
              {text(cx - 50, y, it, { fill: C.dim, size: dense ? 8.5 : 9, anchor: "start", max: dense ? 20 : 18, lh: 9.5 })}
            </g>
          );
        })}
      </>
    );
  };
  return (
    <Svg title={title}>
      {line(160, 42, 160, 186, C.line, 1.2)}
      {col(94, aTitle, a, C.faint)}
      {col(226, bTitle, b, C.glow)}
    </Svg>
  );
}

// ---- dispatcher --------------------------------------------------------------

export function FrontierDiagram({ spec }: { spec: DiagramSpec }) {
  switch (spec.archetype) {
    case "stack":
      return <StackD title={spec.title} layers={spec.layers} />;
    case "loop":
      return <LoopD title={spec.title} steps={spec.steps} />;
    case "curve":
      return <CurveD title={spec.title} xLabel={spec.xLabel} yLabel={spec.yLabel} caption={spec.caption} />;
    case "bottleneck":
      return <BottleneckD title={spec.title} input={spec.input} constraint={spec.constraint} output={spec.output} />;
    case "network":
      return <NetworkD title={spec.title} center={spec.center} nodes={spec.nodes} />;
    case "spectrum":
      return <SpectrumD title={spec.title} left={spec.left} right={spec.right} caption={spec.caption} />;
    case "pipeline":
      return <PipelineD title={spec.title} stages={spec.stages} />;
    case "contrast":
      return <ContrastD title={spec.title} aTitle={spec.aTitle} a={spec.a} bTitle={spec.bTitle} b={spec.b} />;
    default:
      return (
        <Svg>
          {spark(160, 100, 2)}
        </Svg>
      );
  }
}
