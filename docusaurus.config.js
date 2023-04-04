// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const homePluginOptions = {
  id: 'home',
  path: 'home',
  routeBasePath: '/',
  sidebarPath: require.resolve('./home/sidebars.js'),
}

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const tutorialsPluginOptions = {
  id: 'tutorials',
  path: 'tutorials',
  routeBasePath: 'tutorials',
  sidebarPath: require.resolve('./tutorials/sidebars.js'),
}

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const referencePluginOptions = {
  id: 'reference',
  path: 'reference',
  routeBasePath: 'reference',
  sidebarPath: require.resolve('./reference/sidebars.js'),
}

/** @type {import('@docusaurus/theme-common').UserThemeConfig} */
const themeConfig = {
  // Replace with your project's social card
  // image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'Turso docs',
    logo: {
      alt: 'Turso logo',
      src: 'img/turso.png',
    },
    items: [
      {
        type: 'doc',
        docsPluginId: 'home',
        docId: 'index',
        label: 'Home',
        position: 'left',
      },
      {
        type: 'doc',
        docsPluginId: 'tutorials',
        docId: 'index',
        label: 'Tutorials',
        position: 'left',
      },
      {
        type: 'doc',
        docsPluginId: 'reference',
        docId: 'index',
        label: 'Reference',
        position: 'left',
      },
      {
        href: 'https://turso.tech',
        label: 'Website',
        position: 'right',
      },
      {
        href: 'https://github.com/chiselstrike',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Home',
            to: '/',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          // {
          //   label: 'Stack Overflow',
          //   href: 'https://stackoverflow.com/questions/tagged/turso',
          // },
          {
            label: 'Discord',
            href: 'https://discord.gg/rKqhMfj9',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/ChiselStrike',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            href: 'https://blog.chiselstrike.com',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/chiselstrike',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} ChiselStrike, Inc. Built with Docusaurus.`,
  },

  prism: {
    // @ts-ignore
    theme: lightCodeTheme,
    // @ts-ignore
    darkTheme: darkCodeTheme,
    additionalLanguages: ['rust'],
  },
};

/** @type {import('@docusaurus/theme-classic').Options} */
const themeOptions = {
  customCss: require.resolve('./src/css/custom.css'),
}

/** @type {import('@docusaurus/plugin-google-gtag').Options} */
const gtagOptions = {
  trackingID: 'G-YMMQC402S1',
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Turso',
  tagline: 'The edge database based on libSQL',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.turso.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themeConfig: themeConfig,

  plugins: [
    [ 'content-docs', homePluginOptions ],
    [ 'content-docs', tutorialsPluginOptions ],
    [ 'content-docs', referencePluginOptions ],
    [ '@docusaurus/theme-classic', themeOptions ],
    // [ '@docusaurus/plugin-client-redirects', redirectOptions ],
    // [ '@docusaurus/plugin-google-analytics', gaOptions ],
    [ '@docusaurus/plugin-google-gtag', gtagOptions ],
  ],
};

module.exports = config;
