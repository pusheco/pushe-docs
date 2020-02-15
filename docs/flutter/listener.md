---
id: listener
title: رویداد نوتیفیکیشن
---

import Platforms from '../../src/components/Platforms.jsx'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# تعریف رویداد‌های نوتیفیکیشن
<Platforms android />

> نسخه‌ی 0.9.0 به بعد

در صورتی که پیامی از پوشه به کاربر ارسال شود (نوتیفیکیشن و یا جیسون)، می‌توان از آنها باخبر شد.
برای اینکار می‌توانید کالبکی تعریف‌کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید.
* دریافت نوتیفیکیشن
* دریافت JSON (Custom content)
* کاربر بر روی اعلان کلیک کند
* کاربر اعلان را رد کند
* کاربر بر روی دکمه‌ای از اعلان کلیک کند

## نحوه‌ی کارکرد رویدادها در فلاتر

با توجه به محدودیت‌های فلاتر در
background
دریافت رویدادها در زمانی که برنامه باز است و زمانی که برنامه بسته است، متفاوت خواهد بود. در صورتی که برنامه باز باشد داده‌های لازم در غالب `NotificationData`
دریافت خواهند شد،‌ اما در صورتی که برنامه بسته باشد و
FlutterEngine
در حال اجرا نباشد، رویداد در توابع عادی که درون
main
اصلی فراخوانی می‌شوند قابل استفاده نیستند و در عوض در تابعی دیگر جدا از بقیه‌ی کلاس‌ها فراخوانی می‌شوند.


## تابع `setNotificationListener`

|پارامتر ورودی|استفاده|
|:--:|--|
|onReceived|زمانی که نوتیفیکیشن دریافت شد این متد اجرا می‌شود.|
|onClicked|زمانی که کاربر روی نوتیفیکیشن کلیک کند، این متد اجرا می‌شود|
|onDismissed|زمان که کاربر نوتیفیکیشن را رد کند، این متد اجرا می‌شود|
|onButtonClicked|زمانی که کاربر روی یک دکمه‌ی نوتیفیکیشن کلیک‌کند، این متد اجرا می‌شود|
|onCustomContentReceived|زمانی که نوتیفیکیشن همراه با جیسون دلخواه و یا جیسون دلخواه‌، دریافت شود این متد اجرا می‌شود|
|onBackgroundNotificationReceived|تابعی که هنگام دریافت نوتیفیکیشن در زمان بسته‌بودن برنامه فراخوانی می‌شود|


برحسب بسته‌بودن یا بازبودن برنامه، پیاده‌سازی دریافت رویداد به دو حالت تقسیم می‌شود:

<Tabs
  defaultValue="killed"
  values={[
    { label: 'اپ باز باشد', value: 'open', },
    { label: 'اپ بسته باشد', value: 'killed', },
  ]
}>

<TabItem value="open">

در صورتی که اپ باز باشد توابع زیر در صورت دریافت نوتیفیکیشن اجرا خواهند شد:

* ‍`onReceived`
* `onClicked`
* `onDismissed`
* `onButtonClicked`
* `onCustomContentReceived`
  
و همین برای دریافت تمامی رویدادهای نوتیفیکیشن هنگاهی که برنامه باز است،‌ کافیست. به محض فراخوانی‌کردن کد `setNotificationListener` این کدها به پلاگین اضافه خواهند شد و آماده‌ی اجرا شدن خواهند بود.

```js
Pushe.setNotificationListener(
  onReceived: (notificationData) { /* Your code */ },
  onClicked: (notificationData) { /* Your code */ },
  onDismissed: (notificationData) { /* Your code */ },
  onButtonClicked: (notificationData) { /* Your code */ },
  onCustomContentReceived: (customContent) { /* Your code */ },
);
```

</TabItem>

<TabItem value="killed">

هنگامی که نوتیفیکیشنی دریافت شود و برنامه بسته باشد، تنها کلاسی که کدهای آن فراخوانی می‌شود کلاس `Application` است. لذا انتظار اجرا کدهای فریم‌ورک را نباید داشته باشیم زیرا این کدها در `Foreground` اجرا می‌شوند.    
برای دریافت رویداد حتی در هنگامی که برنامه بسته‌است باید کدی داشته باشیم که در کلاس `Application` اجرا شود. پس:

