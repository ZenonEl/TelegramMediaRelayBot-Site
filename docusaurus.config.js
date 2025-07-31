import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TelegramMediaRelayBot - Powerful Telegram Media Bot",
  tagline:
    "Download and relay media from 1000+ platforms with automatic forwarding",
  favicon: "img/favicon.ico",
  url: "https://zenonel.github.io",
  baseUrl: "/TelegramMediaRelayBot-Site/",
  trailingSlash: false,
  organizationName: "ZenonEl",
  projectName: "TelegramMediaRelayBot-Site",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "telegram bot, media downloader, youtube downloader, reddit downloader, tiktok downloader, media relay, automated sharing, yt-dlp, gallery-dl, open source bot, cross-platform media, telegram automation",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "ZenonEl",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "robots",
        content: "index, follow",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:site_name",
        content: "TelegramMediaRelayBot",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "vk:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "vk:creator",
        content: "@ZenonEl",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "canonical",
        href: "https://zenonel.github.io/TelegramMediaRelayBot-Site/",
      },
    },
    {
      tagName: "script",
      attributes: {
        type: "application/ld+json",
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "TelegramMediaRelayBot",
        description:
          "Powerful Telegram bot that downloads and relays media from 1000+ platforms including YouTube, Reddit, TikTok with automatic forwarding and Tor support",
        url: "https://zenonel.github.io/TelegramMediaRelayBot-Site/",
        downloadUrl:
          "https://github.com/ZenonEl/TelegramMediaRelayBot/releases/latest",
        author: {
          "@type": "Person",
          name: "ZenonEl",
          url: "https://github.com/ZenonEl",
        },
        operatingSystem: "Linux, Windows, macOS",
        applicationCategory: "Productivity",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      }),
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      ru: {
        label: "Русский",
        direction: "ltr",
        htmlLang: "ru-RU",
      },
    },
  },
  scripts: [
    {
      src: "https://app.rybbit.io/api/script.js",
      "data-site-id": "430",
      defer: true,
    },
    {
      src: "https://cloud.umami.is/script.js",
      "data-website-id": "48d2f76f-9d85-4492-9e52-4ebfa4128c44",
      defer: true,
      async: true,
    },
    {
      src: "https://zenonelumami-jztp5tlau-zenonels-projects.vercel.app/script.js",
      "data-website-id": "6c7f8ba2-4aa6-4c22-9d92-615c4c7ea6ab",
      defer: true,
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/ZenonEl/TelegramMediaRelayBot-Site/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/Logo.jpg",
    defaultMode: "light",
    respectPrefersColorScheme: true,
    algolia: {
      appId: "YOUR_APP_ID", // Replace with Algolia app ID when ready
      apiKey: "YOUR_SEARCH_API_KEY", // Replace with Algolia search API key
      indexName: "telegrammediarealybot",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
    },
    navbar: {
      title: "TelegramMediaRelayBot",
      items: [
        {
          to: "/docs/",
          label: "docsLabel",
          position: "left",
        },
        {
          href: "https://github.com/ZenonEl/TelegramMediaRelayBot",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    metadata: [
      // Basic SEO
      {
        name: "description",
        content:
          "TelegramMediaRelayBot - Free open-source bot for automatic media downloading from YouTube, Reddit, TikTok and 1000+ platforms. Share content instantly with friends who aren't registered on these platforms.",
      },
      {
        name: "keywords",
        content:
          "telegram bot, media downloader, youtube downloader, reddit downloader, tiktok downloader, automatic sharing, media relay, yt-dlp, gallery-dl, open source, free, cross-platform",
      },
      { name: "author", content: "ZenonEl" },
      { name: "robots", content: "index, follow" },

      // Open Graph
      {
        property: "og:title",
        content: "TelegramMediaRelayBot - Automate Media Downloads & Sharing",
      },
      {
        property: "og:description",
        content:
          "Free open-source Telegram bot that automatically downloads media from YouTube, Reddit, TikTok and 1000+ sites, then shares it with your contacts. Perfect for friends not registered on platforms.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://zenonel.github.io/TelegramMediaRelayBot-Site/",
      },
      {
        property: "og:image",
        content:
          "https://zenonel.github.io/TelegramMediaRelayBot-Site/img/Logo.jpg",
      },
      { property: "og:image:alt", content: "TelegramMediaRelayBot Logo" },
      { property: "og:site_name", content: "TelegramMediaRelayBot" },
      { name: "og:locale", content: "en_US" },
      { name: "og:locale:alternate", content: "ru_RU" },

      // VK Cards
      { name: "vk:card", content: "summary_large_image" },
      {
        name: "vk:title",
        content: "TelegramMediaRelayBot - Automate Media Downloads & Sharing",
      },
      {
        name: "vk:description",
        content:
          "Free open-source Telegram bot for automatic media downloading from YouTube, Reddit, TikTok and 1000+ sites with smart forwarding",
      },
      {
        name: "vk:image",
        content:
          "https://zenonel.github.io/TelegramMediaRelayBot-Site/img/Logo.jpg",
      },
      { name: "vk:creator", content: "@ZenonEl" },

      // Additional meta tags
      { name: "theme-color", content: "#2e8555" },
      { name: "msapplication-TileColor", content: "#2e8555" },
      { httpEquiv: "Content-Language", content: "en,ru" },

      // Schema.org structured data
      { name: "application-name", content: "TelegramMediaRelayBot" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "apple-mobile-web-app-title", content: "TelegramMediaRelayBot" },
    ],
    footer: {
      style: "dark",
      links: [
        {
          title: "Документация",
          items: [
            {
              label: "Установка",
              to: "/docs/installation",
            },
            {
              label: "Использование",
              to: "/docs/usage",
            },
          ],
        },
        {
          title: "Соцсети",
          items: [
            {
              label: "Мой микроблог на Mastodon",
              href: "https://mastodon.ml/@ZenonEl",
            },
            {
              label: "Блог на Mastodon посвященный моим проектам",
              href: "https://lor.sh/@ZenonEl",
              rel: "me",
            },
          ],
        },
        {
          title: "Ссылки",
          items: [
            {
              label: "Мой GitHub",
              href: "https://github.com/ZenonEl",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZenonEl. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["bash", "sql", "json"],
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.oceanicNext,
      showLineNumbers: true,
      defaultLanguage: "text",
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
      ],
    },
  },
};

export default config;
