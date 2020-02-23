---
id: channel
title: کانال نوتیفیکیشن
---

import Platforms from "@site/src/components/Platforms.jsx";
import BlankLink from "@site/src/components/BlankLink.jsx";

<Platforms android />


## تعریف کانال نوتیفیکیشن


کانال نوتیفیکیشن که در **اندروید نسخه ۸** اضافه شده در واقع یک دسته‌بندی برای اعلان‌های ارسالی به کاربران می‌باشد که می‌توان در این دسته بندی رنگ LED ، صدای اعلان و ... را مشخص کرد

استفاده از کانال نوتیفیکیشن در **اندروید ۸ به بالا** اجباری می‌باشد و به هر نوتیفیکیشن باید یک کانالی اختصاص داده شود. هنگامی که از کتابخانه پوشه استفاده می‌کنید به صورت پیش‌فرض یک کانال به نوتیفیکیشن‌ها اختصاص داده می‌شود که در صورت تمایل می‌توانید توسط ادامه راهنما کانال سفارشی خودتان را ایجاد کنید تا تنظیمات دلخواه شما را داشته باشد.

 البته لازم به ذکر است که بیشتر تنظیماتی که میتوان برای کانال نوتیفیکیشن تعیین کرد از طریق کنسول موقع ارسال نوتیفیکیشن در دسترس هستند و شما می‌توانید از طریق کنسول، رنگ ‌LED، صدای نوتیفیکیشن و ... را تعیین کنید. 


> نکته: در نظر داشته باشید که در صورت ساخت کانال تنظیمات رنگ LED ، صدای اعلان و ... که در کنسول تنظیم می‌کنید دیگر کار نخواهد کرد و فقط تنظیمات کانال شما برای اعلان ارسالی‌تان اعمال می‌شود. در کنسول شناسه کانالتان را هنگام فرستادن اعلان وارد می‌کنید و هر تنظیمی که برای آن کانال ست کرده باشید هنگام نمایش اعلان اعمال خواهد شد.


> وقتی نوتیفیکیشنی را به کانال سفارشی می‌فرستید در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که هنگام ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات کانال نوتیفیکیشن سفارشی جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)


<BlankLink link="https://developer.android.com/training/notify-user/channels">اطلاعات بیشتر در مورد کانال نوتیفیکیشن</BlankLink>

## اضافه‌کردن کانال نوتیفیکیشن
> نسخه‌ی 2.1.0 به بعد

### تابع `createNotificationChannel`

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId| شناسه‌ای که بتوان کانال را شناسایی کرد. مثلا `sportChannel`|
|channelName|نامی که برای کانال خود انتخاب می‌کنید|
|description|توضیحات دلخواه در مورد کانال|
|importance|عددی برای مشخص‌کردن میزان اهمیت (<BlankLink link="https://developer.android.com/training/notify-user/channels#importance">اطلاعات بیشتر</BlankLink>)|
|enableLight|فعال‌کردن LED|
|enableVibration|فعال‌کردن ویبره‌ی نوتیفیکیشن|
|showBadge|فعال‌کردن نمایش بچ در لانچر دستگاه|
|ledColor|رنگ LED (<BlankLink link="https://developer.android.com/reference/android/app/NotificationChannel.html#setLightColor(int)">اطلاعات بیشتر</BlankLink>)|
|vibrationPattern|پترن ویبره (<BlankLink link="https://developer.android.com/reference/android/app/NotificationChannel.html#setVibrationPattern(long[])">اطلاعات بیشتر</BlankLink>)|


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