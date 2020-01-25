---
id: notification-channel
title: کانال نوتیفیکیشن
---
## تعریف کانال نوتیفیکیشن

کانال نوتیفیکیشن که در اندروید نسخه ۸ اضافه شده در واقع یک دسته‌بندی برای اعلان‌های ارسالی به کاربران می‌باشد که می‌توان در این دسته بندی رنگ LED ، صدای اعلان و ... را مشخص کرد

استفاده از کانال نوتیفیکیشن در **اندروید ۸ به بالا** اجباری می‌باشد و به هر نوتیفیکیشن باید یک کانالی اختصاص داده شود. هنگامی که از کتابخانه پوشه استفاده می‌کنید به صورت پیش‌فرض یک کانال به نوتیفیکیشن‌ها اختصاص داده می‌شود که در صورت تمایل می‌توانید توسط ادامه راهنما کانال سفارشی خودتان را ایجاد کنید تا تنظیمات دلخواه شما را داشته باشد.

 البته لازم به ذکر است که بیشتر تنظیماتی که میتوان برای کانال نوتیفیکیشن تعیین کرد از طریق کنسول موقع ارسال نوتیفیکیشن در دسترس هستند و شما می‌توانید از طریق کنسول، رنگ ‌LED، صدای نوتیفیکیشن و ... را تعیین کنید. 


> نکته: در نظر داشته باشید که در صورت ساخت کانال تنظیمات رنگ LED ، صدای اعلان و ... که در کنسول تنظیم می‌کنید دیگر کار نخواهد کرد و فقط تنظیمات کانال شما برای اعلان ارسالی‌تان اعمال می‌شود. در کنسول شناسه کانالتان را هنگام فرستادن اعلان وارد می‌کنید و هر تنظیمی که برای آن کانال ست کرده باشید هنگام نمایش اعلان اعمال خواهد شد.


> وقتی نوتیفیکیشنی را به کانال سفارشی می‌فرستید در نظر داشته‌باشید که کانفیگ نوتیفیکیشن که هنگام ارسال در کنسول تنظیم می‌کنید از بین‌می‌رود و تنظیمات کانال نوتیفیکیشن سفارشی جایگزین آن می‌شود (مثلا صدای اعلان، رنگ LED و ...)

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

در صورتی که نیاز به شخصی‌سازی بیشتر دارید، ساخت کانال با استفاده از کدهای خود اندروید نیز امکان‌پذیر است. اطلاعات بیشتر را می‌توانید در [سایت خود اندروید](https://developer.android.com/training/notify-user/channels) مشاهده کنید.

چیزی که مهم است این است که شما با استفاده از پوشه یا کدهای خود اندروید کانالتان را ایجاد کنید و شناسه آن کانال را هنگام فرستادن اعلان در کنسول وارد کنید (در مرحله سوم در قسمت فیلتر) در این صورت پوشی که از طریق کنسول ارسال می‌کنید فقط به آن دسته از کاربرانی ارسال میشود که از طریق برنامه‌تان کانال نوتیفیکیشن برایشان ایجاد شده باشد. شما ممکن است بخواهید کانال سفارشی را فقط برای دسته خاصی از کاربرانتان ایجاد کنید که این دیگه به منطق برنامه شما بستگی دارد.

```java
String channel = "sportChannel";
String channelName = "My Sport group";
String channelDesc = "This channel holds athletes users";
int importance = NotificationManager.IMPORTANCE_DEFAULT, ledColor = -65536;
boolean light = true, vibration = false, badge = true;
long[] vibrationPatterns = null;

// if(Build.VERSION.SDK_INT >= 26)
Pushe.getPusheService(PusheNotification.class)
    .createNotificationChannel(channelId, channelName, channelDesc,
    importance, light, vibration, badge, ledColor, vibrationPattern
);
```

## حذف کانال نوتیفیکیشن

در صورتی که قصد دارید کانال نوتیفیکیشن را حذف کنید، کد زیر را فراخوانی کنید. اگر هنگام ارسال نوتیفیکیشن از طریق کنسول در قسمت فیلتر شناسه کانالی را وارد کنید که وجود نداشته باشد کتابخانه پوشه کانال پیشفرض خودش را در نظر میگیرد.

<div dir='ltr'>

#### `removeNotificationChannel(channelId)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|channelId|شناسه‌ی کانالی که ساخته شده است.|

```java
String channelThatWasCreated = "sportChannel";
Pushe.getPusheService(PusheNotification.class)
    .removeNotificationChannel(channelThatWasCreated);
```