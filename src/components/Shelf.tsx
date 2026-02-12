import { SectionHeader } from "./Glyph";
import shelfData from "@/data/shelf.json";

function BookCard({
  title,
  author,
}: {
  title: string;
  author: string;
  cover: string;
}) {
  return (
    <div className="group flex gap-3 p-3 border border-ink/5 bg-cream/50 hover:bg-white/60 transition-all">
      {/* Book cover placeholder */}
      <div className="w-14 h-20 bg-ink/5 border border-ink/10 flex-shrink-0 flex items-center justify-center">
        <span className="text-ink-light/30 text-lg">📖</span>
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-medium text-ink leading-tight group-hover:text-coral transition-colors truncate">
          {title}
        </h4>
        <p className="text-xs text-ink-light mt-1 truncate">{author}</p>
      </div>
    </div>
  );
}

function TrackCard({
  track,
  artist,
  album,
}: {
  track: string;
  artist: string;
  album: string;
  albumArt: string;
}) {
  return (
    <div className="group flex gap-3 p-3 border border-ink/5 bg-cream/50 hover:bg-white/60 transition-all">
      {/* Album art placeholder */}
      <div className="w-14 h-14 bg-ink/5 border border-ink/10 flex-shrink-0 flex items-center justify-center">
        <span className="text-ink-light/30 text-lg">♫</span>
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-medium text-ink leading-tight group-hover:text-blue transition-colors truncate">
          {track}
        </h4>
        <p className="text-xs text-ink-light mt-0.5 truncate">{artist}</p>
        <p className="text-[0.65rem] text-ink-light/50 mt-0.5 truncate">
          {album}
        </p>
      </div>
    </div>
  );
}

function PublishedCard({
  title,
  type,
  outlet,
  date,
  link,
}: {
  title: string;
  type: string;
  outlet: string;
  date: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="group block p-3 border border-ink/5 bg-cream/50 hover:bg-white/60 transition-all"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="stamp text-[0.55rem] py-0 px-1.5 border-gold text-gold">
          {type}
        </span>
        <span className="text-[0.6rem] text-ink-light/40">{date}</span>
      </div>
      <h4 className="text-sm font-medium text-ink leading-tight group-hover:text-gold transition-colors">
        {title}
      </h4>
      <p className="text-xs text-ink-light mt-1">
        {outlet}{" "}
        <span className="inline-block group-hover:translate-x-1 transition-transform text-gold/50">
          →
        </span>
      </p>
    </a>
  );
}

export default function Shelf() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="Shelf" glyph="✦" id="shelf" />

      <p className="text-xs text-ink-light mb-10 -mt-6 ml-7">
        What I&apos;m reading, listening to, and putting out into the world.
      </p>

      {/* Currently Reading */}
      <div className="mb-12">
        <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
          <span className="text-coral glyph text-sm">❋</span>
          Currently Reading
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelfData.currentlyReading.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div className="mb-12">
        <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
          <span className="text-blue glyph text-sm">◎</span>
          Recently Played
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelfData.recentlyPlayed.map((track) => (
            <TrackCard key={track.track} {...track} />
          ))}
        </div>
      </div>

      {/* Published */}
      <div>
        <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
          <span className="text-gold glyph text-sm">▲</span>
          Published
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shelfData.published.map((item) => (
            <PublishedCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
