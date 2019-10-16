---
id: studio-intro
title: راه‌اندازی سریع
---


## پیش‌نیازها

- ثبت اپ در کنسول پوشه
- فعال‌بودن ابزار گذرازتحریم برای دانلود فایل‌های لازم از سرورهای گریدل و Jcenter
- `MinSDKVersion` >= 14
- `TargetSDK` >= 25 (نسخه‌های پایین‌تر هم ممکن است کار کنند اما تضمینی نیست.)
- اپلیکیشن باید در کنسول ثبت‌شود. [Pushe console](https://console.pushe.co)
- توکن مانیفست از کنسول برداشته‌شود.
- دستگاه تست باید دارای گوگل‌پلی‌سرویس بوده و اینترنت آن فعال‌باشد.

## اضافه‌کردن کتابخانه به پروژه در گریدل


**فایل `build.gradle (app:module)`**:

```java
//dependencies {
    implementation 'co.ronash.android.pushe-base:1.7' // Comes from Jcenter()
//}
```

سپس گریدل را سینک کنید.
در صورت بروز خطا در هنگام سینک بخش [عیب‌یابی](studio-faq) را بررسی نمایید.

## اضافه‌کردن محتوای مانیفست

تگ مانیفست را از [کنسول پوشه](https://console.pushe.co) دریافت‌کنید و در فایل `AndroidManifest.xml` خود اضافه کنید. تگ دریافتی باید کدی همانند زیر باشد:


```xml
<meta-data android:name="co.ronash.pushe.token" android:value="{PUSHE_TOKEN}" />
```

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

## اضافه‌کردن کد‌های لازم

با استفاده‌از کد `Pushe.initialize` می‌توانید عملیات ثبت‌نصب در پوشه را فرخوانی کنید.
**!نکته**: دقت کنید که این کد را در آغازین‌ترین مرحله‌ی شروع برنامه‌ی خود قرار دهید تا به محض ورود کاربر به برنامه این کد اجرا شود. برای مثال اولین اکتیویتی یا کلاس اپلیکیشن.

**فایل `MainActivity.java`**:

```java
// imports
import co.ronash.pushe.Pushe;

// onCreate:
    Pushe.initialize(this, true);
```

برای اطلاعات بیشتر در مورد تابع‌‌ `initialize‍` [API reference](studio-init) را بررسی نمایید.
    

**TODO: FAQ**