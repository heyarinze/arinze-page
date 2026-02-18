import React from "react";
import Image from "next/image";
import { SectionHeader } from "./Glyph";
import aboutData from "@/data/about.json";

function renderInlineLinks(text: string): React.ReactNode {
  // Handle {substack} placeholder
  if (text.includes("{substack}")) {
    const parts = text.split("{substack}");
    return (
      <>
        {renderInlineLinks(parts[0])}
        <a
          href="https://heyarinze.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral hover:underline font-medium"
        >
          Substack
        </a>
        {renderInlineLinks(parts[1])}
      </>
    );
  }
  // Handle {tedx} placeholder
  if (text.includes("{tedx}")) {
    const parts = text.split("{tedx}");
    return (
      <>
        {renderInlineLinks(parts[0])}
        <a
          href="https://www.youtube.com/watch?v=_YodZe1W-9Y&list=RD_YodZe1W-9Y&start_radio=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-coral hover:underline font-medium"
        >
          singing and playing the keyboard on a TEDx stage
        </a>
        {renderInlineLinks(parts[1])}
      </>
    );
  }
  return text;
}

function renderBioText(text: string) {
  return renderInlineLinks(text);
}

function isBulletList(text: string) {
  return text.includes("\n•");
}

function renderBulletList(text: string) {
  const lines = text.split("\n");
  const intro = lines[0]; // "In the past:"
  const bullets = lines.slice(1).filter((l) => l.startsWith("•"));

  return (
    <>
      <span>{intro}</span>
      <ul className="mt-2 space-y-1.5 list-none pl-0">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-ink-light">
            <span className="text-coral text-xs mt-0.5 shrink-0">•</span>
            <span>{renderInlineLinks(bullet.replace(/^•\s*/, ""))}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="About" glyph="△" id="about" description="A brief on me and what I care about" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Photo with transparent background */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start gap-3">
          <div className="relative w-48 h-64">
            <Image
              src={aboutData.photo}
              alt="Arinze Obiezue"
              fill
              className="object-contain"
              sizes="192px"
            />
          </div>
          <p className="font-cursive text-base font-bold text-ink text-center md:text-left" style={{ letterSpacing: "0.01em" }}>
            Creator. Schwarzman Scholar. Skoll Fellow. Stanford MBA.
          </p>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-4">
          {aboutData.bio.map((paragraph, i) => (
            <div key={i} className="text-sm leading-relaxed text-ink-light">
              {i === 0 && (
                <span className="text-coral glyph mr-1 text-xs">❋</span>
              )}
              {isBulletList(paragraph)
                ? renderBulletList(paragraph)
                : renderBioText(paragraph)}
            </div>
          ))}

          {/* Decorative tags */}
          <div className="pt-4 flex gap-3 flex-wrap">
            {["AI", "Education", "Media", "Culture", "Startups"].map((tag) => (
              <span
                key={tag}
                className="stamp text-ink-light/60 hover:text-coral hover:border-coral transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
