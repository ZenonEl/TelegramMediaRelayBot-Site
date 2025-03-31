import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TelegramMediaRelayBot Docs',
  tagline: 'Documentation for TelegramMediaRelayBot',
  favicon: 'img/favicon.ico',
  url: 'https://zenonel.github.io',
  baseUrl: '/TelegramMediaRelayBot-Site/',
  organizationName: 'ZenonEl',
  projectName: 'TelegramMediaRelayBot-Site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    defaultMode: 'light',
    respectPrefersColorScheme: true,
    navbar: {
      title: 'TelegramMediaRelayBot',
      items: [
        {
          to: '/docs/',
          label: 'docsLabel',
          position: 'left',
        },
        {
          href: 'https://github.com/ZenonEl/TelegramMediaRelayBot',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    metadata: [
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:locale:alternate', content: 'ru_RU' },
    ],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Установка',
              to: '/docs/installation',
            },
            {
              label: 'Использование',
              to: '/docs/usage',
            },
          ],
        },
        {
          title: 'Соцсети',
          items: [
            {
              label: 'Мой микроблог на Mastodon',
              href: 'https://mastodon.ml/@ZenonEl',
            },
            {
              label: 'Блог на Mastodon посвященный моим проектам',
              href: 'https://lor.sh/@ZenonEl',
              rel: "me"
            },
          ],
        },
        {
          title: 'Ссылки',
          items: [
            {
              label: 'Мой GitHub',
              href: 'https://github.com/ZenonEl',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZenonEl. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['bash', 'sql', 'json'],
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.oceanicNext,
      showLineNumbers: true,
      defaultLanguage: 'text',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
      ],
    },
  },
};

export default config;