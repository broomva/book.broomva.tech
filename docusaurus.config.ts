import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const config: Config = {
  title: 'Broomva\'s Book Technology and Life',
  tagline: 'AI, Control and Future',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://book.broomva.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'broomva', // Usually your GitHub org/user name.
  projectName: 'broomva', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      es: {
        htmlLang: 'es-ES',
      },
    },
  },

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // editUrl: 'https://github.com/Broomva/book.broomva.tech/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Broomva\'s blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    docs: {
      sidebar: {
        hideable: false,
        // autoCollapseCategories: false,
      },
    },
  tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Broomva Book',
      logo: {
        alt: 'Broomva Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Sidebar',
          position: 'left',
          label: 'Book',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/chat', label: 'Chat', position: 'left'},
        {
          href: 'https://github.com/Broomva/book.broomva.tech',
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
          title: 'Book',
          items: [
            {
              label: 'Index',
              to: '/docs/',
            },
            {
              label: 'Online Courses Notes',
              to: 'docs/category/online-courses-notes',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Broomva/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/broomva/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CarlosEscobar__',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Broomva\'s Website',
              to: 'https://broomva.tech',
            },
            {
              label: 'Book \'s Github',
              href: 'https://github.com/Broomva/book.broomva.tech',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Broomva. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
