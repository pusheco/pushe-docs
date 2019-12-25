---
id: studio-disable
title: غیرفعال‌کردن نمایش اعلان
---

به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌ است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد، غیرفعال و یا مجددا فعال نمود.

>‌ با غیر فعال شدن نمایش اعلان توابع کالبک کماکان اجرا می‌شوند و برای جلوگیری از اجرای آنها فعال‌بودن را بررسی کنید.

## غیرفعال‌کردن نمایش اعلان

> از نسخه‌ی 1.0.0 به بعد

<div dir='ltr'>

#### `static void setNotificationOff(Context)`

</div>

```java
Pushe.setNotficationOff(this);
```

## فعال‌کردن نمایش اعلان

> از نسخه‌ی 1.0.0 به بعد

<div dir='ltr'>

#### `static void setNotificationOn(Context)`

</div>

```java
Pushe.setNotficationOn(this);
```

## بررسی وضعیت نمایش اعلان



> از نسخه‌ی 1.7.0 به بعد

<div dir='ltr'>

#### `static boolean isNotificationOn(Context)`

</div>
در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```java
boolean showingNotificationEnabled = Pushe.isNotificationOn(this);

if (showingNotificationEnabled) {
    // Notification will be shown
} else {
    // Notification will NOT be shown
}
```