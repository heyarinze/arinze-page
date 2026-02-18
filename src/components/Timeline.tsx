"use client";

import { useState } from "react";
import { SectionHeader } from "./Glyph";

const places = [
  { city: "Aba", country: "Nigeria", years: "1998–2015", rotation: "-1.5deg" },
  { city: "Grand Baie", country: "Mauritius", years: "2016–2020", rotation: "1deg" },
  { city: "London", country: "UK", years: "2020–2021", rotation: "-0.5deg" },
  { city: "Accra", country: "Ghana", years: "2021–2022", rotation: "1.5deg" },
  { city: "Nairobi", country: "Kenya", years: "2022–2024", rotation: "-1deg" },
  { city: "Lagos + Enugu", country: "Nigeria", years: "2024", rotation: "0.5deg" },
  { city: "Stanford", country: "USA", years: "2024–present", isCurrent: true, rotation: "-0.8deg" },
];

function CompassRing() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 48 48"
    >
      {/* Outer ring */}
      <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" opacity="0.2" />
      {/* Inner ring */}
      <circle cx="24" cy="24" r="16" fill="none" stroke="var(--color-ink)" strokeWidth="0.3" opacity="0.1" />
      {/* Cardinal ticks — N */}
      <line x1="24" y1="4" x2="24" y2="8" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.3" />
      {/* S */}
      <line x1="24" y1="40" x2="24" y2="44" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.3" />
      {/* E */}
      <line x1="40" y1="24" x2="44" y2="24" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.3" />
      {/* W */}
      <line x1="4" y1="24" x2="8" y2="24" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.3" />
      {/* Ordinal ticks — NE */}
      <line x1="37.3" y1="10.7" x2="39.1" y2="8.9" stroke="var(--color-ink)" strokeWidth="0.4" opacity="0.15" />
      {/* SE */}
      <line x1="37.3" y1="37.3" x2="39.1" y2="39.1" stroke="var(--color-ink)" strokeWidth="0.4" opacity="0.15" />
      {/* SW */}
      <line x1="10.7" y1="37.3" x2="8.9" y2="39.1" stroke="var(--color-ink)" strokeWidth="0.4" opacity="0.15" />
      {/* NW */}
      <line x1="10.7" y1="10.7" x2="8.9" y2="8.9" stroke="var(--color-ink)" strokeWidth="0.4" opacity="0.15" />
      {/* N label */}
      <text x="24" y="3" textAnchor="middle" fontSize="3" fill="var(--color-ink)" opacity="0.25" fontFamily="var(--font-mono)">N</text>
    </svg>
  );
}

function StanfordTree() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-5 h-5 inline-block ml-1 -mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "grayscale(100%)", opacity: 0.5 }}
    >
      <line x1="16" y1="28" x2="16" y2="14" />
      <polygon points="16,4 8,14 24,14" fill="currentColor" fillOpacity="0.12" />
      <polygon points="16,8 10,16 22,16" fill="currentColor" fillOpacity="0.08" />
      <polygon points="16,2 6,16 26,16" fill="none" />
    </svg>
  );
}

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader
        title="My Homes"
        glyph="◎"
        id="map"
        description="The places that raised me"
      />

      {/* Postcard carousel — scrollable on mobile, wrapped on desktop */}
      <div className="flex sm:flex-wrap sm:justify-center overflow-x-auto gap-4 sm:gap-5 px-2 sm:px-0 -mx-2 sm:mx-0 snap-x snap-mandatory scrollbar-hide pb-2"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {places.map((place, i) => {
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={place.city}
              className="shrink-0 sm:shrink relative cursor-default snap-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tape strip */}
              <div
                className="absolute -top-1.5 left-1/2 z-20 w-8 h-3 bg-cream/60 border-y border-ink/[0.06] shadow-[0_0.5px_2px_rgba(0,0,0,0.04)]"
                style={{ transform: `translateX(-50%) rotate(${i % 2 === 0 ? 2 : -2}deg)`, backdropFilter: "blur(2px)" }}
              />

              {/* Postcard */}
              <div
                className={`relative w-[7rem] sm:w-[7.5rem] pt-4 pb-3 px-3 text-center transition-all duration-300
                  bg-white/[0.35] backdrop-blur-[6px]
                  border border-white/50
                  shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]
                  ${isHovered
                    ? "shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] scale-105"
                    : ""
                  }`}
                style={{ transform: `rotate(${place.rotation})${isHovered ? " scale(1.05)" : ""}` }}
              >
                {/* Compass ring on hover */}
                {isHovered && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-10 opacity-30">
                    <CompassRing />
                  </div>
                )}

                {/* City name */}
                <p className={`text-sm font-display tracking-tight leading-tight transition-colors duration-200 relative z-10 ${
                  place.isCurrent ? "font-semibold text-ink" : isHovered ? "text-ink font-medium" : "text-ink-light"
                }`}>
                  {place.city}
                  {place.isCurrent && <StanfordTree />}
                </p>

                {/* Country */}
                <p className={`text-[0.6rem] uppercase tracking-[0.15em] font-mono mt-1 transition-colors duration-200 ${
                  isHovered ? "text-ink-light/60" : "text-ink-light/40"
                }`}>
                  {place.country}
                </p>

                {/* Divider line */}
                <div className="w-6 h-px bg-ink/[0.08] mx-auto my-1.5" />

                {/* Years */}
                <p className={`text-[0.55rem] uppercase tracking-[0.2em] font-mono transition-colors duration-200 ${
                  isHovered ? "text-ink" : "text-ink/60"
                }`}>
                  {place.years}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe hint on mobile */}
      <p className="sm:hidden text-center text-[0.55rem] uppercase tracking-[0.2em] text-coral/60 font-mono mt-6">
        ← swipe →
      </p>
    </section>
  );
}
