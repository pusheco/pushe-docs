---
id: punity-channel
title: کانال نوتیفیکیشن
---


برای دستگاه‌های **اندروید ۸ به بالا** می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال کاستوم‌ فرستاد.

> در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن


<div dir='ltr'>

#### `static void CreateNotificationChannel(parameters...)`
> تمام نسخه‌ها

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
string channel = "sportChannel";
string channelName = "My Sport group";
string channelDesc = "This channel holds athletes users";
int importance = 3;
int ledColor = -65536;
bool light = true;
bool vibration = false;
bool badge = true;
var vibrationPatterns = null;

Pushe.CreateNotificationChannel(
    channelId, channelName, channelDesc, importance,
    light, vibration, badge, ledColor, vibrationPattern
);
```

## حذف کانال نوتیفیکیشن
> تمام نسخه‌ها

در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید.

<div dir='ltr'>

#### `RemoveNotificationChannel(channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```js
String channelThatWasCreated = "sportChannel";
Pushe.removeNotificationChannel(channelThatWasCreated);
```