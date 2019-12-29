---
id: studio-d2d
title: اعلان از یک دیوایس به دیوایس دیگر
---

با استفاده‌ از [شناسه‌های کاربر](/docs/android-studio/studio-pusheid) می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌ است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

<b>
به جای pusheId میتوانید از androidId و googleAdvertisingId که در بخش شناسایی کاربر به آنها پرداخته شده نیز استفاده کنید
</b>

## ارسال نوتیفیکیشن ساده

> نسخه‌ی 1.0.0 به بعد

<div dir='ltr'>

#### `static void sendSimpleNotifToUser(Context, pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده ارسال کنید.

```java
if (Pushe.isPusheInitialized(this)) {
    String pusheId = "1234567";
    Pushe.sendSimpleNotifToUser(this, pusheId, "Hello user", "How are you doing?");
}
```

## ارسال نوتیفیکیشن پیشرفته

> نسخه‌ی 1.0.0 به بعد

<div dir='ltr'>

#### `sendAdvancedNotifToUser(Context, pusheId, notificationJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API، می‌توانید به یک کاربر خاص نوتیفیکیشنی کامل‌تر ارسال کنید. مشابه کد زیر می‌توانید فیلد‌هایی همچون صدای زنگ، آیکون و .... را در جیسون وارد کنید.

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

برای اطلاعات بیشتر در مورد کلید‌هایی که می‌توانند در جیسون استفاده شوند به بخش [RESTful API در پوشه](docs/api/api-keys) مراجعه کنید.

## ارسال جیسون دلخواه

> نسخه‌ی 1.0.0 به بعد

<div dir='ltr'>

#### `sendCustomJsonToUser(Context, pusheId, customJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه مورد نظر|
|customJson|یک استرینگ با فرمت جیسون که به کاربر ارسال می‌شود.|


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