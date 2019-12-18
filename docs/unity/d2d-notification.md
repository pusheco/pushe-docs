---
id: unity-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
---


با استفاده‌از [Pushe id](/docs/unity/unity-pusheid) یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده
> تمام نسخه‌ها


<div dir='ltr'>

#### `static void SendSimpleNotifToUser(pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید.

```js
if (Pushe.PusheIsInitialized()) {
  string pusheId = "12345";
  string title = "Hello user";
  string content = "How are you?";
  Pushe.SendSimpleNotifToUser(pusheId, title, content);
}
```

## ارسال نوتیفیکیشن پیشرفته
> تمام نسخه‌ها


<div dir='ltr'>

#### `SendAdvancedNotifToUser(pusheId, notificationJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید.

```cpp
if (Pushe.PusheIsInitialized()) {
  string pusheId = "12345";
  var json = @"{
    ""title"":""Hello user"",
    ""content"":""How are you?""           
  }";
  Pushe.SendAdvancedNotifToUser(pusheId, title, content);
}
```

برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش [RESTful API در پوشه](/docs/api/api-keys) مراجعه کنید.

## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد
> تمام نسخه‌ها

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
string thisPusheId = Pushe.GetPusheId();

// Send notification to this device
Pushe.SendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");
```