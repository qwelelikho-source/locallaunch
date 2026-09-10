import Link from "next/link";
import BrowserMockup from "@/components/browser-mockup";

const projects = [
  { variant: "cleaning", name: "CapeClean", tag: "Cleaning company" },
  { variant: "plumbing", name: "FixFlow Plumbing", tag: "Plumbing company" },
  { variant: "construction", name: "BuildCore Construction", tag: "Construction company" },
  { variant: "barber", name: "UrbanCut", tag: "Barbershop" },
] as const;

export default function Portfolio() {
  return (
    <section id="work" className="bg-ll-bg py-24">
      <div className="container-content">
        <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
          See what your business could look like.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="relative">
                <BrowserMockup variant={p.variant} />
                <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] text-ll-text-secondary backdrop-blur">
                  Concept project
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ll-text-secondary">{p.tag}</p>
                </div>
                <Link
                  href="/work"
                  className="text-sm font-medium text-ll-blue-hover hover:text-white transition-colors"
                >
                  View project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
