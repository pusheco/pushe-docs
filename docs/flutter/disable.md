---
id: disable-notification
title: غیرفعال‌کردن نمایش اعلان
---


به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد غیرفعال و یا مجددا فعال نمود.

>‌ توابع callback کماکان اجرا می‌شوند و برای جلوگیری از اجرای آنها فعال‌بودن را بررسی کنید.

## غیرفعال‌کردن نمایش اعلان
> تمام نسخه‌ها


```js
Pushe.setNotficationOff();
```

## فعال‌کردن نمایش اعلان
> تمام نسخه‌ها

```js
Pushe.setNotficationOn();
```

## بررسی وضعیت نمایش اعلان
> تمام نسخه‌ها


در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```js
bool showingNotificationEnabled = await Pushe.isNotificationOn();

if (showingNotificationEnabled) {
    // Notification will be shown
} else {
    // Notification will NOT be shown
}
```