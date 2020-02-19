---
id: multidex
title: فعال‌کردن مالتی‌دکس
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## MultiDex چیست؟

در صورتی که `minSdkVersion` پایینتر از ۲۱ باشد و پروژه را اجرا کنید ممکن است این خطا رخ‌دهد:

<img src="/img/common/multidex.jpeg" width="500" /><br/><br/>
 

در ماشین مجازی
Dalvik
تعداد متدهای ممکن در یک فایل
`.dex`
محدود به
**64K**
می‌باشد و در صورتی که تعداد متدها از این عدد گذر کند
Dalvik
توانایی دسترسی به تمام متدها را نخواهد داشت. لذا بایستی از قابلیت
MultiDex
استفاده شود تا چند فایل
`.dex`
برای دسترسی به همه‌ی متدها توسط
Dalvik
ممکن شود.

در صورتی که خطایی همانند زیر برای شما رخ می‌دهد

> **نکته‌ی مهم**:    
> در صورتی که `MinSDK >= 21` باشد این مشکل رخ نخواهد داد زیرا MultiDex در این حالت به صورت پیش‌فرض پشتیبانی می‌شود و نیاز به کار اضافه نیست.    
> در صورتی که برنامه به این حالت است، مشکل شما MultiDex نیست.

## فعال‌کردن MultiDex در برنامه

### اضافه‌کردن کد گریدل

‌در فایل `build.gradle(app:Module)` این موارد را اضافه کنید:

```js {4}
android {
    defaultConfig {
    // ...
        multiDexEnabled true
    }
}
```

### تغییردادن کلاس اپلیکیشن

### **۱.** استفاده از کلاس ازقبل‌ساخته‌شده‌ی پوشه

کلاس `PusheFlutterApplication` کلاس اپلیکیشنی‌ست که اعمال زیر را انجام داده است:
* **MultiDex** فعال‌شده است.
* [فعالسازی رویداد](listener.md) را پیاده‌سازی کرده است.

برای استفاده از این کلاس برای فعال‌کردن مالتی‌دکس و رویداد خط کد زیر را در مانیفست جایگزین کنید:

```xml {5}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
    <application
            android:name="co.pushe.plus.flutter.PusheFlutterApplication" 
    >
        ...
    </application>
</manifest>
```

#### **۲.** کلاس خود را قرار دهید:

* به آدرس `android/src/main/java/<your_app>` یا `android/src/main/kotlin/<your_app>` بروید (`your_app` مسیر پکیج برنامه‌ی شماست)
* کلاسی به نام `MyApp` در کنار `MainActivity` بسازید و کد زیر را در آن لحاظ کنید:


<Tabs
  defaultValue="kt"
  values={[
    { label: 'Kotlin', value: 'kt', },
    { label: 'Java', value: 'java', },
  ]}>

<TabItem value="kt">

</TabItem>

<TabItem value="java">

```java
 package <your_app>; // در اینجا پکیج‌نیم برنامه باید قرار داده شود

 import io.flutter.app.FlutterApplication;
 import io.flutter.plugin.common.PluginRegistry;
 import io.flutter.plugin.common.PluginRegistry.PluginRegistrantCallback;
 import io.flutter.plugins.GeneratedPluginRegistrant;
 import io.flutter.plugins.firebasemessaging.FlutterFirebaseMessagingService;

 public class MyApp extends FlutterApplication implements PluginRegistrantCallback {
   @Override
   public void onCreate() {
     super.onCreate();
     
   }

   @Override
   public void registerWith(PluginRegistry registry) {
     GeneratedPluginRegistrant.registerWith(registry);
   }
 }

```

</TabItem>

</Tabs>

<Tabs
  defaultValue="androidx"
  values={[
    { label: 'AndroidX', value: 'androidx', },
    { label: 'Android support', value: 'support', },
  ]}>

<TabItem value="androidx">

```xml {5}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
    <application
            android:name="androidx.multidex.MultiDexApplication" >
        ...
    </application>
</manifest>
```

</TabItem>

<TabItem value="support">

```xml {5}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
    <application
            android:name="android.support.multidex.MultiDexApplication" >
        ...
    </application>
</manifest>
```

</TabItem>
</Tabs>