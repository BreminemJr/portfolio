# Sanne Bautz — Portfolio

Single-page portfolio built from the Figma frame **"Portfolio homepage"** (node `2:4`), plain HTML and CSS with no build step.

Live: <https://breminemjr.github.io/portfolio/>

## Structure

Three pages that share the same intro header and nav tabs — the current tab is marked with `aria-current="page"` and underlined. The header and tabs stay identical on every page; only the panel below the tabs changes.

- `index.html` — **Curriculum vitae**: intro block + CV table
- `mitt-skip-er-lastet-med.html` — **mitt skip er lastet med**: paper-boat illustration with a Telenor menu placeholder
- `bare-for-morro.html` — **Bare for morro**: placeholder, design pending
- `styles.css` — all styling
- `assets/paper-boat.svg` — custom paper-boat-on-water illustration, based on Figma frame `13:193`
- `favicon.svg` — icon

The layout mirrors the Figma frame: a 790 px centred column, a 456 px intro block offset 167 px, and a CV grid of `101 / 130 / 130 / 330` px with 33 px gutters. Type is [42dot Sans](https://fonts.google.com/specimen/42dot+Sans), 16 px with 0.8 px letter-spacing in the CV, 20 px for the intro and nav. Rules are 0.5 px hairlines.

The intro and tabs stay identical across the pages; each page's content starts below the tabs. The boat page has a cyan Telenor mark inside the paper boat as a menu item placeholder. It is intentionally not linked anywhere yet.

## Editing content

Page content lives in its respective HTML file:

- Intro: `Portefølje`, name, the "Jeg er … designer" line, current role and the master note
- CV rows: each `.cv-row` has four cells — `.cv-when` (Når?), `.cv-where` (Hvor?), `.cv-what` (Hva?), `.cv-how` (Hvordan?)
- `mitt-skip-er-lastet-med.html` holds the boat illustration and placeholder menu item
- `bare-for-morro.html` is a placeholder until its design is ready

Still placeholder from the frame: every date reads `Mars 26- dd.` and all five `Hvordan?` cells repeat the same sentence.

## Om meg overlay

Hovering — or keyboard-focusing — the name in the intro opens the **Om meg card**: the `223 × 229` `#dedede` box from frame 12 (`10:188`) with the portrait (`89 × 79`) layered on top of its top-right corner. The portrait has no background of its own — it straddles the box edge, 40 px above it and 39 px over it — so it reads as sitting on the box rather than in a separate panel.

The card **follows the pointer**: `js/overlay.js` tracks pointer position over the name and moves the card with `transform: translate3d(var(--x), var(--y))`, offset 18 px from the cursor, flipping left/up near the viewport edges so it stays on screen. Leaving the name hides it immediately; `Escape` also closes it. The card is `pointer-events: none`, so it can never trap the cursor and keep itself open.

Without JavaScript the card still appears, anchored 157 px right of and 12 px above the name (the CSS `:hover` / `:focus-within` fallback). Keyboard focus anchors it just below the name. Portrait asset: `assets/portrait-om-meg.png` (178 × 158, exported 2× from Figma).

## Local preview

```bash
cd ~/portfolio
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

## Deploying

Push to `main` — GitHub Pages rebuilds automatically (branch deploy, root folder, ~30–60 s):

```bash
git add -A
git commit -m "Update content"
git push
```

## Notes

- No build step or dependencies; a small vanilla JavaScript file powers the pointer-following "Om meg" card.
- Responsive: below 900 px the intro un-indents, the nav wraps and the CV rows stack into single-column blocks with the heading row hidden.
- `prefers-reduced-motion` disables smooth scrolling.
