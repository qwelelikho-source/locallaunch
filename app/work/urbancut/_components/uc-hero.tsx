import { Star, MapPin, Clock } from "lucide-react";

export default function UcHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
            Woodstock, Cape Town
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            Book your seat before Friday fills up.
          </h1>

          <p className="mt-5 max-w-md text-zinc-400">
            Skin fades, beard sculpting, and hot towel shaves — walk-ins
            welcome, but booking ahead saves you the wait.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400"
            >
              Book Your Slot
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:border-white/40"
            >
              See the work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <Star size={16} className="text-amber-400" /> 4.8 rating (demo)
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" /> Woodstock
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-amber-400" /> Open until 7pm
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 w-48 rounded-2xl bg-amber-500 p-4 shadow-lg">
            <div className="text-2xl font-bold text-black">R150</div>
            <div className="text-xs text-black/70">Signature cut (demo)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
