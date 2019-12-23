---
id: listener
title: رویداد نوتیفیکیشن
sidebar_label: رویداد اعلان
---

> تمام نسخه‌ها

با فعال بودن این قابلیت می‌توانید هنگامی که نوتیفیکیشن یا جیسونی دریافت شود، از آن مطلع خواهید شد.

## فعال‌کردن Notification listener

پوشه با استفاده از `UnitySendMessage` رویداد‌ها را اطلاع می‌دهد. برای دریافت پیام‌ها در اسکریپت گام‌های زیر را انجام‌دهید:

### ساخت GameObject

* یک GameObject به نام **PusheCallback** ایجاد کنید و آن‌را به Hierarchy پروژه اضافه کنید.
* اسکریپت `PusheCallback.cs` را از فولدر `Pushe` به این آبجکت Attach کتید.

> **محدودیت موجود برای دریافت کالبک‌ها**:<br />
>
> موتور یونیتی زمانی اقدام به اجرای اسکریپت‌ها می‌کند، که بازی یا برنامه در حال اجرا در Forground باشد.<br />
> بدین معنی که در صورت بسته‌شدن یا Pause شدن، برنامه به طور کامل به حالت `onPause` قرار می‌گیرد.
> نتیجه‌ این خواهد شد که: **در صورت باز نبودن بازی Callbackها در اسکریپ اجرا نخواهند شد.**
> 
> در صورتی که بخواهید در تمام حالات از این رویدادها مطلع شوید باید کد نیتیو برای اندروید بنویسید.

### اضافه‌کردن کد به اسکریپت خود

کلاسی طراحی کنید و اینترفیس `IPusheNotificationListener` را پیاده‌سازی کنید. مثال:

```java
public class PusheNotifListener : IPusheNotificationListener
{
    public void OnNotification(NotificationData notificationData)
    {
        // Pushe.Log("Notification received: " + notificationData);
    }

    public void OnCustomContentReceived(string customJson)
    {
        // Pushe.Log("Notification custom content received: " + customJson);
    }

    public void OnNotificationClick(NotificationData notificationData)
    {
        // Pushe.Log("Notification clicked: " + notificationData);
    }

    public void OnNotificationDismiss(NotificationData notificationData)
    {
        // Pushe.Log("Notification dismissed: " + notificationData);
    }

    public void OnButtonClick(NotificationButtonData notificationButtonData, NotificationData notificationData)
    {
        // Pushe.Log("Notification button clicked\n Data: " + notificationData +
                  // "\n ButtonData: " + notificationButtonData);
    }
}
```

سپس کد زیر را فراخوانی کنید تا Listener اضافه‌شود:


```java
PusheNotification.SetNotificationListener(new PusheNotifListener());
```

## موارد اضافی

### استفاده از GameObject دلخواه
> از نسخه‌ی 0.4.4

در صورتی که قصد دارید شئی اضافه نداشته باشید و یا به هردلیلی امکان استفاده از `PusheCallback` ممکن نیست، می‌توانید با استفاده از کد زیر GameObject کاستوم استفاده کنید.

```java
PusheNotification.SetNotificationListener(gameObject.name, new PusheNotifListener());
```

> **نکته**: باید اسکریپت `PusheCallback.cs` به این GameObject متصل شده‌باشد.