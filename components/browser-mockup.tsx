type Variant = "cleaning" | "plumbing" | "construction" | "barber";

const content: Record<
  Variant,
  { name: string; tag: string; accent: string; heading: string }
> = {
  cleaning: {
    name: "CapeClean",
    tag: "Residential & office cleaning",
    accent: "#2563EB",
    heading: "Spotless spaces, booked in minutes.",
  },
  plumbing: {
    name: "FixFlow Plumbing",
    tag: "24/7 emergency call-outs",
    accent: "#0EA5E9",
    heading: "A plumber you can actually reach.",
  },
  construction: {
    name: "BuildCore Construction",
    tag: "Renovations & new builds",
    accent: "#F59E0B",
    heading: "Projects that speak for themselves.",
  },
  barber: {
    name: "UrbanCut",
    tag: "Barbershop & grooming",
    accent: "#22C55E",
    heading: "Book your seat before Friday fills up.",
  },
};

export default function BrowserMockup({ variant }: { variant: Variant }) {
  const c = content[variant];

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-card border border-white/10 bg-ll-card shadow-2xl shadow-black/40">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <div className="ml-3 flex-1 truncate rounded bg-white/5 px-3 py-1 text-[11px] text-ll-text-secondary">
          {c.name.toLowerCase().replace(/\s+/g, "")}.co.za
        </div>
      </div>

      {/* page content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-white">
            {c.name}
          </span>
          <span
            className="rounded px-3 py-1.5 text-[11px] font-medium text-white"
            style={{ backgroundColor: c.accent }}
          >
            Get a Quote
          </span>
        </div>

        <div className="mt-6 h-2 w-20 rounded-full" style={{ backgroundColor: c.accent }} />
        <p className="mt-3 font-display text-lg font-semibold leading-snug text-white">
          {c.heading}
        </p>
        <p className="mt-2 text-xs text-ll-text-secondary">{c.tag}</p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="aspect-square rounded-md bg-white/[0.06]" />
          <div className="aspect-square rounded-md bg-white/[0.06]" />
          <div className="aspect-square rounded-md bg-white/[0.06]" />
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: c.accent, opacity: 0.5 }} />
          <div className="flex-1">
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
