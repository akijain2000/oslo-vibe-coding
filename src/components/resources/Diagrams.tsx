// Original, on-brand concept diagrams for resources that have no clean source figure.
// Minimal schematics in the ember/cream palette. The card's TL;DR carries the detail;
// these are the visual hook. Keyed by id and looked up from resources data.

const C = {
  bg: "#1b1822",
  panel: "#221f2b",
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

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox={VB} className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="200" fill={C.bg} />
      {children}
    </svg>
  );
}

const label = (x: number, y: number, t: string, fill = C.faint, size = 11, anchor = "middle") => (
  <text x={x} y={y} fill={fill} fontFamily={MONO} fontSize={size} textAnchor={anchor as "middle"}>
    {t}
  </text>
);

const SPARK = "M0 -7c.5 3.1 2.4 5 5.5 5.5C2.4 -1 .5 1 0 7c-.5-6-2.4-8-5.5-8.5C-2.4 -2-.5 -3.9 0 -7Z";

function spark(cx: number, cy: number, s = 1, fill = C.ember) {
  return <path d={SPARK} transform={`translate(${cx} ${cy}) scale(${s})`} fill={fill} />;
}

function arrow(x1: number, y1: number, x2: number, y2: number, color = C.faint, w = 1.6) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 6;
  const hx = x2 - Math.cos(a) * 2;
  const hy = y2 - Math.sin(a) * 2;
  return (
    <g stroke={color} fill={color}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={w} />
      <path
        d={`M${hx} ${hy} L${hx - Math.cos(a - 0.5) * h} ${hy - Math.sin(a - 0.5) * h} L${hx - Math.cos(a + 0.5) * h} ${hy - Math.sin(a + 0.5) * h} Z`}
        stroke="none"
      />
    </g>
  );
}

function box(x: number, y: number, w: number, h: number, fill = C.panel, stroke = C.line) {
  return <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={1.4} />;
}

// ---- diagrams ----------------------------------------------------------------

const VibeLoop = () => (
  <Svg>
    <circle cx="160" cy="100" r="56" fill="none" stroke={C.ember} strokeWidth="2.5" strokeDasharray="3 7" />
    {arrow(206, 70, 214, 86, C.ember, 2)}
    {spark(160, 100, 1.7, C.glow)}
    {label(160, 38, "describe", C.cream)}
    {label(248, 104, "build", C.cream)}
    {label(160, 170, "run + look", C.cream)}
    {label(72, 104, "steer", C.cream)}
  </Svg>
);

const VibeVsEng = () => (
  <Svg>
    {label(160, 36, "where it changes", C.faint)}
    <rect x="40" y="86" width="240" height="28" rx="14" fill="url(#vve)" />
    <defs>
      <linearGradient id="vve" x1="40" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={C.ember} />
        <stop offset="1" stopColor={C.panel} />
      </linearGradient>
    </defs>
    <circle cx="160" cy="100" r="9" fill={C.cream} />
    {label(40, 140, "trust the vibes", C.glow, 11, "start")}
    {label(280, 140, "read the code", C.dim, 11, "end")}
  </Svg>
);

const Stack = () => (
  <Svg>
    {[
      { t: "policy", c: C.faint },
      { t: "apps", c: C.dim },
      { t: "models", c: C.ember },
      { t: "silicon", c: C.dim },
    ].map((l, i) => (
      <g key={l.t}>
        {box(70, 40 + i * 32, 180, 24, i === 2 ? "#2c2233" : C.panel, i === 2 ? C.ember : C.line)}
        {label(160, 56 + i * 32, l.t, l.c, 12)}
      </g>
    ))}
  </Svg>
);

const DeepStack = () => (
  <Svg>
    {box(34, 78, 44, 44, C.panel, C.line)}
    {label(56, 138, "image", C.faint, 10)}
    {[100, 138, 172, 202].map((x, i) => {
      const h = 70 - i * 12;
      return <rect key={x} x={x} y={100 - h / 2} width="20" height={h} rx="4" fill={i % 2 ? "#2c2233" : C.panel} stroke={C.line} />;
    })}
    {arrow(232, 100, 260, 100, C.ember, 2)}
    {spark(278, 100, 1.4)}
    {label(160, 168, "deep layers", C.faint)}
  </Svg>
);

const Vectors = () => (
  <Svg>
    {[
      { x: 70, y: 130, t: "man", c: C.dim },
      { x: 70, y: 64, t: "king", c: C.cream },
      { x: 240, y: 130, t: "woman", c: C.dim },
      { x: 240, y: 64, t: "queen", c: C.glow },
    ].map((p) => (
      <g key={p.t}>
        <circle cx={p.x} cy={p.y} r="5" fill={p.c} />
        {label(p.x, p.y - 12, p.t, p.c, 11)}
      </g>
    ))}
    {arrow(70, 130, 70, 74, C.faint)}
    {arrow(240, 130, 240, 74, C.ember)}
    {label(160, 180, "king − man + woman ≈ queen", C.faint, 11)}
  </Svg>
);

const RlLoop = () => (
  <Svg>
    {box(40, 78, 90, 44, C.panel, C.line)}
    {label(85, 104, "agent", C.cream, 13)}
    {box(190, 78, 90, 44, C.panel, C.line)}
    {label(235, 104, "game", C.cream, 13)}
    {arrow(130, 90, 190, 90, C.ember)}
    {label(160, 84, "action", C.glow, 9)}
    {arrow(190, 110, 130, 110, C.faint)}
    {label(160, 126, "reward + pixels", C.faint, 9)}
  </Svg>
);

