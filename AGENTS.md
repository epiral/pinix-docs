# AGENTS.md — pinix-docs

Pinix 文档站，部署在 docs.pinixai.com。

**本仓库是 Pinix 面向用户的核心概念和术语的 source of truth。** 其他仓库的 AGENTS.md、README 等文档必须与本站内容对齐。

## 关键原则

- **中文是源语言**，英文从中文翻译。内容修改先改 `zh/` 目录，再同步英文
- **Pinix** = Agent Application OS
- **Clip** = Agent 的 App（Package = 镜像，Instance = 容器）
- **pinix daemon** = Clip 的运行环境（用户文档中用 "pinix daemon"，代码中的二进制名 `pinixd` 仅在代码块/路径中出现）
- **Hub** = Clip 被发现和调用的地方
- **Clip power Agent** = Clip 赋能 Agent（不说"Agent 薄 Clip 厚"）
- 不推广 MCP 兼容性——只在 Clip vs MCP & CLI 对比页面比较差异
- 三层模型（知识/能力/资产）是 Clip 的设计方法论，只在 `clip-development/design-principles` 中出现，不是用户入门概念

## Tech stack

- **Framework**: Starlight (Astro)
- **Package manager**: pnpm
- **i18n**: Chinese (zh/) 为源，English (root) 为翻译
- **Search**: Pagefind (built-in)
- **Diagrams**: PlantUML (astro-plantuml, 构建时渲染)
- **Deploy**: COS (`pinix-docs-1251447449`) + CDN (`docs.pinixai.com`)

## Structure

```
src/content/docs/           # English content (translated from zh/)
src/content/docs/zh/        # Chinese content (SOURCE)
src/components/             # Custom Starlight overrides (EditLink, CopyMarkdown)
src/styles/custom.css       # Brand theme overrides
src/assets/                 # Logos
astro.config.mjs            # Starlight config + sidebar
src/content.config.ts       # Content collection config
```

## Sidebar structure

```
Getting Started (快速上手)     ← 排第一
├── Cloud Usage (云端使用)
├── Local Installation (本地安装)
├── First Clip (开发第一个 Clip)
└── Publishing (发布与共享)

Core Concepts (核心概念)
├── Overview (概览)
├── Clip
├── Pinix Daemon
├── Hub
└── Clip vs MCP & CLI

Clip Development (Clip 开发)
├── Getting Started
├── Design Principles (三层模型在这里)
├── Command Design
├── Clip Web UI
└── Publishing

Edge Clips / Platform / Reference
```

## Commands

```bash
pnpm dev         # Development server
pnpm build       # Build static site to dist/
pnpm preview     # Preview built site

# Deploy
coscmd -c /tmp/cos-docs.conf upload -rs dist/ /
tccli cdn PurgePathCache --Paths '["https://docs.pinixai.com/"]' --FlushType flush

# Or from epiral root:
make deploy-docs
```

## Content conventions

- Pages are `.mdx` files with frontmatter (title, description)
- Sidebar order controlled in `astro.config.mjs`
- Chinese pages are the source; English pages mirror the structure
- Use Starlight components: `Aside`, `Card`, `CardGrid`, `LinkCard`, `Tabs`, `Steps`
- PlantUML diagrams: use ` ```plantuml ` code blocks, brand colors (#6D28D9)
- Tables: supported via remark-gfm
- Copy Markdown button: auto-injected on every page (custom EditLink override)

## Brand

- Primary: Electric Indigo (#6D28D9, OKLCH H=276)
- Heading font: Instrument Serif (italic for h1)
- Body font: Inter
- Code font: JetBrains Mono
- CJK: Noto Sans SC / Noto Serif SC
