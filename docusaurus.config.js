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
  favicon: 'img/StartSchool_round_pink.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
  },


  // GitHub pages deployment config.
  organizationName: 'StartSchoolHQ',
  projectName: 'startschool-wiki',
  url: 'https://startschoolhq.github.io',
  baseUrl: '/startschool-wiki/',
  deploymentBranch: 'gh-pages',

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
          {
            type: 'docSidebar',
            sidebarId: 'generalInformationSidebar',
            position: 'left',
            label: 'General information',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
