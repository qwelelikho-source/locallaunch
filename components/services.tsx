import { Globe, Smartphone, MessageCircle, MapPin, FileText, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    body: "Professional websites designed around your business.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    body: "Your website looks great on phones, tablets and computers.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    body: "Let customers contact you instantly.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Build a stronger foundation for being found in Google searches.",
  },
  {
    icon: FileText,
    title: "Lead & Quote Forms",
    body: "Turn visitors into actual enquiries.",
  },
  {
    icon: Wrench,
    title: "Website Care",
    body: "Keep your website updated, secure and running smoothly.",
  },
];

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="bg-ll-bg py-24">
      <div className="container-content">
        {showHeading && (
          <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
            Everything your business needs to get online.
          </h2>
        )}

        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-card border border-white/10 bg-ll-card p-6 transition-colors hover:border-white/20"
            >
              <s.icon className="text-ll-blue-hover" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ll-text-secondary">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
