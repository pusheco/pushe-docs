---
id: pnative-intro
title: راه اندازی در اندروید استودیو
sidebar_label: راه‌اندازی سریع
---

---

<div dir='ltr'>

#### TL; DR

- **Create** app in conole
- **Gradle**: `implementation 'co.pushe.plus:base:2.0.2'`
- **Manifest**: `<meta-data android:name="pushe_token" android:value="${TOKEN}" />`
- Build and **Run**

</div>

---

## پیش‌نیازها

- داشتن‌ ابزار گذرازتحریم (به دلیل تحریم‌بودن ‌Bintray)
- MinSDK >= **15** , TargetSDK >= **26** , CompileSDK >= **28**
- داشتن پلن پلاس ([اطلاعات‌ بیشتر](/docs/console/console-plan))
- ثبت اپلیکیشن در کنسول
- دستگاه تست باید گوگل‌پلی‌سرویس داشته‌باشد

## اضافه‌کردن gradle dependency // Ask about different modules

<div dir='ltr'>

##### `build.gradle(module: app)`:

</div>

```java
// dependencies {
  implementation 'co.pushe.plus:base:2.0.2' 
//}
```
 > پوشه از یک کتابخانه‌ی **RxJavaی** کاستوم استفاده می‌کند. در صورتی که شما و یا یک کتابخانه‌ی دیگر در پروژه از **RxJava** استفاده می‌کند آن را از پوشه **exclude** کنید. بذا بجای کد بالا کد زیر را اضافه کنید:

 ```java
// dependencies {
    implementation("co.pushe.plus:base:2.0.2") { exclude group: 'co.pushe.plus', module: 'rxjava' }
// }
 ```

## قراردادن توکن در AndroidManifest

شناسه‌ی برنامه بصورت یک `MetaData` در مانیفست پروژه قرار داده می‌شود. این شناسه را از کنسول پس از ثبت برنامه می‌توانید بردارید. فرمت آن بصورت زیر خواهد بود:

```xml
<application>
    <!-- Activities, services, etc. -->

    <!-- Add pushe token here in the application tag -->
    <meta-data android:name="pushe_token" android:value="${TOKEN}" />
</application>
```

سپس برنامه را روی یک دستگاه دارای گوگل‌پلی‌سرویس اجرا کنید.

## تست

> **پوشه** در نسخه‌ی 2 دیگر نیازی به `initialize` شدن توسط کاربر ندارد. در عوض مراحل `registration` را در `content provider` انجام می‌دهد.

پس از اجرای برنامه لاگ‌کت را بررسی کنید و در صورت رجیسترشدن موفق پوشه در لاگ‌کت پیام موفقیت‌آمیز بودن را خواهید دید.

## ادامه‌ی کار
(بر روی لینک مورد نظر کلیک کنید)

### [پروژه‌ی نمونه در گیت‌هاب](https://github.com/pusheco/android-studio-sample) // Needs example and repo for issue
بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه

### [سوالات و مشکلات احتمالی](/docs/plus-native/pnative-errors)
در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید

### [مشاهده‌ی امکانات بیشتر](/docs/plus-native/pnative-features)
مشاهده‌ی امکانات پیشرفته ارائه‌ شده در کتابخانه‌‌ی پوشه