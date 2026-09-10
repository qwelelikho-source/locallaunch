import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "R2,500",
    blurb: "For businesses getting online",
    features: [
      "1–3 pages",
      "Mobile responsive",
      "WhatsApp button",
      "Contact form",
      "Google Maps",
      "Social links",
      "Basic SEO",
      "SSL",
      "Deployment",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Business",
    price: "R4,500",
    blurb: "For businesses ready to grow",
    intro: "Everything in Starter, plus:",
    features: [
      "Up to 6 pages",
      "Services section",
      "Gallery",
      "Testimonials",
      "Quote/request form",
      "Google Business setup assistance",
      "Analytics",
      "Better SEO",
      "Custom design",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Growth",
    price: "R7,500+",
    blurb: "For businesses needing more",
    intro: "Everything in Business, plus:",
    features: [
      "Booking system",
      "Payments",
      "Database",
      "Advanced forms",
      "Custom functionality",
      "Integrations",
      "Advanced SEO",
    ],
    cta: "Let's Talk",
    featured: false,
  },
];

const care = [
  {
    name: "Basic Care",
    price: "R299",
    features: ["Hosting", "SSL", "Backups", "Security monitoring", "Small content changes"],
  },
  {
    name: "Business Care",
    price: "R499",
    intro: "Everything above, plus:",
    features: [
      "Priority support",
      "More content changes",
      "Performance monitoring",
      "Monthly website check",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ll-card py-24">
      <div className="container-content">
        <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
          Straightforward pricing for every stage of growth.
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-card border p-8 ${
                t.featured
                  ? "border-ll-blue bg-ll-bg shadow-xl shadow-ll-blue/10"
                  : "border-white/10 bg-ll-bg"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-ll-blue px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-lg font-semibold text-white">
                {t.name}
              </h3>
              <p className="mt-1 text-sm text-ll-text-secondary">{t.blurb}</p>

              <div className="mt-6 font-display text-3xl font-semibold text-white">
                {t.price}
              </div>

              {t.intro && (
                <p className="mt-6 text-xs font-medium text-ll-text-secondary">
                  {t.intro}
                </p>
              )}

              <ul className="mt-4 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-ll-text-secondary"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors ${
                  t.featured
                    ? "bg-ll-blue text-white hover:bg-ll-blue-hover"
                    : "border border-white/15 text-white hover:border-white/30"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Monthly care */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-white">
            Keep your website running.
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {care.map((c) => (
              <div
                key={c.name}
                className="rounded-card border border-white/10 bg-ll-bg p-8"
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-base font-semibold text-white">
                    {c.name}
                  </h4>
                  <span className="text-ll-blue-hover">
                    {c.price}
                    <span className="text-sm text-ll-text-secondary">/month</span>
                  </span>
                </div>

                {c.intro && (
                  <p className="mt-4 text-xs font-medium text-ll-text-secondary">
                    {c.intro}
                  </p>
                )}

                <ul className="mt-4 space-y-2.5">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ll-text-secondary"
                    >
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0 text-ll-blue-hover"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
