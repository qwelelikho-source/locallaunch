"use client";

import { useState } from "react";

export default function CcQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — a real build would post this to an API route,
    // Supabase table, or a form service.
    setStatus("sent");
  }

  return (
    <section id="quote" className="bg-teal-600 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get your free quote.
        </h2>
        <p className="mt-3 text-teal-50">
          Tell us what you need cleaned — we&rsquo;ll get back to you the
          same day.
        </p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl bg-white p-8 text-left">
            <h3 className="font-semibold text-slate-900">Thanks — got it.</h3>
            <p className="mt-2 text-sm text-slate-600">
              A real booking flow would confirm your slot here.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl bg-white p-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" required />
            </div>
            <div className="mt-4">
              <Field label="Address / area" name="address" />
            </div>
            <div className="mt-4">
              <label htmlFor="details" className="mb-1.5 block text-sm text-slate-600">
                What needs cleaning?
              </label>
              <textarea
                id="details"
                name="details"
                rows={3}
                required
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
                placeholder="e.g. 2-bedroom flat, once-off deep clean"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700"
            >
              Request my quote
            </button>
          </form>
        )}
      </div>
    </section>
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
      <label htmlFor={name} className="mb-1.5 block text-sm text-slate-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none"
      />
    </div>
  );
}
