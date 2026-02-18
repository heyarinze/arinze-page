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
            className="group block p-4 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="stamp text-[0.55rem] py-0 px-1.5 border-gold text-gold">
                {item.type}
              </span>
              <span className="text-[0.6rem] text-ink-light/40">
                {item.outlet}
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
