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
            className="group relative block px-6 py-5 transition-all duration-200
              bg-cream/60 backdrop-blur-[2px]
              hover:bg-cream/80
              shadow-[0_1px_3px_rgba(0,0,0,0.03)]
              hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-0.4" : "0.3"}deg)`,
              borderImage: "repeating-linear-gradient(0deg, var(--color-ink) 0px, var(--color-ink) 3px, transparent 3px, transparent 7px) 7",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {/* Torn edge texture — top */}
            <div
              className="pointer-events-none absolute -top-[1px] left-2 right-2 h-[2px]"
              style={{
                background: "repeating-linear-gradient(90deg, var(--color-cream) 0px, var(--color-cream) 2px, transparent 2px, transparent 6px)",
              }}
            />
            {/* Torn edge texture — bottom */}
            <div
              className="pointer-events-none absolute -bottom-[1px] left-2 right-2 h-[2px]"
              style={{
                background: "repeating-linear-gradient(90deg, var(--color-cream) 0px, var(--color-cream) 3px, transparent 3px, transparent 7px)",
              }}
            />
            {/* Torn edge texture — left */}
            <div
              className="pointer-events-none absolute top-2 bottom-2 -left-[1px] w-[2px]"
              style={{
                background: "repeating-linear-gradient(0deg, var(--color-cream) 0px, var(--color-cream) 2px, transparent 2px, transparent 6px)",
              }}
            />
            {/* Torn edge texture — right */}
            <div
              className="pointer-events-none absolute top-2 bottom-2 -right-[1px] w-[2px]"
              style={{
                background: "repeating-linear-gradient(0deg, var(--color-cream) 0px, var(--color-cream) 3px, transparent 3px, transparent 7px)",
              }}
            />

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
