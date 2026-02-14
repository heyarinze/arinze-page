"use client";

import { useEffect, useState } from "react";

// Adinkra-inspired symbols using unicode and SVG-like characters
// These evoke West African Adinkra symbolism
const adinkraSymbols = [
  "𖤍", // Adinkra-style cross
  "✦", // Four-pointed star (Nsoromma - star/child of the heavens)
  "◎", // Target/circle (Adinkrahene - greatness)
  "⬡", // Hexagon (unity/connection)
  "☽", // Crescent (faithfulness)
  "✧", // Small star
  "◇", // Diamond (preciousness)
  "❋", // Flourish (beauty)
  "△", // Triangle (change)
  "⊹", // Cross (crossroads)
];

interface FloatingSymbol {
  id: number;
  symbol: string;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingAdinkra() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const generated: FloatingSymbol[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      symbol: adinkraSymbols[i % adinkraSymbols.length],
      x: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 18 + Math.random() * 24,
      delay: Math.random() * -30,
      opacity: 0.04 + Math.random() * 0.06,
    }));
    setSymbols(generated);
  }, []);

  if (symbols.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((s) => (
        <span
          key={s.id}
          className="absolute select-none adinkra-bubble"
          style={{
            left: `${s.x}%`,
            fontSize: `${s.size}px`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            color: "var(--color-ink)",
            textShadow: "0 0 8px rgba(255,255,255,0.3)",
            filter: "blur(0.3px)",
          }}
          aria-hidden="true"
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
}
