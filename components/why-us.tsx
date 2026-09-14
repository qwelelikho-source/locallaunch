const points = [
  {
    title: "Built around your business",
    body: "No generic copy-and-paste website.",
  },
  {
    title: "Mobile-first",
    body: "Your customers are on their phones. I design for them first.",
  },
  {
    title: "Straightforward pricing",
    body: "You know what you're paying before I start.",
  },
  {
    title: "Direct support",
    body: "You're dealing directly with me — the person building your website.",
  },
  {
    title: "You own your website",
    body: "No unnecessary lock-in.",
  },
];

export default function WhyUs({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-ll-card py-24">
      <div className="container-content">
        {showHeading && (
          <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
            I&rsquo;m not here to just build you a website.
          </h2>
        )}

        <div className={`grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {points.map((p) => (
            <div key={p.title} className="border-l-2 border-ll-blue pl-5">
              <h3 className="font-display text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ll-text-secondary">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
