import { SectionHeader } from "./Glyph";

const extracurriculars = [
  {
    role: "Judge, Anthropic Track",
    org: "Stanford Treehacks",
    orgLink: "https://treehacks.com",
    year: "2026",
  },
  {
    role: "Judge",
    org: "Africa Technology Expo",
    orgLink: "https://africatechnologyexpo.com",
    year: "2024",
  },
  {
    role: "Advisory Board Member",
    org: "Queer African Network",
    orgLink: "https://www.instagram.com/queerafricannetwork/?hl=en",
    year: "2023",
  },
  {
    role: "Judge (London)",
    org: "Princess Diana Awards",
    orgLink: "https://diana-award.org.uk",
    year: "2021",
  },
  {
    role: "Member, African Narrative Collective",
    org: "Africa No Filter",
    orgLink: "https://africanofilter.org",
    year: null,
  },
];

const accentColors = ["text-coral", "text-blue", "text-gold", "text-coral", "text-blue"];
const glyphMarkers = ["◇", "✦", "▲", "◎", "❋"];

export default function Extracurriculars() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader
        title="My Extracurriculars"
        glyph="⬡"
        id="extracurriculars"
        description="Other things I've been a part of"
      />

      <div className="space-y-3">
        {extracurriculars.map((item, i) => (
          <div
            key={item.org}
            className="group flex items-start gap-3 p-3 border border-ink/5 bg-cream/50 hover:bg-white/60 transition-all"
          >
            <span className={`glyph text-xs mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity ${accentColors[i % accentColors.length]}`}>
              {glyphMarkers[i % glyphMarkers.length]}
            </span>
            <div className="flex-1">
              <p className="text-sm text-ink leading-snug">
                {item.role} @{" "}
                <a
                  href={item.orgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline font-medium"
                >
                  {item.org}
                </a>
              </p>
            </div>
            {item.year && (
              <span className="text-[0.65rem] uppercase tracking-widest text-ink-light/40 shrink-0">
                {item.year}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
