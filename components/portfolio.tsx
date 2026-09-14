import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "CapeClean",
    tag: "Cleaning company",
    features: "Quote form • Photo gallery • Testimonials • Mobile-first",
    href: "/work/capeclean",
    screenshot: "/portfolio/capeclean.jpg",
    url: "capeclean.co.za",
  },
  {
    name: "FixFlow Plumbing",
    tag: "Plumbing company",
    features: "Call-out requests • Service areas • 24/7 contact • Mobile-first",
    href: "/work/fixflow",
    screenshot: "/portfolio/fixflow.jpg",
    url: "fixflowplumbing.co.za",
  },
  {
    name: "BuildCore Construction",
    tag: "Construction company",
    features: "Project gallery • Quote form • Process timeline • Mobile-first",
    href: "/work/buildcore",
    screenshot: "/portfolio/buildcore.jpg",
    url: "buildcoreconstruction.co.za",
  },
  {
    name: "UrbanCut",
    tag: "Barbershop",
    features: "Online booking • Price list • Style gallery • Mobile-first",
    href: "/work/urbancut",
    screenshot: "/portfolio/urbancut.jpg",
    url: "urbancut.co.za",
  },
] as const;

export default function Portfolio({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="work" className="bg-ll-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        {showHeading && (
          <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
            See what your business could look like.
          </h2>
        )}

        <div className={`grid gap-12 md:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          {projects.map((p) => (
            <div key={p.name} className="group">
              <Link href={p.href} className="block">
                {/* Browser-style frame */}
                <div className="overflow-hidden rounded-card border border-white/10 bg-ll-card shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:shadow-2xl group-hover:shadow-black/40">
                  {/* Chrome bar */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="ml-3 flex-1 truncate rounded bg-white/5 px-3 py-1 text-xs text-ll-text-secondary">
                      {p.url}
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1440 / 900" }}>
                    <Image
                      src={p.screenshot}
                      alt={`${p.name} ${p.tag.toLowerCase()} website concept, Cape Town`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />

                    {/* Hover overlay with View Live Demo */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg">
                        <ExternalLink size={15} />
                        View Live Demo
                      </span>
                    </div>

                    {/* Concept project label */}
                    <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-ll-text-secondary backdrop-blur">
                      Concept Project — LocalLaunch
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ll-text-secondary">{p.tag}</p>
                  <p className="mt-1.5 text-xs text-ll-text-secondary/70">{p.features}</p>
                </div>
                <Link
                  href={p.href}
                  className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ll-blue-hover/30 px-4 py-2 text-sm font-semibold text-ll-blue-hover transition-colors hover:border-ll-blue-hover hover:bg-ll-blue hover:text-white"
                >
                  View Live Demo
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
