"use client";

import { useEffect, type CSSProperties } from "react";
import { SectionHeader } from "./Glyph";

const games = [
  { name: "Cyberpunk 2077", logo: "/games/cyberpunk.png", link: "https://www.cyberpunk.net/", glow: "#fff200", maxH: 62 },
  { name: "Tears of the Kingdom", logo: "/games/zelda.png", link: "https://www.zelda.com/tears-of-the-kingdom/", glow: "#48f0b0", maxH: 86 },
  { name: "Fortnite", logo: "/games/fortnite.svg", link: "https://www.fortnite.com/", glow: "#2ad4ff", invert: true, maxH: 34 },
];

export default function Shelf() {
  useEffect(() => {
    // Load Letterboxd watchlist embed
    const wrapper = document.getElementById("letterboxd-embed-wrapper-tc");
    if (wrapper) {
      fetch("https://lb-embed-content.bokonon.dev?username=heyarinze")
        .then((response) => response.text())
        .then((data) => {
          wrapper.innerHTML = data;
        });
    }
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Shelf" glyph="✦" id="shelf" description="What I'm reading, watching, and listening to" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Goodreads Widget */}
        <div>
          <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <span className="text-coral glyph text-sm">❋</span>
            Recent Reads
          </h3>
          <div
            className="border border-ink/10 rounded-sm p-4 bg-white/50"
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  .gr_custom_container_1784145411 {
                    border: none;
                    padding: 0;
                    background-color: transparent;
                    color: #1a1a1a;
                    width: 100%;
                  }
                  .gr_custom_header_1784145411 {
                    display: none;
                  }
                  .gr_custom_each_container_1784145411 {
                    width: 100%;
                    clear: both;
                    margin-bottom: 10px;
                    overflow: auto;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #eee;
                  }
                  .gr_custom_book_container_1784145411 {
                    overflow: hidden;
                    height: 60px;
                    float: left;
                    margin-right: 10px;
                    width: 39px;
                  }
                  .gr_custom_author_1784145411 {
                    font-size: 11px;
                    color: #4a4a4a;
                  }
                  .gr_custom_tags_1784145411 {
                    font-size: 10px;
                    color: gray;
                  }
                  .gr_custom_title_1784145411 a {
                    font-size: 13px;
                    color: #1a1a1a;
                    text-decoration: none;
                  }
                  .gr_custom_title_1784145411 a:hover {
                    color: #E8573A;
                  }
                  .gr_custom_author_1784145411 a {
                    color: #4a4a4a;
                    text-decoration: none;
                  }
                  .gr_custom_rating_1784145411 {
                    float: right;
                  }
                </style>
                <div id="gr_custom_widget_1784145411">
                  <div class="gr_custom_container_1784145411">
                    <h2 class="gr_custom_header_1784145411">
                      <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/46208340-arinze-obiezue?shelf=read&amp;utm_medium=api&amp;utm_source=custom_widget">Arinze&#39;s Recent Reads</a>
                    </h2>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="The Next Renaissance: AI and the Expansion of Human Potential" rel="nofollow" href="https://www.goodreads.com/review/show/8768395563?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Next Renaissance: AI and the Expansion of Human Potential" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1749466172l/233029866._SX50_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8768395563?utm_medium=api&amp;utm_source=custom_widget">The Next Renaissance: AI and the Expansion of Human Potential</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/56225618.Zack_Kass">Zack Kass</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="Enemies of Promise" rel="nofollow" href="https://www.goodreads.com/review/show/7771502710?utm_medium=api&amp;utm_source=custom_widget"><img alt="Enemies of Promise" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1269858972l/88857._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/7771502710?utm_medium=api&amp;utm_source=custom_widget">Enemies of Promise</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/51067.Cyril_Connolly">Cyril Connolly</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="The Yahoo Boys: Real Life with the Love Scammers of Lagos" rel="nofollow" href="https://www.goodreads.com/review/show/8682909028?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Yahoo Boys: Real Life with the Love Scammers of Lagos" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1767719188l/238864933._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8682909028?utm_medium=api&amp;utm_source=custom_widget">The Yahoo Boys: Real Life with the Love Scammers of Lagos</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/67753648.Carlos_Barrag_n">Carlos  Barragán</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="Thinking In Systems: A Primer" rel="nofollow" href="https://www.goodreads.com/review/show/8451524044?utm_medium=api&amp;utm_source=custom_widget"><img alt="Thinking In Systems: A Primer" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390169859l/3828902._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8451524044?utm_medium=api&amp;utm_source=custom_widget">Thinking In Systems: A Primer</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/307638.Donella_H_Meadows">Donella H. Meadows</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="Dead-End Memories: Stories" rel="nofollow" href="https://www.goodreads.com/review/show/8606042382?utm_medium=api&amp;utm_source=custom_widget"><img alt="Dead-End Memories: Stories" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1641461147l/60044990._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="really liked it"><img alt="really liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8606042382?utm_medium=api&amp;utm_source=custom_widget">Dead-End Memories: Stories</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/28229.Banana_Yoshimoto">Banana Yoshimoto</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="A Thousand Years of Good Prayers" rel="nofollow" href="https://www.goodreads.com/review/show/8584576599?utm_medium=api&amp;utm_source=custom_widget"><img alt="A Thousand Years of Good Prayers" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386006916l/19101254._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="liked it"><img alt="liked it" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_inactive.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8584576599?utm_medium=api&amp;utm_source=custom_widget">A Thousand Years of Good Prayers</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/148348.Yiyun_Li">Yiyun Li</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1784145411">
                      <div class="gr_custom_book_container_1784145411">
                        <a title="Siddhartha" rel="nofollow" href="https://www.goodreads.com/review/show/8560618553?utm_medium=api&amp;utm_source=custom_widget"><img alt="Siddhartha" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1679634247l/123699900._SX50_.jpg" /></a>
                      </div>
                      <div class="gr_custom_rating_1784145411">
                        <span class=" staticStars notranslate" title="it was amazing"><img alt="it was amazing" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /><img alt="" src="https://s.gr-assets.com/images/layout/gr_red_star_active.png" /></span>
                      </div>
                      <div class="gr_custom_title_1784145411">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8560618553?utm_medium=api&amp;utm_source=custom_widget">Siddhartha</a>
                      </div>
                      <div class="gr_custom_author_1784145411">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/1113469.Hermann_Hesse">Hermann Hesse</a>
                      </div>
                    </div>
                    <br style="clear: both"/>
                    <center>
                      <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://s.gr-assets.com/images/widget/widget_logo.gif" /></a>
                    </center>
                  </div>
                </div>
                <script src="https://www.goodreads.com/review/custom_widget/46208340.Arinze's%20Recent%20Reads?cover_position=left&cover_size=small&num_books=7&order=d&shelf=read&show_author=1&show_cover=1&show_rating=1&show_review=0&show_tags=1&show_title=1&sort=date_read&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1784145411&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charset="utf-8"></script>
              `,
            }}
          />
        </div>

        {/* Spotify Embed */}
        <div>
          <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <span className="text-blue glyph text-sm">◎</span>
            On Repeat
          </h3>
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/playlist/2JfVdyBRmSSyzqhZGHs7r7?utm_source=generator&si=eb0f0d2a35cf489b"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {/* Recent Watch - Letterboxd Embed */}
        <div>
          <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <span className="text-gold glyph text-sm">▲</span>
            Recent Watch
          </h3>
          <div className="border border-white/20 rounded-lg p-4 bg-white/30 backdrop-blur-sm">
            <div id="letterboxd-embed-wrapper-tc">Loading...</div>
          </div>
        </div>

        {/* Current Games */}
        <div>
          <h3 className="font-display text-xl font-semibold text-ink mb-4 flex items-center gap-2">
            <span className="text-purple glyph text-sm">⬢</span>
            Current Games
          </h3>
          <div className="rounded-lg p-6 bg-ink border border-white/10 flex flex-col items-center justify-around gap-6 min-h-[300px]">
            {games.map((g) => (
              <a
                key={g.name}
                href={g.link}
                target="_blank"
                rel="noopener noreferrer"
                title={g.name}
                className={`game-tile ${g.invert ? "invert-logo" : ""} flex h-20 w-full items-center justify-center`}
                style={{ "--glow": g.glow } as CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.logo}
                  alt={`${g.name} logo`}
                  className="max-w-[78%] object-contain"
                  style={{ maxHeight: g.maxH }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
