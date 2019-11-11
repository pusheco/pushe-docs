---
id: cordova-channel
title: کانال نوتیفیکیشن
---

برای دستگاه‌های **اندروید ۸ به بالا** می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال سفارشی فرستاد.

> وقتی نوتیفیکیشنی را به کانال سفارشی می‌فرستید در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که هنگام ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات کانال نوتیفیکیشن سفارشی جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن

<div dir='ltr'>

#### `window.pushe.createNotificationChannel(parameters...)`

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

<!-- |vibrationPattern|پترن ویبره ([اطلاعات بیشتر](https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long[])))| -->

## حذف کانال نوتیفیکیشن

در صورتی که قصد دارید کانال نوتیفیکیشن را حذف کنید، کد زیر را فراخوانی کنید.

<div dir='ltr'>

#### `window.pushe.removeNotificationChannel(channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|
