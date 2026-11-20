# BRIEF: or-nuri.com

Interviewed on 2026-11-18. The owner answered four decisions directly and delegated
two to me ("You decide"). Delegated answers are marked **Authored**.

## The eight topics

1. **Vibe.** Owner: "Refined light editorial". Stays light, magazine-grade: big type,
   generous whitespace, asymmetric layouts, "like a well-made feature article about you".
   Authored references: a long-form profile in a printed quarterly; a technical
   paper's margin notes; a proofreader's red pencil.
2. **Journey.** Owner: "condense freely", keep every real fact and link, keep FAQ and
   structured data for SEO and AI discoverability. Authored sequence:
   title page, the short version, a career told as scale, an intertitle, the agents
   (peak), the receipts, how I work and advise, on the record, colophon.
3. **Energy.** Authored: quiet the whole way except one chapter. Calm title page,
   steady middle, one loud dark spread, then quieter and warmer to the end.
4. **Feeling and the one moment.** Owner: "You decide". Authored: they leave thinking
   "this person actually ships". The moment is the self-repairing chapter (below).
5. **The one thing no other site does.** Owner: "You decide". Authored: the page
   contains a small form with three real accessibility defects, and as you scroll
   the margin annotates, measures and fixes each one live in your browser, then
   stamps it shipped. It is a staged re-enactment of the agents Or leads at
   monday.com, and the page says so.
6. **Distance from premium-minimal.** Owner: refined light editorial (not polish-only,
   not dark, not loud).
7. **One world or distinct scenes.** Distinct chapters. Motion: owner chose
   "Restrained, code-driven". No video, no generated imagery, high performance.
8. **Assets.** Owner: "Just the headshot" (`public/images/or-nuri-professional.jpg`),
   plus company logos. No KIE key; nothing is generated.

Audience: owner chose "All of these, evenly" (founders, hiring leaders, event and
media organisers). One neutral action, labelled **"Let's talk"** everywhere.
Hebrew name: owner chose "Remove from hero" (kept in metadata and chapter I).

## Feeling curve

| # | Chapter | Feeling | Cause |
|---|---|---|---|
| 0 | Title page | Composure, curiosity | Huge set name on paper, one-line deck, a real table of contents |
| I | The short version | Intimacy | The portrait finally appears, in its own column with a caption, beside a large lede |
| II | Zero to millions | Momentum | Career told as orders of magnitude, 0 → 1 → 100 → 1K → 1M+, real figures counting |
| III | Intertitle | Anticipation (authored silence) | One sentence on an otherwise empty page |
| IV | The page fixes itself | Delight, disbelief | Hard cut to an ink ground; a form on the page is found, measured and repaired as you scroll |
| V | Receipts | Trust | The before → after ledger: 89% → 99.9%, 7.5s → 3.5s, 10K+ lines deleted |
| VI | How I work | Warmth | Three principles as pull quotes, advisory set as running prose |
| VII | On the record | Credibility, ease | Press as an index; questions people ask, compact |
| ∎ | Colophon | Resolve | The quietest type on the site. "Let's talk" as a line of running text, three routes, held |

**Peak:** chapter IV. Sentence a visitor would say: *"There was a broken form on his
site and while I scrolled, the margin found the bugs, fixed them and shipped it."*
It gets the most scroll room on the page (a 380vh sticky stage), the only dark ground,
and the silence of the interleaf in front of it.

**Tell-someone sentence:** *It's the site where the page found and fixed its own
accessibility bugs while I was reading it.*

**Authored silence:** the interleaf before chapter III is deliberately near-empty (one sentence). It is
not dead scroll.

## Build record

**Grammar:** chaptered editorial. The interview asked for "refined light editorial" and
long-form substance (a founder and leader profile), which is this grammar's exact fit.
Filmic one-shot, continuous world and rhythmic cutlist need video or energy the owner
declined ("Restrained, code-driven"). Typographic poster cannot hold this much real
content. Gallery fits a range of objects, not one person. Split stage needs a two-sided
argument. Live surface was considered (the agents are software) but would turn a personal
profile into a product demo, so it lives inside one chapter instead.

