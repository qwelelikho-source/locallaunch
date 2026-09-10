import Link from "next/link";
import { Search, ImageOff, PhoneMissed } from "lucide-react";

const cards = [
  {
    icon: Search,
    title: "No website?",
    body: "Customers can't easily find your services, prices or contact information.",
  },
  {
    icon: ImageOff,
    title: "Outdated website?",
    body: "If your website looks old, customers may question the quality of your business.",
  },
  {
    icon: PhoneMissed,
    title: "Losing enquiries?",
    body: "Make it easy for customers to call, WhatsApp or request a quote.",
  },
];

export default function Problem() {
  return (
    <section className="bg-ll-bg py-24">
      <div className="container-content">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Still relying on Facebook, Instagram or WhatsApp?
          </h2>
          <p className="mt-4 text-ll-text-secondary">
            Social media is great for reaching people — but your business
            deserves a home online that you control.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-card border border-white/10 bg-ll-card p-6"
            >
              <c.icon className="text-ll-blue-hover" size={22} />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ll-text-secondary">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-ll-blue-hover hover:text-white transition-colors"
          >
            Let&rsquo;s fix that
          </Link>
        </div>
      </div>
    </section>
  );
}
