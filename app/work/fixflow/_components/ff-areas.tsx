const areas = [
  "Cape Town CBD",
  "Southern Suburbs",
  "Northern Suburbs",
  "Atlantic Seaboard",
  "Blaauwberg",
  "Helderberg",
];

const steps = [
  { n: "01", title: "Call or book online", body: "Tell us what's wrong and where you are." },
  { n: "02", title: "We dispatch a plumber", body: "The nearest available plumber heads your way." },
  { n: "03", title: "Problem fixed", body: "Upfront pricing, no surprises on the invoice." },
];

export default function FfAreas() {
  return (
    <section id="areas" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
          Covering Cape Town, area by area.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