* به آدرس `android/src/main/java/` بروید.
*  پکیج‌نیم خود را باز کنید و در کنار کلاس `MainActivity` کلاسی (جاوا) به نام **MyApp** ایجاد کنید.    
* کد زیر را به جای کد اصلی قرار دهید:

```java {1,22,23,28}
package co.pushe.pushe.flutter;

import android.content.Context;

import androidx.multidex.MultiDex;

import co.pushe.plus.flutter.PushePlugin;
import io.flutter.app.FlutterApplication;
import io.flutter.plugin.common.PluginRegistry;

public class MyApp extends FlutterApplication implements PluginRegistry.PluginRegistrantCallback {

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }

    @Override
    public void onCreate() {
        super.onCreate();
        PushePlugin.setDebugMode(true);
        PushePlugin.initialize(this);
    }

    @Override
    public void registerWith(PluginRegistry registry) {
        PushePlugin.registerWith(registry);
    }
}

```

**نکته**: دقت کنید که به جای `co.pushe.pushe.flutter` پکیج‌نیم برنامه‌ی خود را قرار دهید (دقیقا پکیج‌نیم کلاس `MainActivity`).


* فایل `AndroidManifest.xml` را در آدرس `android/src/main` باز کنید و این خط (Highlight شده) را به تگ `application` اضافه‌کنید:

```xml {2}
<application
        android:name=".MyApp"
        android:label="Pushe Flutter"
        android:icon="@mipmap/ic_launcher"
        ...>

```

* در کد فلاتر خود، همانند زیر بصورت `TopLevel` (بیرون از کلاس) و یا `static` (دارای کلمه‌ی static) تعریف کنید:

```java

onBackgroundMessageReceived(String eventType, dynamic message) { sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdssd
  switch(eventType) {
    case Pushe.notificationReceived: // اعلان دریافت شده
      
      // Notification received

      break;
    case Pushe.notifiactionClicked: // اعلان کلیک شده
      
      // Notification clicked

      break;
    case Pushe.notificationDismissed: // اعلان رد شده
      
      // Notification dismissed

      break;
    case Pushe.notificationButtonClicked: // دکمه‌ای از اعلان کلیک شده
      
      // Notification button clicked

      break;
    case Pushe.customContentReceived: // جیسون دلخواه دریافت شده
      
      // Notification custom content (json) received

      break;
  }
}
```

ورودی `eventType` می‌توانید یکی از موارد زیر باشد:

* **`Pushe.notificationReceived`**: نوتیفیکیشن دریافت‌شده است و `message` می‌تواند به یک `NotificationData` تبدیل شود:

```java
var notification = NotificationData.fromDynamic(message);
```

* **`Pushe.notificationReceived`**: نوتیفیکیشن دریافت‌شده است و `message` می‌تواند به یک `NotificationData` تبدیل شود:

```java
var notification = NotificationData.fromDynamic(message);
```


* **`Pushe.notificationReceived`**: نوتیفیکیشن دریافت‌شده است و `message` می‌تواند به یک `NotificationData` تبدیل شود:

```java
var notification = NotificationData.fromDynamic(message);
```


* **`Pushe.notificationReceived`**: نوتیفیکیشن دریافت‌شده است و `message` می‌تواند به یک `NotificationData` تبدیل شود:

```java
var notification = NotificationData.fromDynamic(message);
```





</TabItem>

</Tabs>






آرگومان‌های ورودی نیز رشته‌هایی با فرمت زیر هستند:

* `notificationData`: این رشته اطلاعات نوتیفکیشن را در غالب یک جیسون دارد. از قبیل تیتر، متن.

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

* `clickedButton`: این رشته اطلاعات دکمه‌ي کلیک‌شده را در غالب جیسون‌دارد.

|فیلد|توضیحات|
|:--:|--|
|id|شناسه‌ای برای تشخیص دکمه|
|text|متن دکمه|

* `customContent`: این رشته جیسونی است که توسعه‌دهنده هنگام ساخت و ارسال نوتیفیکیشن به آن ضمیمه می‌کند.


