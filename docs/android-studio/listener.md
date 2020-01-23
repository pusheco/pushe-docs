---
id: notification-listener
title: رویدادهای نوتیفیکیشن
---


در صورتی که پیامی از پوشه به کاربر ارسال شود (به صورت نوتیفیکیشن و یا جیسون)، می‌توان از آنها باخبر شد.
برای اینکار می‌توانید کالبکی تعریف‌ کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید.
* دریافت نوتیفیکیشن
* دریافت JSON (Custom content)
* کاربر بر روی اعلان کلیک کند
* کاربر اعلان را رد (Dismiss) کند
* کاربر بر روی دکمه‌ای از اعلان کلیک کند

## اجرای کد هنگام رخ‌دادن رویداد


<div dir='ltr'>

#### `Pushe.getPusheService(PusheNotification.class).setNotificationListener(notificationListener)`

</div>

|پارامتر ورودی|استفاده|
|:--:|--|
|notificationListener|یک اینترفیس که متدهای رویدادها را نگه‌داری و در زمان رخ‌داد فراخوانی می‌کند|

برای اینکه بتوانید رویدادها را در هر زمانی دریافت کنید بهتر است پیاده‌سازی کدهای رویداد را در **کلاس اپلیکیشن** انجام دهید. برای اینکار:

* کلاسی بسازید که از `Application` ارث ببرد.
* آن‌را بصورت زیر به مانیفست اضافه‌کنید:

`AndroidManfiest.xml`:
```xml
<!-- MyApplication is your class -->
<Manifest ...>
    <application ...
        android:name=".MyApplication">
        ...
...
```

در متد `onCreate` کلاس، کد زیر را اضافه‌کنید:


```java
        Pushe.getPusheService(PusheNotification.class).setNotificationListener(new PusheNotificationListener() {
            @Override
            public void onNotification(@NonNull NotificationData notification) {
               //Notification Received
            }

            @Override
            public void onCustomContentNotification(@NonNull Map<String, Object> customContent) {
                // Notification custom content (Json) received
            }

            @Override
            public void onNotificationClick(@NonNull NotificationData notification) {
               // Notification clicked
            }

            @Override
            public void onNotificationDismiss(@NonNull NotificationData notification) {
                // Notification dismissed
            }

            @Override
            public void onNotificationButtonClick(@NonNull NotificationButtonData button, @NonNull NotificationData notification) {
                // Notification button clicked
            }
        });
```
به محض دریافت نوتیفیکیشن بایستی کد داخل `onNotification` اجرا شود و برای رویدادهای دیگر نیز به همین ترتیب، وقتی رخ بدهند کدهای مربوط به آنها اجرا می‌شود.


## `NotificationListener`


اینترفیس callback برای این‌کار به صورت زیر است:

```java
public interface PusheNotificationListener {
    void onNotification(@NonNull NotificationData notification);
    void onCustomContentNotification(@NonNull Map<String, Object> customContent);
    void onNotificationClick(@NonNull NotificationData notification);
    void onNotificationDismiss(@NonNull NotificationData notification);
    void onNotificationButtonClick(@NonNull NotificationButtonData button, @NonNull NotificationData notification);
}
```

و کلاس‌های `NotificationData` و `NotificationButtonData` دارای فیلدهای زیر هستند:

<div dir='ltr'>

#### `NotificationData.java`:

</div>

|فیلد|توضیحات|
|:--:|--|
|title|تیتر نوتیفیکیشن|
|content|محتوای نوتیفیکیشن|
|bigTitle|تیتر بزرگ نوتیفیکیشن|
|bigContent|محتوای بزرگ نوتیفیکیشن|
|summary|متن خلاصه‌ی نوتیفکیشن|
|imageUrl|لینک عکس نوتیفیکیشن|
|iconUrl|لینک آیکون نوتیفیکیشن|
|customContent|مپ دلخواه نوتیفیکیشن|
|buttons|لیست دکمه‌هایی که نوتیفیکیشن دارد|

جز `title` و `content` بقیه‌ی فیلدها می‌توانند `null` باشند.

<div dir='ltr'>

#### `NotificationButtonData.java`

</div>

|فیلد|توضیحات|
|:--:|--|
|id|شناسه‌ای برای تشخیص دکمه|
|text|متن دکمه|
|icon|آیکن دکمه|