import Image from "next/image";
import { SectionHeader } from "./Glyph";
import aboutData from "@/data/about.json";

function renderBioText(text: string) {
  // Replace {substack} placeholder with a hyperlink
  const parts = text.split("{substack}");
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <a
        href="https://heyarinze.substack.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-coral hover:underline font-medium"
      >
        Substack
      </a>
      {parts[1]}
    </>
  );
}

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="About" glyph="△" id="about" description="A cute lil' brief on me and what I care about" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Photo with drop shadow */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
            <Image
              src={aboutData.photo}
              alt="Arinze Obiezue"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-4">
          {aboutData.bio.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-light">
              {i === 0 && (
                <span className="text-coral glyph mr-1 text-xs">❋</span>
              )}
              {renderBioText(paragraph)}
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
