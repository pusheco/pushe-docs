/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'پوشه',
  tagline: 'مستندات پوشه (بتا)',
  url: 'https://pusheco.github.io/pushe-docs/',
  baseUrl: '/',
  favicon: 'img/pushe_logo.jpeg',
  organizationName: 'pusheco', // Usually your GitHub org/user name.
  projectName: 'pushe-docs', // Usually your repo name.
  //themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'پوشه',
      logo: {
        alt: 'پوشه',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/docs', label: 'مستندات', position: 'left'},
        {to: 'https://pushe.co', label: 'وب‌سایت', position: 'left'},
        {
          href: 'https://github.com/pusheco',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'وبسایت',
          items: [
            {
              label: 'پوشه',
              to: 'https://pushe.co',
            },
          ],
        },
        
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};