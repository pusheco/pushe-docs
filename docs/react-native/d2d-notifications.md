---
id: d2d-notifications
title: پوشه | راهنما ری‌اکت‌نیتیو | ارسال اعلان از دستگاه به دستگاه دیگر
sidebar_label: ارسال اعلان از یک دستگاه به دستگاه دیگر
hide_title: true
description: راهنمای ری‌اکت‌نیتیو - ارسال اعلان از یک دستگاه به دستگاه دیگر
---

# ارسال اعلان از یک دستگاه به دستگاه دیگر

با استفاده‌ از [شناسه‌های کاربر](/docs/react-native/user-unique-ids#دریافت-شناسه-یکتا-کاربر) می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> **نکته:** در این حالت باید موارد زیر در نظر گرفته شود تا اعلان از یک دستگاه به دستگاه دیگر ارسال شود:        
۱. اپلیکیشنی که برای ارسال و دریافت اعلان استفاده می‌شود باید در دستگاه مبدا و مقصد یکی باشد    
۲. هر دو دستگاه باید در سرور پوشه رجیستر شده باشند


## ارسال نوتیفیکیشن به دستگاه دیگر

### متد ```Pushe.sendNotificationToUser```

این متد تنها یک **جاوااسکریپت آبجکت** قبول می‌کند که مقادیر زیر را می تواند داشته باشد.

```js
Pushe.sendNotificationToUser({
    type: Pushe.ANDROID_ID_TYPES.ANDROID_ID,
    userId: '234834759346824',
    title: 'Hi user',
    content: 'How are you?',
});
```

|پارامتر ورودی|استفاده|
|:--:|--|:--:|
|type| یکی از مقادیر ```Pushe.ANDROID_ID_TYPES.CUSTOM_ID```, ```Pushe.ANDROID_ID_TYPES.ANDROID_ID``` , ```Pushe.ANDROID_ID_TYPES.ADVERTISEMENT_ID```| **اجباری** |
|userId|شناسه یکتا کاربر| **اجباری**|
|title|تیتر اعلان|اختیاری|
|content|محتوای اعلان|اختیاری|
|big_title|عنوان کامل|اختیاری|
|big_content|محتوای کامل|اختیاری|
|image|عکس|اختیاری|
|icon|آیکن|اختیاری|
|notif_icon|آیکن اعلان|اختیاری|
|custom_content|محتوای سفارشی (محتوایی که شامل کلید های سفارشی برای استفاده در اپلیکیشن‌تان می‌باشد)|اختیاری|

> **نکته:** دقت کنید که در آبجکت‌ی که به متد می‌دهید اسم کلیدها حتما مطابق کلیدهای موجود در جدول باشد.

|مقدار type|توضیحات|
|:--:|--:|
|```Pushe.ANDROID_ID_TYPES.ADVERTISEMENT_ID```| [ Google Advertising ID	](/docs/react-native/user-unique-ids#متد-pushegetgoogleadvertisingid) |
|```Pushe.ANDROID_ID_TYPES.ANDROID_ID```| [ Android ID		](/docs/react-native/user-unique-ids#متد-pushegetandroidid) |
|```Pushe.ANDROID_ID_TYPES.CUSTOM_ID```| [	شناسه های سفارشی	](/docs/react-native/user-unique-ids#دریافت-مقدار-شناسههای-سفارشی) |

## ارسال اعلان ساده

برای ارسال اعلان ساده کافیست که فقط **title** و **content** را در متد ```Pushe.sendNotificationToUser``` مشابه مثال زیر قرار دهید:

```js
Pushe.sendNotificationToUser({
    type: Pushe.ANDROID_ID_TYPES.ANDROID_ID,
    userId: '234834759346824',
    title: 'Hi user',
    content: 'How are you?',
});
```

> **مقدار return:** یک ```Promise``` برمی‌گرداند که یا به ```true``` ، resolve می‌شود و یا به ```error``` ، reject می‌شود.

## ارسال اعلان پیشرفته

در این حالت می‌توانید علاوه بر **title** و **content** از کلید‌های دیگری که در جدول بالا توضیح داده شده استفاده کنید.

```js
Pushe.sendNotificationToUser({
    type: Pushe.ANDROID_ID_TYPES.ANDROID_ID,
    userId: '234834759346824',
    title: 'Hi user',
    content: 'How are you?',
    big_title: 'This is a big title',
    big_content: 'This is a description',
});
```

> **مقدار return:** یک ```Promise``` برمی‌گرداند که یا به ```true``` ، resolve می‌شود و یا به ```error``` ، reject می‌شود.

## ارسال کلید‌های دلخواه

می‌توانید کلید‌های دلخواه خودتان را از این طریق ارسال کنید. بدین منظور با استفاده از کلید **custom_content** که یک آبجکت جاوااسکریپت قبول می کند کلید های دلخواه‌تان را به دستگاه دیگر ارسال کنید.

```js
const custom_content: {
    someKey: "someValue",
    someOtherKey: "SomeOtherValue",
};

Pushe.sendNotificationToUser({
    type: Pushe.ANDROID_ID_TYPES.ANDROID_ID,
    userId: '234834759346824',
    custom_content,
});
```

> **نکته:** می‌توان کلید ```custom_content``` را در کنار تمامی حالت‌های ارسال اعلان که در بالا توضیح داده شد استفاده کرد.

> **مقدار return:** یک ```Promise``` برمی‌گرداند که یا به ```true``` ، resolve می‌شود و یا به ```error``` ، reject می‌شود.