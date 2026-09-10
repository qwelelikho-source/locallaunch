import { Droplets, Flame, Wrench, ShowerHead, PipetteIcon, Waves } from "lucide-react";

const services = [
  { icon: Droplets, title: "Burst Pipe Repair", body: "Fast response to stop leaks before they spread." },
  { icon: Waves, title: "Blocked Drains", body: "Clearing and cleaning for kitchens, bathrooms and mains." },
  { icon: Flame, title: "Geyser Repairs", body: "Installations, repairs and replacements, all makes." },
  { icon: ShowerHead, title: "Bathroom Plumbing", body: "Taps, showers, toilets — leaks fixed, fixtures installed." },
  { icon: Wrench, title: "General Maintenance", body: "Routine checks to catch problems before they start." },
  { icon: PipetteIcon, title: "Leak Detection", body: "Locating hidden leaks without breaking down walls." },
];

export default function FfServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
        Plumbing services, done right.
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <s.icon className="text-blue-700" size={22} />
            <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
