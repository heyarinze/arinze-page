"use client";

import { SectionHeader } from "./Glyph";

export default function Newsletter() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="Newsletter" glyph="◇" id="newsletter" />

      <p className="text-xs text-ink-light mb-6 -mt-6 ml-7">
        Subscribe to Arinze&apos;s Notes for thoughts on AI, building, and
        culture.
      </p>

      <div className="max-w-lg">
        <iframe
          src="https://heyarinze.substack.com/embed"
          width="100%"
          height="320"
          className="border border-ink/10 bg-white rounded-sm"
          frameBorder="0"
          scrolling="no"
          title="Subscribe to Arinze's Notes"
        />
      </div>
    </section>
  );
}
