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
    docLink: '/docs/android-studio/intro',
    img: '/img/android_native.png',
    github: 'https://github.com/pusheco/pushe-android-studio-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از پوشه در پروژه‌های گریدل نوشته‌شده با <strong>جاوا و کاتلین</strong></>,
  },
  {
    display: true,
    docLink: '/docs/ios/intro',
    img: '/img/ios_native.png',
    github: '#',
    desc: 'استفاده از پوشه در iOS',
  },
  {
    display: true,
    docLink: '/docs/flutter/intro',
    img: '/img/flutter_logo.png',
    github: 'https://github.com/pusheco/pushe-flutter/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از پوشه در فریم‌ورک <strong>فلاتر</strong></>,
  },
  {
    display: true,
    docLink: '/docs/unity/intro',
    img: '/img/unity_logo.png',
    github: 'https://github.com/pusheco/pushe-unity-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: 'یونیتی برای اندروید',
  },
  {
    display: false,
    docLink: '/docs/b4a/b4a-intro',
    img: '/img/b4a_logo.png',
    github: 'https://github.com/pusheco/b4a-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>بیسیک‌فور‌اندروید</strong></>,
  },
  {
    display: true,
    docLink: '/docs/react-native/intro',
    img: '/img/rn_logo.png',
    github: 'https://github.com/pusheco/pushe-react-native/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>React native</strong></>,
  },
  {
    display: false,
    docLink: '/docs/cordova/cordova-intro',
    img: '/img/cordova_logo.png',
    github: 'https://github.com/pusheco/cordova-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue',
    desc: <>استفاده از سرویس نوتیفیکیشن در <strong>Apache Cordova</strong></>,
  },
  {
    display: true,
    docLink: '/docs/mobile-api/intro',
    img: '/img/restapi.png',
    github: 'https://github.com/pusheco/pushe-api-android-samples',
    desc: 'وب‌سرویس پوشه برای موبایل (iOS, Android)',
  },
  {
    display: true,
    docLink: '/docs/web-api/authentication',
    img: '/img/webpush.png',
    github: 'https://github.com/pusheco/pushe-api-webpush-samples',
    desc: 'وب‌سرویس پوشه برای وب',
  },
  {
    display: true,
    docLink: '/docs/webpush/intro',
    img: '/img/webpush.png',
    github: '#',
    desc: 'راه ‌اندازی وب‌پوش پوشه',
  },
  {
    display: false,
    docLink: '#',
    img: '/img/pushe_logo.jpeg',
    github: '#',
    desc: <>آموزش استفاده از <strong>کنسول پوشه</strong></>,
  },
  {
    display: true,
    docLink: '/docs/wordpress/intro',
    img: '/img/wordpress_logo.png',
    github: 'https://github.com/pusheco/webpush-wordpress-plugin',
    desc: 'پلاگین وردپرس برای وب‌پوش',
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
              </tr>
            </thead>
            <tbody>
              
              {docs.filter(({display}) => display).map(({docLink, img, github, desc, version}) => 
              <TRow key={docLink} docLink={docLink} img={img} github={github} desc={desc} />)}

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