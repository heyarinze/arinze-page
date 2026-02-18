import { SectionHeader } from "./Glyph";

const places = [
  {
    city: "Aba",
    country: "Nigeria",
    years: "1998–2015",
    flag: "🇳🇬",
  },
  {
    city: "Grand Baie",
    country: "Mauritius",
    years: "2016–2020",
    flag: "🇲🇺",
  },
  {
    city: "London",
    country: "UK",
    years: "2020–2021",
    flag: "🇬🇧",
  },
  {
    city: "Accra",
    country: "Ghana",
    years: "2021–2022",
    flag: "🇬🇭",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    years: "2022–2024",
    flag: "🇰🇪",
  },
  {
    city: "Lagos + Enugu",
    country: "Nigeria",
    years: "2024",
    flag: "🇳🇬",
  },
  {
    city: "Stanford",
    country: "USA",
    years: "2024–present",
    flag: "🇺🇸",
    isCurrent: true,
  },
];

function StanfordTree() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-5 h-5 inline-block ml-1.5 -mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "grayscale(100%)", opacity: 0.5 }}
    >
      {/* Trunk */}
      <line x1="16" y1="28" x2="16" y2="14" />
      {/* Canopy - layered triangle tree */}
      <polygon points="16,4 8,14 24,14" fill="currentColor" fillOpacity="0.12" />
      <polygon points="16,8 10,16 22,16" fill="currentColor" fillOpacity="0.08" />
      <polygon points="16,2 6,16 26,16" fill="none" />
    </svg>
  );
}

export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader
        title="My Map"
        glyph="◎"
        id="map"
        description="The places that have shaped me"
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-px"
          style={{
            background: "repeating-linear-gradient(to bottom, var(--color-ink) 0px, var(--color-ink) 4px, transparent 4px, transparent 10px)",
            opacity: 0.12,
          }}
        />

        <div className="space-y-0">
          {places.map((place, i) => (
            <div key={place.city} className="relative flex items-start gap-5 group">
              {/* Dot on the timeline */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div
                  className={`w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-full border-2 border-ink/20 ${
                    place.isCurrent ? "bg-ink/30" : "bg-cream"
                  }`}
                  style={{ marginLeft: "14px", marginTop: "2px" }}
                />
              </div>

              {/* Content */}
              <div
                className={`flex-1 pb-8 ${
                  i === places.length - 1 ? "pb-0" : ""
                }`}
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm sm:text-base font-display font-semibold text-ink tracking-tight">
                    {place.city}
                  </span>
                  <span
                    className="text-[0.6rem] uppercase tracking-[0.15em] text-ink-light/50"
                    style={{ filter: "grayscale(100%)" }}
                  >
                    {place.flag}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.15em] text-ink-light/40 font-mono">
                    {place.country}
                  </span>
                  {place.isCurrent && <StanfordTree />}
                </div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-light/30 font-mono mt-0.5">
                  {place.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
