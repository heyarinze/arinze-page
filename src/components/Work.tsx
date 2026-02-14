import { SectionHeader } from "./Glyph";
import projects from "@/data/projects.json";

const accentColors = [
  "border-l-coral",
  "border-l-blue",
  "border-l-gold",
  "border-l-coral",
];

const glyphMarkers = ["◆", "✦", "▲", "◎"];

export default function Work() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Work" glyph="◆" id="work" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`group border-l-4 ${accentColors[i % accentColors.length]} bg-cream/50 border border-ink/5 p-5 hover:bg-white/60 transition-all relative`}
          >
            {/* Glyph marker */}
            <span className="absolute -left-3 top-4 bg-cream text-xs glyph text-ink-light/40 group-hover:text-coral transition-colors">
              {glyphMarkers[i % glyphMarkers.length]}
            </span>

            {/* Org & date */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[0.65rem] uppercase tracking-widest text-ink-light/60">
                {project.organization}
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-ink-light/40">
                {project.dateRange}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-coral transition-colors">
              {project.link ? (
                <a href={project.link} className="accent-link">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>

            {/* Description */}
            <p className="text-xs leading-relaxed text-ink-light">
              {project.description}
            </p>

            {/* Link arrow */}
            {project.link && (
              <span className="mt-3 inline-block text-xs text-ink-light/40 group-hover:text-coral group-hover:translate-x-1 transition-all">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
