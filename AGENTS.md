# AGENTS.md — pinix-docs

Pinix documentation site, deployed to docs.pinixai.com.

## Tech stack

- **Framework**: Starlight (Astro)
- **Package manager**: pnpm
- **i18n**: English (root) + Chinese (zh/)
- **Search**: Pagefind (built-in)
- **Deploy**: COS + CDN (docs.pinixai.com)

## Structure

```
src/content/docs/           # English content (root locale)
src/content/docs/zh/        # Chinese content
src/styles/custom.css       # Brand theme overrides
src/assets/                 # Logos, images
astro.config.mjs            # Starlight config + sidebar
src/content.config.ts       # Content collection config
```

## Commands

```bash
pnpm dev         # Development server
pnpm build       # Build static site to dist/
pnpm preview     # Preview built site
```

## Content conventions

- Pages are `.mdx` files with frontmatter (title, description)
- Sidebar order is controlled in `astro.config.mjs`
- Chinese pages mirror the English structure under `zh/`
- Use Starlight components: `Aside`, `Card`, `CardGrid`, `LinkCard`, `Tabs`, `Steps`
- Code blocks use Expressive Code (built into Starlight)

## Brand

- Primary color: Electric Indigo (OKLCH H=276)
- Heading font: Instrument Serif (italic for h1)
- Body font: Inter
- Code font: JetBrains Mono
- CJK: Noto Sans SC / Noto Serif SC

## Content sources

Most content is migrated from:
- `repos/pinix/docs/` — V2 docs (concepts, architecture, protocol, clip-development, mcp)
- `dev/domain.md` — domain model and glossary
- `dev/agent-native-cli-design.md` — design principles
- `dev/clip-development.md` — extended Clip development guide
- `dev/clip-web-development.md` — Clip Web UI guide
- `repos/bb-browser/README.md` — BB-Browser docs
