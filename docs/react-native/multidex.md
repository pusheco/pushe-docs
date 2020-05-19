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
تعداد متد‌ها در یک فایل
`.dex`
 بایستی از حد تعیین‌شده‌ی
**64K**
فراتر نروند. در غیراینصورت آدرس‌دهی برای
Dalvik
به درستی انجام‌نخواهدشد. به همین دلیل بایستی از چند فایل
`.dex`
استفاده‌کرد که اصطلاحا
**MultiDex**
نام‌گذاری‌شده‌است.

> **نکته‌ی مهم**:    
> در صورتی که `MinSDK >= 21` باشد این مشکل رخ نخواهد داد زیرا MultiDex در این حالت به صورت پیش‌فرض پشتیبانی می‌شود و نیاز به کار اضافه نیست.    
> در صورتی که برنامه این خطا را دارد، مشکل شما MultiDex نیست.

## فعال‌کردن MultiDex در برنامه

### اضافه‌کردن کد گریدل

‌در فایل `android/app/build.gradle` این موارد را اضافه کنید:

```js {4}
android {
    defaultConfig {
    // ...
        multiDexEnabled true
    }
}
```

<Tabs
  defaultValue="androidx"
  values={[
    { label: 'AndroidX', value: 'androidx', },
    { label: 'Android support', value: 'support', },
  ]}>

<TabItem value="androidx">

```js {2}
dependencies {
    implementation "androidx.multidex:multidex:2.0.1"
}
```

</TabItem>

<TabItem value="support">

```js {2}
dependencies {
    implementation 'com.android.support:multidex:1.0.3'
}
```

</TabItem>
</Tabs>

### تغییردادن کلاس اپلیکیشن

* به آدرس `android/src/main/java or kotlin/<your_app>` بروید.    
`your_app` مسیر پکیج برنامه‌ی شماست

کلاس MainApplication را تغییر دهید به طوریکه به جای کلاس Application کلاس MultidexApplication را extend کند.
