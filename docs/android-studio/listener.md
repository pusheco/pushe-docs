---
id: studio-listener
title: رویدادهای نوتیفیکیشن
---

> نسخه‌ی 1.7.0 به بعد


در صورتی که پیامی از پوشه به کاربر ارسال شود (به صورت نوتیفیکیشن و یا جیسون)، می‌توان از آنها باخبر شد.
برای اینکار می‌توانید کالبکی تعریف‌ کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید.
* دریافت نوتیفیکیشن
* دریافت JSON (Custom content)
* کاربر بر روی اعلان کلیک کند
* کاربر اعلان را رد (Dismiss) کند
* کاربر بر روی دکمه‌ای از اعلان کلیک کند

## اجرای کد هنگام رخ‌دادن رویداد


<div dir='ltr'>

#### `static void setNotificationListener(notificationListener)`

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
Pushe.setNotificationListener(new Pushe.NotificationListener() {
    @Override
    public void onNotificationReceived(@NonNull NotificationData notificationData) {
        // Notification received
    }
    @Override
    public void onNotificationClicked(@NonNull NotificationData notificationData) {
        // Notification clicked
    }
    @Override
    public void onNotificationButtonClicked(@NonNull NotificationData notificationData, @NonNull NotificationButtonData clickedButton) {
        // Notification button clicked
    }
    @Override
    public void onCustomContentReceived(@NonNull JSONObject customContent) {
        // Notification custom content (Json) received
    }
    @Override
    public void onNotificationDismissed(@NonNull NotificationData notificationData) {
        // Notification dismissed
    }
});
```
به محض دریافت نوتیفیکیشن بایستی کد داخل `onNotificationReceived` اجرا شود و برای رویدادهای دیگر نیز به همین ترتیب، وقتی رخ بدهند کدهای مربوط به آنها اجرا می‌شود.


## `NotificationListener`


اینترفیس callback برای این‌کار به صورت زیر است:

```java
public interface NotificationListener {
    void onNotificationReceived(@NonNull NotificationData notificationData);
    void onNotificationClicked(@NonNull NotificationData notificationData);
    void onNotificationButtonClicked(@NonNull NotificationData notificationData, @NonNull NotificationButtonData clickedButton);
    void onCustomContentReceived(@NonNull JSONObject customContent);
    void onNotificationDismissed(@NonNull NotificationData notificationData);
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
|customContent|جیسون دلخواه نوتیفیکیشن|
|buttons|لیست دکمه‌هایی که نوتیفیکیشن دارد|

جز `title` و `content` بقیه‌ی فیلدها می‌توانند `null` باشند.

<div dir='ltr'>

#### `NotificationButtonData.java`

</div>

|فیلد|توضیحات|
|:--:|--|
|id|شناسه‌ای برای تشخیص دکمه|
|text|متن دکمه|