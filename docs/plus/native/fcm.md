---
id: pnative-fcm
title: استفاده همزمان با سایر سرویس‌ها
---

## سرویس Firebase analytics

در صورتی که در برنامه‌ی خود علاوه بر Plus از Firebase analytics نیز استفاده می‌کنید باید آن‌را فعال کنید

<div dir='ltr'>

**AndroidManifest.xml**

</div>

```xml
<!-- AndroidManifest.xml -->
<meta-data android:name="firebase_analytics_collection_deactivated" android:value="false"
    tools:replace="android:value"/>
```

## سرویس‌های دارای Firebase messaging
پوشه برای دریافت اعلان از سرویس FCM(Firebase Cloud Messaging) گوگل استفاده می‌کند. در صورتی که پوشه تنها سرویسی در اپلیکیشن شما باشد که از این سرویس استفاده می‌کند، با دنبال کردن همان مراحلی که در قسمت راه‌اندازی توضیح داده شد همه چیز به درستی کار خواهد کرد و نیاز به انجام کار اضافه‌ای نیست. 
ولی در مواردی که غیر از پوشه سرویس دیگری نیز بخواهد از 
FCM 
استفاده کند، مثلا اگر خود شما بخواهید مستقیما از 
Firebase
استفاده کنید و پیغام‌های 
FCM
را دریافت کنید، تداخل پیش خواهد آمد، چرا که در هر اپلیکیشن تنها یک سرویس گوش‌دهنده به پیغام‌های 
FCM 
می‌تواند وجود داشته باشد. اگر بیش از یک سرویس گوش‌دهنده تعریف شود، پیغام‌هایی که به اپلیکیشن می‌رسند به صورت تصادفی تنها به دست یکی از این سرویس‌ها خواهد رسید و این باعث مختل شدن کار برنامه می‌شود.


برای رفع این مشکل لازم است مراحل زیر را در راه اندازی طی کنید:

1. سرویس گوش دهنده FCM پوشه را غیر فعال کنید
2. سرویس گوش دهنده FCM خود را فعال کنید
3. با دریافت پیغام‌های FCM و رخ دادن رویداد‌های مربوط به آن در سرویس خود، پوشه را مطلع کنید

با طی کردن این مراحل، تنها گوش دهنده به پیغام‌های 
FCM
گوش دهنده تعریف شده شما خواهد بود که همه‌ی پیغام‌های 
FCM 
را دریافت خواهد کرد و پیغام‌های مربوط به پوشه را به کتابخانه‌ی پوشه تحویل می‌دهد.

 در ادامه نحوه اعمال این مراحل را قدم به قدم توضیح می‌دهیم:


### غیر فعال کردن سرویس FCM پوشه

برای غیر فعال کردن سرویس 
FCM
پوشه، عبارت زیر را در تگ
`<application>`
فایل منیفست خود بگذارید:

```xml
<service android:name="co.pushe.plus.messaging.fcm.FcmService"
    tools:node="remove" /
```

در صورتی که با پیغام خطا مواجه شدید بررسی کنید که عبارت
`xmlns:tools="http://schemas.android.com/tools"`
در پارامتر‌های تگ 
`<manifest>`
ابتدای فایل، وجود داشته باشد، به این شکل:


```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="..."/>
```

### ایجاد سرویس FCM دلخواه خود

در صورتی که از قبل سرویس 
FCM
برای برنامه‌ی خود ایجاد کرده‌اید می‌توانید از این مرحله بگذرید.

یک کلاس جدید بسازید که از کلاس 
`FirebaseMessagingService`
ارث می‌برد. در مثال زیر اسم کلاس را 
`MyFcmService`
گذاشتیم ولی شما می‌توانید اسم دلخواه خود را استفاده کنید.

```java

public class MyFcmService extends FirebaseMessagingService {

}

```

سرویس جدید را با گذاشتن عبارت زیر در تگ
`<application>`
فایل منیفست خود فعال کنید. توجه داشته باشید که نام کلاس را با نام کلاس تعریف شده خود جایگزین کنید.

```xml
<service android:name=".MyFcmService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```


### رساندن پیغام‌ها و رویداد‌ها به پوشه

در کلاس تعریف شده در مرحله قبل، تابع‌های زیر را به همراه کد داخل آن‌ها پیاده‌سازی کنید:


```java

public class MyFcmService extends FirebaseMessagingService {
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        if (Pushe.getFcmHandler().onMessageReceived(remoteMessage)) {
            // Message belongs to Pushe, no further action needed
            return;   
        }

        // Message does not belong to Pushe, process message...
    }

    @Override
    public void onNewToken(String s) {
        Pushe.getFcmHandler().onNewToken(s);
    }

    @Override
    public void onMessageSent(String s) {
        Pushe.getFcmHandler().onMessageSent(s);
    }

    @Override
    public void onSendError(String s, Exception e) {
        Pushe.getFcmHandler().onSendError(s, e);
    }

    @Override
    public void onDeletedMessages() {
        Pushe.getFcmHandler().onDeletedMessages();
    }    
}

```

هر بار که یک پیغام 
FCM
به برنامه شما می‌رسد، تابع 
`onMessageReceived`
کلاس شما صدا زده می‌شود. همانطور که در مثال بالا مشاهده می‌کنید در پیاده‌سازی این تابع، شما با استفاده از عبارت زیر پوشه را از دریافت پیغام مطلع می‌کنید:
```java
Pushe.getFcmHandler().onMessageRecevied(remoteMessage)
```
با این کار پیغام به دست پوشه نیز می‌رسد و اگر پیغام مربوط به کتابخانه‌ی پوشه باشد عملیات لازم بر روی آن انجام می‌شود. در صورتی که پیغام مربوط به پوشه باشد عبارت بالا مقدار 
`true`
بر می‌گرداند و شما نیازی نیست عملیات بیشتری روی این پیغام انجام دهید. در صورتی که از عبارت بالا مقدار
`false`
گرفتید به این معنی است که پیغام مربوط به پوشه نیست و شما باید بسته به نیاز خود عملیات مورد نظر را برای آن انجام دهید.

سایر توابع کلاس تعریف شده، زمان رخ دادن رویداد‌های مختلف مربوط به 
FCM
صدا زده می‌شوند. همانطور که در مثال بالا نشان داده شده، نیاز است که شما هنگام رخ دادن این رویدادها با صدا زدن تابع مربوطه از کتابخانه‌ی پوشه، پوشه را از رخ دادن این رویدادها مطلع کنید.