import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://docs.pinixai.com",
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [
    starlight({
      title: "Pinix",
      logo: {
        dark: "./src/assets/logo-dark.svg",
        light: "./src/assets/logo-light.svg",
        replacesTitle: false,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/epiral/pinix",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/epiral/pinix-docs/edit/main/",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        zh: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: { "zh-CN": "快速上手" },
          items: [
            {
              slug: "getting-started",
              label: "Start with Cloud",
              translations: { "zh-CN": "云端使用" },
            },
            {
              slug: "getting-started/installation",
              label: "Local Installation",
              translations: { "zh-CN": "本地安装" },
            },
            {
              slug: "getting-started/first-clip",
              label: "Your First Clip",
              translations: { "zh-CN": "开发第一个 Clip" },
            },
            {
              slug: "getting-started/publishing",
              label: "Publish & Share",
              translations: { "zh-CN": "发布与共享" },
            },
          ],
        },
        {
          label: "Core Concepts",
          translations: { "zh-CN": "核心概念" },
          items: [
            {
              slug: "concepts",
              label: "Overview",
              translations: { "zh-CN": "概览" },
            },
            {
              slug: "concepts/clips",
              label: "Clips",
              translations: { "zh-CN": "Clip" },
            },
            {
              slug: "concepts/daemon",
              label: "Pinix Daemon",
              translations: { "zh-CN": "Pinix Daemon" },
            },
            {
              slug: "concepts/hub",
              label: "Hub",
              translations: { "zh-CN": "Hub" },
            },
            {
              slug: "concepts/clip-vs-mcp",
              label: "Clip vs MCP & CLI",
              translations: { "zh-CN": "Clip vs MCP & CLI" },
            },
          ],
        },
        {
          label: "Clip Development",
          translations: { "zh-CN": "Clip 开发" },
          items: [
            {
              slug: "clip-development/getting-started",
              label: "Getting Started",
              translations: { "zh-CN": "快速上手" },
            },
            {
              slug: "clip-development/design-principles",
              label: "Design Principles",
              translations: { "zh-CN": "设计原则" },
            },
            {
              slug: "clip-development/command-design",
              label: "Command Design",
              translations: { "zh-CN": "命令设计" },
            },
            {
              slug: "clip-development/clip-web-ui",
              label: "Clip Web UI",
              translations: { "zh-CN": "Clip Web UI" },
            },
            {
              slug: "clip-development/publishing",
              label: "Publishing",
              translations: { "zh-CN": "发布" },
            },
          ],
        },
        {
          label: "Edge Clips",
          translations: { "zh-CN": "Edge Clip" },
          items: [
            {
              slug: "edge-clips/provider-protocol",
              label: "Provider Protocol",
              translations: { "zh-CN": "Provider 协议" },
            },
            {
              slug: "edge-clips/building-edge-clip",
              label: "Building an Edge Clip",
              translations: { "zh-CN": "构建 Edge Clip" },
            },
            {
              slug: "edge-clips/bb-browser",
              label: "BB-Browser",
              translations: { "zh-CN": "BB-Browser" },
            },
          ],
        },
        {
          label: "Platform",
          translations: { "zh-CN": "平台" },
          items: [
            {
              slug: "platform/architecture",
              label: "Architecture",
              translations: { "zh-CN": "架构" },
            },
            {
              slug: "platform/protocol",
              label: "Protocol Reference",
              translations: { "zh-CN": "协议参考" },
            },
          ],
        },
        {
          label: "Reference",
          translations: { "zh-CN": "参考" },
          items: [
            {
              slug: "reference/glossary",
              label: "Glossary",
              translations: { "zh-CN": "术语表" },
            },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
