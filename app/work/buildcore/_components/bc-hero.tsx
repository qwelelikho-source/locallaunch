import Image from "next/image";
import { Award, Clock3, Ruler } from "lucide-react";

export default function BcHero() {
  return (
    <section id="top" className="bg-slate-950">
      {/* Full-width banner photo (already carries the BuildCore logo/tagline) */}
      <div className="relative h-[260px] w-full sm:h-[340px] md:h-[420px]">
        <Image
          src="/buildcore/hero.jpg"
          alt="BuildCore team overlooking a construction site at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-orange-600/20 blur-[140px]"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <span className="inline-flex items-center rounded-full bg-orange-600/10 px-3 py-1 text-xs font-medium text-orange-400">
            Renovations &amp; New Builds
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            Projects that speak for themselves.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-slate-300">
            From full renovations to ground-up builds, BuildCore delivers on
            time, on budget, and built to last.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
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
      </div>
    </section>
  );
}
