# Sanne Bautz — Portfolio

A simple single-page portfolio with hand-drawn type, built with plain HTML and CSS.

## Open it

The page is currently being served at **http://localhost:8765**.

Or open `index.html` directly in a browser.

To serve it again later:

```bash
cd ~/portfolio
python3 -m http.server 8765
```

## Make it yours

Everything lives in two files:

- `index.html` — the headline, intro, project list and contact details
- `styles.css` — colours, type, layout and the project artwork

A few things worth replacing:

- Search for `Sanne Bautz` and `hello@sannebautz.com`
- Update the four project titles, disciplines and years
- Swap the CSS-drawn project thumbnails for your own images if you prefer

## Notes

- The headline and intro use [Caveat](https://fonts.google.com/specimen/Caveat) and [Kalam](https://fonts.google.com/specimen/Kalam), with handwritten system fallbacks.
- The project thumbnails are built in CSS, so there are no image files to manage.
- No JavaScript, no build step.
