import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TelegramMediaRelayBot Docs',
  tagline: 'Документация для TelegramMediaRelayBot',
  favicon: 'img/favicon.ico',
  url: 'https://zenonel.github.io',
  baseUrl: '/', // Исправленный baseUrl
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
          to: '/docs/', // Относительный путь
          label: 'docsLabel', // Ключ перевода
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
              to: '/docs/installation', // Относительный путь
            },
            {
              label: 'Использование',
              to: '/docs/usage', // Относительный путь
            },
          ],
        },
        {
          title: 'Соцсети',
          items: [
            {
              label: 'Mastodon (English)',
              href: 'https://mastodon.social/@your_username',
            },
            {
              label: 'Mastodon (Русский)',
              href: 'https://mastodon.ml/@your_username',
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;