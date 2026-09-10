"use client";

import { useState } from "react";
import { Menu, X, Wrench, Phone } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas We Cover" },
  { href: "#reviews", label: "Reviews" },
];

export default function FfNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-700 text-white">
            <Wrench size={16} />
          </span>
          FixFlow Plumbing
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#quote"
          className="hidden items-center gap-2 rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-400 md:inline-flex"
        >
          <Phone size={15} /> Call-Out Request
        </a>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-600">
                {l.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900"
            >
              <Phone size={15} /> Call-Out Request
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
