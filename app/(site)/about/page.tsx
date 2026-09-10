import type { Metadata } from "next";
import WhyUs from "@/components/why-us";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "About — LocalLaunch",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ll-bg pt-16 pb-10">
        <div className="container-content grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-display text-4xl font-semibold text-white">
              We&rsquo;re not here to just build you a website.
            </h1>
            <p className="mt-5 text-ll-text-secondary">
              LocalLaunch is a Cape Town-based web development studio helping
              small and growing service businesses get online, get found and
              get trusted. We&rsquo;re a growing team, and every project gets
              direct attention from the people actually building it &mdash;
              no account managers, no outsourcing, no generic templates.
            </p>
            <p className="mt-4 text-ll-text-secondary">
              We work in modern, reliable technology built to last, and we
              believe you should always own what you pay for. No unnecessary
              lock-in, ever.
            </p>
          </div>
          <div className="rounded-card border border-white/10 bg-ll-card p-8">
            <h2 className="font-display text-lg font-semibold text-white">
              What we stand for
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ll-text-secondary">
              <li>Honest pricing, agreed before we start</li>
              <li>Mobile-first design for every project</li>
              <li>Fast turnaround without cutting corners</li>
              <li>You own your website and your domain</li>
            </ul>
          </div>
        </div>
      </section>
      <WhyUs />
      <Cta />
    </>
  );
}
