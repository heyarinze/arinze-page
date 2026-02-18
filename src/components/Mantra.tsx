export default function Mantra() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <p
        className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight text-ink/80 leading-tight select-none"
        style={{
          fontStyle: "italic",
        }}
      >
        <span className="inline-block text-ink/20 text-2xl sm:text-4xl lg:text-5xl align-middle mr-3 sm:mr-4 not-italic">◎</span>
        esse quam videri
        <span className="inline-block text-ink/20 text-2xl sm:text-4xl lg:text-5xl align-middle ml-3 sm:ml-4 not-italic">◎</span>
      </p>
      <p className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-ink-light/40 font-mono">
        — to be, rather than to seem —
      </p>
    </section>
  );
}
