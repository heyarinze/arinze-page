"use client";

import { useState } from "react";
import { SectionHeader } from "./Glyph";

const places = [
  {
    city: "Aba",
    country: "Nigeria",
    years: "1998–2015",
    // Approx lat/lon: 5.1°N, 7.4°E
    x: 50.6,
    y: 46.5,
  },
  {
    city: "Grand Baie",
    country: "Mauritius",
    years: "2016–2020",
    // Approx lat/lon: -20.0°S, 57.6°E
    x: 63.8,
    y: 62.0,
  },
  {
    city: "London",
    country: "UK",
    years: "2020–2021",
    // Approx lat/lon: 51.5°N, -0.1°W
    x: 49.2,
    y: 28.5,
  },
  {
    city: "Accra",
    country: "Ghana",
    years: "2021–2022",
    // Approx lat/lon: 5.6°N, -0.2°W
    x: 49.2,
    y: 46.0,
  },
  {
    city: "Nairobi",
    country: "Kenya",
    years: "2022–2024",
    // Approx lat/lon: -1.3°S, 36.8°E
    x: 57.8,
    y: 50.4,
  },
  {
    city: "Lagos + Enugu",
    country: "Nigeria",
    years: "2024",
    // Approx lat/lon: 6.5°N, 3.4°E (Lagos area)
    x: 49.8,
    y: 45.5,
  },
  {
    city: "Stanford",
    country: "USA",
    years: "2024–present",
    // Approx lat/lon: 37.4°N, -122.2°W
    x: 14.5,
    y: 33.0,
    isCurrent: true,
  },
];

// Travel path order connecting the dots
const pathOrder = [0, 1, 2, 3, 4, 5, 6];

