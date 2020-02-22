---
id: channel
title: کانال نوتیفیکیشن
---

import Platforms from "@site/src/components/Platforms.jsx";

<Platforms android />


## تعریف کانال نوتیفیکیشن


کانال نوتیفیکیشن که در اندروید نسخه ۸ اضافه شده در واقع یک دسته‌بندی برای اعلان‌های ارسالی به کاربران می‌باشد که می‌توان در این دسته بندی رنگ ال‌ای‌دی ، صدای اعلان و ... را مشخص کرد.

[اطلاعات بیشتر در مورد کانال نوتیفیکیشن](https://developer.android.com/training/notify-user/channels)

> در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن
> نسخه‌ی 2.1.0 به بعد

### تابع `createNotificationChannel`

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
String channel = "sportChannel";
String channelName = "My Sport group";
String channelDesc = "This channel holds athletes users";
int importance = 3;
int ledColor = -65536;
bool light = true;
bool vibration = false;
bool badge = true;
var vibrationPatterns = null;

Pushe.createNotificationChannel(
    channelId, channelName, channelDesc, importance,
    light, vibration, badge, ledColor, vibrationPattern
);
```

## حذف کانال نوتیفیکیشن
> نسخه‌ی 2.1.0 به بعد

در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید.

### تابع `removeNotificationChannel`

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```js
String channelThatWasCreated = "sportChannel";
Pushe.removeNotificationChannel(channelThatWasCreated);
```

> **نکته**: برای ساخت یا حذف کانال می‌توانید از هر تابعی [حتی غیر پوشه] استفاده کنید.