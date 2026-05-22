# Whetstone

Unofficial field dispatches for *MapleStory R: Evolution* — US server.

Independent, reader-funded, verified before posted. No affiliation with Nexon.

## Stack

Hand-written HTML and CSS. No framework, no build step, no tracker, no analytics.  
`bible.html` is a standalone React 18.2 quick-reference app (CDN, no build step).  
Deployed via Cloudflare Pages.

## File inventory

```
.
├── index.html                  # Homepage / dossier catalog
├── about.html                  # Editorial standards
├── bible.html                  # React quick-reference app (not a dossier)
├── styles.css                  # Shared stylesheet
├── whetstone.js                # Shared scripts (nav, theme, etc.)
│
├── tower-of-origins.html       # D-01 · Tower of Origins
├── build.html                  # D-02 · Build & Stats
├── class.html                  # D-03 · Class Overview
├── runes-abyss.html            # D-04 · Runes & Abyss
├── wings-cultivation.html      # D-05 · Wings Cultivation
├── stigmata.html               # D-06 · Stigmata
├── coloured-diamonds.html      # D-07 · Coloured Diamonds
├── pets.html                   # D-08 · Pets (tiers corrected via msrwiki.com)
├── exr-cultivation.html        # D-09 · EXR Cultivation
├── soul-orbs.html              # D-10 · Soul Orbs  (placeholder — EXR not yet live)
├── dojo-tips.html              # D-11 · Dojo Tips
├── loc-totems.html             # D-12 · LoC Totems
├── devour.html                 # D-13 · Devour System
├── costumes.html               # D-14 · Costumes
├── off-road.html               # D-15 · Off-Road Raids
├── monster-cards.html          # D-16 · Monster Cards
├── daily-600-prestige.html     # D-17 · Daily 600 Prestige
├── faqs-dailies.html           # D-18 · FAQs & Dailies
├── event-timeline.html         # D-19 · Event Timeline
└── dungeons.html               # D-20 · Dungeons
```

## Local preview

Open `index.html` directly in a browser. No server required.

For live reload (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

`bible.html` loads React from CDN and requires a network connection on first open.

## Adding a dossier

1. Duplicate `tower-of-origins.html` and rename it (e.g. `my-topic.html`).
2. Update the `<title>`, `<meta name="description">`, breadcrumb, `article-head`, and body sections.
3. Update the `footer-base`: set the correct dossier number and update the prev/next nav links.
4. Add a new `index-row` entry in `index.html` under the catalog section.
5. Commit and push — Cloudflare Pages redeploys automatically.

## Pet tier methodology

Pet tiers (UR / SSR / SR) are verified via [msrwiki.com](https://msrwiki.com) by inspecting the icon path in each individual pet page. The path suffix determines the tier:

| Suffix | Tier | Icon colour | Lv1 EXP |
|--------|------|-------------|---------|
| `ur.e96b8a.png` | UR | Orange | 180 |
| `ssr.75eb51.png` | SSR | Yellow | 100 |
| `sr.482421.png` | SR | Purple | 50 |

Nancy's guide (the primary community reference at launch) labels 16 pets as UR; wiki verification confirms only 6 are true UR. The remaining skill-bearing pets are SSR. The corrected breakdown is documented in `pets.html` (D-08) and `bible.html`.

## Editorial standards

Every dossier cites its source, dates it, and flags claims that need in-game verification. See `about.html`.

## License

Content: all rights reserved by the author.  
Code: free to fork and adapt for your own unofficial-guide projects.
