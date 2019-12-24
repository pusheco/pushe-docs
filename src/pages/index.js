/**
* Copyright (c) 2017-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import Layout from '@theme/Layout';
import TRow from "./TRow.jsx";

const docs = [
  {
    display: true,
    docLink: '/docs/android-studio/studio-intro',
    img: '/img/android_native.png',
    github: 'https://github.com/pusheco/android-studio-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از پوشه در پروژه‌های گریدل نوشته‌شده با <strong>جاوا و کاتلین</strong></>,
    version: 2,
  },
  {
    display: true,
    docLink: '/docs/iOS/prerequisites',
    img: '/img/ios_native.png',
    github: '#',
    desc: 'استفاده از پوشه در iOS',
    version: '-'
  },
  {
    display: false,
    docLink: '/docs/flutter/flutter-intro',
    img: '/img/flutter_logo.png',
    github: 'https://github.com/pusheco/pushe-flutter/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از پوشه در فریم‌ورک <strong>فلاتر</strong></>,
    version: 1,
  },
  {
    display: true,
    docLink: '/docs/unity/intro',
    img: '/img/unity_logo.png',
    github: 'https://github.com/pusheco/unity-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: 'یونیتی برای اندروید',
    version: 2,
  },
  {
    display: false,
    docLink: '/docs/b4a/b4a-intro',
    img: '/img/b4a_logo.png',
    github: 'https://github.com/pusheco/b4a-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>بیسیک‌فور‌اندروید</strong></>,
    version: 1,
  },
  {
    display: false,
    docLink: '/docs/react-native/rn-intro',
    img: '/img/rn_logo.png',
    github: 'https://github.com/pusheco/pushe-react-native/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>React native</strong></>,
    version: 1,
  },
  {
    display: false,
    docLink: '/docs/cordova/cordova-intro',
    img: '/img/cordova_logo.png',
    github: 'https://github.com/pusheco/cordova-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>Apache Cordova</strong></>,
    version: 1,
  },
  {
    display: true,
    docLink: '/docs/mobile-api/authentication',
    img: '/img/restapi.png',
    github: '#',
    desc: 'وب‌سرویس پوشه برای موبایل (iOS, Android)',
    version: 2,
  },
  {
    display: true,
    docLink: '/docs/web-api/authentication',
    img: '/img/webpush.png',
    github: '#',
    desc: 'وب‌سرویس پوشه برای وب',
    version: 2,
  },
  {
    display: false,
    docLink: '#',
    img: '/img/pushe_logo.jpeg',
    github: '#',
    desc: <>آموزش استفاده از <strong>کنسول پوشه</strong></>,
    version: '-'
  },
  {
    display: true,
    docLink: '/docs/wordpress/intro',
    img: '/img/wordpress_logo.png',
    github: 'https://github.com/pusheco/webpush-wordpress-plugin',
    desc: 'پلاگین وردپرس برای وب‌پوش',
    version: '-'
  },
];


function Home() {
return (
<Layout title={`مستندات پوشه`} description="نسخه‌ی جدیدی از مستندات پوشه">
  <div className="container">
    <main>
      <div className="container-vertical-space">
        <div className="markdown">
          <h1>مستندات پوشه</h1>
          <p>در پوشه وضعیت پشتیبانی از فریم‌ورک‌ها و پلتفرم‌های مختلف به صورت زیر است.</p>

          <table>
            <thead>
              <tr>
                <th align="center">فریم‌ورک</th>
                <th align="center">مستندات</th>
                <th align="center">پشتیبانی و سوالات</th>
                <th>توضیحات</th>
                <th>ورژن</th>
              </tr>
            </thead>
            <tbody>
              
              {docs.filter(({display}) => display).map(({docLink, img, github, desc, version}) => 
              <TRow key={docLink} docLink={docLink} img={img} github={github} desc={desc} version={version} />)}

            </tbody>
          </table>

        </div>
      </div>
    </main>
  </div>
</Layout>
);
}

export default Home;