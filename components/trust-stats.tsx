const stats = [
  { value: "100%", label: "Mobile-first" },
  { value: "Cape Town", label: "Based & local" },
  { value: "Modern", label: "Technology" },
  { value: "Direct", label: "Support, no call centre" },
];

export default function TrustStats() {
  return (
    <section className="border-y border-white/5 bg-ll-card py-16">
      <div className="container-content">
        <h2 className="font-display text-center text-2xl font-semibold text-white md:text-3xl">
          Built for businesses that want to grow.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-semibold text-ll-blue-hover md:text-3xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-ll-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
