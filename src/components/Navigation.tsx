"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home", glyph: "◎", hoverColor: "hover:text-[#E8573A]" },
  { label: "About", href: "#about", glyph: "△", hoverColor: "hover:text-[#E8A117]" },
  { label: "Creations", href: "#work", glyph: "◆", hoverColor: "hover:text-[#D4A017]" },
  { label: "Thoughts", href: "#thoughts", glyph: "▲", hoverColor: "hover:text-[#2EA043]" },
  { label: "Extracurriculars", href: "#extracurriculars", glyph: "⬡", hoverColor: "hover:text-[#2563EB]" },
  { label: "Newsletter", href: "#newsletter", glyph: "◇", hoverColor: "hover:text-[#4F46E5]" },
  { label: "Shelf", href: "#shelf", glyph: "✦", hoverColor: "hover:text-[#7C3AED]" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/favicon.ico"
            alt="A.O."
            width={28}
            height={28}
            className="rounded-sm"
          />
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-1.5 text-xs uppercase tracking-widest text-ink-light ${link.hoverColor} transition-colors`}
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
              className={`block py-2 text-sm uppercase tracking-widest text-ink-light ${link.hoverColor} transition-colors`}
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
