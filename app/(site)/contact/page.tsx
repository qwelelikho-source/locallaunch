import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Get a Free Quote — LocalLaunch",
};

export default function ContactPage() {
  return (
    <section className="bg-ll-bg py-20">
      <div className="container-content grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold text-white">
            Get your free quote.
          </h1>
          <p className="mt-4 max-w-md text-ll-text-secondary">
            Tell me a bit about your business and what you need. I&rsquo;ll
            get back to you within 24 hours with a clear, no-obligation
            quote.
          </p>

          <div className="mt-10 space-y-4 text-sm text-ll-text-secondary">
            <p>Prefer to chat directly?</p>
            <a
              href="https://wa.me/27672277990"
              className="inline-flex items-center rounded-md border border-white/15 px-5 py-2.5 font-medium text-white hover:border-white/30 transition-colors"
            >
              Message me on WhatsApp
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
