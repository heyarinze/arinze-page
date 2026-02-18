import { SectionHeader } from "./Glyph";

const extracurriculars = [
  {
    role: "Judge, Anthropic Track",
    org: "Stanford TreeHacks",
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
    role: "Member, African Narrative Collective",
    org: "Africa No Filter",
    orgLink: "https://africanofilter.org",
    year: "2024",
  },
  {
    role: "Advisory Board Member",
    org: "Queer African Network",
    orgLink: "https://www.instagram.com/queerafricannetwork/?hl=en",
    year: "2023",
  },
  {
    role: "Co-Lead, Alumni Pride Network",
    org: "Schwarzman Scholars",
    orgLink: "https://www.schwarzmanscholars.org",
    year: "2022",
  },
  {
    role: "Judge (London)",
    org: "Princess Diana Awards",
    orgLink: "https://diana-award.org.uk",
    year: "2021",
  },
];

const accentColors = ["text-coral", "text-blue", "text-gold", "text-coral", "text-blue", "text-gold"];

export default function Extracurriculars() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader
        title="My Extracurriculars"
        glyph="⬡"
        id="extracurriculars"
        description="Side quests I pursued along the way"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {extracurriculars.map((item, i) => (
          <a
            key={item.org}
            href={item.orgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            {/* Plaque */}
            <div
              className={`border-2 border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center transition-all
                group-hover:border-white/20 group-hover:shadow-[0_2px_12px_rgba(255,255,255,0.04)]
                relative overflow-hidden`}
              style={{ transform: "rotate(-0.5deg)" }}
            >
              {/* Engraved role */}
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ink mb-2">
                {item.role}
              </p>

              {/* Engraved org name */}
              <h3
                className={`font-display text-base font-semibold tracking-tight ${accentColors[i % accentColors.length]} group-hover:opacity-80 transition-opacity`}
                style={{
                  textShadow: "0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {item.org}
              </h3>

              {/* Year engraving */}
              {item.year && (
                <p className="mt-2 text-[0.55rem] uppercase tracking-[0.25em] text-ink-light/30 font-mono">
                  — {item.year} —
                </p>
              )}

              {/* Subtle corner accents */}
              <span className="absolute top-1.5 left-1.5 text-[6px] text-ink-light/20 select-none">◆</span>
              <span className="absolute top-1.5 right-1.5 text-[6px] text-ink-light/20 select-none">◆</span>
              <span className="absolute bottom-1.5 left-1.5 text-[6px] text-ink-light/20 select-none">◆</span>
              <span className="absolute bottom-1.5 right-1.5 text-[6px] text-ink-light/20 select-none">◆</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