function StanfordTree() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-4 h-4 inline-block ml-1 -mt-0.5"
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

  // Build the travel path as SVG polyline points
  const pathPoints = pathOrder
    .map((idx) => `${places[idx].x},${places[idx].y}`)
    .join(" ");

  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader
        title="My Map"
        glyph="◎"
        id="map"
        description="The places that have shaped me"
      />

      {/* Map container */}
      <div className="relative w-full">
        <svg
          viewBox="0 0 100 60"
          className="w-full h-auto"
          style={{ filter: "grayscale(100%)" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified world map continents - muted grey outlines */}
          <g fill="none" stroke="var(--color-ink)" strokeWidth="0.15" opacity="0.15">
            {/* North America */}
            <path d="M5,15 L8,12 L12,11 L15,10 L18,11 L22,13 L24,16 L22,18 L20,22 L22,25 L24,28 L22,30 L20,32 L18,34 L16,36 L14,35 L12,33 L10,30 L8,28 L7,25 L6,22 L5,18 Z" />
            {/* Greenland */}
            <path d="M28,8 L32,6 L36,7 L35,10 L32,11 L28,10 Z" />
            {/* South America */}
            <path d="M22,42 L24,40 L26,38 L28,40 L30,42 L32,44 L33,47 L32,50 L30,53 L28,55 L26,54 L24,52 L23,48 L22,45 Z" />
            {/* Europe */}
            <path d="M45,14 L47,12 L49,11 L51,12 L53,14 L52,16 L50,18 L48,20 L46,18 L44,16 Z" />
            {/* Africa */}
            <path d="M46,28 L48,26 L50,25 L52,26 L54,28 L56,30 L58,33 L59,36 L58,40 L56,44 L54,48 L52,50 L50,52 L48,50 L47,46 L46,42 L45,38 L44,34 L45,30 Z" />
            {/* Middle East / Arabia */}
            <path d="M56,26 L58,24 L60,25 L62,27 L63,30 L61,32 L59,31 L57,29 Z" />
            {/* India */}
            <path d="M65,28 L67,26 L70,27 L72,30 L71,34 L68,38 L66,36 L64,33 L63,30 Z" />
            {/* East Asia / China */}
            <path d="M70,16 L73,14 L76,13 L79,14 L82,16 L84,19 L83,22 L80,24 L77,25 L74,24 L72,22 L70,20 Z" />
            {/* Southeast Asia */}
            <path d="M76,30 L78,28 L80,29 L82,32 L80,34 L78,33 Z" />
            {/* Japan */}
            <path d="M85,16 L86,14 L87,16 L86,18 L85,17 Z" />
            {/* Australia */}
            <path d="M78,44 L82,42 L86,43 L89,45 L90,48 L88,52 L84,53 L80,52 L78,49 L77,46 Z" />
            {/* UK/Ireland detail */}
            <path d="M46,14 L47,12 L48,13 L47,15 Z" />
            {/* Madagascar */}
            <path d="M59,48 L60,46 L61,48 L60,50 Z" />
            {/* Indonesia */}
            <path d="M76,38 L78,37 L80,38 L82,37 L84,38 L83,40 L80,40 L77,39 Z" />
          </g>

          {/* Filled continents - very subtle */}
          <g fill="var(--color-ink)" opacity="0.03">
            <path d="M5,15 L8,12 L12,11 L15,10 L18,11 L22,13 L24,16 L22,18 L20,22 L22,25 L24,28 L22,30 L20,32 L18,34 L16,36 L14,35 L12,33 L10,30 L8,28 L7,25 L6,22 L5,18 Z" />
            <path d="M22,42 L24,40 L26,38 L28,40 L30,42 L32,44 L33,47 L32,50 L30,53 L28,55 L26,54 L24,52 L23,48 L22,45 Z" />
            <path d="M45,14 L47,12 L49,11 L51,12 L53,14 L52,16 L50,18 L48,20 L46,18 L44,16 Z" />
            <path d="M46,28 L48,26 L50,25 L52,26 L54,28 L56,30 L58,33 L59,36 L58,40 L56,44 L54,48 L52,50 L50,52 L48,50 L47,46 L46,42 L45,38 L44,34 L45,30 Z" />
            <path d="M70,16 L73,14 L76,13 L79,14 L82,16 L84,19 L83,22 L80,24 L77,25 L74,24 L72,22 L70,20 Z" />
            <path d="M78,44 L82,42 L86,43 L89,45 L90,48 L88,52 L84,53 L80,52 L78,49 L77,46 Z" />
          </g>

          {/* Travel path - dashed line connecting cities */}
          <polyline
            points={pathPoints}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="0.2"
            strokeDasharray="0.8,0.6"
            opacity="0.2"
          />

          {/* City pins */}
          {places.map((place, i) => (
            <g key={place.city}>
              {/* Pulse ring for current location */}
              {place.isCurrent && (
                <circle
                  cx={place.x}
                  cy={place.y}
                  r="1.8"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="0.15"
                  opacity="0.25"
                >
                  <animate
                    attributeName="r"
                    from="1"
                    to="2.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.3"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              {/* Pin dot */}
              <circle
                cx={place.x}
                cy={place.y}
                r={hoveredIndex === i ? "1" : place.isCurrent ? "0.8" : "0.5"}
                fill={place.isCurrent ? "var(--color-ink)" : hoveredIndex === i ? "var(--color-ink)" : "var(--color-ink)"}
                opacity={place.isCurrent ? 0.6 : hoveredIndex === i ? 0.5 : 0.3}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              {/* Order number */}
              <text
                x={place.x}
                y={place.y - 1.5}
                textAnchor="middle"
                fontSize="1.6"
                fill="var(--color-ink)"
                opacity="0.25"
                fontFamily="var(--font-mono)"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </svg>

        {/* Hover tooltip */}
        {hoveredIndex !== null && (
          <div
            className="absolute pointer-events-none z-20 bg-cream/90 backdrop-blur-sm border border-ink/10 px-3 py-1.5 rounded-sm shadow-sm"
            style={{
              left: `${places[hoveredIndex].x}%`,
              top: `${places[hoveredIndex].y - 4}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <p className="text-xs font-display font-semibold text-ink whitespace-nowrap">
              {places[hoveredIndex].city}
              {places[hoveredIndex].isCurrent && <StanfordTree />}
            </p>
            <p className="text-[0.55rem] text-ink-light/50 font-mono whitespace-nowrap">
              {places[hoveredIndex].country} · {places[hoveredIndex].years}
            </p>
          </div>
        )}
      </div>

      {/* Legend below map */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {places.map((place, i) => (
          <div
            key={place.city}
            className={`flex items-baseline gap-1.5 cursor-default transition-opacity duration-200 ${
              hoveredIndex !== null && hoveredIndex !== i ? "opacity-30" : "opacity-100"
            }`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="text-[0.55rem] font-mono text-ink-light/30">{i + 1}</span>
            <span className={`text-xs font-display tracking-tight ${place.isCurrent ? "font-semibold text-ink" : "text-ink-light"}`}>
              {place.city}
            </span>
            <span className="text-[0.5rem] font-mono text-ink-light/30">
              {place.years}
            </span>
            {place.isCurrent && <StanfordTree />}
          </div>
        ))}
      </div>
    </section>
  );
}
