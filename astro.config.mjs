import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.pinixai.com",
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
              translations: { "zh-CN": "Clip 能力单元" },
            },
            {
              slug: "concepts/hub-and-routing",
              label: "Hub & Routing",
              translations: { "zh-CN": "Hub 与路由" },
            },
            {
              slug: "concepts/providers-and-edge",
              label: "Providers & Edge Clips",
              translations: { "zh-CN": "Provider 与 Edge Clip" },
            },
            {
              slug: "concepts/agent-and-clips",
              label: "Agent & Clips",
              translations: { "zh-CN": "Agent 与 Clip" },
            },
            {
              slug: "concepts/clips-vs-mcp",
              label: "Clips vs MCP vs GPTs",
              translations: { "zh-CN": "Clip vs MCP vs GPTs" },
            },
          ],
        },
        {
          label: "Getting Started",
          translations: { "zh-CN": "快速上手" },
          items: [
            {
              slug: "getting-started/installation",
              label: "Installation",
              translations: { "zh-CN": "安装" },
            },
            {
              slug: "getting-started/quick-start",
              label: "Quick Start",
              translations: { "zh-CN": "快速开始" },
            },
            {
              slug: "getting-started/first-clip",
              label: "Your First Clip",
              translations: { "zh-CN": "第一个 Clip" },
            },
            {
              slug: "getting-started/mcp-integration",
              label: "MCP Integration",
              translations: { "zh-CN": "MCP 集成" },
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
