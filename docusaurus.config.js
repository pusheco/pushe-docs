/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


module.exports = {
  title: 'پوشه',
  tagline: 'مستندات پوشه (بتا)',
  url: 'https://betadoc.pushe.co',
  baseUrl: '/',
  favicon: 'img/pushe_logo.jpeg',
  organizationName: 'pusheco', // Usually your GitHub org/user name.
  projectName: 'pushe-docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    prismTheme: require('prism-react-renderer/themes/duotoneDark'),
    navbar: {
      title: 'پوشه ',
      logo: {
        alt: 'پوشه ',
        src: 'img/pushe_logo.jpeg',
      },
      links: [
        {to: '/', label: 'مستندات', position: 'left'},
        {to: 'https://pushe.co', label: 'وب‌سایت پوشه', position: 'left'},
        {
          href: 'https://github.com/pusheco',
          label: 'گیتهاب پوشه',
          position: 'left',
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