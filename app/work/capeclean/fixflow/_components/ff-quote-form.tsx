"use client";

import { useState } from "react";

export default function FfQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — a real build would post this to an API route,
    // Supabase table, or a form service, and likely trigger an SMS alert.
    setStatus("sent");
  }

  return (
    <section id="quote" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Need a plumber now?
        </h2>
        <p className="mt-3 text-slate-300">
          Fill this in and the nearest available plumber will call you back.
        </p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl bg-white p-8 text-left">
            <h3 className="font-semibold text-slate-900">Request received.</h3>
            <p className="mt-2 text-sm text-slate-600">
              A real dispatch flow would confirm an ETA here.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl bg-white p-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone number" name="phone" type="tel" required />
            </div>
            <div className="mt-4">
              <Field label="Address / area" name="address" required />
            </div>
            <div className="mt-4">
              <label htmlFor="issue" className="mb-1.5 block text-sm text-slate-600">
                What's the problem?
              </label>
              <textarea
                id="issue"
                name="issue"
                rows={3}
                required
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
                placeholder="e.g. Geyser leaking into the ceiling"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400"
            >
              Request a call-out
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
        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none"
      />
    </div>
  );
}
