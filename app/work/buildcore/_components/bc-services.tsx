import { Home, Building, Hammer, LayoutGrid, ClipboardList, Truck } from "lucide-react";

const services = [
  { icon: Home, title: "Home Renovations", body: "Full or partial renovations, done room by room or all at once." },
  { icon: Building, title: "New Builds", body: "Ground-up construction from foundation to finish." },
  { icon: Hammer, title: "Extensions", body: "Add space without the hassle of moving house." },
  { icon: LayoutGrid, title: "Kitchens & Bathrooms", body: "Design-led remodels that add real resale value." },
  { icon: ClipboardList, title: "Project Management", body: "One point of contact from planning to handover." },
  { icon: Truck, title: "Site Clearance", body: "Demolition and clearance to get your site ready." },
];

export default function BcServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
        Built by people who show up.
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <s.icon className="text-orange-600" size={22} />
            <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
