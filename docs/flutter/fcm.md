---
id: fcm
title: استفاده‌ی همزمان با سرویس‌های دیگر
---

import Platforms from '../../src/components/Platforms.jsx'

<Platforms android />

> نسخه‌ی 1.0.0 به بعد

## مشکل استفاده‌ از دو سرویس FCM

پوشه برای دریافت و ارسال پیام‌های خود از سرویس FCM(Firebase cloud messaging) گوگل استفاده می‌کند.
در صورتی که قصد دارید در کنار پوشه از سرویس دیگری مانند فایربیس و یا هر سرویسی که پایه‌ی آن fcm است، استفاده‌کنید باید در نظر داشته‌باشید که **در هربرنامه فقط یک سرویس برپایه‌ی fcm می‌تواند باشد** و در صورت وجود بیش از یک سرویس، ممکن است در کار آنها اختلال ایجاد کند.

## رفع مشکل اختلال سرویس‌ها

برای جلوگیری از ایجاد اخلال **باید یک سرویس طراحی کنید و پیام‌های سایر سرویس‌ها را جداسازی کنید**. در این صورت ارجاع پیام به سرویس مربوطه بایستی دستی انجام شود تا هر سرویس بتواند جدا از سرویس دیگری کار خود را انجام دهد.

### حذف سرویس های متداخل

در این بخش باید تگ‌های سرویس پوشه و لایبرری دیگر که از فایربیس استفاده می‌کند (مثل خود فایربیس در فلاتر) را از مانیفست نهایی پاک کنید و تگ سرویس خود را قرار دهید.

فایل `AndroidManifest.xml` خود را باز کرده و در داخل تگ `application` در قبل یا بعد از توکن پوشه خطوط زیر را اضافه‌کنید:

```xml
<service
   android:name="co.ronash.pushe.fcm.FcmService" 
   tools:node="remove" />
   
<!-- Add your own service name instead of this , if you are not using firebase -->
<service
   android:name="io.flutter.plugins.firebasemessaging.FlutterFirebaseMessagingService" 
   tools:node="remove" />
```

> دقت‌کنید که یکی از سرویس‌ها پوشه است و سرویس دیگری مربوط به پلاگین دیگری‌است که از فایربیس استفاده می‌کند (در اینجا پلاگین فایربیس فلاتر).

### ساخت سرویس جدید


پس از پاک‌کردن سرویس‌های در معرض مشکل، سرویسی ایجاد کنید که از سرویس دیگر (در اینجا سرویس فایربیس فلاتر) ارث‌بری می‌کند؛ مثلا سرویس `FlutterFirebaseMessagingService` برای فایربیس. پس از ساختن سرویس کد سرویس را بصورت زیر تغییر دهید.

> کلاس را در کنار `MainActivity` در آدرس `android/src/main/java/your_package` و یا `android/src/main/kotlin/your_package` بسازید که `your_package` همان `applicationId` شما هنگام ساخت برنامه است.

```java
public class MyFCMService extends FlutterFirebaseMessagingService {
    @Override
    public void onNewToken(String s) {
        co.ronash.pushe.Pushe.getFcmHandler(this).onNewToken(s);
        super.onNewToken(s);
    }
    @Override
    public void onDeletedMessages() {
        co.ronash.pushe.Pushe.getFcmHandler(this).onDeletedMessages();
        super.onDeletedMessages();
    }
    @Override
    public void onSendError(String s, Exception e) {
        co.ronash.pushe.Pushe.getFcmHandler(this).onSendError(s, e);
        super.onSendError(s, e);
    }
    @Override
    public void onMessageSent(String s) {
        co.ronash.pushe.Pushe.getFcmHandler(this).onMessageSent(s);
        super.onMessageSent(s);
    }
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (!co.ronash.pushe.Pushe.getFcmHandler(this).onMessageReceived(remoteMessage)) {
            // It is for fire base, otherwise the condition will handle the message for Pushe
            super.onMessageReceived(remoteMessage);
        }
    }
}
```

> **نکته**: دقت داشته باشید، باید کلاسی را extend کنید که با سرویس پوشه تداخل ایجاد می‌کند (در این مثال کلاس `FlutterFirebaseMessagingService` برای لایبرری فایربیس می‌باشد)

و در آخر سرویس خود را به مانیفست اضافه نمایید:

```xml
<service android:name=".MyFcmService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```