"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "27672277990";
// Replace this with your real Formspree form ID (from https://formspree.io/f/YOUR_ID)
const FORMSPREE_ID = "meaqwjbv";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [waLink, setWaLink] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const name = (form.get("name") as string) || "";
    const business = (form.get("business") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const message = (form.get("message") as string) || "";

    // Build the pre-filled WhatsApp message
    const waText = [
      `New quote request from ${name}`,
      business && `Business: ${business}`,
      email && `Email: ${email}`,
      phone && `Their WhatsApp: ${phone}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    setWaLink(link);

    // Send a copy to email via Formspree, so nothing gets lost even if
    // the visitor never taps send in WhatsApp.
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
    } catch {
      // Even if the email fails, still let them through to WhatsApp -
      // don't block the visitor on a backend hiccup.
    }

    setStatus("sent");
    window.open(link, "_blank");
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-white/10 bg-ll-card p-8">
        <h2 className="font-display text-lg font-semibold text-white">
          Almost there - check WhatsApp.
        </h2>
        <p className="mt-2 text-sm text-ll-text-secondary">
          I&rsquo;ve opened WhatsApp with your details filled in, and a copy
          has also been emailed to me. Just hit send in WhatsApp and
          I&rsquo;ll get back to you within 24 hours.
        </p>
        {waLink && (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-md bg-ll-blue px-5 py-2.5 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors"
          >
            Didn&rsquo;t open? Click here
          </a>
        )}
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
          disabled={status === "sending"}
          className="w-full rounded-md bg-ll-blue px-5 py-3 text-sm font-medium text-white hover:bg-ll-blue-hover transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send my details"}
        </button>
        <p className="text-center text-xs text-ll-text-secondary">
          Sends me an email and opens WhatsApp with your details pre-filled.
        </p>
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
