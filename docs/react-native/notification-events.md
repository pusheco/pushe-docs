---
id: notification-events
title: پوشه | راهنما ری‌اکت‌نیتیو | اطلاع از رویداد‌های نوتیفیکیشن
sidebar_label: اطلاع از رویداد‌های نوتیفیکیشن
hide_title: true
description: راهنما ری‌اکت‌نیتیو - اطلاع از رویدادهای نوتیفیکیشن
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Platforms from "@site/src/components/Platforms.jsx";

# اطلاع از رویداد‌های نوتیفیکیشن

<Platforms android/>

## تعریف رویدادهای نوتیفیکیشن

در صورتی که پیامی از پوشه به کاربر ارسال شود (نوتیفیکیشن و یا جیسون)، می‌توان از آنها باخبر شد.
برای اینکار می‌توانید روی رویدادهای مربوط متدهای listener تعریف کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید.
* دریافت نوتیفیکیشن
* دریافت ```JSON (Custom content)```
* کاربر بر روی اعلان کلیک کند
* کاربر اعلان را رد کند
* کاربر بر روی دکمه‌ای از اعلان کلیک کند

## نحوه کارکردن رویدادهای اعلان در ری‌اکت‌نیتیو

برای پیاده سازی و استفاده از رویدادهای اعلان در ری‌اکت‌نیتیو باید این نکته را مدنظر قرار دهید که این کار در حالتی که اپلیکیشن بازباشد (foreground) و در حالتی که اپلیکیشن بسته باشد (background) متفاوت می‌باشد.

در حالتی که اپلیکیشن باز است شما می‌توانید مستقیما در کامپوننت های ری‌اکت اپلیکیشن خود متدهای **event handler** را ست کرده و **callback** دلخواه‌تان را به این **handler** بدهید و زمانی که یکی از رویدادهای اعلان رخ داد **callback** های شما صدا زده خواهند شد. فقط دقت کنید که بهتره این **event handler** ها را در بالاترین سطح از شاخه کامپوننت‌های تان قرار دهید.

و برای حالتی که اپلیکیشن در بک‌گراند می‌باشد باید یک فایل جاوااسکریپ که در ادامه راهنما توضیج داده شده بسازید و **event handler** های مربوطه را در این فایل قرار دهید و نکته ای که اینجا قابل تامل می‌باشد این است که در حالت بک‌گراند شما در واقع در یک فایل مجزا از کامپوننت های ری‌اکت‌تان این رویداد ها را دریافت می‌کنید.


## اضافه‌کردن کد لازم

<br />

برای دو حالت باز و بسته بودن برنامه، دو حالت مختلف برای افزودن رویداد وجود دارد که برای استفاده از هردو باید آن‌ها را به پروژه اضافه نمایید.

<Tabs
  defaultValue="fore"
  values={[
    { label: 'اپ باز باشد', value: 'fore', },
    { label: 'اپ بسته باشد', value: 'back', },
  ]
}>

<TabItem value="fore">

در این حالت در یکی از کامپوننت های اپلیکیشن‌تان (ترجیحا در بالای شاخه کامپوننت‌ها) کد زیر را در 
```componentDidMount``` 
یا با استفاده از هوک در 
```useEffect```
مطابق کد زیر قرار دهید

دقت کنید که در صورت استفاده از هوک ```useEffect``` حتما از ```[]``` در هوک استفاده کنید که فقط یک‌با 
کالبک‌های اعلان اضافه شوند

```js
import React, {useEffect} from "react";
import Pushe from "pushe-react-native";

const App = () => {
    useEffect(() => {
        Pushe.addEventListener(Pushe.EVENTS.RECEIVED, (notification) => {
             // Notification was received
        });

        Pushe.addEventListener(Pushe.EVENTS.CLICKED, (notification) => {
             // Notification was clicked
        });

        Pushe.addEventListener(Pushe.EVENTS.DISMISSED, (notification) => {
             // Notification was dismissed
        });

        Pushe.addEventListener(Pushe.EVENTS.BUTTON_CLICKED, (notification) => {
             // Notification button was clicked
        });

        Pushe.addEventListener(Pushe.EVENTS.CUSTOM_CONTENT_RECEIVED, (notification) => {
             // Custom content was received
        });
    }, []); // Do not forget to use []
    
    return (
      // The jsx that would renders
    );  
}
```
</TabItem>

<TabItem value="back">

۱. ابتدا باید در فایل به آدرس
‍‍```‍‍android/app/src/main/java/[your-app-package-name]/MainApplication.java```
که در داخل پروژه اپلیکیشن‌تان در زیر شاخه
‍‍‍```android```
می‌باشد آن را پیدا کنید و در فایل ‍‍
```MainApplication.java```
کد زیر را در متد
```onCreate```
قرار دهید:

