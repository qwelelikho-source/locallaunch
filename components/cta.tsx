import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-ll-bg py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-ll-blue/20 blur-[140px]"
      />

      <div className="container-content relative text-center">
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold text-white md:text-4xl">
          Ready to take your business online?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ll-text-secondary">
          Tell me what you do, and I&rsquo;ll show you what your website
          could look like.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-ll-blue px-7 py-3.5 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors"
          >
            Get My Free Quote
          </Link>
        </div>

        <p className="mt-6 text-xs text-ll-text-secondary">
          No obligation &middot; Cape Town &amp; Western Cape &middot;
          Response within 24 hours
        </p>
      </div>
    </section>
  );
}
