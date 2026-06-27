import { Fragment } from "react";
import { SectionHeader } from "./Glyph";

interface Role {
  org: string;
  title: string;
  period: string;
  duration: string;
  kind: "work" | "study";
  note?: string;
  incoming?: boolean;
  rotation: string;
}

const roles: Role[] = [
  {
    org: "ALU",
    title: "Inaugural Class · BSc Business Management",
    period: "2015–2020",
    duration: "5 yrs",
    kind: "study",
    note: "Valedictorian",
    rotation: "-1.2deg",
  },
  {
    org: "Meta",
    title: "Content Designer",
    period: "2020–2021",
    duration: "1 yr",
    kind: "work",
    rotation: "1deg",
  },
  {
    org: "EarlyAdmit",
    title: "Co-Founder",
    period: "2020–2023",
    duration: "3 yrs",
    kind: "work",
    note: "Acquired",
    rotation: "-0.6deg",
  },
  {
    org: "Schwarzman Scholars",
    title: "Master's, Global Affairs · AI Policy",
    period: "2021–2022",
    duration: "1 yr",
    kind: "study",
    rotation: "1.3deg",
  },
  {
    org: "Kenga",
    title: "Founder, CEO & Publisher",
    period: "2022–present",
    duration: "Present",
    kind: "work",
    rotation: "-1deg",
  },
  {
    org: "Future Africa",
    title: "Investment Team",
    period: "2022–2024",
    duration: "2 yrs",
    kind: "work",
    rotation: "0.7deg",
  },
  {
    org: "Stanford GSB",
    title: "MBA Candidate",
    period: "2024–2026",
    duration: "2 yrs",
    kind: "study",
    rotation: "-0.8deg",
  },
  {
    org: "Anthropic",
    title: "Incoming",
    period: "2026",
    duration: "Incoming",
    kind: "work",
    incoming: true,
    rotation: "1deg",
  },
];

export default function WorkHistory() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <SectionHeader
        title="My Work"
        glyph="❖"
        id="career"
        description="The path I've walked, one role to the next"
      />

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
                  border ${role.incoming ? "border-coral/40" : "border-white/50"}
                  shadow-[0_1px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]
                  hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]
                  hover:-translate-y-1`}
                style={{ transform: `rotate(${role.rotation})` }}
              >
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

                {/* Duration + kind tag */}
                <div className="flex items-center justify-center gap-2 text-[0.55rem] uppercase tracking-[0.18em] font-mono">
                  <span className={role.incoming ? "text-coral font-semibold" : "text-ink/60"}>
                    {role.duration}
                  </span>
                  <span className="text-ink-light/30">·</span>
                  <span className="text-ink-light/40">
                    {role.kind === "study" ? "Study" : "Role"}
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

      {/* Scroll hint on mobile */}
      <p className="sm:hidden text-center text-[0.55rem] uppercase tracking-[0.2em] text-coral/60 font-mono mt-5">
        ← swipe →
      </p>
    </section>
  );
}
