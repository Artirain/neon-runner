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

## Replace placeholders with real images
Drop files into `img/`:
- `hero.png` — hero background (recommended 1920×1080+, will be darkened by overlay)
- `feature-npc.png` — feature 1 visual
- `feature-factions.png` — feature 2 visual
- `lore-1.png`, `lore-2.png`, `lore-3.png` — lore card thumbnails

JS auto-swaps CSS placeholders for these files when they load.
