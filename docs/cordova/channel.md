---
id: cordova-channel
title: کانال نوتیفیکیشن
---

برای دستگاه‌های **اندروید ۸ به بالا** می‌توان نوتیفیکیشن را علاوه بر کانال پیش‌فرض به کانال کاستوم‌ فرستاد.

> در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که برای ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات نظیر کانال نوتیفیکیشن جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

## اضافه‌کردن کانال نوتیفیکیشن
از:‌`co.ronash.pushe.Pushe`


<div dir='ltr'>

#### `static void createNotificationChannel(parameters...)`

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

در صورتی که نیاز به شخصی‌سازی بیشتر دارید، ساخت کانال با استفاده از کدهای خود اندروید نیز امکان‌پذیر است. [اطلاعات بیشتر](https://developer.android.com/training/notify-user/channels)

```java
Context context = this;
String channel = "sportChannel";
String channelName = "My Sport group";
String channelDesc = "This channel holds athletes users";
int importance = NotificationManager.IMPORTANCE_DEFAULT, ledColor = -65536;
boolean light = true, vibration = false, badge = true;
long[] vibrationPatterns = null;

// if(Build.VERSION.SDK_INT >= 26)
Pushe.createNotificationChannel(
    context, channelId, channelName, channelDesc,
    importance, light, vibration, badge, ledColor, vibrationPattern
);
```

## حذف کانال نوتیفیکیشن

در صورتی که قصد دارید دستگاه را از کانال لغو عضویت کنید، کد زیر را فراخوانی کنید.

<div dir='ltr'>

#### `removeNotificationChannel(context, channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```java
Context context = this;
String channelThatWasCreated = "sportChannel";
Pushe.removeNotificationChannel(context, channelThatWasCreated);
```