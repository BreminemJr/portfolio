# Sanne Bautz — Portfolio

Single-page portfolio built from the Figma frame **"Portfolio homepage"** (node `2:4`), plain HTML and CSS with no build step.

Live: <https://breminemjr.github.io/portfolio/>

## Structure

Three pages that share the same intro header and nav tabs — the current tab is marked with `aria-current="page"` and underlined. The header and tabs stay identical on every page; only the panel below the tabs changes.

- `index.html` — **Curriculum vitae**: intro block + CV table
- `prosjekter.html` — **Prosjekter**: placeholder, design pending
- `bare-for-morro.html` — **Bare for morro**: placeholder, design pending
- `styles.css` — all styling
- `favicon.svg` — icon

The layout mirrors the Figma frame: a 790 px centred column, a 456 px intro block offset 167 px, and a CV grid of `101 / 130 / 130 / 330` px with 33 px gutters. Type is [42dot Sans](https://fonts.google.com/specimen/42dot+Sans), 16 px with 0.8 px letter-spacing in the CV, 20 px for the intro and nav. Rules are 0.5 px hairlines.

On the tab pages, which have no design yet, the intro and tabs are followed by a placeholder panel that starts at the same y as the CV table.

## Editing content

Everything lives in `index.html`:

- Intro: `Portefølje`, name, the "Jeg er … designer" line, current role and the master note
- CV rows: each `.cv-row` has four cells — `.cv-when` (Når?), `.cv-where` (Hvor?), `.cv-what` (Hva?), `.cv-how` (Hvordan?)
- `#prosjekter` and `#bare-for-morro` are placeholder sections behind the two nav items

Still placeholder from the frame: every date reads `Mars 26- dd.` and all five `Hvordan?` cells repeat the same sentence.

## Om meg overlay

Hovering — or keyboard-focusing — the name in the intro opens frame **12** (`10:188`): a 223 × 308 card made of the portrait (`89 × 79`, right-aligned) sitting directly above the `223 × 229` `#dedede` box. The box keeps the placement of node `2:117` — 157 px right of and 12 px above the name's top edge — so the portrait rides above it.

Markup is `.name-wrap` → `.intro-name` + `aside.overlay[role="tooltip"]` containing `img.overlay-media` and `.overlay-box`, revealed with `.name-wrap:hover` / `.name-wrap:focus-within`. Below 900 px the card re-anchors under the name instead of beside it. The heading carries `tabindex="0"` so the card is reachable from the keyboard. Portrait asset: `assets/portrait-om-meg.png` (178 × 158, exported 2× from Figma).

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

- No JavaScript, no build step, no dependencies.
- Responsive: below 900 px the intro un-indents, the nav wraps and the CV rows stack into single-column blocks with the heading row hidden.
- `prefers-reduced-motion` disables smooth scrolling.
