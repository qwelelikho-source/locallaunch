import Image from "next/image";
import { ShieldCheck, Leaf, Clock } from "lucide-react";

export default function CcHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700">
            Cape Town &amp; surrounds
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
            Spotless spaces, booked in minutes.
          </h1>

          <p className="mt-5 max-w-md text-slate-600">
            Residential and office cleaning you can trust — vetted staff,
            eco-friendly products, and a booking that takes less time than
            your coffee break.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-medium text-white hover:bg-teal-700"
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300"
            >
              See our work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-teal-600" /> Fully insured
            </span>
            <span className="flex items-center gap-2">
              <Leaf size={16} className="text-teal-600" /> Eco-friendly products
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-teal-600" /> Same-day slots
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/capeclean/hero.jpg"
              alt="CapeClean cleaner mopping a bright, modern living room"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 rounded-2xl bg-white p-4 shadow-lg">
            <div className="text-2xl font-bold text-slate-900">4.9/5</div>
            <div className="text-xs text-slate-500">Sample rating (demo)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
