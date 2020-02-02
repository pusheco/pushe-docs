---
id: intro
title: راه‌اندازی سریع در Unity
sidebar_label: راه‌اندازی سریع
---


## پیش‌نیازها

- پروژه باید از **Gradle build tool** استفاده کند.
- داشتن‌ ابزار گذرازتحریم (به دلیل تحریم‌بودن ‌Bintray)
- باید Android SDK بروزرسانی شود
- ثبت اپلیکیشن در کنسول
- دستگاه تست باید گوگل‌پلی‌سرویس داشته‌باشد

## اضافه‌کردن لایبرری

> پلاگین پوشه مختص بازی‌های اندروید هستند و باید در پروژه Android platform انتخاب شود.


### دانلود پلاگین

فایل پلاگین از لینک زیر **دانلود** کرده و آن‌را در پروژه‌ی خود **import** کنید.

> [**پلاگین پوشه‌پلاس برای یونیتی**](https://static.pushe.co/d/unity/pushe-plus-unity-0.4.6.unitypackage)

## فعالسازی کتابخانه

برای فعالسازی کتابخانه در پروژه دو راه وجود دارد:
- [**اضافه‌کردن مستقیم**](#%D8%A7%D8%B6%D8%A7%D9%81%D9%87%DA%A9%D8%B1%D8%AF%D9%86-%D9%85%D8%B3%D8%AA%D9%82%DB%8C%D9%85) به پروژه
- [**اکسپورت‌کردن**](#%D8%A7%D8%B6%D8%A7%D9%81%D9%87%DA%A9%D8%B1%D8%AF%D9%86-%D8%A8%D9%87-%D8%A7%DA%A9%D8%B3%D9%BE%D9%88%D8%B1%D8%AA-%D9%BE%D8%B1%D9%88%DA%98%D9%87) پروژه و اضافه‌کردن پوشه به اکسپورت

### اضافه‌کردن مستقیم

در صورتی که در برنامه فایل `mainTemplate.gradle` **ندارد**، این فایل را از فولدر `Pushe/Setup` در آدرس `Assets/Plugin/Android` کپی کنید.


در صورتی که این فایل از قبل وجود دارد موارد زیر را در فایل `mainTemplate.gradle` خود اضافه‌کنید:

* ریپازیتوری لایبرری:

```java
allprojects {
   repositories {
      google()
      jcenter()
	  
      // Pushe Extended plugin
	  maven { url 'https://dl.bintray.com/pushe/plugin' }
      
      flatDir {
        dirs 'libs'
      }
   }
}
```

* بروزکردن compileSdkVersion به ۲۸ یا بالاتر


* اضافه‌کردن لایبرری:

```java
dependencies {
	implementation fileTree(dir: 'libs', include: ['*.jar'])

	// Adding Pushe Plus
	implementation ('co.pushe.plus:unity-extended:0.4.6')
**DEPS**}
```


> **چرا از** `Unity Jar resolver` **استفاده نشده‌است؟**<br /><br />
> این ابزار در نسخه‌ی فعلی قابلیت `Exclude`کردن را ندارد که نبود این قابلیت باعث می‌شود به دلیل duplicate‌شدن لایبرری Excludeشده بیلد با خطا مواجه شود. در صورتی که این مورد حل شود و پلاگین نیز آپدیت خواهد شد.<br /><br />
> به علاوه به دلیل اینکه لایبرری تعداد متد زیادی دارد ممکن است که Single dex برای اجرای برنامه کافی نباشد. لذا برای پشتیبانی از `API<21` باید مالتی‌دکس را فعال‌کرد.

### اضافه‌کردن به اکسپورت پروژه

* ابتدا پروژه را `Export` کنید:

<img src="/img/unity/export.png" height="300" />    

<br />
<br />

* سپس پروژه را با استفاده از `Android studio` باز کنید.

* در فایل `build.gradle` موارد زیر را اضافه کنید:

```java

// Repository:
allprojects {
   repositories {
      // ...
	  // Pushe Extended plugin
	  maven { url 'https://dl.bintray.com/pushe/plugin' }
   }
}

// Enable MULTIDEX (ONLY if minSdkVersion < 21>)
android {
	compileSdkVersion 28 // or higher

	defaultConfig {
        // ...
		multiDexEnabled true
    }
}

// Add the library
implementation ("co.pushe.plus:unity-extended:0.4.6")

```

## افزودن شناسه به مانیفست

قبل از اجرای برنامه باید توکن برنامه را از کنسول پوشه برداشته و در فایل `AndroidManifest.xml` قرار دهید. تگ دریافتی باید کدی همانند زیر باشد:


```xml
<meta-data android:name="pushe_token" android:value="PLUS_TOKEN" />
```

به جای `PLUS_TOKEN` باید توکن برنامه‌ی خود را قرار دهید.

> **نکته**: محل فایل‌مانیفست `Assets/plugin/Android/AndroidManifest.xml` می‌باشد. در صورتی که این فایل موجود نیست آن‌را از `Pushe/Setup` می‌توانید کپی کنید

و محل اضافه‌کردن آن در فایل `AndroidManifest` باید مطابق زیر باشد:  

```xml
<manifest ...>
    <application ...>
        ...
        <!-- تگ باید در اینجا قرار گیرد -->
        <meta-data android:name="pushe_token" android:value="{PUSHE_TOKEN}" />
    </application>
</manifest>
```

برای استفاده از **امکان ارسال اعلان با استفاده‌ از موقعیت مکانی** پرمیشن لوکیشن را نیز به مانیفست اضافه‌کنید:

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>

<!-- Android 9 and higher -->
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

> در صورتی که بخواهید **آمار کاربران را بر حسب موقعیت جغرافیایی** آنها مشاهده کنید و یا **با فیلتر لوکیشن اعلان ارسال کنید** باید کاربر این دسترسی را به برنامه بدهد.

## اجرای برنامه

برای اجرا شدن عملیات رجیستر پوشه نیازی به اضافه‌کردن اسکریپت خاصی نیست. کافیست برنامه را اجرا کنید.

<blockquote>

**متوقف‌شدن برنامه قبل از نمایش لوگو**:

در صورتی که این اتفاق رخ‌‌داد احتمالا در برنامه **MultiDex** باید اضافه‌شود.

- ابتدا مطمئن شوید که در بلاک `dafaultConfig` عبارت `multiDexEnabled true` اضافه‌شده باشد.

```java
defaultConfig {
    multiDexEnabled true
    //...
```

- سپس در فایل `AndroidManifest` عبارت زیر را به اتریبیوت‌های `<application>` اضافه‌کنید:

```xml
<application
        android:name="co.pushe.plus.ext.PusheMultiDexApplication"
        ...>
```

</blockquote>

> در فایل `SampleCode.cs` مثالهایی از قابلیت‌های بیشتر قرار داده شده است.

## ادامه‌ی کار
(بر روی لینک مورد نظر کلیک کنید)

### [پروژه‌ی نمونه در گیت‌هاب](https://github.com/pusheco/unity-sample)
بررسی امکانات در نمونه‌ای از قبل طراحی شده دارای تمام امکانات کتابخانه‌ی پوشه

### [سوالات و مشکلات احتمالی](/docs/unity/troubleshoot)
در صورتی که در یکی از مراحل زیر به مشکلی برخوردید یا هر سوالی در مورد کتابخانه‌ دارید