"use client";

import { SectionHeader } from "./Glyph";

export default function Shelf() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <SectionHeader title="My Shelf" glyph="✦" id="shelf" />

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
                  .gr_custom_container_1771065670 {
                    border: none;
                    padding: 0;
                    background-color: transparent;
                    color: #1a1a1a;
                    width: 100%;
                  }
                  .gr_custom_header_1771065670 {
                    display: none;
                  }
                  .gr_custom_each_container_1771065670 {
                    width: 100%;
                    clear: both;
                    margin-bottom: 10px;
                    overflow: auto;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #eee;
                  }
                  .gr_custom_book_container_1771065670 {
                    overflow: hidden;
                    height: 60px;
                    float: left;
                    margin-right: 10px;
                    width: 39px;
                  }
                  .gr_custom_author_1771065670 {
                    font-size: 11px;
                    color: #4a4a4a;
                  }
                  .gr_custom_tags_1771065670 {
                    font-size: 10px;
                    color: gray;
                  }
                  .gr_custom_title_1771065670 a {
                    font-size: 13px;
                    color: #1a1a1a;
                    text-decoration: none;
                  }
                  .gr_custom_title_1771065670 a:hover {
                    color: #E8573A;
                  }
                  .gr_custom_author_1771065670 a {
                    color: #4a4a4a;
                    text-decoration: none;
                  }
                  .gr_custom_rating_1771065670 {
                    float: right;
                  }
                </style>
                <div id="gr_custom_widget_1771065670">
                  <div class="gr_custom_container_1771065670">
                    <div class="gr_custom_each_container_1771065670">
                      <div class="gr_custom_book_container_1771065670">
                        <a title="Curiosity and I: Let Curiosity Guide You" rel="nofollow" href="https://www.goodreads.com/review/show/8129934368?utm_medium=api&amp;utm_source=custom_widget"><img alt="Curiosity and I" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1764880513l/244799405._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_title_1771065670">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/8129934368?utm_medium=api&amp;utm_source=custom_widget">Curiosity and I: Let Curiosity Guide You</a>
                      </div>
                      <div class="gr_custom_author_1771065670">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/63530727.O_Nell_Agossa">O'Nell Agossa</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1771065670">
                      <div class="gr_custom_book_container_1771065670">
                        <a title="Letters to a Young Poet" rel="nofollow" href="https://www.goodreads.com/review/show/7996394807?utm_medium=api&amp;utm_source=custom_widget"><img alt="Letters to a Young Poet" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451428522l/28385945._SX50_.jpg" /></a>
                      </div>
                      <div class="gr_custom_title_1771065670">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/7996394807?utm_medium=api&amp;utm_source=custom_widget">Letters to a Young Poet</a>
                      </div>
                      <div class="gr_custom_author_1771065670">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/7906.Rainer_Maria_Rilke">Rainer Maria Rilke</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1771065670">
                      <div class="gr_custom_book_container_1771065670">
                        <a title="Inward" rel="nofollow" href="https://www.goodreads.com/review/show/7897476596?utm_medium=api&amp;utm_source=custom_widget"><img alt="Inward" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510863553l/36607463._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_title_1771065670">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/7897476596?utm_medium=api&amp;utm_source=custom_widget">Inward</a>
                      </div>
                      <div class="gr_custom_author_1771065670">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/17333166.Yung_Pueblo">Yung Pueblo</a>
                      </div>
                    </div>
                    <div class="gr_custom_each_container_1771065670">
                      <div class="gr_custom_book_container_1771065670">
                        <a title="The Great Mental Models, Volume 3: Systems and Mathematics" rel="nofollow" href="https://www.goodreads.com/review/show/7772937649?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Great Mental Models, Volume 3" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1718698423l/205435119._SY75_.jpg" /></a>
                      </div>
                      <div class="gr_custom_title_1771065670">
                        <a rel="nofollow" href="https://www.goodreads.com/review/show/7772937649?utm_medium=api&amp;utm_source=custom_widget">The Great Mental Models, Volume 3: Systems and Mathematics</a>
                      </div>
                      <div class="gr_custom_author_1771065670">
                        by <a rel="nofollow" href="https://www.goodreads.com/author/show/7871969.Shane_Parrish">Shane Parrish</a>
                      </div>
                    </div>
                    <br style="clear: both"/>
                    <center>
                      <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://s.gr-assets.com/images/widget/widget_logo.gif" /></a>
                    </center>
                  </div>
                </div>
                <script src="https://www.goodreads.com/review/custom_widget/46208340.My%20Recent%20Reads?cover_position=left&cover_size=small&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=0&show_review=0&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1771065670&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charset="utf-8"></script>
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
            src="https://open.spotify.com/embed/playlist/2PTMvCdD7glCTeOTRJD9u6?utm_source=generator"
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
    </section>
  );
}
