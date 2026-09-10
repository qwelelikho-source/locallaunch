import Link from "next/link";
import { Sparkles, HardHat, Wrench, Zap, Car, Scissors } from "lucide-react";

const industries = [
  { icon: Sparkles, title: "Cleaning", body: "Turn searches into quote requests." },
  { icon: HardHat, title: "Construction", body: "Showcase your projects and services." },
  { icon: Wrench, title: "Plumbing", body: "Make it easy for customers to call you." },
  { icon: Zap, title: "Electrical", body: "Build trust before the first conversation." },
  { icon: Car, title: "Automotive", body: "Show your services, location and reviews." },
  { icon: Scissors, title: "Beauty", body: "Showcase your work and make bookings easier." },
];

export default function Industries() {
  return (
    <section className="bg-ll-card py-24">
      <div className="container-content">
        <h2 className="font-display max-w-xl text-3xl font-semibold text-white md:text-4xl">
          Built for businesses like yours.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div
              key={i.title}
              className="rounded-card border border-white/10 bg-ll-bg p-6"
            >
              <i.icon className="text-ll-blue-hover" size={22} />
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                {i.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ll-text-secondary">
                {i.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-ll-blue-hover hover:text-white transition-colors"
          >
            Don&rsquo;t see your industry?
          </Link>
        </div>
      </div>
    </section>
  );
}
