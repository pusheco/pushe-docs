/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


module.exports = {
  title: 'پوشه',
  tagline: 'مستندات پوشه',
  url: 'https://docs.pushe.co',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pusheco', // Usually your GitHub org/user name.
  projectName: 'pushe-docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
      defaultLanguage: 'javascript',
    },
    navbar: {
      title: ' ',
      logo: {
        alt: 'پوشه ',
        src: 'img/logo.svg',
      },
      links: [
        {to: '/', label: 'مستندات', position: 'left'},
        {to: 'https://pushe.co', label: 'وب‌سایت پوشه', position: 'left'},
        {
          href: 'https://github.com/pusheco',
          label: 'گیت‌هاب پوشه',
          position: 'left',
        },
      ],
    },
    footer: {}
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