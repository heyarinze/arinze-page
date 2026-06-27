import { Fragment } from "react";
import { SectionHeader } from "./Glyph";

interface Role {
  org: string;
  title: string;
  period: string;
  kind: "work" | "study";
  logo?: string;
  logoBg?: string;
  mono?: string;
  note?: string;
  incoming?: boolean;
  rotation: string;
}

const roles: Role[] = [
  {
    org: "African Leadership University",
    title: "Inaugural Class · BSc Business Management",
    period: "2015–2020",
    kind: "study",
    logo: "/logos/alu.png",
    note: "Valedictorian",
    rotation: "-1.2deg",
  },
  {
    org: "Meta",
    title: "Content Designer",
    period: "2020–2021",
    kind: "work",
    logo: "/logos/meta.png",
    rotation: "1deg",
  },
  {
    org: "EarlyAdmit",
    title: "Co-Founder",
    period: "2020–2023",
    kind: "work",
    logo: "/logos/earlyadmit.jpeg",
    note: "Acquired",
    rotation: "-0.6deg",
  },
  {
    org: "Schwarzman Scholars",
    title: "Master's, Global Affairs (AI Policy) • Tsinghua University",
    period: "2021–2022",
    kind: "study",
    logo: "/logos/schwarzman.jpeg",
    rotation: "1.3deg",
  },
  {
    org: "Kenga Media",
    title: "Founder, CEO & Publisher",
    period: "2022–present",
    kind: "work",
    logo: "/logos/kenga.png",
    logoBg: "#000000",
    rotation: "-1deg",
  },
  {
    org: "Future Africa",
    title: "Investment Team",
    period: "2022–2024",
    kind: "work",
    logo: "/logos/futureafrica.jpg",
    rotation: "0.7deg",
  },
  {
    org: "Stanford GSB",
    title: "MBA",
    period: "2024–2026",
    kind: "study",
    logo: "/logos/gsb.jpeg",
    logoBg: "#a1011f",
    rotation: "-0.8deg",
  },
  {
    org: "Anthropic",
    title: "Incoming",
    period: "2026",
    kind: "work",
    logo: "/logos/anthropic.webp",
    incoming: true,
    rotation: "1deg",
  },
];

export default function WorkHistory() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <SectionHeader
          title="My Career"
          glyph="❖"
          id="career"
          description="The path I'm walking"
        />
        <span className="mb-10 text-sm font-bold uppercase tracking-[0.2em] text-coral select-none -rotate-6 inline-block">
          drag / scroll →
        </span>
      </div>

      <div className="carousel-fade flex items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
        {roles.map((role, i) => (
          <Fragment key={role.org}>
            {/* Arrow connector */}
            {i > 0 && (
              <span
                className="shrink-0 px-1.5 sm:px-2 text-coral/50 text-xl select-none"
                aria-hidden="true"
              >
                →
              </span>
            )}

            <div className="relative shrink-0 snap-start w-[12.5rem]">
              {/* Tape strip */}
              <div
                className="absolute -top-2 left-1/2 z-20 w-12 h-4 bg-cream/60 border-y border-ink/[0.06] shadow-[0_0.5px_2px_rgba(0,0,0,0.04)]"
                style={{ transform: `translateX(-50%) rotate(${i % 2 === 0 ? 2 : -2}deg)`, backdropFilter: "blur(2px)" }}
              />

              {/* Card */}
              <div
                className={`relative pt-6 pb-4 px-5 text-center transition-all duration-300
                  bg-white/[0.35] backdrop-blur-[6px]
                  border ${role.incoming ? "border-gold/60" : "border-white/50"}
                  shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]
                  hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]
                  hover:-translate-y-1`}
                style={{ transform: `rotate(${role.rotation})` }}
              >
                {/* Logo */}
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-ink/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden"
                  style={{ backgroundColor: role.logoBg ?? "#ffffff" }}
                >
                  {role.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={role.logo}
                      alt={`${role.org} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    <span className="font-display text-base font-bold text-ink">
                      {role.mono}
                    </span>
                  )}
                </div>

                {/* Period */}
                <p className={`text-[0.65rem] uppercase tracking-[0.18em] font-mono ${role.incoming ? "text-coral" : role.kind === "study" ? "text-gold" : "text-coral"}`}>
                  {role.period}
                </p>

                {/* Org */}
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink mt-1.5 leading-tight">
                  {role.org}
                </h3>

                {/* Title */}
                <p className="text-[0.7rem] text-ink-light leading-snug mt-1 min-h-[2.2rem]">
                  {role.title}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-ink/[0.08] mx-auto my-2.5" />

                {/* Kind tag */}
                <div className="flex items-center justify-center text-[0.55rem] uppercase tracking-[0.18em] font-mono">
                  <span className={role.incoming ? "text-coral font-semibold" : "text-ink-light/40"}>
                    {role.incoming ? "Incoming" : role.kind === "study" ? "School" : "Work"}
                  </span>
                </div>

                {/* Note ribbon */}
                {role.note && (
                  <p className="mt-2 text-[0.5rem] uppercase tracking-[0.2em] font-mono text-ink-light/35">
                    — {role.note} —
                  </p>
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
