const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arinzeobiezue",
    glyph: "→",
  },
  {
    label: "X",
    href: "https://www.x.com/heyarinze",
    glyph: "→",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@heyarinze",
    glyph: "→",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@helloarinze",
    glyph: "→",
  },
  {
    label: "Wabi",
    href: "https://wabi.ai/@heyarinze",
    glyph: "→",
  },
  {
    label: "Email",
    href: "mailto:heyarinze@gmail.com",
    glyph: "→",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-light tracking-wide">
          <span className="glyph text-coral mr-1">◇</span>
          Built with Claude Code by Arinze Obiezue &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6 flex-wrap justify-center">
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