const Transformer = () => {
  const xs = [60, 110, 160, 210, 260];
  return (
    <Svg>
      {label(160, 36, "self-attention", C.faint)}
      {xs.map((x1, i) =>
        xs.map((x2, j) =>
          i < j ? (
            <line key={`${i}-${j}`} x1={x1} y1="120" x2={x2} y2="120" stroke={C.ember} strokeOpacity="0.35" strokeWidth="1.2" />
          ) : null,
        ),
      )}
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="120" r="9" fill={i === 2 ? C.ember : C.panel} stroke={C.line} />
        </g>
      ))}
      {label(160, 168, "every token sees the rest", C.faint, 10)}
    </Svg>
  );
};

const ScalingCurve = () => (
  <Svg>
    <line x1="50" y1="60" x2="50" y2="160" stroke={C.line} strokeWidth="1.5" />
    <line x1="50" y1="160" x2="280" y2="160" stroke={C.line} strokeWidth="1.5" />
    <path d="M55 78 C 110 96, 170 140, 275 152" fill="none" stroke={C.ember} strokeWidth="3" strokeLinecap="round" />
    {label(36, 108, "loss", C.faint, 10, "middle")}
    {label(165, 180, "compute, data, size →", C.faint, 10)}
    {label(250, 92, "lower is better", C.dim, 10, "end")}
  </Svg>
);

const FewShot = () => (
  <Svg>
    {box(40, 50, 150, 100, C.panel, C.line)}
    {label(115, 44, "the prompt", C.faint, 10)}
    {["2 + 2 → 4", "7 + 1 → 8", "5 + 3 → ?"].map((t, i) => label(56, 78 + i * 26, t, i === 2 ? C.glow : C.dim, 12, "start"))}
    {arrow(195, 100, 232, 100, C.ember, 2)}
    <circle cx="258" cy="100" r="16" fill="#2c2233" stroke={C.ember} />
    {label(258, 105, "8", C.cream, 15)}
    {label(160, 178, "learns from examples", C.faint, 10)}
  </Svg>
);

const Diffusion = () => (
  <Svg>
    {[0, 1, 2, 3, 4].map((i) => {
      const x = 36 + i * 52;
      const noise = (4 - i) / 4;
      return (
        <g key={i}>
          <rect x={x} y="74" width="40" height="40" rx="6" fill={i === 4 ? "#2c2233" : C.panel} stroke={C.line} />
          {Array.from({ length: Math.round(noise * 9) }).map((_, k) => (
            <rect key={k} x={x + 4 + (k % 3) * 11} y={78 + Math.floor(k / 3) * 11} width="6" height="6" fill={C.faint} opacity="0.7" />
          ))}
          {i === 4 ? spark(x + 20, 94, 1.2) : null}
        </g>
      );
    })}
    {arrow(120, 134, 200, 134, C.ember, 1.6)}
    {label(160, 158, "noise → image, step by step", C.faint, 10)}
  </Svg>
);

const Rlhf = () => (
  <Svg>
    {box(34, 80, 80, 40, C.panel, C.line)}
    {label(74, 104, "model", C.cream, 12)}
    {arrow(114, 100, 150, 100, C.faint)}
    {box(150, 80, 70, 40, C.panel, C.line)}
    {label(185, 104, "output", C.dim, 11)}
    {arrow(220, 100, 252, 100, C.faint)}
    {label(276, 96, "👍", C.cream, 16)}
    {label(276, 120, "👎", C.cream, 16)}
    <path d="M276 130 C 276 168, 74 168, 74 124" fill="none" stroke={C.ember} strokeWidth="2" strokeDasharray="3 5" />
    {arrow(80, 132, 74, 122, C.ember, 2)}
    {label(160, 180, "human feedback tunes it", C.glow, 10)}
  </Svg>
);

const ComputeCurve = () => (
  <Svg>
    <line x1="50" y1="50" x2="50" y2="160" stroke={C.line} strokeWidth="1.5" />
    <line x1="50" y1="160" x2="280" y2="160" stroke={C.line} strokeWidth="1.5" />
    <path d="M55 120 C 120 116, 200 112, 275 110" fill="none" stroke={C.faint} strokeWidth="2.5" strokeDasharray="4 4" />
    {label(150, 104, "handcrafted cleverness", C.faint, 9, "start")}
    <path d="M55 152 C 130 150, 190 90, 275 58" fill="none" stroke={C.ember} strokeWidth="3" strokeLinecap="round" />
    {label(200, 70, "compute", C.glow, 11, "start")}
    {label(165, 180, "scale wins over time →", C.faint, 10)}
  </Svg>
);

const Community = () => (
  <Svg>
    {[
      [110, 92],
      [160, 78],
      [210, 92],
      [135, 130],
      [185, 130],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="11" fill={i === 1 ? "#2c2233" : C.panel} stroke={i === 1 ? C.ember : C.line} />
        <circle cx={x} cy={y - 1} r="4" fill={C.dim} />
      </g>
    ))}
    {spark(160, 50, 1.4)}
    {spark(96, 64, 0.9, C.amber)}
    {spark(224, 64, 0.9, C.amber)}
    {label(160, 176, "build in a room together", C.faint, 10)}
  </Svg>
);

export const DIAGRAMS: Record<string, () => React.ReactElement> = {
  "vibe-loop": VibeLoop,
  "vibe-vs-eng": VibeVsEng,
  stack: Stack,
  "deep-stack": DeepStack,
  vectors: Vectors,
  "rl-loop": RlLoop,
  transformer: Transformer,
  "scaling-curve": ScalingCurve,
  "few-shot": FewShot,
  diffusion: Diffusion,
  rlhf: Rlhf,
  "compute-curve": ComputeCurve,
  community: Community,
};