```js
co.pushe.plus.RNPushe.initializeEventListeners(this);
```

۲. کد زیر را در مانیفست اپلیکیشن و در داخل بلاک `application` که به آدرس زیر قابل دسترسی می‌باشد قرار دهید
‍‍```‍‍android/app/src/main/AndroidManifest.xml```

```xml
<service android:name="co.pushe.plus.RNPusheNotificationService" />
```

۳. در فایل ‍‍‍```index.js``` پروژه که در روت پروژه‌تان می‌باشد کد زیر را قرار دهید:

```js
AppRegistry.registerHeadlessTask('PusheNotificationTask', () => require('./notificationCallbacks'));
```

۴. سپس یک فایل در روت پروژه‌تان به نا
```notificationCallbacks.js```
بسازید (نام فایل بسیار مهم است و باید با نامی که در قسمت ۲ داده شده یکی باشد)

۵. در داخل فایل ```notificationCallbacks.js``` که در قسمت قبل ساخته اید کد زیر را قرار دهید:

```js
import Pushe from "pushe-react-native";

module.exports = async (notificationData) => {          
    if(notificationData['EVENT_TYPE'] === Pushe.EVENTS.RECEIVED) {
       // Notification received
    } else if (notificationData['EVENT_TYPE'] === Pushe.EVENTS.CLICKED) {
       // Notification clicked
    } else if (notificationData['EVENT_TYPE'] === Pushe.EVENTS.DISMISSED) {
       // Notification dismissed
    } else if (notificationData['EVENT_TYPE'] === Pushe.EVENTS.BUTTON_CLICKED) {
       // Notification Button clicked
    } else if (notificationData['EVENT_TYPE'] === Pushe.EVENTS.CUSTOM_CONTENT_RECEIVED) {
       // Custom Content Received
    }
};
```

> **نکته:** دقت کنید که برای تست این حالت دوم یعنی زمانی که اپ در بک‌گراند می‌باشد باید از ابزار هایی نظیر logcat در اندروید استودیو و یا pidcat برای مشاهده لاگ و تست کردن استفاده کنید

</TabItem>

</Tabs>


## حالت ‌های مختلف رویدادهای نوتیفیکیشن

حالت‌های مختلف رویداد در جدول زیر شرح‌ داده‌ شده‌است:

|پارامتر ورودی|استفاده|
|:--:|--|
|```Pushe.EVENTS.RECEIVED```|زمانی که نوتیفیکیشن دریافت شد این متد اجرا می‌شود.|
|```Pushe.EVENTS.CLICKED```|زمانی که کاربر روی نوتیفیکیشن کلیک کند، این متد اجرا می‌شود|
|```Pushe.EVENTS.DISMISSED```|زمان که کاربر نوتیفیکیشن را رد کند، این متد اجرا می‌شود|
|```Pushe.EVENTS.BUTTON_CLICKED```|زمانی که کاربر روی یک دکمه‌ی نوتیفیکیشن کلیک‌کند، این متد اجرا می‌شود|
|```Pushe.EVENTS.CUSTOM_CONTENT_RECEIVED```|زمانی که نوتیفیکیشن همراه با جیسون دلخواه و یا جیسون دلخواه‌، دریافت شود این متد اجرا می‌شود|


## کلید ها و مقادیری که توسط رویدادها دریافت می‌شوند


### `Notification`

 این رشته اطلاعات نوتیفکیشن را در غالب یک جیسون دارد. از قبیل تیتر، متن.

فیلد|توضیحات|
|:--:|--|
|title|تیتر نوتیفیکیشن|
|content|محتوای نوتیفیکیشن|
|bigTitle|تیتر بزرگ نوتیفیکیشن|
|bigContent|محتوای بزرگ نوتیفیکیشن|
|summary|متن خلاصه‌ی نوتیفکیشن|
|imageUrl|لینک عکس نوتیفیکیشن|
|iconUrl|لینک آیکون نوتیفیکیشن|
|customContent|جیسون دلخواه نوتیفیکیشن|
|buttons|لیست دکمه‌هایی که نوتیفیکیشن دارد|

### `Button`

 این رشته اطلاعات دکمه‌ي کلیک‌شده را در غالب جیسون‌دارد.

|فیلد|توضیحات|
|:--:|--|
|id|شناسه‌ای برای تشخیص دکمه|
|text|متن دکمه|

### `customContent`

 این رشته جیسونی است که توسعه‌دهنده هنگام ساخت و ارسال نوتیفیکیشن به آن ضمیمه می‌کند.

