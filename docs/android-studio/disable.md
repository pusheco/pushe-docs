---
id: disable-notification
title: غیرفعال‌کردن نمایش اعلان
---

به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌ است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد، غیرفعال و یا مجددا فعال نمود.

>‌ با غیر فعال شدن نمایش اعلان توابع کالبک کماکان اجرا می‌شوند و برای جلوگیری از اجرای آنها فعال‌بودن را بررسی کنید.

## غیرفعال‌کردن نمایش اعلان

<div dir='ltr'>

#### `Pushe.getPusheService(PusheNotification.class).disableNotifications()`

</div>

```java
Pushe.getPusheService(PusheNotification.class).disableNotifications();
```

## فعال‌کردن نمایش اعلان

<div dir='ltr'>

#### `Pushe.getPusheService(PusheNotification.class).enableNotifications()`

</div>

```java
Pushe.getPusheService(PusheNotification.class).enableNotifications();
```

## بررسی وضعیت فعال یا غیرفعال بودن نمایش اعلان


<div dir='ltr'>

#### `Pushe.getPusheService(PusheNotification.class).isNotificationEnable()`

</div>
در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```java
boolean showingNotificationEnabled = Pushe.getPusheService(PusheNotification.class).isNotificationEnable();

if (showingNotificationEnabled) {
    // می‌توانید کدهایی را که می‌خواهید وقتی نمایش نوتیفیکیشن فعال است اجرا شوند در اینجا بنویسید
} else {
    // می‌توانید کدهایی را که می‌خواهید وقتی نمایش نوتیفیکیشن غیرفعال است اجرا شوند در اینجا بنویسید
}
```