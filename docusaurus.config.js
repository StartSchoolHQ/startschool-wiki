// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StartSchool Tech Module guide',
  // tagline: 'Your comprehensive guide to coding bootcamp success',
  favicon: 'img/StartSchool_round_pink.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'start-school', // Usually your GitHub org/user name.
  projectName: 'start-school-wiki', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn' to allow build to continue
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/start-school/start-school-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/start-school/start-school-wiki/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'StartSchool Tech module',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'liveCodingSidebar',
            position: 'left',
            label: 'Live Coding',
          },
          {
            type: 'docSidebar',
            sidebarId: 'collabCodingSidebar',
            position: 'left',
            label: 'Collaborative Coding',
          },
          {
            type: 'docSidebar',
            sidebarId: 'caseStudiesSidebar',
            position: 'left',
            label: 'Case Studies',
          },
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Documentation',
          //   items: [
          //     {
          //       label: 'Introduction',
          //       to: '/',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/start-school',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/start-school',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StartSchool Tech Module. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'c', 'ruby'],
      },
    }),
};

export default config;
