"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./Glyph";
import shelfData from "@/data/shelf.json";

export default function Essays() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-5xl mx-auto px-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SectionHeader title="My Writing" glyph="▲" id="thoughts" description="Some ideas and experiences I made time to flesh out" />
        <span className="mb-10 text-[0.6rem] uppercase tracking-[0.2em] text-ink-light/40 select-none">
          drag / scroll →
        </span>
      </div>

      <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 -mx-6 px-6">
        {shelfData.published.map((item, i) => (
          <div
            key={item.title}
            className={`snap-start shrink-0 w-[260px] ${visible ? "card-enter" : "opacity-0"}`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="card-bob" style={{ animationDelay: `${700 + i * 90}ms` }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[170px] flex-col px-6 py-5 rounded-lg transition-all duration-200
                  bg-white/[0.35] backdrop-blur-[8px]
                  border border-white/50
                  shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]
                  hover:bg-white/[0.5] hover:border-white/70
                  hover:shadow-[0_8px_28px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.8)]
                  hover:-translate-y-1"
                style={{ transform: `rotate(${i % 2 === 0 ? "-0.5" : "0.4"}deg)` }}
              >
                <span className="text-[0.6rem] uppercase tracking-[0.15em] text-gold font-medium mb-2">
                  {item.type}
                </span>
                <h3 className="text-sm font-medium text-ink leading-snug group-hover:text-gold transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <span className="mt-auto inline-block text-xs text-ink-light/40 group-hover:text-gold group-hover:translate-x-1 transition-all">
                  Read →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
