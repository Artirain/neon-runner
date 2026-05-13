# KARMA.EXE

Fictional cyberpunk RPG landing page. Built as a static site for GitHub Pages.

**Live:** https://artirain.github.io/neon-runner/

## Stack
Pure HTML + CSS + tiny JS. No build step. No framework.

## Local preview
Open `index.html` in a browser, or:
```
python -m http.server 8000
```
then visit http://localhost:8000

## Replacing images
All images live in `img/` as WebP. To swap:
- `hero.webp` — hero background (1920px wide source recommended, darkened by overlay)
- `feature-npc.webp`, `feature-factions.webp` — feature visuals (1400px)
- `lore-1.webp`, `lore-2.webp`, `lore-3.webp` — lore card thumbnails (1000px)

If the file is missing the CSS gradient placeholder shows through.
