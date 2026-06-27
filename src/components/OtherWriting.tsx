import { SectionHeader } from "./Glyph";

const platforms = [
  {
    name: "Substack",
    handle: "heyarinze.substack.com",
    description: "Where my essays live first — AI, philosophy, learning, and identity.",
    href: "https://heyarinze.substack.com",
    glyph: "◇",
  },
  {
    name: "Medium",
    handle: "medium.com/@heyarinze",
    description: "Cross-posts and longer reflections for the Medium crowd.",
    href: "https://medium.com/@heyarinze",
    glyph: "❋",
  },
];

export default function OtherWriting() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Other Writing" glyph="◇" id="other-writing" description="Follow my essays across the web" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-6 py-6 rounded-lg transition-all duration-200
              bg-white/[0.35] backdrop-blur-[8px]
              border border-white/50
              shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]
              hover:bg-white/[0.5] hover:border-white/70 hover:-translate-y-1
              hover:shadow-[0_8px_28px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-coral text-lg glyph">{platform.glyph}</span>
              <h3 className="font-display text-xl font-bold text-ink group-hover:text-gold transition-colors">
                {platform.name}
              </h3>
            </div>
            <p className="text-sm text-ink-light leading-relaxed mb-3">
              {platform.description}
            </p>
            <span className="inline-block text-xs text-ink-light/40 group-hover:text-gold group-hover:translate-x-1 transition-all">
              {platform.handle} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
