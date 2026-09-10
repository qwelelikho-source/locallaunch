import Image from "next/image";

const projects = [
  {
    name: "Sea Point Renovation",
    type: "Full home renovation",
    duration: "12 weeks",
    file: "project-seapoint.jpg",
    ratio: "719 / 330",
  },
  {
    name: "Durbanville Extension",
    type: "Double-storey extension",
    duration: "16 weeks",
    file: "project-durbanville.jpg",
    ratio: "720 / 330",
  },
  {
    name: "Claremont New Build",
    type: "3-bedroom new build",
    duration: "9 months",
    file: "project-claremont.jpg",
    ratio: "719 / 363",
  },
  {
    name: "Observatory Kitchen",
    type: "Kitchen remodel",
    duration: "5 weeks",
    file: "project-observatory.jpg",
    ratio: "720 / 363",
  },
];

export default function BcProjects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-lg text-3xl font-bold text-slate-900 md:text-4xl">
          Recent projects.
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Illustrative examples for this concept project.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="relative w-full" style={{ aspectRatio: p.ratio }}>
                <Image
                  src={`/buildcore/${p.file}`}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.type}</p>
                <p className="mt-2 text-xs font-medium text-orange-600">{p.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
