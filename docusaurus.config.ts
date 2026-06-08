import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Built for Exit Brand OS portal (v2 — Ron's rethink).
// The asset package lives under static/brand/ and is served at /brand/...

const config: Config = {
  title: 'Built for Exit Brand OS',
  tagline: 'Transferability creates freedom.',
  favicon: 'img/favicon.png',

  future: {v4: true},

  url: 'https://brand.builtforexit.ai',
  baseUrl: '/',
  organizationName: 'Imagos-Labs',
  projectName: 'built-for-exit-brand-os-v2',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  // Brand fonts: Inter Tight (display proxy for Neue Haas Grotesk) + Inter (body) + IBM Plex Mono (numbers).
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  ],

  plugins: [
    // Tailwind v4 via the Docusaurus PostCSS hook.
    function tailwindPlugin() {
      return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions: {plugins: unknown[]}) {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {sidebarPath: './sidebars.ts', routeBasePath: '/'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-card.png',
    metadata: [
      {name: 'description', content: 'Built for Exit Brand OS — the machine-consumable brand system: near-black + Exit Yellow, the Hollow 4, the master prompt, and the Golden Atomic Brand References.'},
      {property: 'og:title', content: 'Built for Exit Brand OS'},
      {property: 'og:description', content: 'Transferability creates freedom.'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    // Built for Exit is dark-canonical. No light/dark toggle.
    colorMode: {defaultMode: 'dark', disableSwitch: true, respectPrefersColorScheme: false},
    navbar: {
      title: 'Built for Exit Brand OS',
      logo: {alt: 'Built for Exit — the Hollow 4', src: 'img/logo.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'brandSidebar', position: 'left', label: 'Brand OS'},
        {href: 'https://builtforexit.ai', label: 'builtforexit.ai', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'The Brand OS', items: [
          {label: 'Start here', to: '/'},
          {label: 'Logo matrix', to: '/logos'},
          {label: 'Color', to: '/color'},
          {label: 'Type', to: '/type'},
        ]},
        {title: 'Generation', items: [
          {label: 'Golden Atomic Brand References', to: '/golden-atomic-brand-references'},
          {label: 'Generation layer', to: '/generation-layer'},
          {label: 'Voice', to: '/voice'},
        ]},
      ],
      copyright: `Built for Exit · Transferability creates freedom.`,
    },
    prism: {theme: prismThemes.dracula, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
