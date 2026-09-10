import { Home, Building2, Sparkles, Truck, Sofa, HardHat } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Cleaning", body: "Regular or once-off cleans tailored to your home." },
  { icon: Building2, title: "Office Cleaning", body: "Keep your workspace fresh for staff and clients." },
  { icon: Sparkles, title: "Deep Cleaning", body: "A thorough top-to-bottom clean, room by room." },
  { icon: Truck, title: "Move In / Move Out", body: "Handover-ready cleaning for tenants and landlords." },
  { icon: Sofa, title: "Carpet & Upholstery", body: "Lift stains and refresh fabric, safely and fast." },
  { icon: HardHat, title: "Post-Construction", body: "Dust and debris cleared after renovation work." },
];

export default function CcServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
        Cleaning services for every space.
      </h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <s.icon className="text-teal-600" size={22} />
            <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
