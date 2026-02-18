"use client";

import { useEffect, useState } from "react";
import { Glyph } from "./Glyph";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arinzeobiezue" },
  { label: "X", href: "https://www.x.com/heyarinze" },
  { label: "Threads", href: "https://www.threads.com/@heyarinze" },
  { label: "TikTok", href: "https://www.tiktok.com/@helloarinze" },
  { label: "Wabi", href: "https://wabi.ai/@heyarinze" },
];

const orbitWords = [
  { text: "ai", color: "text-blue" },
  { text: "media", color: "text-coral" },
  { text: "education", color: "text-gold" },
];

function FlashingWords() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orbitWords.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {orbitWords.map((word, i) => (
        <span key={word.text}>
          {i > 0 && (i === orbitWords.length - 1 ? ", and " : ", ")}
          <span
            className={`font-bold transition-colors duration-200 ${
              i === activeIndex ? word.color : "text-ink"
            }`}
          >
            {word.text}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24"
    >
      {/* Scattered decorative glyphs */}
      <div className="relative">
        <span className="absolute -top-8 -left-2 text-gold/30 text-2xl glyph select-none hidden sm:block">
          ✦
        </span>
        <span className="absolute top-2 -right-4 text-blue/20 text-lg glyph select-none hidden sm:block">
          ⬡
        </span>

        {/* Name — levitating above the rest */}
        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-ink leading-[1.1] animate-float">
          Arinze
          <br />
          Obiezue
          <span className="inline-block text-coral ml-2">
            <Glyph symbol="◆" className="text-2xl sm:text-3xl" />
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-sm sm:text-base text-ink-light tracking-wide max-w-lg">
          <span className="text-coral glyph mr-1">▲</span>
          building within the orbits of{" "}
          <FlashingWords />
        </p>

        {/* Social icons */}
        <div className="mt-5 flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-ink-light/50 hover:text-coral transition-colors"
            >
              {s.label} <span className="text-[10px]">→</span>
            </a>
          ))}
        </div>

        {/* Let's Chat button */}
        <div className="mt-6">
          <a
            href="https://www.bit.ly/arinzechat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block stamp text-ink hover:text-coral hover:border-coral transition-colors cursor-pointer"
          >
            Let&apos;s Chat ↗
          </a>
        </div>

        {/* Intro paragraph */}
        <div className="mt-8 max-w-xl relative">
          <span className="margin-note hidden lg:block">welcome</span>
          <p className="text-sm leading-relaxed text-ink-light">
            Welcome to my digital living room. This is where I keep track of
            what I&apos;m building, reading, listening to, and thinking about.
            Pull up a chair — look around. Everything here, like me, is a work
            in progress.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-2 text-ink-light/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="text-sm animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
