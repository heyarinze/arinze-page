const socials = [
  {
    label: "Twitter / X",
    href: "https://x.com",
    glyph: "→",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    glyph: "→",
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    glyph: "→",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-light tracking-wide">
          <span className="glyph text-coral mr-1">◇</span>
          Arinze Obiezue &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link text-xs uppercase tracking-widest text-ink-light hover:text-coral transition-colors"
            >
              {s.label}{" "}
              <span className="glyph text-[10px] ml-0.5">{s.glyph}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
