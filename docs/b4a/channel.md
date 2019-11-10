---
id: b4a-channel
title: کانال نوتیفیکیشن
---


برای دستگاه‌های **اندروید ۸ به بالا** می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال کاستوم‌ فرستاد.

> در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن


<div dir='ltr'>

#### `Sub createNotificationChannel(parameters...)`

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
Dim p As Pushe
p.createNotificationChannel(
    "MY_CHANNEL_ID", 'channelId 
    "all news channel", 'Channel Name 
    "", 'description about channel 
    4, 'importance: Number between 0 to 5 (5 is the most important) 
    True, 'enableLight 
    True, 'enableViberation 
    True, 'showBadge 
    -16776961, 'led color 
    Null 'Vibrate mode (can be null) 
)
```

## حذف کانال نوتیفیکیشن

در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید.

<div dir='ltr'>

#### `Sub removeNotificationChannel(channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```js
 Dim p As Pushe
 p.removeNotificationChannel(
     "MY_CHANNEL_ID" 'channelId 
)
```