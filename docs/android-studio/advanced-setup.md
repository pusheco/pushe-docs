---
id: advanced-setup
title: راه اندازی پیشرفته
sidebar_label: راه‌اندازی پیشرفته
---

بخش‌های این صفحه:
* [ماژول‌های SDK](#%D8%B4%D8%AE%D8%B5%DB%8C%D8%B3%D8%A7%D8%B2%DB%8C-%D9%85%D8%A7%DA%98%D9%88%D9%84%D9%87%D8%A7%DB%8C-sdk)
* [اضافه‌کردن لایبرری‌هایی که ممکن است با پوشه ایجاد تداخل کنند.](#override-%DA%A9%D8%B1%D8%AF%D9%86-%D9%84%D8%A7%DB%8C%D8%A8%D8%B1%D8%B1%DB%8C%D9%87%D8%A7%DB%8C-%D9%85%D9%88%D8%B1%D8%AF-%D9%86%DB%8C%D8%A7%D8%B2-%D9%BE%D9%88%D8%B4%D9%87)

## شخصی‌سازی ماژول‌های SDK

کتابخانه پوشه ماژولار طراحی شده است. یعنی شما میتوانید بسته به نیاز خودتان هر ماژولی را که به امکاناتش نیاز دارید به اپلیکیشن‌تان اضافه کنید. 
ماژول base که در بخش راه‌اندازی سریع به اپ اضافه شد شامل همه ماژول‌های کتابخانه می‌باشد.
ممکن است شما در اپلیکیشن‌تان فقط بخواهید از پوشه برای ارسال و دریافت نوتیفیکیشن استفاده کنید و به امکانات آنالیتیک نیازی نداشته باشید. در این صورت به جای اضافه کردن ماژول base به کتابخانه فقط ماژول notification و core را به اپلیکیشن‌تان اضافه میکنید. هر ماژولی را که تصمیم گرفتید بر حسب نیاز به اپلیکیشنتان اضافه کنید ماژول core را باید حتما اضافه کنید. ماژول  core پیش‌نیاز است. 
در ادامه نگاهی به ماژول‌های پوشه می‌اندازیم.


ماژول **Base** متشکل از سه ماژول اصلی است:

### Core

مدیریت پیام‌های ارسالی و دریافتی به عهده‌ی این ماژول است.

```js
co.pushe.plus:core:${pushe_version}
```

### Notification

این ماژول ساخت و مدیریت نوتیفیکیشن‌هایی که به کاربر نمایش داده می‌شوند را برعهده دارد و تمام موارد مربوط به ساخت نوتیفیکیشن در این ماژول انجام می‌شود.

```js
co.pushe.plus:notification:${pushe_version}
```

### Analytics

موارد track کردن رفتار کاربر در برنامه‌ی شما مانند تعداد بازکردن برنامه، ارسال و دریافت Event و Ecommerce data و ... در این ماژول انجام می‌شود. 
در بخش مربوط به [رویدادها](/docs/android-studio/events) می‌توانید درباره کاربردهای این ماژول بیشتر بدانید.

```js
co.pushe.plus:analytics:${pushe_version}
```
### Datalytics

در صورتی که بخواهید پوش جغرافیایی به کاربر بفرستید باید این ماژول به اپلیکیشنتان اضافه شده باشد.    
همچنین قابلیت `Geofence` در پوشه هم توسط این ماژول به پروژه اضافه می‌شود.

```js
co.pushe.plus:datalytics:${pushe_version}
```

### روش اضافه‌کردن ماژول‌های دلخواه

همانظور که گفتیم ممکن است شما بخواهید بر حسب نیاز از همه‌ی امکانات استفاده نکنید. در این صورت می‌توانید به صورت زیر ماژول‌های لازم را اضافه‌کنید تا حجم اپلیکیشن‌تان کاهش پیدا کند.

```java

// اجباری
implementation 'co.pushe.plus:core:${pushe_version}'

// ارسال نوتیفیکیشن
implementation 'co.pushe.plus:notification:${pushe_version}'

// ارسال رویداد و سگمنتیشن
implementation 'co.pushe.plus:analytics:${pushe_version}'

// ارسال پوش جئوفنس و ارسال اعلان باتوجه به موقعیت کاربر
implementation 'co.pushe.plus:analytics:${pushe_version}'
```

در صورتی که میخواهید از تمام امکانات پوشه استفاده کنید تنها کافی است ماژول base را به اپلیکیشن‌تان اضافه کنید. به جای `${pushe_version}` آخرین نسخه کتابخانه را قرار دهید.

```java
implementation 'co.pushe.plus:base:${pushe_version}'
```

## Override کردن لایبرری‌های مورد نیاز پوشه


پوشه از این لایبرری‌ها برای منطق SDK استفاده می‌کند:

* `Firebase-messaging`: رد و بدل پیام‌ها
* Custom `RxJava`: کم‌کردن حجم RxJava
* `WorkManager`: اجرای کدهای بکگراند مانند Analytics
* `playservice-location`: ارسال برپایه‌ی موقعیت و Geofencing
* `playservice-ads-identifier`: گرفتن `GoogleAdvertisingId` در بخش [شناسه‌ها](unification.md)

در صورتی که در پروژه یکی یا چند از لیست فوق را اضافه‌ کردید، برای جلوگیری از مشکلات احتمالی این مطلب را مطالعه کنید.

### اضافه‌کردن RxJava

با توجه به اینکه پوشه از RxJavaی ویرایش شده استفاده می‌کند، در صورتی که بخواهید از RxJava در برنامه‌ی خود استفاده کنید باید این ماژول را از پوشه جدا کنید.

> **نکته**:
> - از نسخه‌ی حداقل **2.2.8** برای RxJava استفاده کنید.
> - بایستی از `RxJava2` استفاده کنید و `RxJava3` ماژولی متفاوت است.

```js
dependencies {
   implementation ("co.pushe.plus:base:$latest") {
        exclude group: 'co.pushe.plus', module: 'rxjava' // Exclude custom rxjava
    }
    // RxJava -- when rxJava of Pushe is excluded
    implementation 'io.reactivex.rxjava2:rxjava:$latest'
}
```

### اضافه‌کردن لایبرری‌های Firebase

### Firebase-Messaging

> **نکته**:    
> نسخه‌ی فعلی با نسخه‌های بالای `20.1.1` به بالای `Firebase-Messaging` سازگار نیست و برای استفاده باید حداکثر نسخه‌ی `20.1.0` استفاده شود.

در صورتی که کتابخانه‌ای از فایربیس استفاده می‌کند که خود از `Firebase-messaging` استفاده می‌کند و یا خود از این لایبرری استفاده می‌کنید، ممکن است به دلیل اختلاف نسخه‌ی لایبرری‌ها در هنگام سینک خطا رخ دهد. برای حل این مشکل `firebase-messaging` و `firebase-iid` را اضافه کرده و نسخه‌ی آنها را مطابق دیگر لایبرری‌های فایربیس خود قرار دهید:

```js
dependencies {
    // Any library that could affect firebase-messaging (Firebase-analytics, etc)
    // ...
    
    // Add firebase-messaging and firebase-iid with the desired version
    var fcm_version = '20.1.0'
    var iid_version = '20.0.2'
    implementation "com.google.firebase:firebase-messaging:$fcm_version"
    implementation "com.google.firebase:firebase-iid:$iid_version"
}
```
### Firebase-Analytics

در صورتی که لایبرری `Firebase-Analytics` را استفاده می‌کنید بایستی نسخه‌ی `Firebase-Messaging` هماهنگ با نسخه‌ی `Analytics` را نیز اضافه کنید تا خطای `ClassNotFoundException` رخ ندهد.

```js
var fcm_version = '20.1.0'
implementation "com.google.firebase:firebase-messaging:$fcm_version"
implementation "com.google.firebase:firebase-analytics:$analytics_version"
```


در این حالت این دو لایبرری مطابق بقیه بروز خواهند شد.

### WorkManager

* در صورتی که از `AndroidX` استفاده نمی‌کنید و کماکان پروژه از `Android support` استفاده می‌کند، پوشه از آخرین نسخه‌ی `WorkManager` استفاده می‌کند و مشکلی رخ نمی‌دهد.
* در صورتی که از `AndroidX` استفاده می‌کنید باید `WorkManager` نسخه‌ی ۱ را از پوشه جدا کنید و لایبرری `WorkManager` نسخه‌ی ۲ را در پروژه‌ی خود به همراه `lifecycle-ext` اضافه کنید تا در پوشه `ClassNotFoundException` و خطای `Duplication` رخ ندهد:

```js
dependencies {
    implementation ("co.pushe.plus:base:$latest") {
        exclude group: 'android.arch.work', module: 'work-runtime-ktx' // Exclude non-androidx work manager
        exclude group: 'android.arch.work', module: 'work-rxjava2' // Exclude non-androidx work manager
    }

    // WorkManager -- when workManager excluded
    implementation 'androidx.work:work-runtime-ktx:2.0.1'
    implementation 'androidx.work:work-rxjava2:2.0.1'
    implementation 'androidx.lifecycle:lifecycle-extensions:2.1.0'
}
```
> **نکته‌ی مهم**: نسخه‌ی `2.1.0` WorkManager با نسخه‌ی فعلی پوشه مشکل دارد و به همین دلیل بایستی نسخه‌ی حداکثر `2.0.1` استفاده کنید.

### جمع‌بندی

در صورتی که بخواهید کتابخانه‌ای اضافه کنید که قبلا اضافه‌شده (درون یک کتابخانه‌ی دیگر مانند پوشه)، در صورتی که مشکلی در این پروسه رخ می‌دهد،‌ ساده‌ترین راه‌حل اضافه کردن خود کتابخانه بصورت دستی‌ست تا Gradle این کتابخانه را override کند.    
حالت کامل اضافه‌کردن کتابخانه‌ها برای پوشه بصورت زیر خواهد بود:

```js
dependencies {
    implementation ("co.pushe.plus:base:$latest") {
        exclude group: 'android.arch.work', module: 'work-runtime-ktx' // Exclude non-androidx work manager
        exclude group: 'android.arch.work', module: 'work-rxjava2' // Exclude non-androidx work manager
        exclude group: 'co.pushe.plus', module: 'rxjava' // Exclude custom rxjava
    }
    // RxJava -- when rxJava is excluded
    implementation 'io.reactivex.rxjava2:rxjava:2.2.9'
    // WorkManager -- when workManager excluded
    implementation 'androidx.work:work-runtime-ktx:2.0.1'
    implementation 'androidx.work:work-rxjava2:2.0.1'
    implementation 'androidx.lifecycle:lifecycle-extensions:2.1.0'

    // Firebase stuff which are androidX
    // Add the Firebase SDK for Google Analytics
    implementation 'com.google.firebase:firebase-analytics:17.2.2'
    //implementation 'com.google.firebase:firebase-auth:19.2.0'
    //implementation 'com.google.firebase:firebase-firestore:21.3.1'
    //implementation 'com.google.firebase:firebase-appindexing:19.0.0'
    // ...

    // To use other services of Firebase along with Pushe, override these two and add them with the version you desire
    implementation 'com.google.firebase:firebase-messaging:20.1.0'
    implementation 'com.google.firebase:firebase-iid:20.0.2'
}
```