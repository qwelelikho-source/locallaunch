import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    body: "Send us your requirements through WhatsApp or our enquiry form.",
  },
  {
    n: "02",
    title: "We design",
    body: "We create a website around your business, customers and goals.",
  },
  {
    n: "03",
    title: "You review",
    body: "You give us feedback and we make the necessary changes.",
  },
  {
    n: "04",
    title: "We launch",
    body: "Your new website goes live and your business is ready to grow.",
  },
];

export default function Process() {
  return (
    <section className="bg-ll-bg py-24">
      <div className="container-content">
        <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
          How it works.
        </h2>

        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-white/10 md:block"
          />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ll-card font-display text-sm text-ll-blue-hover">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ll-text-secondary">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-ll-blue px-6 py-3 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors"
          >
            Start My Website
          </Link>
        </div>
      </div>
    </section>
  );
}
