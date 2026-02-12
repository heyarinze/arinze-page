import { SectionHeader } from "./Glyph";
import aboutData from "@/data/about.json";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="About" glyph="△" id="about" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Photo placeholder */}
        <div className="md:col-span-1">
          <div className="aspect-[3/4] bg-ink/5 border-2 border-dashed border-ink/10 rounded-sm flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-ink-light/40">
              <span className="text-4xl block mb-2">◎</span>
              <span className="text-xs uppercase tracking-widest">Photo</span>
            </div>
            {/* Decorative corner marks */}
            <span className="absolute top-2 left-2 text-coral/30 text-xs">
              ┌
            </span>
            <span className="absolute top-2 right-2 text-coral/30 text-xs">
              ┐
            </span>
            <span className="absolute bottom-2 left-2 text-coral/30 text-xs">
              └
            </span>
            <span className="absolute bottom-2 right-2 text-coral/30 text-xs">
              ┘
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2 space-y-4">
          {aboutData.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-ink-light"
            >
              {i === 0 && (
                <span className="text-coral glyph mr-1 text-xs">❋</span>
              )}
              {paragraph}
            </p>
          ))}

          {/* Decorative tag */}
          <div className="pt-4 flex gap-3 flex-wrap">
            {["AI", "Education", "Entertainment", "Design", "Writing"].map(
              (tag) => (
                <span
                  key={tag}
                  className="stamp text-ink-light/60 hover:text-coral hover:border-coral transition-colors cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
