import { SectionHeader } from "./Glyph";

interface Extracurricular {
  role: string;
  org: string;
  orgLink: string;
  year: string;
  description?: string;
}

const extracurriculars: Extracurricular[] = [
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
    role: "Founder",
    org: "Queer African Network",
    orgLink: "https://www.instagram.com/queerafricannetwork/?hl=en",
    year: "2023",
    description: "The student-run society at the African Leadership University creating safe spaces for queer students and allies across the Rwanda and Mauritius campuses.",
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
              className={`border-2 border-ink/10 bg-cream/80 p-5 text-center transition-all
                group-hover:border-ink/20 group-hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]
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
                  textShadow: "0 1px 0 rgba(255,255,255,0.6)",
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

              {/* Optional description */}
              {item.description && (
                <p className="mt-2 text-[0.6rem] leading-relaxed text-ink-light/50 font-mono normal-case tracking-normal">
                  {item.description}
                </p>
              )}

              {/* Subtle corner accents */}
              <span className="absolute top-1.5 left-1.5 text-[6px] text-ink-light/15 select-none">◆</span>
              <span className="absolute top-1.5 right-1.5 text-[6px] text-ink-light/15 select-none">◆</span>
              <span className="absolute bottom-1.5 left-1.5 text-[6px] text-ink-light/15 select-none">◆</span>
              <span className="absolute bottom-1.5 right-1.5 text-[6px] text-ink-light/15 select-none">◆</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
