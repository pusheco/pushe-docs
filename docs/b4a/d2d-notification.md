---
id: b4a-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
---


با استفاده‌از [pushe id](b4a-pusheid) یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده


<div dir='ltr'>

#### `Sub sendSimpleNotifToUser(pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید.

```js
If Pushe.pusheInitialized Then
  Dim pusheId As String = "12345";
  Dim title As String = "Hello user";
  Dim content As String = "How are you?";
  Pushe.sendSimpleNotifToUser(pusheId, title, content);
End If
```

## ارسال نوتیفیکیشن پیشرفته


<div dir='ltr'>

#### `Sub sendAdvancedNotifToUser(pusheId, notificationJson)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید.

```js
If Pushe.pusheInitialized Then
  Dim pusheId As String = "12345"
  Dim notif As String = "{""title"":""Hello user"",""content"":""How are you?""}"
  Pushe.sendAdvancedNotifToUser(pusheId, notif)
End If
```

برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش [RESTful API در پوشه](/docs/api/api-keys) مراجعه کنید.

<div dir='ltr'>

#### `Sub sendCustomJsonToUser(pusheId, jsonObject)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|jsonObject|یک استرینگ با فرمت جیسون.|


```js
If Pushe.pusheInitialized Then
  Dim pusheId As String = "12345"
  Dim json As String = "{""key1"":""Hello"",""key2"":""World""}"
  Pushe.sendAdvancedNotifToUser(pusheId, json)
End If
```


## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
Dim thisPusheId As String = Pushe.getPusheId()

' Send notification to this device 
Pushe.SendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");
```