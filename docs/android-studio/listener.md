---
id: studio-listener
title: رویدادهای نوتیفیکیشن
---

در صورتی که پیامی از پوشه به کاربر ارسال شود (نوتیفیکیشن و یا جیسون)، می‌توان از آنها باخبر شد.
برای اینکار می‌توانید کالبکی تعریف‌کنید و هنگام رخ‌دادن یکی از رویدادهای زیر کدهای خود را فراخوانی کنید.
* دریافت نوتیفیکیشن
* دریافت JSON (Custom content)
* کاربر بر روی اعلان کلیک کند
* کاربر اعلان را رد کند
* کاربر بر روی دکمه‌ای از اعلان کلیک کند

## تعریف کالبک برای مطلع‌‌شدن از رویداد

برای اینکه بتوانید اعلان‌ها را در هر زمانی دریافت کنید بهتر است پیاده‌سازی کدهای اعلان را در **کلاس اپلیکیشن** انجام دهید. برای اینکار:

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

در متد `onCreate` کلاس کد زیر را اضافه‌کنید:


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