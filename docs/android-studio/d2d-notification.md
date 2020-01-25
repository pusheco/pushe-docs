---
id: d2d-notification
title: اعلان از دیوایس به دیوایس دیگر
---

با استفاده‌ از [شناسه‌های کاربر](/docs/android-studio/unification) می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> **نکته:** در این حالت باید موارد زیر در نظر گرفته شود تا اعلان از یک دستگاه به دستگاه دیگر ارسال شود:        
۱. اپلیکیشنی که برای ارسال و دریافت اعلان استفاده می‌شود باید در دستگاه مبدا و مقصد یکی باشد    
۲. هر دو دستگاه باید در سرور پوشه رجیستر شده باشند

> **حذف‌شدن PusheId**:    
>زین‌پس، به جای PusheId می‌توانید از AndroidId و GoogleAdvertisingId و نیز CustomId که در بخش شناسایی کاربر به آنها پرداخته شده نیز استفاده کنید.


## ارسال نوتیفیکیشن 

<div dir='ltr'>

#### `sendNotificationToUser(userNotification)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|userNotification|یک شی از نوع UserNotification|

می‌توانید با استفاده از این تابع نوتیفیکیشنی به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده ارسال کنید. موقع ساختن آبجکت UserNotification شناسه‌ای را که با استفاده از آن میخواهید نوتیفیکیشن را ارسال کنید تعیین میکنید. برای مثال در نمونه زیر از androidId برای ساختن آبجکت نوتیفیکیشن استفاده شده است.

```java
if (Pushe.isRegistered()) {
    UserNotification userNotification = UserNotification.withAndroidId(androidId);
    userNotification.setTitle("title1");
    userNotification.setContent("content1");
    Pushe.getPusheService(PusheNotification.class)
        .sendNotificationToUser(userNotification);
}
```

## ارسال اعلان به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```java
UserNotification userNotification = UserNotification.withAndroidId(Pushe.getAndroidId());
userNotification.setTitle("title1");
userNotification.setContent("content1");
Pushe.getPusheService(PusheNotification.class)
    .sendNotificationToUser(userNotification);
```