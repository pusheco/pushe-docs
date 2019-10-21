---
id: flutter-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
---


با استفاده‌از [pushe id](flutter-pusheid) یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده


<div dir='ltr'>

#### `static void sendSimpleNotifToUser(pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید.

```js
Pushe.isPusheInitialized().then((isInitialized) {
    if (isInitialized) {
        String pusheId = "somePusheId";
        Pushe.sendSimpleNotifToUser(pusheId, "Hello user", "How are you doing?");
    }
})
```

## ارسال نوتیفیکیشن پیشرفته

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `sendAdvancedNotifToUser(pusheId, notificationJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید.

```js
Pushe.isPusheInitialized().then((isInitialized) {
  if (isInitialized) {
    var notification = {
      "title": "Hello user",
      "content": "How are you?"
    };
    try {
      Pushe.sendAdvancedNotifToUser("12345", notification.toString());
    } catch(e) {
      // Error. Perhaps Json has problems
    }
  }
});
```

برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش [RESTful API در پوشه](docs/api-keys) مراجعه کنید.

## ارسال جیسون دلخواه


<div dir='ltr'>

#### `sendCustomJsonToUser(pusheId, customJson)` throws `Exception`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|customJson|یک استرینگ با فرمت جیسون که به کاربر ارسال شود.|


```js
Pushe.isPusheInitialized().then((isInitialized) {
  if (isInitialized) {
    var customContentJson = {
      "key1": "value1",
      "key2": "value2"
    };
    try {
      Pushe.sendCustomJsonToUser("12345", customContentJson.toString());
    } catch(e) {
      // Error. Perhaps Json has problems
    }
  }
});
```

دستگاه مقصد می‌تواند با تعریف [رویداد نوتیفیکیشن](flutter-listener)، جیسون را در متد `onCustomContentReceived` دریافت کند.

## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
String thisPusheId = await Pushe.getPusheId(this);

// Send notification to this device
Pushe.sendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");
```