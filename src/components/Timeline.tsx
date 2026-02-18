import { SectionHeader } from "./Glyph";

const places = [
  {
    city: "Aba",
    country: "Nigeria",
    years: "1998–2015",
  },
  {
    city: "Grand Baie",
    country: "Mauritius",
    years: "2016–2020",
  },
  {
    city: "London",
    country: "UK",
    years: "2020–2021",
  },
  {
    city: "Accra",
    country: "Ghana",
    years: "2021–2022",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    years: "2022–2024",
  },
  {
    city: "Lagos + Enugu",
    country: "Nigeria",
    years: "2024",
  },
  {
    city: "Stanford",
    country: "USA",
    years: "2024–present",
    isCurrent: true,
  },
];

function StanfordTree() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-4 h-4 inline-block ml-1 -mt-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "grayscale(100%)", opacity: 0.5 }}
    >
      <line x1="16" y1="28" x2="16" y2="14" />
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
        {/* Horizontal wire */}
        <div
          className="absolute top-[9px] sm:top-[11px] left-0 right-0 h-px"
          style={{
            background: "repeating-linear-gradient(90deg, var(--color-ink) 0px, var(--color-ink) 6px, transparent 6px, transparent 12px)",
            opacity: 0.12,
          }}
        />

        {/* Places along the wire */}
        <div className="flex items-start justify-between overflow-x-auto gap-0">
          {places.map((place, i) => (
            <div key={place.city} className="flex flex-col items-center flex-1 min-w-0 relative">
              {/* Dot on the wire */}
              <div
                className={`relative z-10 w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full border-[1.5px] flex-shrink-0 ${
                  place.isCurrent
                    ? "border-ink/40 bg-ink/30"
                    : "border-ink/20 bg-cream"
                }`}
              />

              {/* Label below */}
              <div className="mt-3 text-center px-1">
                <p className={`text-[0.6rem] sm:text-xs font-display tracking-tight leading-tight ${
                  place.isCurrent ? "font-semibold text-ink" : "text-ink-light"
                }`}>
                  {place.city}
                  {place.isCurrent && <StanfordTree />}
                </p>
                <p className="text-[0.45rem] sm:text-[0.55rem] uppercase tracking-[0.15em] text-ink-light/40 font-mono mt-0.5">
                  {place.country}
                </p>
                <p className="text-[0.45rem] sm:text-[0.5rem] uppercase tracking-[0.2em] text-ink-light/25 font-mono mt-0.5">
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
