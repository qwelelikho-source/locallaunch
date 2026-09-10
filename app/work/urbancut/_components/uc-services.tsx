import { Scissors, Sparkles, Droplet, User, Baby, Palette } from "lucide-react";

const services = [
  { icon: Scissors, title: "Signature Cut", price: "R150", body: "Precision cut, tailored to your style." },
  { icon: Sparkles, title: "Skin Fade", price: "R180", body: "Clean, sharp fades with a razor finish." },
  { icon: Droplet, title: "Hot Towel Shave", price: "R120", body: "The classic straight-razor experience." },
  { icon: User, title: "Beard Sculpting", price: "R100", body: "Shape, line-up and conditioning oil." },
  { icon: Baby, title: "Kids Cut", price: "R100", body: "Patient barbers, quick and painless." },
  { icon: Palette, title: "Cut & Colour", price: "R280", body: "Full service, cut plus a fresh colour." },
];

export default function UcServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="max-w-lg text-3xl font-bold text-white md:text-4xl">
        Prices, no surprises.
      </h2>
      <p className="mt-3 text-sm text-zinc-500">Illustrative pricing for this concept project.</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="flex items-start justify-between">
              <s.icon className="text-amber-500" size={22} />
              <span className="font-semibold text-amber-500">{s.price}</span>
            </div>
            <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
