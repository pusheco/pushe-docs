---
id: intro
title: راه اندازی در ری‌اکت نیتیو
sidebar_label: راه‌اندازی سریع
hide_title: true
description: راهنمای ری‌اکت‌نیتیو - آموزش راه‌اندازی سریع
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# راه‌اندازی سریع ری‌اکت‌نیتیو


## پیش‌نیازها

قبل از شروع کار موارد زیر را بررسی و از درستی آنها اطمینان حاصل نمایید.

- برای گذر از تحریم سرور‌های Jcenter از ابزار گذرازتحریم یا ... استفاده کنید.
- `MinSDKVersion` >= 14
- اپلیکیشن باید در کنسول ثبت‌شود. [Pushe console](https://console.pushe.co)
- توکن مانیفست از کنسول برداشته‌شود.
- دستگاه تست باید دارای گوگل‌پلی‌سرویس بوده و اینترنت آن فعال‌باشد.

## اضافه کردن کتابخانه

اضافه کردن کتابخانه در نسخه قبل از ۶۰ ری‌اکت‌نیتیو و بعد از آن کمی متفاوت می‌باشد که در زیر هر دو حالت را می‌توانید مشاهده کنید.

<Tabs
  defaultValue="v60u"
  values={[
    { label: 'نسخه‌ی 0.60 و بالاتر', value: 'v60u', },
    { label: 'نسخه‌ی زیر 0.60', value: 'v60l', },
  ]
}>

<TabItem value="v60u">

با استفاده از دستور زیر کتابخانه ی پوشه را به پروژه خود اضافه کنید.

```js
npm i -P pushe-react-native
```

</TabItem>

<TabItem value="v60l">

با استفاده از دستور زیر کتابخانه ی پوشه را به پروژه خود اضافه کنید.

```js
npm i -P pushe-react-native
```

سپس باید آن‌ را به پروژه‌ی خود لینک کنید:

```js
react-native link pushe-react-native
```

</TabItem>

</Tabs>

> دستور باید در کامندلاین وارد شود و در صورتی که `npm` در کامندلاین دستور معتبری نیست بایستی به داکیومنت [ReactNative](https://facebook.github.io/react-native/docs/getting-started) برای حل مشکل مراجعه کنید.

> در صورتی که نسخه ری‌اکت‌نیتو‌ی که استفاده می کنید 0.60.0 و به بعد می‌باشد دیگر نیازی به [لینک‌کردن کتابخانه](https://facebook.github.io/react-native/blog/2019/07/03/version-60#native-modules-are-now-autolinked) نیست.

## اضافه‌کردن محتوای مانیفست

<br />

محتوای مانیفست را از کنسول (اطلاعات بیشتر) کپی‌ کنید و آ‌ن را به فایل `AndroidManifest.xml` در پروژه‌ی خود اضافه‌کنید. محتوا باید شبیه خط زیر باشد:

```xml
<meta-data android:name="co.ronash.pushe.token" android:value="PUSHE_TOKEN"/>
```

>‌ فایل مانیفست برنامه در آدرس زیر در پروژه قابل دسترسی‌ست: `android/src/main/AndroidManifest.xml`



## تست و ثبت دستگاه در پوشه

پس از اجرای برنامه، باید در **Android logcat** لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):

> در اندروید استودیو لاگ‌کت جزء ابزارهای موجود است. در صورتی که از ابزار دیگری مانند VSCode استفاده‌ می‌کنید می‌توانید از هر روشی برای مشاهده‌ی لاگ استفاده کنید. [مستندات اندروید برای لاگ‌کت](https://developer.android.com/studio/command-line/logcat)

برای مشاهده‌ی بهتر لاگ‌ها می‌توانید فیلتر `Pushe` را روی لاگ‌ها اعمال کنید.

```js
// Android logcat:

--------+ Started Initialization of Pushe 2.0.4 +--------
Trying to register to Pushe
Successfully registered to pushe
```

> در صورتی که نصب و راه‌اندازی پوشه مشکل داشتید می‌توانید به [مشکلات و خطاها](/docs/react-native/rn-errors) مراجعه کنید.

برای بررسی امکانات بیشتر پوشه به مطالعه‌ی ادامه‌ی مستندات بپردازید.