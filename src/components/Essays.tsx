import { SectionHeader } from "./Glyph";
import shelfData from "@/data/shelf.json";

export default function Essays() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Thoughts" glyph="▲" id="thoughts" description="Some ideas and experiences I made time to flesh out" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {shelfData.published.map((item, i) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block px-6 py-5 rounded-lg transition-all duration-200
              bg-white/[0.35] backdrop-blur-[8px]
              border border-white/50
              shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]
              hover:bg-white/[0.5] hover:border-white/70
              hover:shadow-[0_4px_20px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.8)]"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-0.4" : "0.3"}deg)`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[0.6rem] uppercase tracking-[0.15em] text-gold font-medium">
                {item.type}
              </span>
            </div>
            <h3 className="text-sm font-medium text-ink leading-snug group-hover:text-gold transition-colors">
              {item.title}
            </h3>
            <span className="mt-2 inline-block text-xs text-ink-light/40 group-hover:text-gold group-hover:translate-x-1 transition-all">
              Read →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
