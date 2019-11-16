---
id: cordova-d2d
title: اعلان از یک دیوایس به دیوایس دیگر
---

با استفاده‌از [pushe id](/docs/android-cordova/cordova-pusheid) یک دیوایس، می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌ است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده


<div dir='ltr' >

#### `window.pushe.sendSimpleNotifToUser("pusheId", "title", "content");`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌ شده ارسال کنید.

```java
window.pushe.sendSimpleNotifToUser(pusheId, "Hello user", "How are you doing?");

```

## ارسال نوتیفیکیشن پیشرفته


<div dir='ltr'>

#### `window.pushe.sendAdvancedNotifToUser(pusheId, notificationJson)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API، می‌توانید به یک کاربر خاص نوتیفیکیشنی کامل‌تر ارسال کنید. مشابه کد زیر می‌توانید فیلد‌هایی همچون صدای زنگ، آیکون و .... را در جیسون وارد کنید.

```java
    window.pushe.sendAdvancedNotifToUser("pid_a0e3-82ac-a0", "{ \"title\":\"تست\", \"content\":\"پیام ارسالی از یک دستگاه \" }");

```

برای اطلاعات بیشتر در مورد کلید‌هایی که می‌توانند در جیسون استفاده شوند به بخش [RESTful API در پوشه](docs/api/api-keys) مراجعه کنید.

## ارسال جیسون دلخواه


<div dir='ltr'>

#### `window.pushe.sendCustomJsonToUser(pusheId, customJson)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|customJson|یک استرینگ با فرمت جیسون که به کاربر ارسال می‌شود.|


```java

    window.pushe.sendCustomJsonToUser("pid_a0e3-82ac-a0", "{ \"key1\":\"value1\", \"key2\":\"value2\" }");

```

<!-- دستگاه مقصد می‌تواند با تعریف [کالبک نوتیفیکیشن](cordova-listener)، جیسون را در متد `onCustomContentReceived` دریافت کند. -->

## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```java
window.pushe.getPusheId(function pidCallnack(pid){
    // Send notification to this device
    window.pushe.sendSimpleNotifToUser(pid, "Hello user", "How are you?");
})

```
**نکته!** توابع ارسال اعلان به دستگاه دیگر را بعد از اطمینان از اینکه عملیات initialization پوشه انجام شده است، صدا بزنید. برای مثال برای ارسال اعلان پیشرفته به روش زیر عمل کنید:

```java
window.pushe.isPusheInitialized(function pusheInited(result){
       if(result) {
            window.pushe.sendAdvancedNotifToUser("pid_a0e3-82ac-a0", "{ \"title\":\"test\", \"content\":\"sent from client\" }");
       }
 });

```