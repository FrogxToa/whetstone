# Whetstone

Unofficial field dispatches for *MapleStory R: Evolution*.

Independent, reader-funded, verified before posted. No affiliation with Nexon.

## Stack

Hand-written HTML and CSS. No framework, no build step, no tracker, no analytics. Deployed via Cloudflare Pages.

## Structure

```
.
├── index.html              # Homepage
├── about.html              # Editorial standards
├── tower-of-origins.html   # Dossier 01
├── styles.css              # Shared stylesheet
└── README.md
```

## Local preview

Open `index.html` directly in a browser. No server required.

For a local server with live reload (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding a dossier

1. Duplicate `tower-of-origins.html`, rename it.
2. Update the nav, breadcrumb, article-head, and article body.
3. Add a new `index-row` entry in `index.html` under the catalog section.
4. Commit and push. Cloudflare Pages will redeploy automatically.

## Editorial standards

Every dossier cites its source, dates it, and flags claims that need in-game verification. See `about.html`.

## License

Content: all rights reserved by the author.
Code: free to fork and adapt for your own unofficial-guide projects.
