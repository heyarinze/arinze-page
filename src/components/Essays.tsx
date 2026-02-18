import { SectionHeader } from "./Glyph";
import shelfData from "@/data/shelf.json";

export default function Essays() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Thoughts" glyph="▲" id="thoughts" description="Some ideas and experiences I made time to flesh out" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shelfData.published.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-lg border border-white/40 bg-white/15 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] hover:bg-white/30 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.08)] hover:border-white/60 transition-all duration-300"
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
