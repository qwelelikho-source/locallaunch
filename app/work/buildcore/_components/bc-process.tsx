const steps = [
  { n: "01", title: "Site visit & quote", body: "We assess the scope and give you a fixed quote." },
  { n: "02", title: "Plan & permits", body: "We handle drawings, timelines and approvals." },
  { n: "03", title: "Build", body: "Regular updates and a dedicated site manager." },
  { n: "04", title: "Handover", body: "A final walkthrough before you get the keys back." },
];

export default function BcProcess() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
        How a project runs with us.
      </h2>

      <div className="relative mt-14 grid gap-10 md:grid-cols-4">
        <div aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 md:block" />
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
              {s.n}
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
