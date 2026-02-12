const glyphs = ["◆", "✦", "❋", "▲", "◎", "⬡", "◇", "△", "✧", "⬢"];

export function Glyph({
  symbol,
  className = "",
}: {
  symbol?: string;
  className?: string;
}) {
  const char = symbol ?? glyphs[Math.floor(Math.random() * glyphs.length)];
  return (
    <span className={`glyph select-none ${className}`} aria-hidden="true">
      {char}
    </span>
  );
}

export function SectionDivider() {
  return (
    <div className="my-16 flex items-center gap-4">
      <div className="section-divider flex-1" />
      <span className="glyph text-ink-light text-xs opacity-30">✦</span>
      <div className="section-divider flex-1" />
    </div>
  );
}

export function SectionHeader({
  title,
  glyph = "◆",
  id,
}: {
  title: string;
  glyph?: string;
  id?: string;
}) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-coral text-sm glyph">{glyph}</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="stamp text-ink-light w-fit">{title}</div>
    </div>
  );
}
