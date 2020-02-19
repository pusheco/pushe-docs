---
id: multidex
title: فعال‌کردن مالتی‌دکس
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'; 
import Platforms from '../../src/components/Platforms.jsx'

<Platforms android />
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
> در صورتی که `MinSDK` **۲۱ یا بالاتر** باشد این مشکل رخ نخواهد داد زیرا MultiDex در این حالت به صورت پیش‌فرض پشتیبانی می‌شود و نیاز به کار اضافه نیست.    
> در صورتی که برنامه به این حالت است، مشکل شما MultiDex نیست.

## فعال‌کردن MultiDex در برنامه

### اضافه‌کردن کد گریدل

‌در فایل `android/app/build.gradle` مالی‌دکس را فعال‌کنید:

```js {4}
android {
    defaultConfig {
    // ...
        multiDexEnabled true
    }
}
```

### تغییردادن کلاس اپلیکیشن

* به آدرس `android/src/main/(java or kotlin)/<your_app>`بروید.    
(`your_app` مسیر پکیج برنامه‌ی شماست)

<img src="/img/flutter/myAppDir.png" width="480" /><br /><br />

* کلاسی به نام `MyApp` در کنار `MainActivity` بسازید و کد زیر را در آن لحاظ کنید:

<Tabs
  defaultValue="kt"
  values={[
    { label: 'Kotlin', value: 'kt', },
    { label: 'Java', value: 'java', },
  ]}>

<TabItem value="kt">

```java
package <your_app>; // در اینجا پکیج‌نیم برنامه باید قرار داده شود

 import io.flutter.app.FlutterApplication
 import io.flutter.plugin.common.PluginRegistry
 import io.flutter.plugin.common.PluginRegistry.PluginRegistrantCallback
 import io.flutter.plugins.GeneratedPluginRegistrant
 import co.pushe.plus.flutter.PushePlugin
 import androidx.multidex.MultiDex

class MyApp : FlutterApplication(), PluginRegistrantCallback {

    override fun attachBaseContext(base: Context) {
        super.attachBaseContext(base)
        MultiDex.install(this)
    }

    override fun onCreate() {
      super.onCreate()

      // other codes

    }

    override fun registerWith(registry: PluginRegistry) {
      GeneratedPluginRegistrant.registerWith(registry) // Only Embedded v1
    }
}
```

</TabItem>

<TabItem value="java">

```java
package <your_app>; // در اینجا پکیج‌نیم برنامه باید قرار داده شود

 import io.flutter.app.FlutterApplication;
 import io.flutter.plugin.common.PluginRegistry;
 import io.flutter.plugin.common.PluginRegistry.PluginRegistrantCallback;
 import io.flutter.plugins.GeneratedPluginRegistrant;
 import co.pushe.plus.flutter.PushePlugin;

public class MyApp extends FlutterApplication implements PluginRegistrantCallback {

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }

    @Override
    public void onCreate() {
      super.onCreate();

      // other codes

    }

    @Override
    public void registerWith(PluginRegistry registry) {
      GeneratedPluginRegistrant.registerWith(registry); // Only Embedded v1
    }
}
```

</TabItem>

</Tabs>


در صورتی که پروژه با استفاده از 
FlutterEmbeddingV2 (Flutter v1.12 یا بالاتر)
ساخته‌شده است نیازی به رجیستر کردن پلاگین‌ها نیست و این کار خودکار انجام می‌شود،‌ اما در صورتی که پروژه با استفاده از نسخه‌ی قدیمی‌تری ساخته‌شده است، کافیست این خط را برای جلوگیری از خطای کالبک قرار دهید.

```
GeneratedPluginRegistrant.registerWith(registry);
```



> **از کجا بفهمیم پروژه از `Embedding v2` استفاده می‌کند یا `v1`؟**    
>    
> برای اینکه تشخیص دهید پروژه‌ی شما از `FlutterEmbedding v2` استفاده می‌کند یا `v1` می‌توانید فایل `AndroidManifest` را باز کنید و وجود تگ **flutterEmbedding** را بررسی کنید. در صورتی که تگ زیر وجود داشته باشد پروژه از `Embedding v2` استفاده می‌کند
> 
> `<meta-data android:name="flutterEmbedding" android:value="2"/>`


> **رویدادهای نوتیفیکیشن**:    
> برای اعمال‌کردن رویدادها در این فایل به [بخش رویدادها](listener) مراجعه کنید.

### رجیسترکردن کلاس

سپس کلاس اپلیکیشن خود را در فایل مانیفست رجیستر کنید:

```xml {5}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp">
    <application
        android:name=".MyApp"
    >
        ...
    </application>
</manifest>
```