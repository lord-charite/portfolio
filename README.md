# Portfolio — Lord Charité

Personal portfolio site for a biomedical engineer and life sciences analyst.
Selected research, projects, and recognition, in a single-page editorial layout.

Live at <https://lord-charite.github.io/portfolio/>.

## Stack

- React 19 with TypeScript, written as class components
- Vite for the dev server and production build
- Plain CSS with custom properties — no framework, no preprocessor

## Getting started

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL. To build and preview a production bundle:

```bash
npm run build
npm run preview
```

## Project layout

```
index.html                     Vite entry; mounts the app into #root.
src/
  main.tsx                     Creates the React root.
  styles.css                   Design tokens and all layout rules.
  models/
    Project.ts                 Project entity — tags, category, note.
    Award.ts                   Award entity.
    SocialLink.ts              Link entity; knows how to open safely.
  data/
    PortfolioRepository.ts     Singleton holding every piece of content.
  components/
    App.tsx                    Composes the page from the repository.
    Masthead.tsx               Sticky inverted header bar.
    RotatingWord.tsx           Cycles the role words in the masthead.
    Intro.tsx                  Two-column opening statement.
    SectionHead.tsx            Small mono heading with a rule.
    ProjectSection.tsx         A titled group of project rows.
    ProjectRow.tsx             One project.
    TagList.tsx                Tag column (desktop) or wrap (mobile).
    Recognition.tsx            Awards list.
    Connect.tsx                Links and colophon.
    Reveal.tsx                 Fade-and-lift on first scroll into view.
```

## Editing content

Open `src/data/PortfolioRepository.ts`. Every project, award, link, and the
rotating role words live there. Components read from the repository and hold no
copies of their own, so that one file is the only thing to change.

Colors, type, and spacing are the custom properties at the top of
`src/styles.css`. The page background is `--paper`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

In the repository settings, **Pages → Build and deployment → Source** must be set
to **GitHub Actions**. If it is set to "Deploy from a branch" instead, GitHub
serves this README through Jekyll rather than the built site.

Because the repo is named `portfolio` rather than `lord-charite.github.io`, the
site lives under a subpath. That path is set once, as `BASE` in
`vite.config.ts`. If the site moves to a custom domain or a
`lord-charite.github.io` repo, set `BASE = "/"` and nothing else changes.
