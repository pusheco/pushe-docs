---
id: studio-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
---

با استفاده‌از [pushe id](studio-pusheid) یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `static void sendSimpleNotifToUser(Context, pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید.

```java
if (Pushe.isPusheInitialized(this)) {
    String pusheId = "1234567";
    Pushe.sendSimpleNotifToUser(this, pusheId, "Hello user", "How are you doing?");
}
```

## ارسال نوتیفیکیشن پیشرفته

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `sendAdvancedNotifToUser(Context, pusheId, notificationJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید.

```java
String pusheId = "1234567";
JSONObject object = new JSONObject();
object.put("title", "Hello user");
object.put("content", "How are you doing?");
try {
    Pushe.sendAdvancedNotifToUser(this, pusheId, object.toString());
} catch(Exception e) {
    // Json might have problem
}
```

برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش [RESTful API در پوشه](docs/api-keys) مراجعه کنید.

## ارسال جیسون دلخواه

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `sendCustomJsonToUser(Context, pusheId, customJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|customJson|یک استرینگ با فرمت جیسون که به کاربر ارسال شود.|


```java
String pusheId = "1234567";
JSONObject object = new JSONObject();
object.put("key1", "A value");
object.put("key2", "Another value");

// It also can be a nested JSON

try {
    Pushe.sendCustomJsonToUser(this, pusheId, object.toString());
} catch(Exception e) {
    // Json might have problem
}
```

دستگاه مقصد می‌تواند با تعریف [کالبک نوتیفیکیشن](studio-listener)، جیسون را در متد `onCustomContentReceived` دریافت کند.

## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```java
String thisPusheId = Pushe.getPusheId(this);

// Send notification to this device
Pushe.sendSimpleNotifToUser(this, thisPusheId, "Hello user", "How are you?");
```