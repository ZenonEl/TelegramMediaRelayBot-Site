import { themes as prismThemes } from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TelegramMediaRelayBot Docs',
  tagline: 'Документация для TelegramMediaRelayBot',
  favicon: 'img/favicon.ico',
  url: 'https://zenonel.github.io',
  baseUrl: '/',
  organizationName: 'ZenonEl',
  projectName: 'TelegramMediaRelayBot-Site',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ZenonEl/TelegramMediaRelayBot-Site/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'TelegramMediaRelayBot',
      items: [
        {
          to: '/docs/',
          label: 'Документация',
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