**Signature move:** the self-repairing form. Scroll position drives a red-pencil review of a
real form specimen: each defect is circled, measured from computed styles in the visitor's
browser, fixed, and the chapter is stamped shipped.

**Score**

| Chapter | Device | Why |
|---|---|---|
| Title page | Static type, real table of contents | The grammar's title page; no media above the fold |
| I | `flow` + `in`, sticky portrait column | Media in its own column with a caption |
| II | `flow` + `in`, CSS `view()` magnitude rule | Real figures inside prose rows; the rule fills as you read |
| Interleaf | Authored silence | Quiet before the peak |
| III (peak) | Sticky stage, 380vh, state from progress | Most scroll room on the page; the only dark ground |
| IV | Ledger table, `in` | Information, compressed |
| V | Asymmetric pull quotes | Warmth through voice, not cards |
| VI | Index rows + `details` | Administrative, short |
| Coda | Colophon plate, running-text CTA | Resolves and holds |

**Feel check** (contact sheets read cold, then diffed against the curve above)

| Chapter | Intended | Felt | Change |
|---|---|---|---|
| Title page | Composure, curiosity | Composure, but the pitch fell below the fold on a 900px desktop | Moved contents beside the name; pitch now above the fold at 1366×768 and 1440×900 |
| I | Intimacy | Intimacy | None |
| II | Momentum | Credibility, mild momentum | Accepted; the figures carry it |
| Interleaf | Anticipation | Anticipation | None |
| III | Delight | Delight, but queued notes looked broken (35% opacity, failed contrast) | Queued notes now in secondary ink, 7.5:1 |
| IV | Trust | Trust | None |
| V | Warmth | Warmth | None |
| VI | Credibility, ease | Ease | None |
| Coda | Resolve | Resolve | Gave it its own ground so it reads as an ending, not a footer |

**Verified:** desktop 1440×900 and 1366×768, tablet 820×1180, phone 390×844, iPhone 13
emulation, reduced motion, Contents dialog, no horizontal overflow, no console errors.
Lighthouse mobile: Performance 90 (old site 82), Accessibility 100, Best Practices 100,
SEO 100. Desktop: Performance 100 (old site 93).
**Not verified:** a real phone (iOS Safari sticky and `svh` behaviour), Safari's support
for the CSS `view()` rule (it is progressive enhancement and simply absent where unsupported).

## Revision 2 (2026-11-18): owner feedback and redesign

Owner on the editorial build: "I didn't like the design almost at all. It looks pretty old and,
I don't know, old-fashioned, super not modern, not impressive. It looks like a very long
wallpaper, newspaper."

Follow-up answers: direction "Light premium minimal", length "Short and punchy", the form
demo "Replace it", motion "More, still fast".

Rebuilt as a light premium page: floating glass nav, layered hero (aura, grid, orbit ring,
portrait card, floating proof chips with pointer and scroll depth), logo strip, count-up
impact grid, animated agent pipeline (labelled as an illustration), compact career timeline,
advisory and press cards, collapsed FAQ, contact card. One family (Geist), cobalt accent.
Length went from ~14 to ~7 screens on desktop. Lighthouse: desktop 100 across the board;
mobile performance 86–94 across three runs, accessibility, best practices, SEO 100.

## Revision 3 (2026-11-20): back to the live site, polished

Owner on revision 2: "That's a bit better but the current one feels more professional and
contains more information." Chosen next step: "Polish the current site".

Restored the live site's layout and content in full, then: a key-numbers row in the hero
(99.9% availability, 10M+ daily requests, 2,000+ brands, the 2020 exit), removed the
"Scroll to explore" cue, headline and portrait paint without a fade, WebP portrait, Inter
self-hosted via next/font (no render-blocking Google Fonts request), Google Analytics on idle,
Framer Motion through LazyMotion with `m` elements, year-long cache for hashed assets.
Lighthouse: desktop 100 in all four categories; mobile performance 78–85 (live site 82),
limited by hydrating the client-rendered sections.
