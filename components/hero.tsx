import Link from "next/link";
import BrowserMockup from "@/components/browser-mockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ll-bg pt-16 pb-24 md:pt-24 md:pb-32">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-ll-blue/20 blur-[120px]"
      />

      <div className="container-content relative grid gap-14 md:grid-cols-2 md:items-center">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-ll-text-secondary">
            Cape Town • South Africa
          </span>

          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
            Websites that turn local businesses into online businesses.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ll-text-secondary">
            I build fast, modern websites for Cape Town businesses that help you
            get found, build trust and turn visitors into customers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-ll-blue px-6 py-3 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/30 transition-colors"
            >
              View My Work
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-ll-text-secondary sm:max-w-sm">
            <li className="flex items-center gap-2">
              <Check /> Mobile-first
            </li>
            <li className="flex items-center gap-2">
              <Check /> WhatsApp ready
            </li>
            <li className="flex items-center gap-2">
              <Check /> SEO-ready
            </li>
            <li className="flex items-center gap-2">
              <Check /> Built for your business
            </li>
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:150ms] opacity-0">
          <BrowserMockup variant="cleaning" />
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 text-ll-blue-hover"
    >
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}