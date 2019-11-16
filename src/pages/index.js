/**
* Copyright (c) 2017-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import Layout from '@theme/Layout';

function Home() {
return (
<Layout title={`مستندات پوشه`} description="نسخه‌ی جدیدی از مستندات پوشه">
  <div className="container">
    <main>
      <div className="container-vertical-space">
        <div className="markdown">
          <h1>
            <a aria-hidden="true" className="anchor" id="مستندات-پوشه-بتا"></a><a aria-hidden="true"
              className="hash-link" href="#مستندات-پوشه-بتا">#</a>مستندات پوشه [بتا]
          </h1>
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
              <tr>
                <td align="center"><a href="/docs/android-studio/studio-intro"><img src="/img/android_native.png"
                      width="120" /></a></td>
                <td align="center"><a href="/docs/android-studio/studio-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/android-studio-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از پوشه در پروژه‌های گریدل نوشته‌شده با <strong>جاوا و کاتلین</strong></td>
              </tr>
              <tr>
                <td align="center"><a aria-current="page" className="active" href="/docs/docs"><img
                      src="/img/ios_native.png" width="80" /></a></td>
                <td align="center">-</td>
                <td align="center">-</td>
                <td>استفاده از پوشه در iOS</td>
              </tr>
              <tr>
                <td align="center"><a href="/docs/flutter/flutter-intro"><img src="/img/flutter_logo.png"
                      width="80" /></a></td>
                <td align="center"><a href="/docs/flutter/flutter-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/pushe-flutter/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از پوشه در فریم‌ورک <strong>فلاتر</strong></td>
              </tr>
              <tr>
                <td align="center"><a href="/docs/unity/unity-intro"><img src="/img/unity_logo.png" width="80" /></a>
                </td>
                <td align="center"><a href="/docs/unity/unity-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/unity-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از سرویس نوتیفیکیشن در <strong>موتور بازی‌سازی یونیتی برای اندروید</strong></td>
              </tr>
              <tr>
                <td align="center"><a href="/docs/b4a/b4a-intro"><img src="/img/b4a_logo.png" width="80" /></a>
                </td>
                <td align="center"><a href="/docs/b4a/b4a-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/b4a-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از سرویس نوتیفیکیشن در <strong>بیسیک‌فور‌اندروید</strong></td>
              </tr>
              <tr>
                <td align="center"><a href="/docs/react-native/rn-intro"><img src="/img/rn_logo.png" width="80" /></a>
                </td>
                <td align="center"><a href="/docs/react-native/rn-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/pushe-react-native/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از سرویس نوتیفیکیشن در <strong>React native</strong></td>
              </tr>
              <tr>
                <td align="center"><a href="/docs/cordova/cordova-intro"><img src="/img/cordova_logo.png" width="80" /></a>
                </td>
                <td align="center"><a href="/docs/cordova/cordova-intro"><strong>لینک مستندات</strong></a></td>
                <td align="center"><a
                    href="https://github.com/pusheco/cordova-sample/issues?utf8=%E2%9C%93&amp;q=is%3Aissue"><strong>گیتهاب</strong></a>
                </td>
                <td>استفاده از سرویس نوتیفیکیشن در <strong>Apache Cordova</strong></td>
              </tr>
              <tr>
                <td align="center"><a aria-current="page" className="active" href="/docs/docs"><img
                      src="/img/restapi.png" width="80" /></a></td>
                <td align="center">-</td>
                <td align="center">-</td>
                <td>ارسال نوتیفیکیشن به پلتفرم‌ها با استفاده از <strong>RESTful API</strong></td>
              </tr>
              <tr>
                <td align="center"><a aria-current="page" className="active" href="/docs/docs"><img
                      src="/img/webpush.png" width="80" /></a></td>
                <td align="center">-</td>
                <td align="center">-</td>
                <td>ارسال نوتیفیکیشن به وب‌‌سایت با استفاده از <strong>وب پوش</strong> پوشه</td>
              </tr>
              <tr>
                <td align="center"><a aria-current="page" className="active" href="/docs/docs"><img
                      src="/img/pushe_logo.jpeg" width="80" /></a></td>
                <td align="center">-</td>
                <td align="center">-</td>
                <td>آموزش استفاده از <strong>کنسول پوشه</strong></td>
              </tr>
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