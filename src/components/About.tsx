import Image from "next/image";
import { SectionHeader } from "./Glyph";
import aboutData from "@/data/about.json";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="About" glyph="△" id="about" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Photo with glassmorphism float */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative group">
            {/* Floating glass container */}
            <div className="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/10 border border-white/20 animate-float">
              {/* Subtle gradient overlay for glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 z-10 pointer-events-none" />
              {/* Reflection line */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent z-10 pointer-events-none" />
              <Image
                src={aboutData.photo}
                alt="Arinze Obiezue"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
            {/* Shadow beneath for floating effect */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-36 h-4 bg-ink/10 rounded-full blur-md animate-float-shadow" />
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-4">
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-light">
              {i === 0 && (
                <span className="text-coral glyph mr-1 text-xs">❋</span>
              )}
              {paragraph}
            </p>
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
