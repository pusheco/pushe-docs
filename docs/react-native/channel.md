---
id: rn-channel
title: کانال نوتیفیکیشن
---


برای دستگاه‌های **اندروید ۸ به بالا** می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال کاستوم‌ فرستاد.

> در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن


<div dir='ltr'>

#### `createNotificationChannel(parameters...)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId| شناسه‌ای که بتوان کانال را شناسایی کرد. مثلا `sportChannel`|
|channelName|نامی که برای کانال خود انتخاب می‌کنید|
|description|توضیحات دلخواه در مورد کانال|
|importance|عددی برای مشخص‌کردن میزان اهمیت ([اطلاعات بیشتر](https://developer.android.com/training/notify-user/channels#importance))|
|enableLight|فعال‌کردن LED|
|enableVibration|فعال‌کردن ویبره‌ی نوتیفیکیشن|
|showBadge|فعال‌کردن نمایش بچ در لانچر دستگاه|
|ledColor|رنگ LED ([اطلاعات بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setLightColor(int)))|
|vibrationPattern|پترن ویبره ([اطلاعات بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long[])))|


```js
var channel = "sportChannel";
var  = "My Sport group";
var channelDesc = "This channel holds athletes users";
var importance = 3;
var ledColor = -65536;
var light = true;
var vibration = false;
var badge = true;
var vibrationPatterns = [100, 200, 300, 400, 500, 400, 300, 200, 400];

Pushe.createNotificationChannel(
    channel, //channelId
    channelName, //Channel Name
    channelDesc, //description about channel
    importance, //importance: Number between 0 to 5 (5 is the most important)
    light, //enableLight
    vibration, //enableViberation
    badge, //showBadge
    0, //led color, check https://developer.android.com/reference/android/graphics/Color
    vibrationPatterns // Vibrate mode 
);
```

## حذف کانال نوتیفیکیشن

در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید.

<div dir='ltr'>

#### `removeNotificationChannel(channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```js
var channelThatWasCreated = "sportChannel";
Pushe.removeNotificationChannel(channelThatWasCreated);
```