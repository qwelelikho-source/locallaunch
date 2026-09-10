"use client";

import { useState } from "react";

const services = [
  "Signature Cut",
  "Skin Fade",
  "Hot Towel Shave",
  "Beard Sculpting",
  "Kids Cut",
  "Cut & Colour",
];

export default function UcBookingForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only — a real build would post this to a booking system,
    // API route, or a service like Calendly / Fresha.
    setStatus("sent");
  }

  return (
    <section id="book" className="bg-amber-500 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">
          Book your slot.
        </h2>
        <p className="mt-3 text-black/70">
          Pick a service and we&rsquo;ll confirm your time.
        </p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl bg-black p-8 text-left">
            <h3 className="font-semibold text-white">You&rsquo;re booked.</h3>
            <p className="mt-2 text-sm text-zinc-400">
              A real booking system would confirm a time slot here.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 rounded-2xl bg-black p-8 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone / WhatsApp" name="phone" type="tel" required />
            </div>
            <div className="mt-4">
              <label htmlFor="service" className="mb-1.5 block text-sm text-zinc-400">
                Service
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <Field label="Preferred day / time" name="preferred" />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-black hover:bg-amber-400"
            >
              Request booking
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
      <label htmlFor={name} className="mb-1.5 block text-sm text-zinc-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-amber-500 focus:outline-none"
      />
    </div>
  );
}
