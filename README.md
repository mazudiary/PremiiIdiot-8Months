# Premii — A Romantic Micro-Site

This is a small, static multi-page website created as a romantic tribute for Farzana Hossain Lopa ("Premii"). It is handcrafted with vanilla HTML, CSS and JavaScript and focuses on a warm, animated, glassmorphic aesthetic with star and sparkle effects.

## Highlights
- Glassmorphic UI, animated stars and particle effects
- Password-protected entry gate (`index.html`) with a sparkly cursor trail
- Four content pages: timeline, story slider, Ramadan Dua wall, and future promises
- Live dynamic counters and small interactive widgets (typewriter, memory slider, prayer picker)

## Pages
- `index.html` — Password gate (password: `20025`) that leads into the site.
- `home.html` — Landing / hero with timeline highlights and nickname rotator.
- `our-story.html` — Detailed Boi Mela story, memory slider and love-language section.
- `ramadan-dua.html` — Ramadan-focused dua wall with prayer categories and an 'add your dua' input.
- `forever.html` — Promise page with image reveal, randomized heart messages, and live counters.

## Project structure
```
./
	index.html
	home.html
	our-story.html
	ramadan-dua.html
	forever.html
	assets/
		DayOnetoOneDay.jpg
	css/
		base.css
		home.css
		story.css
		ramadan.css
		forever.css
		lock.css
	js/
		home.js
		story.js
		ramadan.js
		forever.js
		lock.js
	README.md
```

## Fonts & Assets
- Google Fonts used: Great Vibes, Inter, Playfair Display, Amiri, Caveat (loaded via link tags in each page).
- Image asset: `assets/DayOnetoOneDay.jpg` (used on the `forever.html` heart reveal).

## How to run / preview
1. Open `index.html` in a browser (double-click) or serve the folder via a simple static server (e.g. VS Code Live Server).
2. Enter the password `20025` at the gate to reach the main site.

Quick preview with Python (optional):
```
python -m http.server 8000
# then open http://localhost:8000/index.html
```

## Accessibility & performance
- The site is mostly decorative and designed for modern browsers; keep animations tasteful on low-power devices.
- Reduce particle counts or disable JS if you need a simpler, static experience.

## Credits
- Built as a personal tribute. Fonts from Google Fonts. Emojis used as decorative elements.

## Notes
- This is a static, client-side site — there is no server component and nothing is persisted permanently.

## License
This project is distributed under a custom "All Rights Reserved" license. See the `LICENSE` file in the repository root for the full text. Replace the placeholder name in `LICENSE` with your legal name to assert ownership.
