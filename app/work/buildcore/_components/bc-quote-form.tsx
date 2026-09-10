"use client";

import { useState } from "react";

export default function BcQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — a real build would post this to an API route,
    // Supabase table, or a form service.
    setStatus("sent");
  }

  return (
    <section id="quote" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Get your project quoted.
        </h2>
        <p className="mt-3 text-slate-300">
          Tell us about the project and we&rsquo;ll arrange a site visit.
        </p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl bg-white p-8 text-left">
            <h3 className="font-semibold text-slate-900">Thanks — got it.</h3>
            <p className="mt-2 text-sm text-slate-600">
              A real build would confirm a site-visit date here.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl bg-white p-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone number" name="phone" type="tel" required />
            </div>
            <div className="mt-4">
              <Field label="Property address" name="address" />
            </div>
            <div className="mt-4">
              <label htmlFor="scope" className="mb-1.5 block text-sm text-slate-600">
                What are you looking to build?
              </label>
              <textarea
                id="scope"
                name="scope"
                rows={3}
                required
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none"
                placeholder="e.g. Single-storey extension, roughly 40sqm"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-500"
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
        className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none"
      />
    </div>
  );
}
