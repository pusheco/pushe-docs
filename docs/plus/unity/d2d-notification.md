---
id: punity-d2d
title: اعلان از یک دیوایس یه دیوایس دیگر
sidebar_label: اعلان به یک دیوایس
---



## ارسال پوش از یک دستگاه به دستگاه دیگر

می‌توانید مستقیم از یک دستگاه به دستگاه دیگر اعلان ارسال کنید. برای این امر لازم است که یکی از شناسه‌ها‌ی دستگاه مقصد را داشته باشید. 
برای اطلاع از شناسه‌های موجود و نحوه دریافت آن‌ها به بخش 
[شناسه‌ها](/docs/plus/unity/punity-id)
رجوع کنید.

با داشتن شناسه‌ی دستگاه مورد نظر می‌توانید یک شی از کلاس 
`UserNotification` 
بسازید، در آن اطلاعات اعلان را وارد کنید و با دادن آن به تابع 
`PusheNotification.SendNotificationToUser`
اعلان را ارسال نمایید.

برای ساخت یک شی از کلاس 
`UserNotification`
با داشتن هریک از شناسه‌ها، از متد مربوطه موجود در این کلاس به شکل زیر استفاده کنید:

```java
UserNotification.WithAndroidId(string androidId);
UserNotification.WithAdvertisementId(string advertisementId);
UserNotification.withCustomId(string customId);
```

پس از ساخت شی خود، برای واردکردن اطلاعات اعلان می‌توانید از متدهای این کلاس به شرح زیر استفاده کنید:

```java
public UserNotification SetTitle(string title);
public UserNotification SetContent(string content);
public UserNotification SetBigTitle(string bigTitle);
public UserNotification SetBigContent(string bigContent);
public UserNotification SetImageUrl(string imageUrl);
public UserNotification SetIconUrl(string iconUrl);
public UserNotification SetNotifIcon(string notifIcon);
public UserNotification SetCustomContent(string customContent);
```

### مثال

نمونه کد زیر نحوه‌ی ارسال یک اعلان ساده با تیتر و متن را به کاربری که شناسه‌ی 
Android ID
او را داریم نشان می‌دهد.

```java
UserNotification notification =
                        UserNotification.WithAndrodId(androidId)
                                .SetTitle("تیتر اعلان")
                                .SetContent("متن اعلان");

PusheNotification.SendNotificationToUser(notification);
```

در صورتی که مایلید اعلان پیشرفته‌تری بسازید که با توابع قرار داده شده ممکن نیست، می‌توانید از تابع
`UserNotification.SetAdvancedNotification`
استفاده کنید. 

برای اینکار باید به تابع اطلاعات اعلان را در 
قالب یک 
JSON String
بدهید. ساختار 
JSON
ورودی مشابه ساختار استفاده شده در 
[ارسال اعلان با API](/docs/api/api-intro)
می‌باشد.

> توجه داشته باشید که اگر از تابع 
`SetAdvanvedNotification`
برای ایجاد اعلان استفاده کنید، سایر اطلاعاتی که با بقیه‌ی توابع کلاس داده می‌شوند دیگر در نظر گرفته نخواهند شد.
