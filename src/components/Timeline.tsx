"use client";

import { useState } from "react";
import { SectionHeader } from "./Glyph";

const places = [
  {
    city: "Aba",
    country: "Nigeria",
    years: "1998–2015",
  },
  {
    city: "Grand Baie",
    country: "Mauritius",
    years: "2016–2020",
  },
  {
    city: "London",
    country: "UK",
    years: "2020–2021",
  },
  {
    city: "Accra",
    country: "Ghana",
    years: "2021–2022",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    years: "2022–2024",
  },
  {
    city: "Lagos + Enugu",
    country: "Nigeria",
    years: "2024",
  },
  {
    city: "Stanford",
    country: "USA",
    years: "2024–present",
    isCurrent: true,
  },
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
        title="My Map"
        glyph="◎"
        id="map"
        description="The places that have shaped me"
      />

      <div className="relative">
        {/* Horizontal wire */}
        <div
          className="absolute top-[18px] sm:top-[22px] left-0 right-0 h-px"
          style={{
            background: "repeating-linear-gradient(90deg, var(--color-ink) 0px, var(--color-ink) 6px, transparent 6px, transparent 12px)",
            opacity: 0.12,
          }}
        />

        {/* Places along the wire */}
        <div className="flex items-start justify-between overflow-x-auto gap-0">
          {places.map((place, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={place.city}
                className="flex flex-col items-center flex-1 min-w-0 relative cursor-default"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Compass ring on hover */}
                <div className={`relative z-10 flex items-center justify-center transition-all duration-300 ease-out ${
                  isHovered ? "w-12 h-12 sm:w-14 sm:h-14" : "w-9 h-9 sm:w-11 sm:h-11"
                }`}>
                  {isHovered && <CompassRing />}
                  {/* Dot */}
                  <div
                    className={`rounded-full border-[1.5px] transition-all duration-300 ${
                      place.isCurrent
                        ? "border-ink/40 bg-ink/30"
                        : "border-ink/20 bg-cream"
                    } ${isHovered ? "w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] border-ink/40" : "w-[9px] h-[9px] sm:w-[11px] sm:h-[11px]"}`}
                  />
                </div>

                {/* Label below */}
                <div className={`mt-2 text-center px-1 transition-all duration-300 ${
                  isHovered ? "transform scale-105" : ""
                }`}>
                  <p className={`text-xs sm:text-sm font-display tracking-tight leading-tight transition-colors duration-200 ${
                    place.isCurrent ? "font-semibold text-ink" : isHovered ? "text-ink font-medium" : "text-ink-light"
                  }`}>
                    {place.city}
                    {place.isCurrent && <StanfordTree />}
                  </p>
                  <p className={`text-[0.55rem] sm:text-[0.65rem] uppercase tracking-[0.15em] font-mono mt-0.5 transition-colors duration-200 ${
                    isHovered ? "text-ink-light/60" : "text-ink-light/40"
                  }`}>
                    {place.country}
                  </p>
                  <p className={`text-[0.5rem] sm:text-[0.6rem] uppercase tracking-[0.2em] font-mono mt-0.5 transition-colors duration-200 ${
                    isHovered ? "text-ink-light/40" : "text-ink-light/25"
                  }`}>
                    {place.years}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
