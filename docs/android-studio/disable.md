---
id: studio-disable
title: غیرفعال‌کردن نمایش اعلان
---

به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد غیرفعال و یا مجددا فعال نمود.

>‌ توابع کالبک کماکان اجرا می‌شوند و برای جلوگیری از اجرای آنها فعال‌بودن را بررسی کنید.

## غیرفعال‌کردن نمایش اعلان

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `static void setNotificationOff(Context)`

</div>

```java
Pushe.setNotficationOff(this);
```

## فعال‌کردن نمایش اعلان

از: `co.ronash.pushe.Pushe`

<div dir='ltr'>

#### `static void setNotificationOn(Context)`

</div>

```java
Pushe.setNotficationOn(this);
```

## بررسی وضعیت نمایش اعلان

> این امکان درنسخه‌ی 1.7 اضافه خواهد شد.

از: `co.ronash.pushe.Pushe`
#### `static boolean isNotificationOn(Context)`

در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```java
boolean showingNotificationEnabled = Pushe.isNotificationOn(this);

if (showingNotificationEnabled) {
    // Notification will be shown
} else {
    // Notification will NOT be shown
}
```