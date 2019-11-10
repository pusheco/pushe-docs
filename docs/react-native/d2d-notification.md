---
id: rn-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
---


با استفاده‌از [pushe id](/docs/react-native/rn-pusheid) یک دیوایس می‌توان از یک دیوایس دیگر به آن اعلان فرستاد.

> ارسال از یک دیوایس به دیوایس دیگر فقط مختص یک برنامه‌است و ارسال اعلان خارج‌ از محیط برنامه ممکن نیست.

## ارسال نوتیفیکیشن ساده


<div dir='ltr'>

#### `function sendSimpleNotifToUser(pusheId, title, content)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|title|تیتر اعلان|
|content|محتوای اعلان|

می‌توانید با استفاده از این تابع نوتیفیکیشنی با تیتر و متن (نوتیفیکیشن ساده) به کاربر خاصی که این اپلیکیشن را نصب کرده و نصب آن در کنسول ثبت‌شده اعلان ارسال کنید.

```js
Pushe.isPusheInitialized().then(isInitialized => {
    if (isInitialized) {
        var pusheId = "somePusheId";
        Pushe.sendSimpleNotifToUser(pusheId, "Hello user", "How are you doing?");
    }
});
```

## ارسال نوتیفیکیشن پیشرفته

<div dir='ltr'>

#### `function sendAdvancedNotifToUser(pusheId, notificationJson)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|notificationJson|یک استرینگ با فرمت جیسون که تمام مقادیر لازم برای شئ نوتیفیکیشن را دارد.|


همانند ارسال با استفاده از RESTful API می‌توانید به کاربر خاص خود نوتیفیکیشنی کامل‌تر ارسال کنید. فیلد‌های همچون صدای زنگ، آیکون و .... برای این کار از کد زیر استفاده کنید.

```js
var pusheId = "somePusheId";
Pushe.sendAdvancedNotifToUser(pusheId, JSON.stringify({ title:'Hello user', content:'How are you?' }))
  .then(isSucceeded => {
      // Succeeded
  })
  .catch(error => {
      // Oops! something unexpected happened ...
  });
```

برای اطلاعات بیشتر در مورد کلید‌های کامل‌تر به بخش [RESTful API در پوشه](docs/api/api-keys) مراجعه کنید.

## ارسال جیسون دلخواه


<div dir='ltr'>

#### `function sendCustomJsonToUser(pusheId, customJson)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|pusheId|شناسه‌ی دستگاه موردنظر|
|customJson|یک استرینگ با فرمت جیسون که به کاربر ارسال شود.|


```js
var pusheId = "somePusheId";
Pushe.sendCustomJsonToUser(pusheId, JSON.stringify({ key1:'Value1', key2:'Value2' }))
    .then(isSucceeded => {
        // Succeeded
    })
    .catch(error => {
        // Oops! something unexpected happened ...
    });
```

## ارسال اعلان و یا جیسون به دستگاه اجراکننده‌ی کد

در صورتی که بخواهید به همین دستگاهی که کد را اجرا می‌کند اعلان ارسال کنید کافیست PusheId را برابر شناسه‌ی همین دستگاه قرار دهید:

```js
Pushe.getPusheId()
    .then(thisPusheId => {
        Pushe.sendSimpleNotifToUser(thisPusheId, "Hello user", "How are you?");
    });
```