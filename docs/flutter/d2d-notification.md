---
id: flutter-d2d
title: اعلان از یک دیوایس به دیوایس دیگر
---


## ارسال نوتیفیکیشن 

<div dir='ltr'>

#### `static void sendNotificationToUser(androidId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|androidId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌ شده ارسال کنید.

```js
Pushe.isInitialized().then((isInitialized) {
    if (isInitialized) {
        Pushe.sendNotificationToUser(await Pushe.getAndroidId(), "Hello user", "How are you doing?");
    }
})
```

## ارسال اعلان به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست AndroidId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
var androidId = await Pushe.getAndroidId();

Pushe.sendNotificationToUser(androidId, "Hello user", "How are you?");
```


با استفاده‌ از [شناسه‌های کاربر](/docs/flutter/pusheid) می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> **نکته:** در این حالت باید موارد زیر در نظر گرفته شود تا اعلان از یک دستگاه به دستگاه دیگر ارسال شود:        
۱. اپلیکیشنی که برای ارسال و دریافت اعلان استفاده می‌شود باید در دستگاه مبدا و مقصد یکی باشد    
۲. هر دو دستگاه باید در سرور پوشه رجیستر شده باشند

> **حذف‌شدن PusheId**:    
>زین‌پس، به جای PusheId می‌توانید از AndroidId و GoogleAdvertisingId و نیز CustomId که در بخش شناسایی کاربر به آنها پرداخته شده نیز استفاده کنید.
