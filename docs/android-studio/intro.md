---
id: studio-intro
title: راه اندازی در اندروید استودیو
sidebar_label: راه‌اندازی سریع
---

## پیش‌نیازها

قبل از شروع کار موارد زیر را بررسی و از درستی آنها اطمینان حاصل نمایید.

- برای گذر از تحریم سرور‌های Jcenter از ابزار گذرازتحریم یا ... استفاده کنید.
- `MinSDKVersion` >= 14
- `TargetSDK` >= 25 (نسخه‌های پایین‌تر هم ممکن است کار کنند اما تضمینی نیست.)
- اپلیکیشن باید در کنسول ثبت‌شود. [Pushe console](https://console.pushe.co)
- توکن مانیفست از کنسول برداشته‌شود.
- دستگاه تست باید دارای گوگل‌پلی‌سرویس بوده و اینترنت آن فعال‌باشد.

## اضافه‌کردن کتابخانه به پروژه در گریدل


**فایل `build.gradle (app:module)`**:

```java
//dependencies {
    implementation 'co.ronash.android.pushe-base:1.7.0-alpha1'
//}
```

```java
// Build.gradle (project)

repositories {
    allProjects {
        maven { url 'https://dl.bintray.com/mah-d/pushe/' }
    }
}
```

سپس گریدل را سینک کنید.
در صورت بروز خطا در هنگام سینک بخش [عیب‌یابی](studio-errors) را بررسی نمایید.

## اضافه‌کردن محتوای مانیفست

تگ مانیفست را از [کنسول پوشه](https://console.pushe.co) دریافت‌کنید و در فایل `AndroidManifest.xml` خود اضافه کنید. تگ دریافتی باید کدی همانند زیر باشد:


```xml
<meta-data android:name="co.ronash.pushe.token" android:value="{PUSHE_TOKEN}" />
```

به جای `{PUSHE_TOKEN}` باید توکن برنامه‌ی خود را قرار دهید.

و محل اضافه‌کردن آن در فایل `AndroidManifest` باید مطابق زیر باشد:

```xml
<manifest ...>
    <application ...>
        ...
        <!-- تگ باید در اینجا قرار گیرد -->
        <meta-data android:name="co.ronash.pushe.token" android:value="{PUSHE_TOKEN}" />
    </application>
</manifest>
```

برای استفاده از **امکان ارسال اعلان با استفاده‌از موقعیت مکانی** پرمیشن لوکیشن را نیز به مانیفست اضافه‌کنید:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```

## اضافه‌کردن کد‌های لازم

با استفاده‌از کد `Pushe.initialize` می‌توانید عملیات ثبت‌نصب در پوشه را فراخوانی کنید.
**!نکته**: دقت کنید که این کد را در آغازین‌ترین مرحله‌ی شروع برنامه‌ی خود قرار دهید تا به محض ورود کاربر به برنامه این کد اجرا شود. برای مثال اولین اکتیویتی یا کلاس اپلیکیشن.

**فایل `MainActivity.java`**:

```java
// imports
import co.ronash.pushe.Pushe;

// onCreate:
    Pushe.initialize(this, true);
```

برای اطلاعات بیشتر در مورد تابع‌‌ `initialize‍` [API reference](/docs/android-studio/studio-init) را بررسی نمایید.
    

## تست و ثبت دستگاه در پوشه

پس از اجرای برنامه و فراخوانی کد رجیستر پوشه، باید در **Android logcat** لاگ‌های زیر را ببینید (ممکن است به دلیل ارتباط با سرور این پروسه چند ثانیه طول بکشد):

برای مشاهده‌ی بهتر لاگ‌ها می‌توانید فیلتر `Pushe` را روی لاگ‌ها اعمال کنید.
```bash
# Android logcat:

--------+ Started Initialization of Pushe 1.7.0-alpha1 +--------
Trying to register to Pushe
Successfully registered to pushe
```

در صورتی که پس‌از مدتی خطایی در لاگ‌کت رخ‌داد و تمامی لاگ‌ها (خصوصا لاگ آخر) چاپ نشد بایستی بررسی کنید دلیل خطا چیست. سپس خطای خود را در بخش [سوالات و مشکلات](/docs/android-studio/studio-errors) جستجو نمایید.

برای مشاهده‌ی امکانات و قابلیت‌های اضافه‌ای که پوشه در Android native ارائه می‌دهد، به صفحه‌ی بعد مراجعه کنید.