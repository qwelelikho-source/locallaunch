import { Award, Clock3, Ruler } from "lucide-react";

export default function BcHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-orange-600/20 blur-[140px]"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-400">
            Renovations &amp; New Builds
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            Projects that speak for themselves.
          </h1>

          <p className="mt-5 max-w-md text-slate-300">
            From full renovations to ground-up builds, BuildCore delivers on
            time, on budget, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-500"
            >
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-white hover:border-slate-500"
            >
              View our projects
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Award size={16} className="text-orange-400" /> Registered &amp; insured
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-orange-400" /> On-time delivery*
            </span>
            <span className="flex items-center gap-2">
              <Ruler size={16} className="text-orange-400" /> Fixed-scope quoting
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">*Illustrative claim for this demo</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-orange-950 shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 w-52 rounded-2xl bg-white p-4 shadow-lg">
            <div className="text-2xl font-bold text-slate-900">40+ years</div>
            <div className="text-xs text-slate-500">Combined team experience (demo)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
