import Image from "next/image";
import { Clock, ShieldCheck, MapPin } from "lucide-react";

export default function FfHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-blue-700/30 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
            24/7 Emergency Call-Outs
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            A plumber you can actually reach.
          </h1>

          <p className="mt-5 max-w-md text-slate-300">
            Burst pipe, blocked drain, or a geyser that's given up — FixFlow
            gets a qualified plumber to your door, fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
            >
              Request a Call-Out
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white hover:border-white/40"
            >
              See our services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-amber-400" /> Avg. 45 min response*
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-amber-400" /> Licensed &amp; insured
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" /> Cape Town metro
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-500">*Illustrative figure for this demo</p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/fixflow/hero.jpg"
              alt="FixFlow plumber repairing a pipe under a kitchen sink"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 rounded-2xl bg-white p-4 shadow-lg">
            <div className="text-2xl font-bold text-slate-900">24/7</div>
            <div className="text-xs text-slate-500">Emergency line (demo)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
