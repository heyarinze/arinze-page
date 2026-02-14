"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home", glyph: "◎" },
  { label: "About", href: "#about", glyph: "△" },
  { label: "Work", href: "#work", glyph: "◆" },
  { label: "Shelf", href: "#shelf", glyph: "✦" },
  { label: "Newsletter", href: "#newsletter", glyph: "◇" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink hover:text-coral transition-colors"
        >
          A.O.
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-light hover:text-coral transition-colors"
            >
              <span className="glyph text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">
                {link.glyph}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-cream/95 backdrop-blur-sm border-b border-ink/5 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm uppercase tracking-widest text-ink-light hover:text-coral transition-colors"
            >
              <span className="glyph text-xs mr-2 opacity-40">
                {link.glyph}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
