---
id: d2d
title: اعلان از یک دیوایس به دیوایس دیگر
---

import Platforms from '../../src/components/Platforms.jsx'


با استفاده‌ از [شناسه‌های کاربر](/docs/flutter/unification) می‌توان از یک دیوایس به دیگری اعلان فرستاد.

> **نکته:** در این حالت باید موارد زیر در نظر گرفته شود تا اعلان از یک دستگاه به دستگاه دیگر ارسال شود:        
۱. اپلیکیشنی که برای ارسال و دریافت اعلان استفاده می‌شود باید در دستگاه مبدا و مقصد یکی باشد    
۲. هر دو دستگاه باید در سرور پوشه رجیستر شده باشند


### متد sendNotificationToUser
<Platforms android />

> از نسخه‌ی ۲.۰.۲

|پارامتر ورودی|استفاده|
|:--:|--|
|idType|نوع شناسه‌ی مورد نظر (از `IdType.AndroidId`, `IdType.GoogleAdvertisingId`, `IdType.CustomId` )|
|id|شناسه‌ی کاربر مقصد که نوع آن در بالا انتخاب شده‌است|
|title|تیتر اعلان|اختیاری|
|content|محتوای اعلان|اختیاری|
|bigTitle|عنوان کامل|اختیاری|
|bigContent|محتوای کامل|اختیاری|
|imageUrl|لینک عکس|اختیاری|
|iconUrl|لینک آیکون|اختیاری|
|notifIcon|آیکن اعلان|اختیاری|
|customContent|محتوای سفارشی (محتوایی که شامل کلید های سفارشی برای استفاده در اپلیکیشن‌تان می‌باشد)|اختیاری|

> از اندروید ۹ بعد توصیه می‌شود که تمام لینک‌ها را **Https** قرار دهید و یا `android:clearTextTraffic="true"` را در مانیفست اضافه کنید. [بیشتر بخوانید](/docs/flutter/faq#%D8%A7%D8%B9%D9%84%D8%A7%D9%86-%D8%AF%D8%A7%D8%B1%D8%A7%DB%8C-%D8%B9%DA%A9%D8%B3-%DB%8C%D8%A7-%D9%84%DB%8C%D9%86%DA%A9-%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA-%D9%86%D9%85%DB%8C%D8%B4%D9%88%D8%AF-%D9%88-%DB%8C%D8%A7-%D8%A8%D8%AF%D9%88%D9%86-%D8%B9%DA%A9%D8%B3-%D8%A7%D8%B3%D8%AA)

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌ شده ارسال کنید.

```js
Pushe.sendNotificationToUser(
    IdType.GoogleAdvertisingId,
    await Pushe.getGoogleAdvertisingId(), // Or another Id
    'Hello user!', // title
    'How are you?', // content
    bigTitle: 'This is a big title',
    bigContent: 'This is a big content',
    imageUrl: 'someLink',
    iconUrl: 'someLink',
    customContent: {'key1': 'value1'}
);
```

### متد sendAdvancedNotificationToUser
<Platforms android />

> از نسخه‌ی ۲.۱.۰


|پارامتر ورودی|استفاده|
|:--:|--|
|idType|نوع شناسه‌ی مورد نظر (از `IdType.AndroidId`, `IdType.GoogleAdvertisingId`, `IdType.CustomId` )|
|id|شناسه|
|advancedJson|تیتر اعلان|اختیاری|

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست AndroidId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
var androidId = await Pushe.getAndroidId();

Pushe.sendNotificationToUser(androidId, "Hello user", "How are you?");
```

