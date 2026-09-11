"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to an API route, Supabase table, or a form
    // service (e.g. Formspree) so submissions actually reach you.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-white/10 bg-ll-card p-8">
        <h2 className="font-display text-lg font-semibold text-white">
          Thanks — got it.
        </h2>
        <p className="mt-2 text-sm text-ll-text-secondary">
          I&rsquo;ll be in touch within 24 hours with your free quote.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-card border border-white/10 bg-ll-card p-8"
    >
      <div className="space-y-5">
        <Field label="Your name" name="name" required />
        <Field label="Business name" name="business" />
        <Field label="Email" name="email" type="email" required />
        <Field label="WhatsApp number" name="phone" type="tel" />

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm text-ll-text-secondary"
          >
            What do you need?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-md border border-white/10 bg-ll-bg px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-ll-blue focus:outline-none"
            placeholder="Tell me about your business and what kind of website you're looking for."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-ll-blue px-5 py-3 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors"
        >
          Send my details
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-ll-text-secondary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-white/10 bg-ll-bg px-3.5 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-ll-blue focus:outline-none"
      />
    </div>
  );
}
