---
id: flutter-disable
title: غیرفعال‌کردن نمایش اعلان
---


به طور پیش‌فرض نمایش اعلان برای کاربر فعال‌است. اما می‌توان نمایش اعلان را برای کاربر با استفاده از کد غیرفعال و یا مجددا فعال نمود.

>‌ توابع callback کماکان اجرا می‌شوند و برای جلوگیری از اجرای آنها فعال‌بودن را بررسی کنید.

## غیرفعال‌کردن نمایش اعلان


<div dir='ltr'>

#### `static void setNotificationOff()`
> تمام نسخه‌ها

</div>

```js
Pushe.setNotficationOff();
```

## فعال‌کردن نمایش اعلان
> تمام نسخه‌ها

<div dir='ltr'>

#### `static void setNotificationOn()`

</div>

```js
Pushe.setNotficationOn();
```

## بررسی وضعیت نمایش اعلان
> نسخه‌ی 1.1.0 به بعد

<div dir='ltr'>

#### `static Future<bool> isNotificationOn()`


</div>


در صورتی که نمایش اعلان برای کاربر فعال‌باشد، این تابع مقدار صحیح برمی‌گرداند.

```js
bool showingNotificationEnabled = await Pushe.isNotificationOn();

if (showingNotificationEnabled) {
    // Notification will be shown
} else {
    // Notification will NOT be shown
}




// Or use the non-async way

Pushe.isNotificationOn().then((notificationIsOn) {
    if (notificationIsOn) {
        // Notification will be shown
    } else {
        // Notification will NOT be shown
    }
});
```